import { useState } from "react";

type Modo = "acompanado" | "portazo";

const ANCHO = 560;
const ALTO = 150;
const EJE = ALTO / 2;
const MUESTRAS = 200;

/**
 * Envolvente de la señal. El portazo tiene una subida casi vertical y mucha
 * amplitud; el cierre acompañado sube despacio y se queda bajo.
 */
function amplitud(modo: Modo, t: number): number {
	if (modo === "portazo") {
		if (t < 0.22) return 0.015;
		const desde = t - 0.22;
		const subida = Math.min(1, desde / 0.012);
		const caida = Math.exp(-desde * 11);
		const timbre = 0.55 + 0.45 * Math.cos(desde * 92);
		return 0.015 + 0.985 * subida * caida * timbre;
	}

	const centro = 0.42;
	const ancho = 0.3;
	const campana = Math.exp(-(((t - centro) / ancho) ** 2) * 3.2);
	return 0.012 + 0.15 * campana;
}

function trazar(modo: Modo): string {
	const superior: string[] = [];
	const inferior: string[] = [];

	for (let i = 0; i <= MUESTRAS; i += 1) {
		const t = i / MUESTRAS;
		const x = (t * ANCHO).toFixed(2);
		const a = amplitud(modo, t) * (EJE - 8);
		superior.push(`${x},${(EJE - a).toFixed(2)}`);
		inferior.push(`${x},${(EJE + a).toFixed(2)}`);
	}

	return `M${superior.join(" L")} L${inferior.reverse().join(" L")} Z`;
}

const trazos: Record<Modo, string> = {
	acompanado: trazar("acompanado"),
	portazo: trazar("portazo"),
};

interface Detalle {
	etiqueta: string;
	titulo: string;
	subida: string;
	cuerpo: string;
}

const detalles: Record<Modo, Detalle> = {
	acompanado: {
		etiqueta: "Cierre acompañado",
		titulo: "La energía se disipa antes de llegar al marco",
		subida: "Subida gradual",
		cuerpo:
			"La mano frena la hoja en el último tramo. El nivel sube despacio, el oído lo procesa como un sonido más del ambiente y el sistema de alerta no se activa.",
	},
	portazo: {
		etiqueta: "Portazo",
		titulo: "Toda la energía se descarga de golpe en el marco",
		subida: "Subida casi vertical",
		cuerpo:
			"La hoja llega a velocidad y se detiene contra el marco en milisegundos. Es esa velocidad de subida, más que el volumen, la que dispara el sobresalto: subidas rápidas y saltos del orden de 15 dB bastan para provocarlo.",
	},
};

export function CierreComparador() {
	const [modo, setModo] = useState<Modo>("portazo");
	const detalle = detalles[modo];
	const esPortazo = modo === "portazo";

	return (
		<div className="mt-4 rounded-2xl border border-papel-borde bg-papel p-5 sm:p-7">
			<div
				role="group"
				aria-label="Comparar cierre acompañado y portazo"
				className="inline-flex rounded-full bg-papel-hondo p-1"
			>
				{(Object.keys(detalles) as Modo[]).map((clave) => (
					<button
						key={clave}
						type="button"
						onClick={() => setModo(clave)}
						aria-pressed={modo === clave}
						className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
							modo === clave
								? "bg-tinta text-papel"
								: "text-tinta-media hover:text-tinta"
						}`}
					>
						{detalles[clave].etiqueta}
					</button>
				))}
			</div>

			<div className="mt-6 overflow-x-auto">
				<svg
					viewBox={`0 0 ${ANCHO} ${ALTO}`}
					className="block h-auto w-full min-w-[420px]"
					role="img"
					aria-label={`Forma de onda de un ${detalle.etiqueta.toLowerCase()}: ${detalle.subida.toLowerCase()}`}
				>
					<line
						x1="0"
						y1={EJE}
						x2={ANCHO}
						y2={EJE}
						stroke="var(--color-papel-borde)"
						strokeWidth="1.5"
					/>
					<path
						d={trazos[modo]}
						fill={esPortazo ? "var(--color-impacto)" : "var(--color-calma)"}
						fillOpacity={esPortazo ? 0.85 : 0.7}
						className="transition-all duration-500 ease-suave"
					/>
				</svg>
			</div>

			<div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
				<span
					className={`rounded-full px-3 py-1 text-xs font-medium ${
						esPortazo
							? "bg-impacto-velo text-impacto"
							: "bg-calma-velo text-calma"
					}`}
				>
					{detalle.subida}
				</span>
				<p className="font-display text-lg text-tinta">{detalle.titulo}</p>
			</div>

			<p className="mt-3 max-w-[60ch] leading-relaxed text-tinta-media">
				{detalle.cuerpo}
			</p>
		</div>
	);
}
