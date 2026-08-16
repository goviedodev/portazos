import { Prosa, Section } from "../layout/Section";

interface Efecto {
	titulo: string;
	cuerpo: string;
	/** Frase de cierre que se resalta en rojo dentro del mismo párrafo. */
	destacado?: string;
}

const efectos: readonly Efecto[] = [
	{
		titulo: "Sueño",
		cuerpo:
			"Es el efecto más prevalente del ruido según la OMS. Un despertar no necesita ser recordado para hacer daño: basta con que fragmente el ciclo para que el descanso pierda calidad.",
	},
	{
		titulo: "Molestia sostenida",
		cuerpo:
			"La OMS la trata como un efecto en salud por derecho propio, no como una queja.",
		destacado:
			"Es el desgaste de vivir en estado de alerta dentro de la propia casa.",
	},
	{
		titulo: "Sistema cardiovascular",
		cuerpo:
			"La exposición prolongada al ruido está asociada a enfermedad cardiovascular y a efectos metabólicos. Cada sobresalto trae su descarga de adrenalina y su subida de pulso.",
		destacado:
			"Pesa en especial sobre las personas mayores, a quienes la OMS identifica entre los grupos más sensibles al ruido.",
	},
];

export function SaludSection() {
	return (
		<Section
			id="salud"
			numero="03"
			eyebrow="Lo que se acumula"
			titulo="Un susto no hace daño. Un susto repetido durante meses, sí."
			tono="papel"
		>
			<Prosa>
				<p>
					La Organización Mundial de la Salud lleva décadas estudiando el efecto
					del ruido sobre la salud, y su conclusión de fondo es que no se trata
					de una molestia estética. La alteración del sueño y la molestia
					sostenida son los dos efectos más extendidos, y a ellos se suman
					asociaciones documentadas con enfermedad cardiovascular y con efectos
					metabólicos.
				</p>
			</Prosa>

			<div className="mt-8 grid gap-4 sm:grid-cols-3">
				{efectos.map((efecto) => (
					<div
						key={efecto.titulo}
						className="rounded-2xl border border-papel-borde bg-papel-hondo p-5"
					>
						<h3 className="font-display text-xl text-tinta">{efecto.titulo}</h3>
						<p className="mt-2 text-[15px] leading-relaxed text-tinta-media">
							{efecto.cuerpo}
							{efecto.destacado ? (
								<>
									{" "}
									<strong className="font-semibold text-impacto">
										{efecto.destacado}
									</strong>
								</>
							) : null}
						</p>
					</div>
				))}
			</div>

			<div className="mt-8 rounded-2xl bg-tinta p-6 text-papel sm:p-8">
				<p className="max-w-[58ch] text-lg leading-relaxed">
					Para dimensionarlo, la OMS estima que en Europa occidental se pierden
					cada año alrededor de{" "}
					<strong className="font-semibold">
						900.000 años de vida saludable por alteración del sueño
					</strong>{" "}
					atribuible al ruido, y unos 654.000 más por molestia. Son cifras de
					ruido ambiental a escala continental, pero dicen algo simple: el ruido
					que interrumpe el descanso cuesta salud, y ese costo se puede medir.
				</p>
			</div>

			<p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-tinta-tenue">
				Conviene ser honesto con esta evidencia: los estudios de la OMS miden
				ruido de tránsito, ferroviario y aéreo, no portazos entre vecinos. Nadie
				ha demostrado que una puerta cause una enfermedad. Lo que sí está
				establecido es el mecanismo —sobresalto, sueño interrumpido, activación
				del organismo— y ese mecanismo es exactamente el mismo.
			</p>
		</Section>
	);
}
