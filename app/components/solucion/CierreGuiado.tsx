const BISAGRA = { x: 46, y: 150 };
const LARGO = 108;
const JAMBA = { x: BISAGRA.x + LARGO, y: BISAGRA.y };

/** Punta de la hoja para un ángulo de apertura dado, visto desde arriba. */
function punta(grados: number): { x: number; y: number } {
	const rad = (grados * Math.PI) / 180;
	return {
		x: BISAGRA.x + LARGO * Math.cos(rad),
		y: BISAGRA.y - LARGO * Math.sin(rad),
	};
}

/** Posición de la mano sobre la hoja, cerca del canto libre. */
function mano(grados: number): { x: number; y: number } {
	const rad = (grados * Math.PI) / 180;
	const r = LARGO * 0.84;
	return { x: BISAGRA.x + r * Math.cos(rad), y: BISAGRA.y - r * Math.sin(rad) };
}

function arco(desde: number, hasta: number, radio: number): string {
	const rad = (g: number) => (g * Math.PI) / 180;
	const p1 = {
		x: BISAGRA.x + radio * Math.cos(rad(desde)),
		y: BISAGRA.y - radio * Math.sin(rad(desde)),
	};
	const p2 = {
		x: BISAGRA.x + radio * Math.cos(rad(hasta)),
		y: BISAGRA.y - radio * Math.sin(rad(hasta)),
	};
	return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${radio} ${radio} 0 0 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
}

const APERTURAS = [72, 38, 0] as const;

interface PanelProps {
	variante: "suelta" | "acompana";
}

function Panel({ variante }: PanelProps) {
	const acompana = variante === "acompana";
	const color = acompana ? "var(--color-calma)" : "var(--color-impacto)";
	/** Si se suelta, la mano deja la hoja antes del último tramo. */
	const conMano = acompana ? APERTURAS : APERTURAS.slice(0, 1);

	return (
		<svg
			viewBox="0 0 205 196"
			className="block h-auto w-full"
			role="img"
			aria-label={
				acompana
					? "Vista desde arriba: la mano sigue sobre la puerta en las tres posiciones, hasta que la hoja toca el marco."
					: "Vista desde arriba: la mano suelta la puerta a medio camino y la hoja recorre sola el último tramo hasta golpear el marco."
			}
		>
			{/* Muro a ambos lados del vano. Va tenue para que la hoja cerrada,
			    que queda sobre la misma línea, se distinga de él. */}
			<line x1="2" y1={BISAGRA.y} x2={BISAGRA.x} y2={BISAGRA.y} stroke="var(--color-tinta)" strokeWidth="6" opacity="0.16" />
			<line x1={JAMBA.x} y1={BISAGRA.y} x2="203" y2={BISAGRA.y} stroke="var(--color-tinta)" strokeWidth="6" opacity="0.16" />
			{/* Jamba: el punto donde la hoja llega */}
			<line x1={JAMBA.x} y1={BISAGRA.y - 7} x2={JAMBA.x} y2={BISAGRA.y + 7} stroke="var(--color-tinta)" strokeWidth="3.5" opacity="0.5" />

			{/* Recorrido completo de la hoja */}
			<path d={arco(72, 0, LARGO)} fill="none" stroke="var(--color-papel-borde)" strokeWidth="2" strokeDasharray="4 5" />

			{/* El último tramo: el que decide si hay portazo o no */}
			<path d={arco(38, 0, LARGO)} fill="none" stroke={color} strokeWidth="3" strokeDasharray={acompana ? undefined : "4 5"} opacity={acompana ? 0.9 : 0.5} />

			{/* Hoja en tres momentos del cierre */}
			{APERTURAS.map((grados, i) => {
				const p = punta(grados);
				const cerrada = grados === 0;
				return (
					<line
						key={grados}
						x1={BISAGRA.x}
						y1={BISAGRA.y}
						x2={p.x}
						y2={p.y}
						stroke={cerrada ? color : "var(--color-tinta-tenue)"}
						strokeWidth={cerrada ? 9 : 5}
						strokeLinecap="round"
						opacity={cerrada ? 1 : 0.3 + i * 0.12}
					/>
				);
			})}

			{/* Mano sobre la hoja */}
			{conMano.map((grados) => {
				const m = mano(grados);
				return (
					<g key={`mano-${grados}`}>
						<circle cx={m.x} cy={m.y} r="9" fill="var(--color-papel)" stroke={color} strokeWidth="3" />
						<circle cx={m.x} cy={m.y} r="3" fill={color} />
					</g>
				);
			})}

			{/* El golpe, solo cuando la hoja llega sola. Si va acompañada no hay
			    nada que dibujar: ese es justamente el punto. */}
			{acompana ? null : (
				<g stroke={color} strokeWidth="3" strokeLinecap="round">
					{[-58, -26, 6, 38, 70].map((g) => {
						const rad = (g * Math.PI) / 180;
						return (
							<line
								key={g}
								x1={JAMBA.x + 11 * Math.cos(rad)}
								y1={JAMBA.y + 11 * Math.sin(rad)}
								x2={JAMBA.x + 23 * Math.cos(rad)}
								y2={JAMBA.y + 23 * Math.sin(rad)}
							/>
						);
					})}
				</g>
			)}

			{/* Bisagra */}
			<circle cx={BISAGRA.x} cy={BISAGRA.y} r="5" fill="var(--color-tinta)" />

			<text x="102" y="188" textAnchor="middle" className="fill-[var(--color-tinta-media)] text-[14px]">
				{acompana ? "la mano llega hasta el marco" : "la hoja termina sola"}
			</text>
		</svg>
	);
}

export function CierreGuiado() {
	return (
		<figure className="mt-6">
			<div className="grid gap-3 sm:grid-cols-2">
				<div className="rounded-xl border border-papel-borde bg-papel-hondo p-4">
					<p className="mb-1 text-sm font-medium text-impacto">Así no</p>
					<Panel variante="suelta" />
				</div>
				<div className="rounded-xl border border-calma-claro bg-calma-velo p-4">
					<p className="mb-1 text-sm font-medium text-calma">Así sí</p>
					<Panel variante="acompana" />
				</div>
			</div>
			<figcaption className="mt-3 text-[15px] leading-relaxed text-tinta-media">
				Visto desde arriba.{" "}
				<strong className="font-semibold text-impacto">
					Toda la diferencia está en el último tercio del recorrido: si la hoja
					lo hace sola, llega al marco a velocidad. Basta con no soltar la
					manilla hasta sentir que la puerta apoya.
				</strong>
			</figcaption>
		</figure>
	);
}
