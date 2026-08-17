# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`portazos` is a React Router 7 (framework mode, SSR) app that runs **entirely inside a Cloudflare Worker** — there is no Node server. It started from the `cloudflare/templates/react-router-starter-template`.

The app itself is a single long-form informative page (in Chilean Spanish) about door slamming between neighbours: the acoustic mechanism, the startle reflex, health effects, the particular impact on older people, the practical fix, and the Chilean legal framework. It is written as a respectful appeal to the neighbour — **no names, no accusations, and the legal section stays factual and last on purpose**. Keep that register when editing copy.

Every scientific or legal claim on the page must be traceable to an entry in `app/content/fuentes.ts`, which renders as the Fuentes footer. Add the source when you add the claim.

## Commands

```bash
npm run dev        # Vite dev server w/ HMR at http://localhost:5173 (Worker runs in workerd via the Cloudflare Vite plugin)
npm run build      # react-router build -> build/client + build/server
npm run preview    # build, then serve the production bundle locally
npm run cf-typegen # regenerate worker-configuration.d.ts (Env) + .react-router/types
npm run check      # tsc && build && wrangler deploy --dry-run  — the closest thing to CI here
npm run deploy     # build + wrangler deploy (production)
```

No test runner, linter, or formatter is configured. Before adding one, note the existing style: **tabs** for indentation, double quotes, semicolons.

Two starter-template bugs were fixed and are worth knowing about: `typecheck` used to call a non-existent `typegen` script, and `tsconfig.cloudflare.json` listed `@cloudflare/workers-types` in `types` even though it was never a dependency — which made `tsc` and `npm run check` fail out of the box. Wrangler 4's generated `worker-configuration.d.ts` supplies those globals instead, so the `types` array now only holds `vite/client`.

Preview deploys: `npx wrangler versions upload`, then `npx wrangler versions deploy` to promote.

## Architecture

**Request path:** `workers/app.ts` is the Worker entrypoint declared in `wrangler.json` (`main`). It creates a React Router `createRequestHandler` over the virtual server build and passes `{ cloudflare: { env, ctx } }` as the load context. `app/entry.server.tsx` streams the SSR response with `renderToReadableStream` (Web Streams — not `renderToPipeableStream`, which needs Node), awaiting `body.allReady` for bots and SPA-mode renders.

**Accessing Cloudflare bindings:** loaders and actions read them off the context, e.g. `context.cloudflare.env.CONTADOR` in `app/routes/home.tsx`. `AppLoadContext` is augmented via `declare module "react-router"` in `workers/app.ts` — extend that interface there if you add anything beyond `cloudflare`.

**Visit counter:** `workers/contador.ts` defines the `ContadorVisitas` Durable Object (SQLite-backed), re-exported from `workers/app.ts` so wrangler can find the class. `app/lib/visitas.server.ts` builds the visitor key and calls it from the home loader. Durable Object rather than KV specifically because KV is eventually consistent and rate-limits writes per key, which loses concurrent increments. Counting rules: one visit per person per day, bots excluded via `isbot`, no cookies — dedup uses a salted SHA-256 of IP + UA + date that is deleted the next day. It fails soft: any error returns `null` and the footer block is omitted rather than breaking the page. Changing the DO class name requires a new entry in the `migrations` array in `wrangler.json`.

**Adding a binding (KV, D1, R2, …):** declare it in `wrangler.json`, then run `npm run cf-typegen` so the `Env` type in `worker-configuration.d.ts` picks it up. That file is generated (~500KB) — never edit it by hand.

**Routing:** routes are declared explicitly in `app/routes.ts` (config-based, not file-system convention). Adding a page means creating the module under `app/routes/` *and* registering it in `app/routes.ts`. Today there is one index route, `app/routes/home.tsx`, which just composes the page sections from `app/components/<seccion>/`.

**Page structure:** each section is its own component folder under `app/components/`, wrapped by the shared `layout/Section.tsx` shell (numbered eyebrow, heading, tonal background). The two SVG visuals — `mecanismo/NoisePathDiagram.tsx` and `mecanismo/CierreComparador.tsx` — are the only non-trivial pieces; the comparator is the single interactive element and holds its state locally with `useState`.

**Motion:** the diagram animates via keyframes in `app/app.css`. Base opacities are set so the diagram stays legible when animation is suppressed, and a global `prefers-reduced-motion` guard flattens all animation and smooth scrolling. Given the subject matter, preserve that behaviour.

**Generated types:** `./+types/<route>` imports (e.g. `Route.LoaderArgs`, `Route.ComponentProps`) come from `.react-router/types`, produced by typegen. If those imports fail to resolve, run `npm run cf-typegen` or `npm run dev` before chasing a real type error.

**TypeScript layout:** the root `tsconfig.json` is a solution file with two project references — `tsconfig.cloudflare.json` (app + workers, `@cloudflare/workers-types`, `~/*` → `./app/*`) and `tsconfig.node.json` (build config files, Node types). Keep new source under `app/` or `workers/` so it lands in the Cloudflare project; build-time config files belong in the node project's `include`.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` — configured in CSS (`app/app.css`), no `tailwind.config.ts` in the repo. The `@theme` block defines the palette (`papel`/`tinta` base, `impacto` amber for the harm sections, `calma` green for the solution), the display font, and the section spacing scale. Use those tokens rather than raw Tailwind colours so the editorial direction stays consistent.

## Constraints from the Workers runtime

- Only `nodejs_compat` APIs are available (see `compatibility_flags` in `wrangler.json`); most Node built-ins and Node-only npm packages will not work.
- `compatibility_date` is `2025-10-08`; bumping it can change runtime behavior.
- Anything touching the filesystem, long-lived process state, or `renderToPipeableStream` is off the table — use bindings (KV/D1/R2/DO) for state.
