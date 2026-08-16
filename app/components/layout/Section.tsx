interface SectionProps {
	id: string;
	numero: string;
	eyebrow: string;
	titulo: string;
	tono?: "papel" | "hondo" | "impacto" | "calma";
	children: React.ReactNode;
}

const fondos: Record<NonNullable<SectionProps["tono"]>, string> = {
	papel: "bg-papel",
	hondo: "bg-papel-hondo",
	impacto: "bg-impacto-velo",
	calma: "bg-calma-velo",
};

const acentos: Record<NonNullable<SectionProps["tono"]>, string> = {
	papel: "text-tinta-tenue",
	hondo: "text-tinta-tenue",
	impacto: "text-impacto",
	calma: "text-calma",
};

export function Section({
	id,
	numero,
	eyebrow,
	titulo,
	tono = "papel",
	children,
}: SectionProps) {
	return (
		<section
			id={id}
			aria-labelledby={`${id}-titulo`}
			className={`${fondos[tono]} py-seccion`}
		>
			<div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
				<div className="flex items-baseline gap-4">
					<span
						className={`${acentos[tono]} font-display text-sm tabular-nums`}
						aria-hidden="true"
					>
						{numero}
					</span>
					<p
						className={`${acentos[tono]} text-xs font-medium uppercase tracking-[0.18em]`}
					>
						{eyebrow}
					</p>
				</div>
				<h2
					id={`${id}-titulo`}
					className="mt-4 max-w-3xl font-display text-seccion leading-[1.08] text-balance text-tinta"
				>
					{titulo}
				</h2>
				<div className="mt-10">{children}</div>
			</div>
		</section>
	);
}

interface ProsaProps {
	children: React.ReactNode;
}

/** Columna de texto con medida de lectura acotada. */
export function Prosa({ children }: ProsaProps) {
	return (
		<div className="max-w-[62ch] space-y-5 text-lg leading-[1.65] text-tinta-media">
			{children}
		</div>
	);
}
