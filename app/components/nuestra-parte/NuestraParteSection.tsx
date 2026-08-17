import { Prosa, Section } from "../layout/Section";

interface PuertaTratada {
	nombre: string;
	problema: string;
	hecho: string;
}

const puertas: readonly PuertaTratada[] = [
	{
		nombre: "La puerta de entrada",
		problema:
			"Es la más pesada de la casa y la que más sufre la corriente de aire: basta una ventana abierta al fondo para que se cierre sola de un golpe.",
		hecho:
			"Topes de goma en el marco, felpa en el perímetro y la regla de no soltarla nunca a medio camino, ni cuando se entra con las manos ocupadas.",
	},
	{
		nombre: "La puerta de la logia",
		problema:
			"Hoja liviana y marco angosto, justo la combinación que hace que un cierre normal suene como un portazo.",
		hecho:
			"Burlete perimetral y pestillo ajustado para que calce sin empujar. Ahora se cierra apoyándola, sin impulso.",
	},
	{
		nombre: "La puerta de la cocina",
		problema:
			"Es la que más veces se abre y se cierra en el día, y la que estaba pidiendo fuerza para que el pestillo entrara.",
		hecho:
			"Bisagras realineadas, placa del pestillo corrida los milímetros que faltaban y topes de goma. Dejó de necesitar fuerza, y sin fuerza no hay golpe.",
	},
];

export function NuestraParteSection() {
	return (
		<Section
			id="nuestra-parte"
			numero="06"
			eyebrow="Lo que ya está hecho de este lado"
			titulo="Nosotros ya hicimos nuestra parte."
			tono="calma"
		>
			<Prosa>
				<p>
					Nada de lo anterior es una lista de peticiones. Es, antes que nada, lo
					que hicimos en nuestra propia casa, y lo contamos por una razón simple:
					sería injusto explicar todo esto sin decir que ya lo aplicamos puertas
					adentro.
				</p>
				<p>
					Cuando uno entiende que el golpe no se queda donde ocurre —que entra al
					marco, pasa al muro y se reparte por la estructura hasta llegar a
					piezas que no tienen nada que ver—, dejar una puerta suelta se vuelve
					difícil. Así que revisamos las nuestras, una por una, y las dejamos de
					manera que no puedan dar un portazo aunque alguien vaya apurado.
				</p>
			</Prosa>

			<div className="mt-8 grid gap-4 sm:grid-cols-3">
				{puertas.map((puerta, i) => (
					<article
						key={puerta.nombre}
						className="flex flex-col rounded-2xl border border-papel-borde bg-papel p-5 sm:p-6"
					>
						<span
							className="font-display text-sm text-calma tabular-nums"
							aria-hidden="true"
						>
							{`0${i + 1}`}
						</span>
						<h3 className="mt-2 font-display text-xl text-tinta">
							{puerta.nombre}
						</h3>
						<p className="mt-2 text-[15px] leading-relaxed text-tinta-media">
							{puerta.problema}
						</p>
						<p className="mt-4 flex gap-2.5 text-[15px] leading-relaxed text-tinta">
							<span aria-hidden="true" className="text-calma">
								✓
							</span>
							<span>{puerta.hecho}</span>
						</p>
					</article>
				))}
			</div>

			<div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
				<div className="rounded-2xl border-l-4 border-calma bg-papel p-6 sm:p-7">
					<p className="max-w-[58ch] font-display text-xl leading-snug text-tinta sm:text-2xl">
						No fue una obra, ni un gasto que se note, ni un cambio de vida. Fue
						una tarde y una vuelta a la ferretería.
					</p>
					<p className="mt-3 max-w-[62ch] leading-relaxed text-tinta-media">
						Lo que quedó a cambio es que hoy ninguna de nuestras puertas puede
						golpear: ni con corriente de aire, ni con prisa, ni con las manos
						ocupadas. El resto —acompañar la hoja hasta el final— dejó de ser un
						esfuerzo hace rato. En una semana se hizo costumbre y ya sale solo.
					</p>
				</div>

				<div className="rounded-2xl bg-calma-velo p-6 sm:p-7">
					<h3 className="font-display text-xl leading-snug text-tinta">
						Por qué lo contamos
					</h3>
					<p className="mt-2 leading-relaxed text-tinta-media">
						Porque esta página no pide nada excepcional.{" "}
						<strong className="font-semibold text-tinta">
							Pide exactamente lo que ya está hecho de este lado del muro,
						</strong>{" "}
						hecho sin reclamos y sin que nadie lo pidiera, simplemente porque una
						vez que se sabe lo que un golpe le hace a la casa del lado, cuesta
						seguir dándolos.
					</p>
				</div>
			</div>
		</Section>
	);
}
