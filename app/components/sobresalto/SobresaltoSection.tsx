import { CierreComparador } from "../mecanismo/CierreComparador";
import { Prosa, Section } from "../layout/Section";

export function SobresaltoSection() {
	return (
		<Section
			id="sobresalto"
			numero="02"
			eyebrow="Por qué no hay manera de acostumbrarse"
			titulo="El sobresalto no es una opinión sobre el ruido. Es un reflejo."
			tono="impacto"
		>
			<Prosa>
				<p>
					Ante un sonido que sube muy rápido, el cuerpo responde antes de que
					haya pensamiento. El estímulo llega al núcleo coclear y de ahí pasa
					directamente a la formación reticular pontina caudal, en el tronco
					encefálico. Es un arco reflejo corto: los músculos se contraen, el
					pulso se acelera y la respiración se corta.
				</p>
				<p>
					Todo eso ocurre en una fracción de segundo y sin permiso de la
					persona. No depende del carácter, de la paciencia ni de la buena
					voluntad. Alguien puede saber perfectamente que el golpe viene de la
					puerta del lado, entenderlo, no guardar ningún rencor, y aun así dar
					el salto cada vez.
				</p>
				<p>
					Lo que dispara el reflejo no es tanto el volumen como la{" "}
					<strong className="font-semibold text-tinta">
						velocidad con que sube el sonido
					</strong>
					. Saltos del orden de quince decibeles bastan, y el sobresalto puede
					aparecer desde niveles tan modestos como sesenta decibeles: menos que
					una conversación fuerte. Un portazo reúne las dos condiciones que
					importan: sube casi de golpe y llega sin aviso.
				</p>
			</Prosa>

			<CierreComparador />

			<div className="mt-10 rounded-2xl border-l-4 border-impacto bg-papel p-6 sm:p-7">
				<p className="max-w-[58ch] font-display text-xl leading-snug text-tinta sm:text-2xl">
					A un ruido regular el cuerpo se habitúa. A uno impredecible, no.
				</p>
				<p className="mt-3 max-w-[62ch] leading-relaxed text-tinta-media">
					Con el tren que pasa a la misma hora, el organismo aprende el patrón y
					baja la respuesta. El portazo no tiene patrón: puede venir en
					cualquier momento del día y no hay forma de anticiparlo. Por eso la
					reacción del cuerpo en la vez número cien es prácticamente la misma
					que en la primera, y a eso se suma algo peor: la espera.{" "}
					<strong className="font-semibold text-impacto">
						Quien ya recibió muchos portazos pasa el resto del día en alerta,
						atento a cuándo viene el próximo.
					</strong>
				</p>
			</div>
		</Section>
	);
}
