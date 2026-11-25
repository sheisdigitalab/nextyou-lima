import { d as uniNoUnico } from "./home_AzZ1C02B.mjs";
import { t as comoAppV7 } from "./v7_DHAIYzOh.mjs";
import { s as unicoV4 } from "./v4_vKSioh4u.mjs";
import { a as joven_jan_default, i as joven_sofia_default, n as prof_per_default, o as joven_irene_default, r as prof_arq_default, s as joven_nil_default } from "./coach-4_JoOuWTHs.mjs";
import { a as prof_dev_default, i as prof_ele_default, n as prof_fot_default, o as prof_coc_default, r as prof_fis_default, t as prof_enf_default } from "./prof-enf_8wSC3cWp.mjs";
//#region src/data/lima-v3.ts
var fotos = {
	Nil: {
		foto: joven_nil_default,
		alt: "Nil, con sudadera negra, sentado en el suelo de una calle."
	},
	Irene: {
		foto: joven_irene_default,
		alt: "Irene, con gafas y rebeca gris, delante de un mural de colores."
	},
	Jan: {
		foto: joven_jan_default,
		alt: "Jan, de pelo rizado y jersey azul, mira a cámara entre la vegetación."
	},
	Sofía: {
		foto: joven_sofia_default,
		alt: "Sofía, con mochila y auriculares al cuello, sale del instituto con sus apuntes."
	}
};
var unicoLima = {
	...unicoV4,
	titulo: "Jóvenes como tú que aún dudan sobre qué estudiar y a qué dedicarse",
	resaltado: "qué estudiar y a qué dedicarse",
	preguntas: "¿Qué estudio? ¿En qué trabajaré? ¿Me gustará? ¿Podrá ser mi forma de vida?",
	personas: unicoV4.personas.map((p) => {
		const q = {
			...p,
			...fotos[p.nombre] ?? {}
		};
		return p.nombre === "Irene" ? {
			...q,
			nombre: "Alba",
			edad: 18,
			cita: "Mis amigos lo tienen claro y yo no.",
			alt: "Alba, con gafas y rebeca gris, delante de un mural de colores."
		} : q;
	})
};
var comoAppLima = {
	...comoAppV7,
	coach: {
		eti: "Acompañamiento opcional de pago",
		titulo: "Un profesional te ayuda a ordenar tus opciones",
		texto: "Si después del test todavía tienes dudas, puedes reservar sesiones individuales online con un coach profesional. Revisaréis tus tres caminos, trabajaréis tus preguntas y pensaréis qué paso te gustaría dar después.",
		puntos: [
			"Sesiones individuales por videollamada",
			"Orientación personalizada sobre tus tres caminos",
			"Ayuda para comparar opciones y definir próximos pasos"
		]
	},
	pasos: comoAppV7.pasos.map((p, i) => i === 0 ? {
		...p,
		titulo: "Haces un test para descubrir qué te motiva",
		puntos: [
			"<b>12 preguntas</b> · unos 8 minutos",
			"<b>Descubres</b> tus motivaciones y tu forma de ser",
			"<b>Repítelo</b> cuando quieras: si cambian tus respuestas, cambian tus caminos"
		]
	} : i === 1 ? {
		...p,
		titulo: "Recibes 3 caminos profesionales que encajan contigo",
		texto: "Al terminar el test te proponemos 3 profesiones que encajan contigo, cada una por un motivo distinto:",
		puntos: [
			"<b>El que más te pega</b>: el que mejor coincide con tus respuestas",
			"<b>El puente</b>: el que conecta con intereses que ya tienes",
			"<b>El salto</b>: una opción nueva que quizás no te habías planteado"
		],
		cierre: void 0,
		nota: "No tienes que elegir ya: toca un camino para ver en qué consiste y cómo llegar a él."
	} : i === 2 ? {
		...p,
		eti: "Gente real",
		titulo: "Historias de profesionales para inspirarte",
		texto: "Gratis. Personas que trabajan en distintos ámbitos te cuentan qué estudiaron, cómo empezaron y qué cambios hicieron hasta llegar a su profesión. Sus trayectorias pueden darte ideas para explorar tus opciones. Las entrevistas disponibles varían según la profesión.",
		puntos: [
			"<b>Entrevistas en vídeo</b> con profesionales de distintos sectores",
			"<b>Historias de personas</b> que llegaron a su trabajo por caminos diferentes",
			"<b>Consejos e ideas</b> para seguir explorando"
		]
	} : p)
};
var queEsLima = {
	lema: "La plataforma para explorar qué estudiar y a qué dedicarte.",
	resaltado: "qué estudiar y a qué dedicarte",
	texto: "Descubre profesiones que no sabías que existían y conoce a quien ya trabaja en ellas, antes de decidir qué estudiar."
};
var uniNoUnicoLima = {
	...uniNoUnico,
	texto: "Hay muchas formas de llegar a una profesión. Por ejemplo, a la animación 3D se puede llegar por la universidad, por una FP o combinando cursos y trabajo. Lo importante es encontrar el camino que encaja\xA0contigo.",
	rutas: [
		{
			t: "Universidad",
			d: "4 años",
			x: "Grado en Animación"
		},
		{
			t: "FP",
			d: "2 + 2 años",
			x: "Grado medio y después superior de Animación\xA03D"
		},
		{
			t: "Curso, trabajo y especialización",
			d: "1 + 2 + 1 años",
			x: "Un curso, 2 años trabajando y 1 especializándote"
		}
	]
};
//#endregion
//#region src/data/mas-dentro.ts
var masDentro = [
	{
		placeholder: true,
		nombre: "Pol",
		edad: 31,
		profesion: "Arquitectura",
		cita: "Dibujaba casas en los márgenes del cuaderno.",
		duracion: "3 min",
		video: null,
		subtitulos: null,
		foto: prof_arq_default,
		camino: [
			"Empezó Derecho",
			"Arquitectura",
			"Diseña viviendas"
		],
		estudios: "Un año de Derecho y después Arquitectura",
		primerTrabajo: "Delineante en un estudio pequeño",
		martes: "Visita una obra por la mañana, revisa planos con el aparejador y por la tarde ajusta el proyecto con el cliente.",
		alt: "Pol, sentado en su mesa de trabajo, sonriendo."
	},
	{
		placeholder: true,
		nombre: "Jordi",
		edad: 29,
		profesion: "Cocina",
		cita: "Empecé fregando platos y no he salido de la cocina.",
		duracion: "2 min",
		video: null,
		subtitulos: null,
		foto: prof_coc_default,
		camino: [
			"Empezó Turismo",
			"Hostelería",
			"Jefe de partida"
		],
		estudios: "Dos años de Turismo y después un ciclo de cocina",
		primerTrabajo: "Ayudante de cocina en un restaurante de barrio",
		martes: "Prepara el mise en place a primera hora, cocina el servicio de mediodía y por la tarde planea el menú de la semana.",
		alt: "Jordi, cortando verduras en la cocina de un restaurante."
	},
	{
		placeholder: true,
		nombre: "Raúl",
		edad: 26,
		profesion: "Desarrollo de software",
		cita: "Aprendí a programar de noche, con vídeos.",
		duracion: "2 min",
		video: null,
		subtitulos: null,
		foto: prof_dev_default,
		camino: [
			"Empezó Económicas",
			"Bootcamp",
			"Desarrolla apps"
		],
		estudios: "Un año de Económicas y un bootcamp de seis meses",
		primerTrabajo: "Desarrollador junior en una consultora",
		martes: "Revisa el código del equipo, arregla errores que le han llegado y por la tarde construye una pantalla nueva.",
		alt: "Raúl, con gafas y la mano en la barbilla, concentrado delante del ordenador."
	},
	{
		placeholder: true,
		nombre: "Samir",
		edad: 35,
		profesion: "Electricidad",
		cita: "Quería trabajar con las manos y que se notara.",
		duracion: "3 min",
		video: null,
		subtitulos: null,
		foto: prof_ele_default,
		camino: [
			"Empezó Bachillerato",
			"FP de Electricidad",
			"Instalador autónomo"
		],
		estudios: "Un ciclo de FP de Instalaciones eléctricas",
		primerTrabajo: "Ayudante de un electricista veterano",
		martes: "Visita dos casas por la mañana, monta un cuadro eléctrico y por la tarde pasa presupuestos.",
		alt: "Samir, con casco blanco, sonriendo a cámara."
	},
	{
		placeholder: true,
		nombre: "Nerea",
		edad: 30,
		profesion: "Fisioterapia",
		cita: "Una lesión mía me cambió la carrera.",
		duracion: "2 min",
		video: null,
		subtitulos: null,
		foto: prof_fis_default,
		camino: [
			"Empezó Biología",
			"Fisioterapia",
			"Clínica propia"
		],
		estudios: "Dos años de Biología y después el grado de Fisioterapia",
		primerTrabajo: "Fisioterapeuta en un gimnasio",
		martes: "Atiende a siete pacientes en la clínica, prepara ejercicios personalizados y por la tarde da una clase de movilidad.",
		alt: "Nerea, sonriendo y mirando hacia un lado."
	},
	{
		placeholder: true,
		nombre: "Carla",
		edad: 28,
		profesion: "Fotografía",
		cita: "Empecé retratando a mis amigas con el móvil.",
		duracion: "2 min",
		video: null,
		subtitulos: null,
		foto: prof_fot_default,
		camino: [
			"Empezó Publicidad",
			"Fotografía",
			"Fotógrafa freelance"
		],
		estudios: "Publicidad y un curso intensivo de fotografía",
		primerTrabajo: "Ayudante en un estudio de moda",
		martes: "Hace una sesión por la mañana, edita las fotos al mediodía y por la tarde responde presupuestos.",
		alt: "Carla, sentada en unas escaleras con la cámara."
	},
	{
		placeholder: true,
		nombre: "Irene",
		edad: 33,
		profesion: "Periodismo",
		cita: "Quería contar lo que nadie estaba contando.",
		duracion: "3 min",
		video: null,
		subtitulos: null,
		foto: prof_per_default,
		camino: [
			"Empezó Filología",
			"Periodismo",
			"Reportera de radio"
		],
		estudios: "Dos años de Filología y después Periodismo",
		primerTrabajo: "Becaria en la redacción de un periódico local",
		martes: "Va a la reunión de la mañana, sale a grabar una entrevista y por la tarde escribe y monta la pieza.",
		alt: "Irene, de pie con los brazos cruzados, sobre fondo blanco."
	},
	{
		placeholder: true,
		nombre: "Mar",
		edad: 37,
		profesion: "Enfermería",
		cita: "Pasé de querer ser médica a querer cuidar.",
		duracion: "2 min",
		video: null,
		subtitulos: null,
		foto: prof_enf_default,
		camino: [
			"Empezó Medicina",
			"Enfermería",
			"Urgencias"
		],
		estudios: "Un año de Medicina y después el grado de Enfermería",
		primerTrabajo: "Enfermera en planta de un hospital",
		martes: "Entra al turno de mañana, pasa visita con el equipo y atiende a los pacientes que llegan a urgencias.",
		alt: "Mar, con uniforme azul, sentada en un taburete."
	}
];
//#endregion
//#region src/assets/muestra/laia-v3-video.jpg
var laia_v3_video_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/laia-v3-video.Bo4LOdW7.jpg",
	"width": 682,
	"height": 853,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia-v3-video.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia-v3-video.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia-v3-video.jpg");
	}
	return target[name];
} });
//#endregion
export { uniNoUnicoLima as a, queEsLima as i, masDentro as n, unicoLima as o, comoAppLima as r, laia_v3_video_default as t };
