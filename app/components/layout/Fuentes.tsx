import { fuentes } from "../../content/fuentes";

export function Fuentes() {
	return (
		<footer id="fuentes" className="bg-tinta py-seccion text-papel">
			<div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
				<h2 className="font-display text-seccion leading-tight">Fuentes</h2>
				<p className="mt-4 max-w-[62ch] leading-relaxed text-papel/70">
					Toda afirmación científica o legal de esta página se apoya en alguno de
					estos documentos. Están enlazados para que cualquiera pueda
					verificarlos por su cuenta.
				</p>

				<ul className="mt-10 space-y-6">
					{fuentes.map((fuente) => (
						<li
							key={fuente.id}
							className="border-t border-papel/15 pt-5 sm:flex sm:gap-8"
						>
							<div className="sm:w-1/2">
								<a
									href={fuente.url}
									target="_blank"
									rel="noreferrer"
									className="font-display text-lg leading-snug underline decoration-papel/30 underline-offset-4 transition-colors hover:decoration-papel"
								>
									{fuente.titulo}
								</a>
								<p className="mt-1 text-sm text-papel/55">{fuente.organismo}</p>
							</div>
							<p className="mt-2 text-[15px] leading-relaxed text-papel/70 sm:mt-0 sm:w-1/2">
								{fuente.nota}
							</p>
						</li>
					))}
				</ul>

				<p className="mt-12 max-w-[62ch] text-sm leading-relaxed text-papel/50">
					Esta página es material informativo de divulgación. No constituye
					asesoría legal ni médica, y no se refiere a ninguna persona en
					particular.
				</p>
			</div>
		</footer>
	);
}
