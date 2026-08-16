import type { Route } from "./+types/home";
import { contarVisita } from "../lib/visitas.server";
import { Hero } from "../components/hero/Hero";
import { MecanismoSection } from "../components/mecanismo/MecanismoSection";
import { SobresaltoSection } from "../components/sobresalto/SobresaltoSection";
import { SaludSection } from "../components/salud/SaludSection";
import { PersonasMayoresSection } from "../components/mayores/PersonasMayoresSection";
import { SolucionSection } from "../components/solucion/SolucionSection";
import { MarcoLegalSection } from "../components/legal/MarcoLegalSection";
import { SectionNav } from "../components/layout/SectionNav";
import { Fuentes } from "../components/layout/Fuentes";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Los portazos: por qué molestan tanto y cómo se solucionan" },
		{
			name: "description",
			content:
				"Cómo viaja el ruido de un portazo por la estructura de una casa, por qué el cuerpo no llega a acostumbrarse, qué efectos tiene en la salud y el descanso, y por qué la solución toma diez minutos.",
		},
		{ name: "theme-color", content: "#faf6ef" },
	];
}

export async function loader({ context, request }: Route.LoaderArgs) {
	return { visitas: await contarVisita(request, context.cloudflare.env) };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<SectionNav />
			<main id="contenido">
				<div id="inicio">
					<Hero />
				</div>
				<MecanismoSection />
				<SobresaltoSection />
				<SaludSection />
				<PersonasMayoresSection />
				<SolucionSection />
				<MarcoLegalSection />
			</main>
			<Fuentes visitas={loaderData.visitas} />
		</>
	);
}
