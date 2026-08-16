interface Habitacion {
	nombre: string;
	x: number;
	y: number;
	ancho: number;
	alto: number;
	/** Retraso del destello, en segundos: el orden en que el golpe llega. */
	retraso: number;
}

const habitaciones: readonly Habitacion[] = [
	{ nombre: "Cocina", x: 200, y: 30, ancho: 140, alto: 128, retraso: 0.1 },
	{ nombre: "Living", x: 344, y: 30, ancho: 276, alto: 128, retraso: 0.45 },
	{ nombre: "Pasillo", x: 200, y: 162, ancho: 420, alto: 44, retraso: 0.3 },
	{ nombre: "Dormitorio", x: 200, y: 210, ancho: 200, alto: 120, retraso: 0.65 },
	{ nombre: "Dormitorio", x: 404, y: 210, ancho: 216, alto: 120, retraso: 0.8 },
];

export function NoisePathDiagram() {
	return (
		<figure className="mt-4">
			<div className="overflow-x-auto rounded-2xl border border-papel-borde bg-papel p-4 sm:p-6">
				<svg
					viewBox="0 0 660 372"
					className="mx-auto block h-auto w-full min-w-[480px] max-w-3xl"
					role="img"
					aria-labelledby="diagrama-titulo diagrama-desc"
				>
					<title id="diagrama-titulo">
						Recorrido del ruido de un portazo dentro de la vivienda vecina
					</title>
					<desc id="diagrama-desc">
						El golpe se produce en la puerta de cocina, junto al muro medianero.
						La energía entra en la estructura y se vuelve a radiar como sonido
						en la cocina, el pasillo, el living y los dos dormitorios.
					</desc>

					{/* Vivienda de quien cierra la puerta */}
					<rect
						x="26"
						y="30"
						width="150"
						height="300"
						rx="6"
						fill="var(--color-papel-hondo)"
						stroke="var(--color-papel-borde)"
						strokeWidth="2"
					/>
					<text
						x="101"
						y="316"
						textAnchor="middle"
						className="fill-[var(--color-tinta-tenue)] text-[13px]"
					>
						Vivienda vecina
					</text>

					{/* Puerta que se cierra */}
					<rect x="164" y="58" width="12" height="64" rx="3" fill="var(--color-impacto)" />
					<text
						x="101"
						y="96"
						textAnchor="middle"
						className="fill-[var(--color-tinta-media)] text-[13px]"
					>
						Puerta de cocina
					</text>

					{/* Muro medianero */}
					<rect x="182" y="30" width="16" height="300" fill="var(--color-tinta)" opacity="0.82" />
					<text
						x="190"
						y="352"
						textAnchor="middle"
						className="fill-[var(--color-tinta-tenue)] text-[12px]"
					>
						muro medianero
					</text>

					{/* Vivienda que recibe */}
					{habitaciones.map((sala, i) => (
						<g key={`${sala.nombre}-${i}`}>
							<rect
								x={sala.x}
								y={sala.y}
								width={sala.ancho}
								height={sala.alto}
								rx="4"
								fill="var(--color-impacto)"
								className="portazo-destello"
								style={{ animationDelay: `${sala.retraso}s` }}
							/>
							<rect
								x={sala.x}
								y={sala.y}
								width={sala.ancho}
								height={sala.alto}
								rx="4"
								fill="none"
								stroke="var(--color-papel-borde)"
								strokeWidth="2"
							/>
							<text
								x={sala.x + sala.ancho / 2}
								y={sala.y + sala.alto / 2 + 5}
								textAnchor="middle"
								className="fill-[var(--color-tinta-media)] text-[14px]"
							>
								{sala.nombre}
							</text>
						</g>
					))}

					{/* Ondas que salen del punto de impacto */}
					{[34, 68, 102, 136, 170].map((r, i) => (
						<circle
							key={r}
							cx="198"
							cy="90"
							r={r}
							fill="none"
							stroke="var(--color-impacto)"
							strokeWidth="2"
							className="portazo-onda"
							style={{ animationDelay: `${i * 0.22}s` }}
						/>
					))}

					{/* Punto de impacto */}
					<circle cx="198" cy="90" r="7" fill="var(--color-impacto)" />
				</svg>
			</div>
			<figcaption className="mt-3 max-w-[62ch] text-sm leading-relaxed text-tinta-tenue">
				El golpe entra en el muro por el marco de la puerta. Desde ahí no viaja
				por el aire de habitación en habitación: viaja por la estructura, que
				lo vuelve a emitir como sonido en cada recinto a la vez.
			</figcaption>
		</figure>
	);
}
