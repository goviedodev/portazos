import { Prosa, Section } from "../layout/Section";
import { NoisePathDiagram } from "./NoisePathDiagram";

interface Via {
	titulo: string;
	cuerpo: string;
}

const vias: readonly Via[] = [
	{
		titulo: "El pulso de aire",
		cuerpo:
			"La hoja barre el aire del vano y lo comprime contra el marco. Ese pulso de presión es lo que se siente en los oídos incluso antes de oír el golpe.",
	},
	{
		titulo: "El ruido aéreo",
		cuerpo:
			"El impacto suena y ese sonido viaja por el aire. Es el que atraviesa ventanas y rendijas, y el único que uno esperaría escuchar.",
	},
	{
		titulo: "El ruido estructural",
		cuerpo:
			"El más importante y el menos evidente. La energía del golpe entra en el marco, pasa al muro y se reparte por la estructura del edificio.",
	},
];

export function MecanismoSection() {
	return (
		<Section
			id="mecanismo"
			numero="01"
			eyebrow="Qué pasa físicamente"
			titulo="Un portazo no es un sonido. Son tres cosas ocurriendo a la vez."
			tono="papel"
		>
			<Prosa>
				<p>
					Cuando una puerta se cierra con fuerza, la hoja llega al marco con
					toda su masa en movimiento y se detiene de golpe. Esa energía tiene
					que irse a alguna parte, y se va por tres caminos distintos.
				</p>
			</Prosa>

			<ol className="mt-8 grid gap-4 sm:grid-cols-3">
				{vias.map((via, i) => (
					<li
						key={via.titulo}
						className="rounded-2xl border border-papel-borde bg-papel-hondo p-5"
					>
						<span
							className="font-display text-sm text-impacto tabular-nums"
							aria-hidden="true"
						>
							{`0${i + 1}`}
						</span>
						<h3 className="mt-2 font-display text-xl text-tinta">{via.titulo}</h3>
						<p className="mt-2 text-[15px] leading-relaxed text-tinta-media">
							{via.cuerpo}
						</p>
					</li>
				))}
			</ol>

			<div className="mt-12">
				<Prosa>
					<h3 className="font-display text-2xl leading-snug text-tinta">
						Por qué se escucha en los dormitorios y no solo en la cocina
					</h3>
					<p>
						El ruido aéreo se detiene con masa: un muro lo frena bastante bien.
						El ruido estructural no funciona así. La energía entra al muro y lo
						hace vibrar, y un muro que vibra es una superficie enorme moviendo
						aire por ambas caras. La estructura deja de ser una barrera y pasa
						a ser un altavoz de varios metros cuadrados.
					</p>
					<p>
						Ese es el motivo de que el golpe aparezca al mismo tiempo en
						habitaciones que no dan a la cocina. No es que el sonido haya
						recorrido el pasillo: es que el muro, el radier y los tabiques
						unidos a ellos lo están emitiendo de nuevo, cada uno en su
						recinto. En acústica se le llama transmisión indirecta, y es la
						razón por la que tapar la rendija de una puerta casi no cambia
						nada.
					</p>
					<p>
						Además, el golpe concentra buena parte de su energía en frecuencias
						graves. Los graves son justamente los que mejor atraviesan los
						muros que sí detienen las voces y la música. Por eso una
						conversación al otro lado no se entiende, pero un portazo se siente
						entero.
					</p>
				</Prosa>
			</div>

			<NoisePathDiagram />
		</Section>
	);
}
