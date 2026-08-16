export function Hero() {
	return (
		<header className="relative overflow-hidden bg-papel pt-28 pb-seccion sm:pt-36">
			{/* Ondas concéntricas: el golpe expandiéndose. Decorativas. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-40 -top-24 h-[36rem] w-[36rem] opacity-[0.13] sm:-right-24"
			>
				<svg viewBox="0 0 400 400" className="h-full w-full">
					{[60, 110, 160, 210, 260].map((r, i) => (
						<circle
							key={r}
							cx="200"
							cy="200"
							r={r}
							fill="none"
							stroke="var(--color-impacto)"
							strokeWidth={2.5 - i * 0.35}
						/>
					))}
				</svg>
			</div>

			<div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
				<p className="font-display text-sm uppercase tracking-[0.2em] text-impacto">
					Sobre los portazos
				</p>

				<h1 className="mt-6 max-w-4xl font-display text-titular leading-[0.95] text-balance text-tinta">
					Un portazo dura medio segundo. Lo que deja adentro, mucho más.
				</h1>

				<p className="mt-8 max-w-[54ch] text-entrada leading-[1.55] text-tinta-media">
					Nadie da un portazo a propósito. Se cierra la puerta, se suelta, y el
					viento o el resorte hacen el resto. Quien la cierra escucha un golpe
					seco que se acaba enseguida.
				</p>

				<p className="mt-5 max-w-[54ch] text-entrada leading-[1.55] text-tinta-media">
					Del otro lado del muro pasa algo distinto. Con dos puertas de cocina a
					menos de dos metros, ese golpe no se queda en la cocina: entra en la
					estructura y aparece en el living, en el pasillo y en los dormitorios.
					Esta página explica por qué ocurre, qué le hace al cuerpo de quien lo
					recibe, y por qué la solución es mucho más simple de lo que parece.
				</p>

				<a
					href="#solucion"
					className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-tinta px-6 py-3.5 text-sm font-medium text-papel transition-transform duration-200 ease-suave hover:-translate-y-0.5"
				>
					Ir directo a la solución
					<span aria-hidden="true">↓</span>
				</a>
			</div>
		</header>
	);
}
