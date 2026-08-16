import { CierreGuiado } from "./CierreGuiado";
import { Prosa, Section } from "../layout/Section";

interface Arreglo {
	titulo: string;
	cuerpo: string;
}

const arreglos: readonly Arreglo[] = [
	{
		titulo: "Escuadrar la puerta y ajustar el pestillo",
		cuerpo:
			"Es el arreglo que importa. Se reaprietan y alinean las bisagras, y se corre la placa del pestillo los milímetros que haga falta para que calce sin pelear. Una vez hecho, la puerta cierra sola con un empujón suave y ya no pide fuerza.",
	},
	{
		titulo: "Topes de goma en el marco",
		cuerpo:
			"Tres apliques autoadhesivos en el batiente. La hoja apoya en goma en vez de golpear madera contra madera. Cuestan poco y se ponen en un minuto.",
	},
	{
		titulo: "Burlete o felpa perimetral",
		cuerpo:
			"Amortigua el contacto en todo el perímetro y de paso frena el pulso de aire, que es la mitad del problema.",
	},
	{
		titulo: "Amortiguador o cierrapuertas",
		cuerpo:
			"Un cierrapuertas hidráulico simple hace imposible el portazo: por más fuerte que uno suelte la puerta, ella se cierra despacio.",
	},
];

const habitos: readonly Arreglo[] = [
	{
		titulo: "Acompañar la hoja hasta el final",
		cuerpo:
			"No soltar la puerta a medio camino. Llevarla con la mano el último tramo, sin lanzarla. Son dos segundos.",
	},
	{
		titulo: "Cerrar con la manilla girada",
		cuerpo:
			"El truco para una puerta dura: bajar la manilla, apoyar la hoja contra el marco y recién ahí soltarla. Así el pestillo entra sin necesidad de impulso, que es lo que obliga a lanzarla.",
	},
	{
		titulo: "Cuidado con la corriente de aire",
		cuerpo:
			"Una ventana abierta al otro lado de la casa convierte cualquier cierre normal en un portazo. Si hay corriente, la puerta necesita la mano sí o sí.",
	},
];

export function SolucionSection() {
	return (
		<Section
			id="solucion"
			numero="05"
			eyebrow="La parte más importante de esta página"
			titulo="Diez minutos de un maestro. Dos segundos de costumbre."
			tono="calma"
		>
			<Prosa>
				<p>
					Después de todo lo anterior, lo llamativo es lo barato que sale
					resolverlo. No hace falta obra, ni permiso, ni gastar de verdad.
				</p>
				<p>
					Pero antes hay algo que cambia el orden de las cosas.{" "}
					<strong className="font-semibold text-tinta">
						Cuando una puerta está descuadrada, no cierra con un empujón suave:
						hay que forzarla para que el pestillo entre.
					</strong>{" "}
					Esa fuerza extra es, justamente, el portazo. Visto así, el golpe deja
					de ser un descuido de quien cierra y pasa a ser lo que la puerta está
					exigiendo para cerrarse.
				</p>
				<p>
					Por eso el arreglo mecánico no es una opción entre dos: es el que
					resuelve el problema de raíz. El cambio de hábito ayuda, pero mientras
					la puerta siga descuadrada, está pidiéndole a alguien algo que la
					puerta no le permite hacer.
				</p>
			</Prosa>

			<div className="mt-8 grid gap-5 lg:grid-cols-2">
				<div className="rounded-2xl border border-papel-borde bg-papel p-6 sm:p-7">
					<p className="font-display text-5xl leading-none text-calma">
						10 min
					</p>
					<h3 className="mt-3 font-display text-2xl text-tinta">
						La solución de fondo
					</h3>
					<p className="mt-2 leading-relaxed text-tinta-media">
						El primer punto es el que resuelve el problema; los otros tres
						terminan de amortiguar. Todo se compra en cualquier ferretería y se
						hace en una sola visita.
					</p>
					<ul className="mt-5 space-y-4">
						{arreglos.map((arreglo) => (
							<li key={arreglo.titulo} className="flex gap-3">
								<span aria-hidden="true" className="mt-1 text-calma">
									→
								</span>
								<div>
									<h4 className="font-medium text-tinta">{arreglo.titulo}</h4>
									<p className="mt-1 text-[15px] leading-relaxed text-tinta-media">
										{arreglo.cuerpo}
									</p>
								</div>
							</li>
						))}
					</ul>

					<div className="mt-7 rounded-xl bg-calma-velo p-5">
						<p className="font-display text-xl leading-snug text-tinta">
							Diez minutos son el 0,002% de un año.
						</p>
						<p className="mt-2 text-[15px] leading-relaxed text-tinta-media">
							Ese es todo el precio de dejar la puerta funcionando bien. Del
							otro lado están los trescientos sesenta y cinco días que dura el
							problema si no se hace nada.
						</p>
						{/* La barra verde es literalmente invisible a escala: ese es el punto. */}
						<div
							className="mt-4 h-3 w-full overflow-hidden rounded-full bg-papel-borde"
							role="img"
							aria-label="Diez minutos comparados con un año completo: una fracción imperceptible"
						>
							<div className="h-full w-[0.4%] min-w-[3px] rounded-full bg-calma" />
						</div>
						<div className="mt-2 flex justify-between text-xs text-tinta-tenue">
							<span>10 minutos, una vez</span>
							<span>un año</span>
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-papel-borde bg-papel p-6 sm:p-7">
					<p className="font-display text-5xl leading-none text-calma">2 seg</p>
					<h3 className="mt-3 font-display text-2xl text-tinta">
						Lo que ayuda mientras tanto
					</h3>
					<p className="mt-2 leading-relaxed text-tinta-media">
						Con la puerta descuadrada esto no reemplaza al arreglo, pero baja
						mucho el golpe desde hoy y no cuesta nada probarlo.
					</p>
					<ul className="mt-5 space-y-4">
						{habitos.map((habito) => (
							<li key={habito.titulo} className="flex gap-3">
								<span aria-hidden="true" className="mt-1 text-calma">
									→
								</span>
								<div>
									<h4 className="font-medium text-tinta">{habito.titulo}</h4>
									<p className="mt-1 text-[15px] leading-relaxed text-tinta-media">
										{habito.cuerpo}
									</p>
								</div>
							</li>
						))}
					</ul>

					<CierreGuiado />
				</div>
			</div>
		</Section>
	);
}
