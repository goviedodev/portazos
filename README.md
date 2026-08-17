# Portazos

Página informativa sobre el ruido de los portazos entre viviendas vecinas: por
qué se escucha en toda la casa y no solo en la habitación de al lado, qué le
hace al cuerpo de quien lo recibe, por qué afecta especialmente a las personas
mayores, y por qué la solución toma diez minutos.

Está escrita como una apelación respetuosa al vecino: sin nombres, sin
acusaciones, y con la sección legal al final y en tono informativo. Toda
afirmación científica o legal se respalda en una fuente enlazada al pie.

**En vivo:** https://portazos.goviedo-sevenit.workers.dev

## Contenido

1. **El mecanismo** — las tres vías por las que viaja un portazo (pulso de aire,
   ruido aéreo y ruido estructural) y por qué el muro deja de ser barrera para
   convertirse en altavoz.
2. **El sobresalto** — el arco reflejo del tronco encefálico y por qué no hay
   habituación posible a un ruido impredecible.
3. **La salud** — evidencia de la OMS sobre sueño, molestia sostenida y efectos
   cardiovasculares.
4. **Las personas mayores** — sueño más frágil, más horas en casa y riesgo de
   caída por sobresalto.
5. **La solución** — escuadrar la puerta y ajustar el pestillo, más el hábito de
   acompañar la hoja hasta el final.
6. **El marco legal** — Ley 21.442 de Copropiedad Inmobiliaria, guía del MINVU, y
   las precisiones sobre el D.S. 38/2011 y la Ley 21.822.

## Stack

React Router 7 en modo framework con SSR, corriendo íntegramente dentro de un
Cloudflare Worker. Tailwind CSS v4 configurado en CSS. Sin runtime de Node.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Compila a `build/client` y `build/server` |
| `npm run preview` | Compila y sirve el bundle de producción |
| `npm run typecheck` | Regenera tipos y corre `tsc` |
| `npm run check` | Typecheck, build y `wrangler deploy --dry-run` |
| `npm run deploy` | Compila y despliega a Cloudflare Workers |

## Contador de visitas

El conteo es propio, sin servicios de terceros, sobre un Durable Object con
almacenamiento SQLite (`workers/contador.ts`). Se eligió Durable Object en vez
de KV porque KV es eventualmente consistente y limita las escrituras por clave,
de modo que dos visitas simultáneas se perderían.

Cuenta una visita por persona y por día. Los robots no incrementan el total. No
usa cookies: para deduplicar guarda un hash SHA-256 truncado y con sal de IP,
navegador y fecha, que se borra al día siguiente. No se almacena la dirección IP
ni se sigue a nadie entre días.
