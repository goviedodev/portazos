import { Prosa, Section } from "../layout/Section";

interface Motivo {
	titulo: string;
	cuerpo: string;
}

const motivos: readonly Motivo[] = [
	{
		titulo: "El sueño ya viene más frágil",
		cuerpo:
			"Con la edad el sueño se vuelve más liviano y se fragmenta con facilidad. Un ruido que a otra persona apenas la mueve puede cortar la noche entera, y recuperar el sueño después cuesta bastante más.",
	},
	{
		titulo: "Más horas dentro de la casa",
		cuerpo:
			"Quien pasa el día en su casa no tiene dónde ir a descansar del ruido. La exposición no son unos minutos al llegar: son todas las horas del día, todos los días.",
	},
	{
		titulo: "El sobresalto y las caídas",
		cuerpo:
			"Un susto fuerte produce una contracción brusca y una pérdida momentánea de equilibrio. En una persona mayor, de pie y con algo en las manos, eso deja de ser un detalle.",
	},
];

export function PersonasMayoresSection() {
	return (
		<Section
			id="personas-mayores"
			numero="04"
			eyebrow="Cuando en la casa vive una persona mayor"
			titulo="La misma puerta, pero el doble de consecuencias."
			tono="hondo"
		>
			<Prosa>
				<p>
					La OMS es explícita en este punto: las personas mayores y quienes
					tienen enfermedades crónicas son más sensibles a la perturbación por
					ruido. No es una cuestión de mal genio ni de intolerancia adquirida
					con los años. Hay razones concretas.
				</p>
			</Prosa>

			<div className="mt-8 space-y-4">
				{motivos.map((motivo, i) => (
					<div
						key={motivo.titulo}
						className="flex gap-5 rounded-2xl border border-papel-borde bg-papel p-5 sm:p-6"
					>
						<span
							className="font-display text-2xl text-impacto tabular-nums"
							aria-hidden="true"
						>
							{`0${i + 1}`}
						</span>
						<div>
							<h3 className="font-display text-xl text-tinta">{motivo.titulo}</h3>
							<p className="mt-1.5 max-w-[62ch] leading-relaxed text-tinta-media">
								{motivo.cuerpo}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-10 max-w-[60ch]">
				<p className="font-display text-2xl leading-snug text-tinta sm:text-3xl">
					A cierta edad, la casa es casi todo el mundo que uno tiene. Debería
					ser el lugar donde por fin se puede bajar la guardia.
				</p>
				<p className="mt-4 leading-relaxed text-tinta-media">
					Ese es el punto de esta sección, y no es un punto legal. Una persona
					mayor que se sobresalta varias veces al día dentro de su propia casa{" "}
					<strong className="font-semibold text-impacto">
						termina perdiendo algo difícil de recuperar: la sensación de estar
						tranquila en el único lugar donde debería estarlo.
					</strong>
				</p>
			</div>
		</Section>
	);
}
