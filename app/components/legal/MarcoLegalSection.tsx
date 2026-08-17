import { Prosa, Section } from "../layout/Section";

export function MarcoLegalSection() {
	return (
		<Section
			id="marco-legal"
			numero="08"
			eyebrow="Qué dice la norma en Chile"
			titulo="Existe un camino formal. Lo razonable es no tener que usarlo."
			tono="papel"
		>
			<Prosa>
				<p>
					Esta sección va al final y a propósito. Se incluye porque la
					información completa es mejor que la información a medias, no como
					advertencia. Casi todos los casos de ruido entre vecinos se resuelven
					conversando, y ese sigue siendo el mejor camino disponible.
				</p>
			</Prosa>

			<figure className="mt-8 max-w-[64ch] border-l-4 border-tinta bg-papel-hondo p-6">
				<blockquote className="font-display text-lg leading-relaxed text-tinta">
					«Tampoco se podrá ejecutar acto alguno que perturbe la tranquilidad de
					los copropietarios o comprometa la seguridad, salubridad y
					habitabilidad del condominio o de sus unidades, ni provocar ruidos.»
				</blockquote>
				<figcaption className="mt-3 text-sm text-tinta-tenue">
					Artículo 27 de la Ley 21.442, Nueva Ley de Copropiedad Inmobiliaria,
					vigente desde el 13 de abril de 2022. Derogó por completo la antigua
					Ley 19.537, que todavía se cita por error con frecuencia.
				</figcaption>
			</figure>

			<div className="mt-10 grid gap-5 lg:grid-cols-2">
				<div className="rounded-2xl border border-papel-borde p-6">
					<h3 className="font-display text-xl text-tinta">
						Cómo funciona dentro del condominio
					</h3>
					<p className="mt-2 leading-relaxed text-tinta-media">
						El reglamento de copropiedad de cada comunidad fija los horarios de
						descanso y las sanciones, y el Comité de Administración es el
						órgano que las aplica. La guía del MINVU y del Ministerio del Medio
						Ambiente describe la escalera habitual: primero una advertencia y,
						si la conducta se repite, multas en UTM que van subiendo.
					</p>
					<p className="mt-3 leading-relaxed text-tinta-media">
						Esa misma guía precisa algo práctico: para dejar constancia sirve el
						libro de novedades de conserjería o el correo oficial del comité.
						Los grupos de WhatsApp no son un canal válido. Si el asunto supera
						la capacidad interna de la comunidad, la vía siguiente es el Juzgado
						de Policía Local.
					</p>
				</div>

				<div className="rounded-2xl border border-papel-borde p-6">
					<h3 className="font-display text-xl text-tinta">
						Dos precisiones que suelen citarse mal
					</h3>
					<p className="mt-2 leading-relaxed text-tinta-media">
						<strong className="font-medium text-tinta">
							El D.S. 38/2011 del Medio Ambiente no aplica aquí.
						</strong>{" "}
						Es la norma que se menciona en casi toda discusión sobre ruido, pero
						regula fuentes fijas —locales, faenas, maquinaria— y el propio
						ministerio aclara que el ruido doméstico entre vecinos queda fuera
						de su alcance.
					</p>
					<p className="mt-3 leading-relaxed text-tinta-media">
						<strong className="font-medium text-tinta">
							La Ley 21.822 todavía no rige.
						</strong>{" "}
						La Ley Integral de las Personas Mayores se publicó el 1 de junio de
						2026 y entra en vigencia el 1 de junio de 2027. Reconoce el derecho
						a una vida libre de violencia y al trato digno, y ese marco importa.
						Pero su mecanismo de protección judicial se construye sobre el
						abandono social, que exige una situación grave en una persona mayor
						con dependencia. Presentarla como una herramienta lista para un
						conflicto de ruido sería exagerar, y no hace falta exagerar nada.
					</p>
				</div>
			</div>

			<div className="mt-10 max-w-[62ch]">
				<p className="font-display text-2xl leading-snug text-tinta">
					Nada de esto hace falta si la puerta deja de golpear.
				</p>
				<p className="mt-3 leading-relaxed text-tinta-media">
					<strong className="font-semibold text-impacto">
						Un reclamo formal deja a dos familias enemistadas durante años, y el
						ruido igual sigue hasta que alguien arregla la puerta. Por eso esta
						página empieza por la física y no por la ley:
					</strong>{" "}
					porque el problema tiene una solución de diez minutos, y ninguna norma
					es más eficiente que eso.
				</p>
			</div>
		</Section>
	);
}
