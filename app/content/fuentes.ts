export interface Fuente {
	id: string;
	titulo: string;
	organismo: string;
	url: string;
	nota: string;
}

/**
 * Toda afirmación científica o legal de la página se apoya en alguna de estas
 * fuentes. Si se agrega una afirmación, se agrega la fuente aquí.
 */
export const fuentes: readonly Fuente[] = [
	{
		id: "minvu-condominios",
		titulo: "Guía para la identificación y manejo de ruidos molestos en condominios",
		organismo: "MINVU y Ministerio del Medio Ambiente, febrero de 2026",
		url: "https://www.minvu.gob.cl/wp-content/uploads/2026/02/FOLLETO-GUIA-RUIDOS-MOLESTOS.pdf",
		nota: "Cita el artículo 27 de la Ley 21.442, recomienda dejar constancia en el libro de novedades y describe la escala de multas.",
	},
	{
		id: "ley-21442",
		titulo: "Ley 21.442, Nueva Ley de Copropiedad Inmobiliaria",
		organismo: "Biblioteca del Congreso Nacional de Chile",
		url: "https://www.bcn.cl/leychile/navegar?idNorma=1174630",
		nota: "Vigente desde el 13 de abril de 2022; derogó la Ley 19.537. El artículo 27 prohíbe perturbar la tranquilidad de los copropietarios.",
	},
	{
		id: "ley-21822",
		titulo: "Ley 21.822, Ley Integral de las Personas Mayores",
		organismo: "Biblioteca del Congreso Nacional de Chile",
		url: "https://www.bcn.cl/leychile/navegar?idNorma=1214560",
		nota: "Publicada el 1 de junio de 2026. Entra en vigencia el 1 de junio de 2027.",
	},
	{
		id: "mma-ruido",
		titulo: "Preguntas frecuentes sobre ruido ambiental",
		organismo: "Ministerio del Medio Ambiente",
		url: "https://ruido.mma.gob.cl/preguntas-frecuentes/",
		nota: "Confirma que el D.S. 38/2011 regula fuentes fijas y no el ruido doméstico entre vecinos.",
	},
	{
		id: "oms-ruido",
		titulo: "Environmental Noise Guidelines for the European Region",
		organismo: "Organización Mundial de la Salud, 2018",
		url: "https://www.who.int/europe/publications/i/item/9789289053563",
		nota: "La alteración del sueño y la molestia son los efectos más prevalentes del ruido. Señala mayor sensibilidad en personas mayores y con enfermedades crónicas.",
	},
	{
		id: "oms-riesgos",
		titulo: "How much does environmental noise affect our health?",
		organismo: "Organización Mundial de la Salud, 2024",
		url: "https://www.who.int/europe/news/item/04-08-2024-how-much-does-environmental-noise-affect-our-health--who-updates-methods-to-assess-health-risks",
		nota: "Actualiza los parámetros para estimar riesgo cardiovascular y de salud mental asociado al ruido.",
	},
	{
		id: "oms-ficha",
		titulo: "Ficha informativa sobre ruido",
		organismo: "Organización Mundial de la Salud",
		url: "https://www.who.int/europe/news-room/fact-sheets/item/noise",
		nota: "Estimaciones de años de vida saludable perdidos por alteración del sueño y molestia.",
	},
	{
		id: "startle",
		titulo: "Startle and other human responses to noise",
		organismo: "Journal of Sound and Vibration",
		url: "https://www.sciencedirect.com/science/article/abs/pii/0022460X69902260",
		nota: "Trabajo de referencia sobre el sobresalto acústico; usa el portazo inesperado como estímulo patrón.",
	},
	{
		id: "startle-fisiologia",
		titulo: "The startle reflex: basic physiology and practical implications",
		organismo: "PubMed Central",
		url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7075047/",
		nota: "Describe el arco reflejo del tronco encefálico y el efecto de la velocidad de subida del sonido.",
	},
] as const;
