interface Ancla {
	id: string;
	etiqueta: string;
}

const anclas: readonly Ancla[] = [
	{ id: "mecanismo", etiqueta: "El mecanismo" },
	{ id: "sobresalto", etiqueta: "El sobresalto" },
	{ id: "salud", etiqueta: "La salud" },
	{ id: "personas-mayores", etiqueta: "Personas mayores" },
	{ id: "solucion", etiqueta: "La solución" },
	{ id: "marco-legal", etiqueta: "La norma" },
];

export function SectionNav() {
	return (
		<nav
			aria-label="Secciones de la página"
			className="sticky top-0 z-50 border-b border-papel-borde bg-papel/85 backdrop-blur-md"
		>
			<div className="mx-auto flex w-full max-w-5xl items-center gap-6 px-5 sm:px-8">
				<a
					href="#inicio"
					className="shrink-0 py-3.5 font-display text-base text-tinta"
				>
					Portazos
				</a>
				<ul className="flex flex-1 gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
					{anclas.map((ancla) => (
						<li key={ancla.id}>
							<a
								href={`#${ancla.id}`}
								className="block whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-tinta-media transition-colors duration-200 hover:bg-papel-hondo hover:text-tinta"
							>
								{ancla.etiqueta}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
