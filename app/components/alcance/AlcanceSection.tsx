import { Prosa, Section } from "../layout/Section";

interface Caso {
	titulo: string;
	cuerpo: string;
}

const casos: readonly Caso[] = [
	{
		titulo: "Las puertas del auto",
		cuerpo:
			"Pesan, cierran con un golpe seco y lo hacen a la altura de las ventanas de la casa. Además caen casi siempre en las peores horas: al salir temprano o al llegar de noche. Se cierran igual apoyándolas con la palma hasta que el pestillo toma.",
	},
	{
		titulo: "Golpes de mantención",
		cuerpo:
			"Martillar, taladrar o colgar algo tiene que pasar alguna vez. Ahí lo que importa no es evitarlo, sino la hora: nada de eso a primera hora ni de noche.",
	},
];

export function AlcanceSection() {
	return (
		<Section
			id="alcance"
			numero="07"
			eyebrow="El principio, no el objeto"
			titulo="La física no sabe que es una puerta."
			tono="hondo"
		>
			<Prosa>
				<p>
					Toda esta página habla de una puerta porque es el caso más frecuente,
					pero nada de lo que la explica es propio de las puertas. La energía que
					entra al muro, los graves que atraviesan lo que las voces no
					atraviesan, el reflejo que se dispara por la velocidad con que sube el
					sonido: eso describe impactos, no objetos.
				</p>
				<p>
					A la estructura le da lo mismo el origen. Una hoja que llega a
					velocidad, un mueble que se cierra de golpe, algo pesado que se suelta
					al suelo en vez de apoyarse, una silla que se arrastra: si el contacto
					es breve y fuerte, la energía entra igual y sale por los mismos lugares
					de siempre.{" "}
					<strong className="font-semibold text-impacto">
						Y el tronco encefálico, que es donde nace el sobresalto, tampoco
						pregunta qué lo causó.
					</strong>
				</p>
			</Prosa>

			<div
				className="mt-8 flex flex-col gap-3 rounded-2xl border border-papel-borde bg-papel p-5 sm:flex-row sm:items-center sm:p-6"
				role="img"
				aria-label="Cadena común a todos los impactos: un contacto breve y fuerte entra en la estructura, la estructura lo reparte por la casa y el cuerpo responde con un sobresalto."
			>
				{[
					"Un contacto breve y fuerte",
					"La estructura lo reparte",
					"El cuerpo salta",
				].map((paso, i) => (
					<div key={paso} className="flex items-center gap-3 sm:flex-1">
						<span
							aria-hidden="true"
							className="font-display text-sm text-impacto tabular-nums"
						>
							{`0${i + 1}`}
						</span>
						<p className="text-[15px] leading-snug text-tinta">{paso}</p>
						{i < 2 && (
							<span
								aria-hidden="true"
								className="ml-auto hidden text-impacto sm:block"
							>
								→
							</span>
						)}
					</div>
				))}
			</div>

			<div className="mt-10">
				<h3 className="max-w-[62ch] font-display text-2xl leading-snug text-tinta">
					Dónde más aparece el mismo golpe
				</h3>
				<p className="mt-2 max-w-[62ch] leading-relaxed text-tinta-media">
					No es una lista de prohibiciones ni un reglamento de convivencia. Es
					sólo dónde vuelve a aparecer el mismo fenómeno, por si sirve para
					reconocerlo.
				</p>
				<ul className="mt-6 grid gap-4 sm:grid-cols-2">
					{casos.map((caso) => (
						<li
							key={caso.titulo}
							className="rounded-2xl border border-papel-borde bg-papel p-5"
						>
							<h4 className="font-display text-lg text-tinta">{caso.titulo}</h4>
							<p className="mt-1.5 text-[15px] leading-relaxed text-tinta-media">
								{caso.cuerpo}
							</p>
						</li>
					))}
				</ul>
			</div>

			<div className="mt-10 max-w-[62ch]">
				<p className="font-display text-2xl leading-snug text-tinta sm:text-3xl">
					Un solo criterio cubre todos los casos: entre dos superficies duras,
					poner la mano o poner goma.
				</p>
				<p className="mt-4 leading-relaxed text-tinta-media">
					Acompañar en vez de soltar. Apoyar en vez de dejar caer. Levantar en
					vez de arrastrar. Es el mismo gesto de dos segundos de la sección
					anterior, aplicado a todo lo demás, y con el tiempo deja de ser un
					gesto:{" "}
					<strong className="font-semibold text-tinta">
						se vuelve la manera normal de moverse por una casa que comparte muros
						con otra.
					</strong>
				</p>
			</div>
		</Section>
	);
}
