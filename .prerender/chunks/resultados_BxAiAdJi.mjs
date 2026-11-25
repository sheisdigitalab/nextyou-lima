import { a as createComponent, n as CTA_PRINCIPAL, o as __exportAll, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { t as $$V5 } from "./V5_Dxz31m6R.mjs";
import { r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { n as noa_default, t as aitana_default } from "./aitana_DOl7QgDr.mjs";
import { t as laia_default } from "./laia_BGPabz0x.mjs";
import { i as losDeDentro } from "./home_AzZ1C02B.mjs";
import { t as coach_4_default } from "./coach-4_JoOuWTHs.mjs";
import { n as masDentro, r as comoAppLima, t as laia_v3_video_default } from "./laia-v3-video_C_8BrGYS.mjs";
//#region src/components/ClipsProfesionales.astro
createAstro("https://sheisdigitalab.github.io");
var $$ClipsProfesionales = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClipsProfesionales;
	const { clips, grupo } = Astro.props;
	const lista = await Promise.all(clips.map(async (p) => ({
		...p,
		camino: Array.isArray(p.camino) ? p.camino.map((c) => c.replace("Estudió Turismo", "Empezó Turismo")) : p.camino,
		martes: typeof p.martes === "string" ? p.martes.replace("el recorrido de un servicio", "el camino de un servicio") : p.martes,
		grande: (await getImage({
			src: p.foto,
			width: 900,
			format: "webp"
		})).src
	})));
	return renderTemplate`${maybeRenderHead($$result)}<ul class="clips" role="list" aria-label="Vídeos de profesionales"${addAttribute(grupo, "data-clips")} tabindex="0">${lista.map((p, i) => renderTemplate`<li class="clip" data-placeholder="true">${renderComponent($$result, "Image", $$Image, {
		"src": p.foto,
		"alt": p.alt,
		"width": 540,
		"height": 810,
		"loading": "lazy",
		"quality": 70,
		"class": "clip__foto"
	})}<div class="clip__pie"><p class="clip__nombre">${p.nombre}, ${p.edad}</p><p class="clip__camino">${p.camino.join(" → ")}</p></div><span class="clip__ver"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>${p.duracion}</span><button type="button" class="clip__abrir" data-visor-abrir${addAttribute(grupo, "data-grupo")} aria-haspopup="dialog"${addAttribute(`Ver el vídeo de ${p.nombre}, ${p.profesion}, ${p.duracion}`, "aria-label")}${addAttribute(`${p.nombre}, ${p.edad}`, "data-nombre")}${addAttribute(p.profesion, "data-profesion")}${addAttribute(p.cita, "data-cita")}${addAttribute(p.duracion, "data-duracion")}${addAttribute(p.grande, "data-img")}${addAttribute(p.video ?? "", "data-video")}${addAttribute(p.subtitulos ?? "", "data-subtitulos")}${addAttribute(i, "data-indice")}${addAttribute(p.camino.join("|"), "data-camino")}${addAttribute(p.estudios, "data-estudios")}${addAttribute(p.primerTrabajo, "data-trabajo")}${addAttribute(p.martes, "data-martes")}></button></li>`)}</ul>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/ClipsProfesionales.astro", void 0);
//#endregion
//#region src/components/VisorClips.astro
var $$VisorClips = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<dialog class="visor" aria-labelledby="visor-nombre"><div class="visor__caja"><button type="button" class="visor__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><div class="visor__media"><img class="visor__img" alt=""><video class="visor__video" controls playsinline preload="metadata" hidden></video><p class="visor__aviso">Aquí irá el vídeo · <span data-visor="duracion"></span></p></div><div class="visor__texto"><p id="visor-nombre" class="visor__nombre" data-visor="nombre"></p><span class="etiqueta-marco" data-visor="profesion"></span><p class="visor__cita">«<span data-visor="cita"></span>»</p><div class="visor__ficha" data-visor="ficha"><ol class="visor__camino" data-visor="camino" aria-label="Su camino"></ol><dl class="visor__datos"><div><dt>Qué estudió</dt><dd data-visor="estudios"></dd></div><div><dt>Su primer trabajo</dt><dd data-visor="trabajo"></dd></div><div><dt>Cómo es un martes</dt><dd data-visor="martes"></dd></div></dl></div><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton visor__cta">¿Te ves aquí? Haz el test</a><div class="visor__nav" data-visor="nav"><button type="button" class="flecha" data-visor-mover="-1" aria-label="Profesional anterior">←</button><span class="visor__cuenta" aria-live="polite"><span data-visor="actual"></span> / <span data-visor="total"></span></span><button type="button" class="flecha" data-visor-mover="1" aria-label="Siguiente profesional">→</button></div></div></div></dialog>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/components/VisorClips.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/VisorClips.astro", void 0);
//#endregion
//#region src/data/resultados.ts
var caminos = [
	{
		id: "contenido",
		tipo: "El que más te pega",
		definicion: "El que mejor encaja con cómo eres.",
		nombre: "Creación de contenido",
		foto: noa_default,
		chips: [
			"Creatividad",
			"Comunicación",
			"Redes"
		],
		que: "Conviertes una idea en algo que la gente quiere ver hasta el final: un vídeo, un post, una historia. La mayor parte del trabajo es para marcas, que te piden contar lo que hacen de forma que enganche y no parezca un anuncio.",
		trabajo: "Creador/a de contenido, editor/a de vídeo, community manager o social media manager. Al principio sueles hacer un poco de todo; con el tiempo te especializas en lo que mejor se te da: grabar, editar o planificar.",
		dia: "Por la mañana grabas tres vídeos cortos para una marca. Por la tarde los editas y miras los datos de la semana pasada: qué se vio hasta el final y qué no. De ahí sale lo que harás la semana que viene. Gran parte del oficio es probar, medir y corregir.",
		porque: "Dijiste que te gusta crear y contar cosas a los demás. Aquí lo haces cada día, y además aprendes algo que sirve en cualquier trabajo: explicar una idea para que llegue.",
		dato: "En España hay más de 15.000 creadores con más de 100.000 seguidores, y el número crece cada año. Pero la mayoría de quienes viven de esto no son famosos: trabajan creando contenido para marcas.",
		fuente: "Fuente: estudio citado por Puro Marketing. Datos de referencia en España.",
		formacionTitulo: "Qué necesitas saber",
		formacion: "Grabar y editar vídeo, escribir textos cortos que enganchen y entender los números: qué funciona y por qué. Las empresas no te piden un título concreto. Te piden ver lo que ya has hecho."
	},
	{
		id: "animacion",
		tipo: "El puente",
		definicion: "Cerca de algo que ya te gusta.",
		nombre: "Animación 3D",
		foto: laia_default,
		chips: [
			"Dibujo",
			"Tecnología",
			"En equipo"
		],
		que: "Das vida a personajes y objetos en 3D: cómo andan, cómo saltan, cómo ponen cara de sorpresa. El reto no es que se muevan, sino que te creas lo que sienten. Se usa en videojuegos, películas, series y anuncios, pero también para explicar cómo funciona un edificio o el cuerpo humano.",
		trabajo: "Animador/a 3D. En los estudios el trabajo se reparte: el modelador/a crea los personajes, el rigger les pone «huesos» para que se puedan mover y el animador/a les da movimiento. Puedes empezar en uno y pasar a otro.",
		dia: "Te dan una escena de cinco segundos y la trabajas fotograma a fotograma hasta que el salto parezca de verdad. A veces te grabas con el móvil haciendo el gesto para copiarlo. Luego tu equipo la revisa, te dicen qué cambiar y vuelves a empezar. Pide paciencia, pero ver la escena acabada compensa.",
		porque: "Dijiste que te gusta dibujar y también la tecnología. La animación 3D junta las dos cosas, y premia algo que quizá ya haces sin darte cuenta: fijarte en cómo se mueven las personas y los animales.",
		dato: "El videojuego en España da trabajo directo a más de 10.000 personas, y se espera que lleguen a unos 12.750 en 2027. Y no solo hay videojuegos: la animación se usa también en cine, publicidad, arquitectura y medicina.",
		fuente: "Fuente: Libro Blanco del Desarrollo Español de Videojuegos (DEV). Datos de referencia en España.",
		formacionTitulo: "Qué necesitas saber",
		formacion: "Dibujar y entender cómo se mueven las cosas (el peso, el equilibrio, el ritmo), y manejar programas 3D. En este sector tu portfolio pesa tanto como el título: lo que importa es lo que eres capaz de hacer."
	},
	{
		id: "ciberseguridad",
		tipo: "El salto",
		definicion: "Uno que quizá no te habías planteado.",
		nombre: "Ciberseguridad",
		foto: aitana_default,
		chips: [
			"Lógica",
			"Retos",
			"Tecnología"
		],
		que: "Proteges los ordenadores, las redes y los datos de empresas y personas. Hay dos lados: el que ataca con permiso para encontrar los fallos antes que nadie y el que vigila y defiende para pararlos a tiempo. Los dos hacen falta.",
		trabajo: "Hacker ético (pentester) si te gusta atacar con permiso; analista de seguridad si prefieres vigilar y defender; auditor/a si te va más revisar que una empresa cumple las normas. Mucha gente empieza en sistemas o redes y se especializa después.",
		dia: "Unos días intentas entrar en el sistema de una empresa, con su permiso, para encontrar sus puntos débiles. Otros revisas alertas y decides cuáles son un ataque de verdad y cuáles una falsa alarma. Al final lo explicas en un informe que entienda alguien que no es técnico, para que lo puedan arreglar.",
		porque: "Dijiste que te gusta resolver retos y la tecnología. Aquí cada fallo es un reto nuevo, y como la tecnología cambia tan rápido, nunca dejas de aprender.",
		dato: "Es una de las profesiones donde más gente falta: el INCIBE estimó que en 2024 harían falta más de 83.000 profesionales, el doble de los que había formados.",
		fuente: "Fuente: INCIBE.",
		formacionTitulo: "Qué necesitas saber",
		formacion: "Cómo funcionan los ordenadores y las redes, y después cómo se protegen y cómo se atacan (siempre de forma legal). Se aprende practicando: hay webs gratuitas con retos para empezar desde cero."
	}
];
var perfil = {
	eti: "Así eres, según tus respuestas",
	rasgos: [
		{
			icono: "crear",
			titulo: "Te mueve crear",
			texto: "Disfrutas haciendo cosas que antes no existían."
		},
		{
			icono: "contar",
			titulo: "Te gusta contar cosas",
			texto: "Explicar, mostrar y compartir te sale natural."
		},
		{
			icono: "retos",
			titulo: "Te motivan los retos",
			texto: "Cuando algo es difícil, te pica la curiosidad."
		}
	]
};
var acompanamiento = {
	foto: coach_4_default,
	eti: "Acompañamiento opcional de pago",
	firma: "Coach profesional · Sesiones 1 a 1 por videollamada",
	titulo: {
		antes: "¿Aún dudas entre tus ",
		enfasis: "3 caminos",
		despues: "?"
	},
	intro: "Un coach los repasa contigo, uno a uno, hasta que sepas cuál probar primero.",
	tuCoach: "Tu coach",
	plan: {
		titulo: "Tu plan",
		texto: "Qué estudiar y por dónde empezar"
	},
	chips: [
		"Online",
		"Por videollamada",
		"1 a 1"
	],
	cta: "Ver los planes",
	nota: "Opcional · El test y tus 3 caminos son gratis."
};
//#endregion
//#region src/data/clips-resultados.ts
var laia = {
	placeholder: true,
	nombre: "Laia",
	edad: 29,
	profesion: "Animación 3D",
	cita: "Empecé en un estudio pequeño, animando un segundo cada día.",
	duracion: "3 min",
	video: null,
	subtitulos: null,
	foto: laia_v3_video_default,
	camino: [
		"Curso de animación 3D",
		"Estudio pequeño",
		"Anima personajes"
	],
	estudios: "Un curso de animación 3D",
	primerTrabajo: "Animadora en un estudio pequeño",
	martes: "Revisa con el equipo la escena del día, anima un personaje plano a plano y al final la enseña para recibir comentarios.",
	alt: "Laia, animadora 3D, contando cómo empezó."
};
var todos = [
	...losDeDentro.personas,
	...masDentro,
	laia
];
var por = (nombre) => {
	const p = todos.find((x) => x.nombre === nombre);
	if (!p) throw new Error(`Falta el profesional ${nombre}`);
	return p;
};
var clipsPorCamino = {
	contenido: [
		por("Carla"),
		por("Irene"),
		por("Mía")
	],
	animacion: [
		por("Laia"),
		por("Dani"),
		por("Marta")
	],
	ciberseguridad: [por("Iván"), por("Raúl")]
};
//#endregion
//#region src/data/como-llegar-v2.ts
var NOTA_CORTE_V2 = {
	b: "Nota de corte:",
	t: "la del último que entró el año pasado, sobre 14."
};
var PIE_V2 = "Datos del curso 2026-27. Cambian cada año: confírmalos en la web del centro.";
var comoLlegarV2 = {
	contenido: {
		avisoOtra: "Todavía no tenemos los centros de tu comunidad. Los caminos son los mismos: elige otra comunidad para ver qué se estudia, qué nota piden y cuánto cuesta, y busca los centros cercanos en la web de educación de tu comunidad.",
		vias: [
			{
				"titulo": "Universidad",
				"oficial": "Grado en Comunicación Audiovisual",
				"duracion": "4 años",
				"barra": 100,
				"icono": "uni",
				"que": "Estudias cómo se cuentan historias en vídeo, cine, televisión y redes, con mucha práctica de grabación y edición.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Guion y cómo contar una historia",
						"Cámara, luz y sonido",
						"Realización y montaje de vídeo",
						"Producción: presupuestos y equipos",
						"Comunicación en redes y medios"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Realizador/a o ayudante de dirección",
						"Guionista",
						"Productor/a",
						"Montaje y postproducción",
						"Responsable de vídeo o contenido en una marca"
					]
				}],
				"porComunidad": {
					"cat": {
						"resumen": "Desde 1.060 €/año · nota 5–11,7 de 14",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "Entre 5 y 11,7 sobre 14",
								"nota": "En Barcelona piden nota alta"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Unos 1.060 € al año",
								"nota": "En universidad pública",
								"total": "En total, unos 4.240 € en pública"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en Cataluña",
						"centros": [
							{
								"nombre": "Universitat Pompeu Fabra (UPF)",
								"lugar": "Barcelona",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 11,7",
										"k": "dat"
									},
									{
										"t": "1.060 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universitat de Barcelona (UB)",
								"lugar": "Barcelona",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 11,1",
										"k": "dat"
									},
									{
										"t": "1.060 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universitat Autònoma (UAB)",
								"lugar": "Bellaterra",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 10,9",
										"k": "dat"
									},
									{
										"t": "1.060 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universitat Rovira i Virgili (URV)",
								"lugar": "Tarragona",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 9,7",
										"k": "dat"
									},
									{
										"t": "1.060 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universitat de Lleida (UdL)",
								"lugar": "Lleida",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 6,7",
										"k": "dat"
									},
									{
										"t": "1.060 €/año",
										"k": "dat"
									}
								],
								"sub": "Se llama Comunicación y Periodismo Audiovisuales"
							},
							{
								"nombre": "ERAM (vinculada a la UdG)",
								"lugar": "Salt (Girona)",
								"etiquetas": [
									{ "t": "Privada" },
									{
										"t": "Nota 5",
										"k": "dat"
									},
									{
										"t": "Pregunta el precio",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "UVic-UCC",
								"lugar": "Vic",
								"etiquetas": [
									{ "t": "Privada" },
									{
										"t": "Nota 5",
										"k": "dat"
									},
									{
										"t": "Pregunta el precio",
										"k": "dat"
									}
								]
							}
						],
						"bueno": "En Barcelona las públicas piden mucha nota. Fuera de Barcelona (Tarragona, Lleida) es más fácil entrar y el precio es el mismo."
					},
					"mad": {
						"resumen": "Desde 1.170 €/año · nota 8–10,2 de 14",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "Entre 8 y 10,2 sobre 14",
								"nota": "Depende del centro"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Unos 1.170 € al año",
								"nota": "En universidad pública",
								"total": "En total, unos 4.680 € en pública"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en Madrid",
						"centros": [
							{
								"nombre": "Universidad Carlos III (UC3M)",
								"lugar": "Getafe",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 10,2",
										"k": "dat"
									},
									{
										"t": "1.170 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universidad Complutense (UCM)",
								"lugar": "Madrid",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 9,6",
										"k": "dat"
									},
									{
										"t": "1.170 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universidad Rey Juan Carlos (URJC)",
								"lugar": "Fuenlabrada o Vicálvaro",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 8",
										"k": "dat"
									},
									{
										"t": "1.170 €/año",
										"k": "dat"
									}
								]
							}
						],
						"bueno": "La URJC pide bastante menos nota que la Carlos III o la Complutense, y el precio es el mismo."
					},
					"val": {
						"resumen": "Menos de 1.100 €/año · nota 9,3–10,3 de 14",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "Entre 9,3 y 10,3 sobre 14",
								"nota": "Depende del centro"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Menos de 1.100 € al año",
								"nota": "En universidad pública",
								"total": "En total, menos de 4.400 € en pública"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en C. Valenciana",
						"centros": [
							{
								"nombre": "Universitat de València",
								"lugar": "Valencia",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "Nota 10,3",
									"k": "dat"
								}]
							},
							{
								"nombre": "Universitat Jaume I",
								"lugar": "Castellón",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "Nota 9,4",
									"k": "dat"
								}]
							},
							{
								"nombre": "Universitat Politècnica (UPV)",
								"lugar": "Gandia",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "Nota 9,3",
									"k": "dat"
								}]
							}
						],
						"bueno": "Si apruebas todo el primer año, la Generalitat puede pagarte la matrícula de primero (programa «Impulso universitario»)."
					},
					"and": {
						"resumen": "Desde 760 €/año · nota 8,1–8,6 de 14",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "Entre 8,1 y 8,6 sobre 14",
								"nota": "En universidad pública"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Unos 760 € al año",
								"nota": "En universidad pública",
								"total": "En total, unos 3.040 € en pública (menos con la bonificación)"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en Andalucía",
						"centros": [
							{
								"nombre": "Universidad de Sevilla",
								"lugar": "Sevilla",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 8,6",
										"k": "dat"
									},
									{
										"t": "760 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universidad de Málaga",
								"lugar": "Málaga",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 8,1",
										"k": "dat"
									},
									{
										"t": "760 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "EUSA (vinculada a la U. de Sevilla)",
								"lugar": "Sevilla",
								"etiquetas": [
									{ "t": "Privada" },
									{
										"t": "Nota 5,7",
										"k": "dat"
									},
									{
										"t": "Pregunta el precio",
										"k": "dat"
									}
								]
							}
						],
						"bueno": "En Andalucía, a partir de segundo la Junta te paga el 99 % de las asignaturas que hayas aprobado."
					}
				}
			},
			{
				"titulo": "FP Audiovisual",
				"oficial": "Realización de Proyectos Audiovisuales y Espectáculos",
				"duracion": "2 años",
				"barra": 50,
				"icono": "fp",
				"que": "Muy práctica: aprendes a grabar, montar y realizar vídeos y programas, con prácticas en una productora o televisión.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Cámaras, luz y sonido",
						"Planificar un rodaje de cine o vídeo",
						"Realizar programas de televisión",
						"Montaje y postproducción",
						"Regiduría: coordinar el escenario en espectáculos y eventos",
						"Prácticas en una productora o televisión"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Ayudante de realización en vídeo o televisión",
						"Editor/a y montador/a de vídeo",
						"Ayudante de dirección en cine",
						"Regidor/a: coordina lo que pasa en escena",
						"En televisiones, productoras y teatros"
					]
				}],
				"porComunidad": {
					"cat": {
						"resumen": "360 €/año · plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "360 € al año",
								"nota": "En instituto público",
								"total": "En total, unos 720 € en instituto público"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "preinscripción a finales de mayo (en 2026, del 26 de mayo al 1 de junio)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Cataluña",
						"centros": [
							{
								"nombre": "Institut Mitjans Audiovisuals",
								"lugar": "Barcelona",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "Tarde",
									"k": "dat"
								}]
							},
							{
								"nombre": "Institut Mare de Déu de la Mercè",
								"lugar": "Barcelona",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "Tarde",
									"k": "dat"
								}]
							},
							{
								"nombre": "Institut de Tècniques Audiovisuals i de l'Espectacle (ITAEB)",
								"lugar": "Barcelona",
								"etiquetas": []
							},
							{
								"nombre": "Institut Santa Eulàlia",
								"lugar": "Terrassa",
								"etiquetas": []
							},
							{
								"nombre": "Institut Pere Martell",
								"lugar": "Tarragona",
								"etiquetas": []
							},
							{
								"nombre": "Institut de l'Ebre",
								"lugar": "Tortosa",
								"etiquetas": []
							}
						],
						"bueno": "Si sois familia numerosa o tienes beca, pagas la mitad o nada."
					},
					"mad": {
						"resumen": "400 €/año · plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "400 € al año",
								"nota": "Gratis con media de 9 o más · mitad con 7 a 8,9",
								"total": "En total, unos 800 € en instituto público"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "normalmente entre finales de junio y principios de julio."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Madrid",
						"centros": [
							{
								"nombre": "CIFP José Luis Garci",
								"lugar": "Alcobendas",
								"etiquetas": []
							},
							{
								"nombre": "IES Puerta Bonita",
								"lugar": "Madrid",
								"etiquetas": []
							},
							{
								"nombre": "IES Carlos María Rodríguez de Valcárcel",
								"lugar": "Madrid",
								"etiquetas": []
							},
							{
								"nombre": "IES La Arboleda",
								"lugar": "Alcorcón",
								"etiquetas": []
							},
							{
								"nombre": "IES Luis Buñuel",
								"lugar": "Móstoles",
								"etiquetas": []
							},
							{
								"nombre": "IES Siglo XXI",
								"lugar": "Leganés",
								"etiquetas": [{
									"t": "Tarde",
									"k": "dat"
								}]
							}
						],
						"bueno": "En Madrid, si sacas buena nota media, la matrícula te sale gratis o a mitad de precio."
					},
					"val": {
						"resumen": "Plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Pregunta en el instituto",
								"nota": "Te lo confirman al hacer la matrícula"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "a finales de mayo (en 2026, del 20 al 28 de mayo)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en C. Valenciana",
						"centros": [
							{
								"nombre": "IES Luis García Berlanga",
								"lugar": "Sant Joan d'Alacant",
								"etiquetas": []
							},
							{
								"nombre": "IES Veles e Vents",
								"lugar": "Gandia",
								"etiquetas": []
							},
							{
								"nombre": "IES Henri Matisse",
								"lugar": "Paterna",
								"etiquetas": []
							},
							{
								"nombre": "IES Vila-roja",
								"lugar": "Almassora (Castellón)",
								"etiquetas": []
							}
						],
						"bueno": "Si sois familia numerosa general pagas la mitad de las tasas; si es especial, nada."
					},
					"and": {
						"resumen": "Plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Pregunta en el instituto",
								"nota": "Te lo confirman al hacer la matrícula"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "en la segunda quincena de junio (en 2026, del 15 al 30 de junio)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Andalucía",
						"centros": [
							{
								"nombre": "IES Néstor Almendros",
								"lugar": "Tomares (Sevilla)",
								"etiquetas": []
							},
							{
								"nombre": "IES Ángel de Saavedra",
								"lugar": "Córdoba",
								"etiquetas": []
							},
							{
								"nombre": "IES La Granja",
								"lugar": "Jerez de la Frontera",
								"etiquetas": []
							},
							{
								"nombre": "IES Albaida",
								"lugar": "Almería",
								"etiquetas": []
							}
						],
						"bueno": "Puedes buscar más centros por provincia en la web de FP de la Junta de Andalucía."
					}
				}
			},
			{
				"titulo": "FP Marketing",
				"oficial": "Marketing y Publicidad",
				"duracion": "2 años",
				"barra": 50,
				"icono": "fp",
				"que": "Aprendes a planificar campañas y contenido para marcas, en redes y en otros medios. Incluye prácticas en empresa.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Marketing digital y redes",
						"Diseñar material de comunicación",
						"Lanzar productos y servicios",
						"Estudios de mercado: saber qué quiere la gente",
						"Relaciones públicas y eventos",
						"Prácticas en empresa"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Técnico/a de marketing o publicidad",
						"Community manager",
						"Redactor/a de contenidos digitales",
						"Planificar dónde se anuncia una marca (medios)",
						"Organización de eventos"
					]
				}],
				"porComunidad": {
					"cat": {
						"resumen": "360 €/año · plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "360 € al año",
								"nota": "En instituto público",
								"total": "En total, unos 720 € en instituto público"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "preinscripción a finales de mayo (en 2026, del 26 de mayo al 1 de junio)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Cataluña",
						"centros": [
							{
								"nombre": "Institut Provençana",
								"lugar": "L'Hospitalet de Llobregat",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}]
							},
							{
								"nombre": "Institut Agustí Serra i Fontanet",
								"lugar": "Sabadell",
								"etiquetas": [{
									"t": "Tarde",
									"k": "dat"
								}]
							},
							{
								"nombre": "Institut Torre Roja",
								"lugar": "Viladecans",
								"etiquetas": [{
									"t": "Tarde",
									"k": "dat"
								}]
							}
						],
						"bueno": "Si sois familia numerosa o tienes beca, pagas la mitad o nada."
					},
					"mad": {
						"resumen": "400 €/año · plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "400 € al año",
								"nota": "Gratis con media de 9 o más · mitad con 7 a 8,9",
								"total": "En total, unos 800 € en instituto público"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "normalmente entre finales de junio y principios de julio."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Madrid",
						"centros": [
							{
								"nombre": "IES Clara del Rey",
								"lugar": "Madrid",
								"etiquetas": []
							},
							{
								"nombre": "IES Palomeras Vallecas",
								"lugar": "Madrid",
								"etiquetas": []
							},
							{
								"nombre": "IES Luis Buñuel",
								"lugar": "Alcorcón",
								"etiquetas": []
							},
							{
								"nombre": "IES Joan Miró",
								"lugar": "San Sebastián de los Reyes",
								"etiquetas": []
							}
						],
						"bueno": "En Madrid, si sacas buena nota media, la matrícula te sale gratis o a mitad de precio."
					},
					"val": {
						"resumen": "Plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Pregunta en el instituto",
								"nota": "Te lo confirman al hacer la matrícula"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "a finales de mayo (en 2026, del 20 al 28 de mayo)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en C. Valenciana",
						"centros": [{
							"nombre": "IES Francisco Figueras Pacheco",
							"lugar": "Alicante",
							"etiquetas": [{
								"t": "Pública",
								"k": "pub"
							}]
						}, {
							"nombre": "IES Historiador Chabàs",
							"lugar": "Dénia",
							"etiquetas": [{
								"t": "Pública",
								"k": "pub"
							}]
						}],
						"bueno": "Si sois familia numerosa general pagas la mitad de las tasas; si es especial, nada."
					},
					"and": {
						"resumen": "Plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Pregunta en el instituto",
								"nota": "Te lo confirman al hacer la matrícula"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "en la segunda quincena de junio (en 2026, del 15 al 30 de junio)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Andalucía",
						"centros": [
							{
								"nombre": "IES Miguel Romero Esteo",
								"lugar": "Málaga",
								"etiquetas": []
							},
							{
								"nombre": "IES Luis de Góngora",
								"lugar": "Córdoba",
								"etiquetas": []
							},
							{
								"nombre": "IES Manuel de Falla",
								"lugar": "Puerto Real (Cádiz)",
								"etiquetas": []
							},
							{
								"nombre": "IES Las Salinas",
								"lugar": "San Fernando (Cádiz)",
								"etiquetas": []
							}
						],
						"bueno": "Puedes buscar más centros por provincia en la web de FP de la Junta de Andalucía."
					}
				}
			},
			{
				"titulo": "Cursos",
				"oficial": "Cursos de vídeo y redes",
				"duracion": "Unos meses",
				"barra": 12,
				"icono": "curso",
				"que": "Cursos cortos de edición de vídeo, redes sociales o marketing digital. Sirven para empezar rápido o para completar otros estudios.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Edición de vídeo (CapCut, Premiere, DaVinci)",
						"Estrategia de contenido para redes",
						"Fotografía y vídeo con el móvil",
						"Leer las estadísticas para mejorar"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Edición de vídeo como freelance",
						"Redes de pequeños negocios",
						"Ayudante en una agencia o productora"
					]
				}],
				"igual": {
					"resumen": "Sin nota de corte · muchos son online",
					"qa": [
						{
							"t": "Qué necesitas",
							"valor": "Nada concreto",
							"nota": "Ganas y un ordenador o móvil para practicar"
						},
						{
							"t": "Nota para entrar",
							"valor": "No hay"
						},
						{
							"t": "Cuánto cuesta",
							"valor": "Depende del curso",
							"nota": "Hay opciones gratis y de pago"
						}
					],
					"cuando": [{
						"b": "Cuándo te apuntas:",
						"t": "cuando quieras. La mayoría empiezan varias veces al año."
					}],
					"bueno": "Elige cursos con proyectos prácticos: lo que más valoran las empresas es ver lo que sabes hacer. Ojo: un curso no da título oficial."
				}
			},
			{
				"titulo": "Por tu cuenta",
				"oficial": "Abre un canal y aprende publicando",
				"duracion": "A tu ritmo",
				"barra": null,
				"icono": "solo",
				"que": "Aprendes creando y publicando tu propio contenido. Es como empieza mucha gente: no necesitas título, pero sí trabajo constante, y tu canal hace de portfolio.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Grabar, iluminar y editar",
						"Escribir guiones y enganchar en los primeros segundos",
						"Saber qué funciona mirando tus estadísticas",
						"Publicar con constancia y un calendario",
						"Tratar con marcas y cuidar tu privacidad"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Tu propio canal, con ingresos de marcas o de la plataforma",
						"Edición o redes para otros creadores o negocios",
						"Tu canal te sirve de portfolio para entrar en una agencia"
					]
				}],
				"igual": {
					"resumen": "Sin nota de corte · gratis para empezar",
					"qa": [
						{
							"t": "Qué necesitas",
							"valor": "Móvil u ordenador, un tema y constancia",
							"nota": "Se puede editar en el móvil, pero para vídeos largos o más cuidados va mejor un ordenador. Si creces: micro y luz"
						},
						{
							"t": "Nota para entrar",
							"valor": "No hay",
							"nota": "Pero sí edad: en las plataformas, para cobrar siendo menor necesitas a tu madre, padre o tutor"
						},
						{
							"t": "Cuánto cuesta",
							"valor": "Puedes empezar gratis",
							"nota": "El equipo lo vas comprando a medida que lo necesitas"
						}
					],
					"cuando": [],
					"bueno": "Pocas personas viven solo de su canal, y cuando pasa suele tardar años. Funciona mejor si lo combinas con un curso o una FP: te da método, contactos y un plan B."
				}
			}
		]
	},
	animacion: {
		avisoOtra: "Todavía no tenemos centros y precios de tu comunidad. Mientras, puedes mirar otra para hacerte una idea.",
		vias: [
			{
				"titulo": "Universidad",
				"oficial": "Grado en Animación o en Videojuegos",
				"duracion": "4 años",
				"barra": 100,
				"icono": "uni",
				"que": "Estudias la parte artística y la técnica a fondo. Es el camino más largo, pero el que más puertas abre si quieres trabajar en un estudio grande.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Dibujo y diseño de personajes",
						"Modelado y animación 3D",
						"Programación de videojuegos (según el grado)",
						"Narrativa y guion",
						"Proyecto final con tu propio juego o corto"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Animador/a 3D",
						"Modelador/a 3D",
						"Diseñador/a de videojuegos",
						"Artista técnico/a en un estudio"
					]
				}],
				"porComunidad": {
					"cat": {
						"resumen": "Desde 1.060 €/año · nota 5–7 de 14",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "Entre 5 y 7 sobre 14",
								"nota": "Depende del centro"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Unos 1.060 € al año",
								"nota": "En universidad pública",
								"total": "En total, unos 4.240 € en pública (27.600 € en el CITM)"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en Cataluña",
						"centros": [{
							"nombre": "Universitat de Girona",
							"lugar": "Girona",
							"etiquetas": [
								{
									"t": "Pública",
									"k": "pub"
								},
								{
									"t": "Nota 7",
									"k": "dat"
								},
								{
									"t": "1.060 €/año",
									"k": "dat"
								}
							]
						}, {
							"nombre": "CITM (vinculado a la UPC)",
							"lugar": "Terrassa o Barcelona",
							"etiquetas": [
								{ "t": "Privada" },
								{
									"t": "Nota 5",
									"k": "dat"
								},
								{
									"t": "6.900 €/año",
									"k": "dat"
								}
							]
						}],
						"bueno": "En la pública, el precio es el mismo en toda Cataluña. El CITM pide menos nota, pero cuesta unas seis veces más."
					},
					"mad": {
						"resumen": "Desde 1.170 €/año · nota 9–9,7 de 14",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "Entre 9 y 9,7 sobre 14",
								"nota": "Piden nota alta"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Unos 1.170 € al año",
								"nota": "En universidad pública",
								"total": "En total, unos 4.680 € en pública"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en Madrid",
						"centros": [
							{
								"nombre": "Universidad Complutense (UCM)",
								"lugar": "Madrid",
								"etiquetas": [
									{
										"t": "Pública",
										"k": "pub"
									},
									{
										"t": "Nota 9,7",
										"k": "dat"
									},
									{
										"t": "1.170 €/año",
										"k": "dat"
									}
								]
							},
							{
								"nombre": "Universidad Rey Juan Carlos (URJC)",
								"lugar": "Madrid o Móstoles",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "Nota 9",
									"k": "dat"
								}]
							},
							{
								"nombre": "U-tad",
								"lugar": "Las Rozas",
								"etiquetas": [
									{ "t": "Privada" },
									{
										"t": "Entrevista",
										"k": "dat"
									},
									{
										"t": "Pregunta el precio",
										"k": "dat"
									}
								]
							}
						],
						"bueno": "Las públicas piden mucha nota. En la privada no hay nota de corte, pero hay entrevista y es bastante más cara."
					},
					"val": {
						"resumen": "Menos de 1.100 €/año · nota 5,9 de 14",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "5,9 sobre 14",
								"nota": "Más fácil de entrar"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Menos de 1.100 € al año",
								"nota": "En universidad pública",
								"total": "En total, menos de 4.400 € en pública"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en C. Valenciana",
						"centros": [{
							"nombre": "Universitat Jaume I",
							"lugar": "Castellón",
							"etiquetas": [{
								"t": "Pública",
								"k": "pub"
							}, {
								"t": "Nota 5,9",
								"k": "dat"
							}]
						}],
						"bueno": "Si apruebas todo el primer año, la Generalitat puede pagarte la matrícula de primero (programa «Impulso universitario»)."
					},
					"and": {
						"resumen": "Solo en universidad privada",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato y selectividad",
								"nota": "O venir de una FP de Grado Superior"
							},
							{
								"t": "Nota para entrar",
								"valor": "Prueba propia",
								"nota": "La universidad privada hace su propia prueba"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Pregunta el precio",
								"nota": "Es universidad privada"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "haces la selectividad en junio y la preinscripción justo después, entre junio y julio."
						}],
						"dondeTitulo": "Dónde, en Andalucía",
						"centros": [{
							"nombre": "Universidad Loyola",
							"lugar": "Sevilla o Córdoba",
							"etiquetas": [{ "t": "Privada" }, {
								"t": "Prueba propia",
								"k": "dat"
							}]
						}],
						"bueno": "En Andalucía este grado solo se puede estudiar en privada. Si prefieres pública, mira otras comunidades o la FP."
					}
				}
			},
			{
				"titulo": "FP de Grado Superior",
				"oficial": "Animaciones 3D, Juegos y Entornos Interactivos",
				"duracion": "2 años",
				"barra": 50,
				"icono": "fp",
				"que": "Muy práctica: aprendes haciendo y pasas varios meses de prácticas en una empresa del sector. Al acabar puedes trabajar o seguir en la universidad.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Dibujo y modelado para animación",
						"Animación 2D y 3D",
						"Color, luz y acabados",
						"Crear juegos y entornos interactivos",
						"Montaje y postproducción",
						"Prácticas en un estudio"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Animador/a 2D y 3D",
						"Modelador/a 3D",
						"Grafista de televisión o vídeo",
						"Desarrollo de entornos interactivos"
					]
				}],
				"porComunidad": {
					"cat": {
						"resumen": "360 €/año · plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "360 € al año",
								"nota": "En instituto público",
								"total": "En total, unos 720 € en instituto público"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "preinscripción a finales de mayo (en 2026, del 26 de mayo al 1 de junio)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Cataluña",
						"centros": [
							{
								"nombre": "Institut Mare de Déu de la Mercè",
								"lugar": "Barcelona",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "360 €/año",
									"k": "dat"
								}]
							},
							{
								"nombre": "Institut Mitjans Audiovisuals",
								"lugar": "Barcelona",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "360 €/año",
									"k": "dat"
								}]
							},
							{
								"nombre": "Institut Pedralbes",
								"lugar": "Barcelona",
								"etiquetas": [{
									"t": "Pública",
									"k": "pub"
								}, {
									"t": "360 €/año",
									"k": "dat"
								}]
							},
							{
								"nombre": "LCI, ENTI y otras escuelas",
								"lugar": "Barcelona y alrededores",
								"etiquetas": [{ "t": "Privada" }, {
									"t": "Pregunta el precio",
									"k": "dat"
								}]
							}
						],
						"bueno": "Si sois familia numerosa o tienes beca, pagas la mitad o nada."
					},
					"mad": {
						"resumen": "400 €/año · plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "400 € al año",
								"nota": "Gratis con media de 9 o más · mitad con 7 a 8,9",
								"total": "En total, unos 800 € en instituto público"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "normalmente entre finales de junio y principios de julio."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Madrid",
						"centros": [{
							"nombre": "IES Puerta Bonita",
							"lugar": "Madrid",
							"etiquetas": [{
								"t": "Pública",
								"k": "pub"
							}]
						}],
						"bueno": "La lista de institutos cambia cada año: consúltala en la web de la Comunidad de Madrid."
					},
					"val": {
						"resumen": "Plazas por nota media",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "Pregunta en el instituto",
								"nota": "Te lo confirman al hacer la matrícula"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "a finales de mayo (en 2026, del 20 al 28 de mayo)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en C. Valenciana",
						"centros": [{
							"nombre": "IES Luis García Berlanga",
							"lugar": "Sant Joan d'Alacant",
							"etiquetas": [{
								"t": "Pública",
								"k": "pub"
							}]
						}],
						"bueno": "Si sois familia numerosa general pagas la mitad de las tasas; si es especial, nada."
					},
					"and": {
						"resumen": "Solo en centros privados",
						"qa": [
							{
								"t": "Qué necesitas",
								"valor": "Bachillerato",
								"nota": "O un Grado Medio antes, o una prueba de acceso"
							},
							{
								"t": "Nota para entrar",
								"valor": "No hay nota de corte fija",
								"nota": "Si hay más solicitudes que plazas, entran las mejores notas medias"
							},
							{
								"t": "Cuánto cuesta",
								"valor": "2.500–5.000 € al año",
								"nota": "En centro privado",
								"total": "En privado, entre 5.000 y 10.000 € en total"
							}
						],
						"cuando": [{
							"b": "Cuándo te apuntas:",
							"t": "en la segunda quincena de junio (en 2026, del 15 al 30 de junio)."
						}, {
							"b": "Y después:",
							"t": "con una FP de Grado Superior puedes entrar en la universidad sin selectividad (cuenta tu nota media del ciclo) y convalidar algunas asignaturas."
						}],
						"dondeTitulo": "Dónde, en Andalucía",
						"centros": [{
							"nombre": "Tartessos",
							"lugar": "Córdoba",
							"etiquetas": [{ "t": "Privada" }, {
								"t": "2.500–5.000 €/año",
								"k": "dat"
							}]
						}, {
							"nombre": "Fundación San Pablo CEU",
							"lugar": "Bormujos (Sevilla)",
							"etiquetas": [{ "t": "Privada" }, {
								"t": "Pregunta el precio",
								"k": "dat"
							}]
						}],
						"bueno": "No hemos encontrado institutos públicos con este ciclo. Pregunta en la web de FP de la Junta de Andalucía."
					}
				}
			},
			{
				"titulo": "Curso y trabajo",
				"oficial": "Un curso, entras en un estudio y te especializas",
				"duracion": "Meses",
				"barra": 12,
				"icono": "curso",
				"que": "Haces un curso de animación (muchos son online), empiezas a trabajar en un estudio pequeño y después te especializas. Aprendes trabajando.",
				"ex": [{
					"h": "Qué aprendes",
					"items": [
						"Un programa de 3D: Blender (gratis) o Maya",
						"Principios de animación: movimiento, peso y ritmo",
						"Modelado y texturas",
						"Hacer tu reel: un vídeo corto con tus mejores trabajos"
					]
				}, {
					"h": "De qué puedes trabajar",
					"items": [
						"Junior en un estudio de animación o videojuegos",
						"Animación para publicidad o redes",
						"Encargos como freelance"
					]
				}],
				"igual": {
					"resumen": "Sin nota de corte · el precio depende del curso",
					"qa": [
						{
							"t": "Qué necesitas",
							"valor": "Un ordenador y muchas horas de práctica",
							"nota": "Los estudios te piden ver lo que sabes hacer"
						},
						{
							"t": "Nota para entrar",
							"valor": "No hay",
							"nota": "Lo que cuenta es tu portfolio"
						},
						{
							"t": "Cuánto cuesta",
							"valor": "Depende del curso",
							"nota": "Hay opciones gratis y de pago"
						}
					],
					"cuando": [],
					"bueno": "Es el camino más rápido para empezar a trabajar, pero no te da un título oficial. Por eso mucha gente estudia después."
				}
			}
		]
	}
};
//#endregion
//#region src/components/ComoLlegarV2.astro
createAstro("https://sheisdigitalab.github.io");
var $$ComoLlegarV2 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ComoLlegarV2;
	const { camino, id, iconos } = Astro.props;
	const COMUNIDADES = [
		"cat",
		"mad",
		"val",
		"and"
	];
	return renderTemplate`${maybeRenderHead($$result)}<div class="cl cl--v2" data-cl><p class="cl__aviso cl__aviso--otra" role="note">${camino.avisoOtra}</p>${camino.vias.map((v, k) => {
		const regiones = v.porComunidad ? COMUNIDADES.map((c) => [c, v.porComunidad[c]]) : [[void 0, v.igual]];
		return renderTemplate`<details${addAttribute(`cl__via cl__via--v2${v.porComunidad ? " cl__via--lugar" : ""}`, "class")}${addAttribute(`cl-${id}`, "name")}${addAttribute(k === 0, "open")}><summary class="cl__sum"><span class="cl__ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(iconos[v.icono])}</svg></span><span class="cl__st"><b class="cl__tit">${v.titulo}</b><span class="cl__of">${v.oficial}</span>${regiones.map(([c, r]) => renderTemplate`<span class="cl__est"${addAttribute(c, "data-est")}><em class="cl__sm">${r.resumen}</em></span>`)}</span><span class="cl__dur">${v.duracion}</span><span class="cl__mas" aria-hidden="true"><span class="cl__mas-v">Ver más</span><span class="cl__mas-c">Cerrar</span><span class="cl__mas-s">+</span></span>${v.barra != null && renderTemplate`<span class="cl__pt" aria-hidden="true"><i${addAttribute(`width: ${v.barra}%`, "style")}></i></span>`}</summary><div class="cl__in"><p class="cl__que">${v.que}</p><div class="cl__qa">${regiones.map(([c, r]) => renderTemplate`<div class="cl__est"${addAttribute(c, "data-est")}>${r.qa.map((t) => renderTemplate`<div class="cl__d"><small>${t.t}</small><b>${t.valor}</b>${t.nota && renderTemplate`<em>${t.nota}</em>`}${t.total && renderTemplate`<strong class="cl__tot">${t.total}</strong>`}</div>`)}</div>`)}</div><div class="cl__ex">${v.ex.map((e) => renderTemplate`<div><h4>${e.h}</h4><ul>${e.items.map((t) => renderTemplate`<li>${t}</li>`)}</ul></div>`)}</div>${regiones.map(([c, r]) => renderTemplate`<div class="cl__est cl__est--lugar cl__est--v2"${addAttribute(c, "data-est")}>${r.cuando.map((w) => renderTemplate`<p class="cl__when"><b>${w.b}</b> ${w.t}</p>`)}${r.centros && renderTemplate`<div class="cl__donde"><h4 class="cl__h4">${r.dondeTitulo}</h4><ul class="cl__centros" role="list">${r.centros.map((z) => renderTemplate`<li><b>${z.nombre}</b>${z.lugar && renderTemplate`<span class="cl__lugar">${z.lugar}</span>`}${z.etiquetas.map((e) => renderTemplate`<span${addAttribute(`cl__tag${e.k ? ` cl__tag--${e.k}` : ""}`, "class")}>${e.t}</span>`)}${z.sub && renderTemplate`<span class="cl__sub">${z.sub}</span>`}</li>`)}</ul></div>`}${r.bueno && renderTemplate`<p class="cl__tip"><b>Bueno saber:</b> ${r.bueno}</p>`}</div>`)}</div></details>`;
	})}</div><p class="cl__pie"><b>${NOTA_CORTE_V2.b}</b> ${NOTA_CORTE_V2.t}</p><p class="cl__pie">${PIE_V2}</p>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/ComoLlegarV2.astro", void 0);
//#endregion
//#region src/data/como-llegar.ts
var ESTADOS = [
	"",
	"cat",
	"mad",
	"val",
	"and",
	"otra"
];
var COMUNIDADES = [
	{
		id: "cat",
		nombre: "Cataluña",
		dondeEn: "Cataluña"
	},
	{
		id: "mad",
		nombre: "Madrid",
		dondeEn: "Madrid"
	},
	{
		id: "val",
		nombre: "C. Valenciana",
		dondeEn: "C. Valenciana"
	},
	{
		id: "and",
		nombre: "Andalucía",
		dondeEn: "Andalucía"
	},
	{
		id: "otra",
		nombre: "Otra"
	}
];
var TEXTOS = {
	elige: "Elige dónde vives arriba para ver centros y precios cerca de ti",
	sinDatos: "Todavía no tenemos centros y precios de tu comunidad.",
	datoSinElegir: "Elige dónde vives arriba para ver el dato",
	datoSinDatos: "Aún no tenemos este dato de tu comunidad",
	notaDeCorte: {
		pregunta: "¿Qué es la nota de corte?",
		respuesta: "La nota del último alumno que entró el año pasado, sobre 14. Cambia cada año."
	},
	pie: "Datos oficiales del curso 2026-27. Pueden cambiar: confirma siempre en la web del centro."
};
var comoLlegar = { ciberseguridad: [
	{
		titulo: "Universidad",
		oficial: "Grado en Ingeniería de la Ciberseguridad",
		duracion: "4 años",
		meses: 48,
		icono: "uni",
		frase: "Estudias cómo funcionan los sistemas y cómo se protegen durante cuatro años.",
		necesitas: {
			valor: "Bachillerato y selectividad",
			nota: "O venir de una FP de Grado Superior"
		},
		depende: true,
		centrosTodas: [{
			nombre: "UNIR",
			lugar: "Online",
			tipo: "Privada",
			etiquetas: ["Sin nota de corte", "Pregunta el precio"]
		}],
		lugares: {
			mad: {
				nota: {
					valor: "10,5",
					nota: "Piden nota alta"
				},
				cuesta: { valor: "Unos 1.100 € al año" },
				centros: [{
					nombre: "Universidad Rey Juan Carlos (URJC)",
					lugar: "Móstoles",
					tipo: "Pública",
					etiquetas: ["Nota 10,5"]
				}]
			},
			cat: { resto: "Aún no tenemos los centros presenciales de tu comunidad." },
			val: { resto: "Aún no tenemos los centros presenciales de tu comunidad." },
			and: { resto: "Aún no tenemos los centros presenciales de tu comunidad." }
		}
	},
	{
		titulo: "FP de Grado Superior",
		oficial: "Informática (ASIR) + curso de especialización en Ciberseguridad",
		duracion: "2 años + unos 9 meses",
		meses: 33,
		icono: "fp",
		frase: "Haces un grado superior de Informática (ASIR) y después un curso de especialización en Ciberseguridad.",
		necesitas: {
			valor: "Bachillerato",
			nota: "O un Grado Medio antes, o una prueba de acceso"
		},
		nota: {
			valor: "Tu nota media",
			nota: "Las plazas se dan por nota"
		},
		cuesta: {
			valor: "Pregunta en el centro",
			nota: "El precio cambia según el centro"
		},
		depende: true,
		lugares: {
			val: { centros: [{
				nombre: "IES Antonio Sequeros",
				lugar: "Almoradí (Alicante)",
				tipo: "Pública",
				etiquetas: ["Semipresencial"]
			}] },
			cat: {
				cuesta: {
					valor: "360 € al año",
					nota: "En instituto público"
				},
				resto: "Aún no tenemos los centros de Cataluña."
			}
		}
	},
	{
		titulo: "Cursos",
		oficial: "Cursos y certificaciones",
		duracion: "Unos meses",
		meses: 6,
		icono: "curso",
		frase: "Haces cursos y certificaciones que duran unos meses. Muchos son online.",
		necesitas: {
			valor: "Nada concreto",
			nota: "Te piden demostrar lo que sabes"
		},
		nota: {
			valor: "No hay",
			nota: "Cuenta lo que sabes hacer"
		},
		cuesta: {
			valor: "Depende del curso",
			nota: "Hay opciones gratis y de pago"
		}
	},
	{
		titulo: "Por tu cuenta",
		oficial: "Retos gratis de hacking ético, como picoCTF o TryHackMe",
		duracion: "A tu ritmo",
		meses: null,
		icono: "solo",
		frase: "Practicas con retos gratis de hacking ético, como picoCTF o TryHackMe, y aprendes a tu ritmo.",
		necesitas: {
			valor: "Nada concreto",
			nota: "Se aprende practicando"
		},
		nota: {
			valor: "No hay",
			nota: "Cuenta lo que sabes hacer"
		},
		cuesta: {
			valor: "Gratis",
			nota: "Hay webs con retos para empezar desde cero"
		}
	}
] };
var faltaDato = (e) => e === "" ? TEXTOS.datoSinElegir : TEXTOS.datoSinDatos;
var lugarDe = (v, e) => e && e !== "otra" ? v.lugares?.[e] : void 0;
function datosDe(v, e) {
	const l = lugarDe(v, e);
	return {
		nota: l?.nota ?? v.nota ?? {
			valor: "Depende del centro",
			nota: faltaDato(e)
		},
		cuesta: l?.cuesta ?? v.cuesta ?? {
			valor: "Depende del centro",
			nota: faltaDato(e)
		}
	};
}
function dondeDe(v, e) {
	if (!v.depende) return null;
	if (e === "") return {
		aviso: TEXTOS.elige,
		centros: []
	};
	if (e === "otra") return {
		titulo: "Dónde",
		aviso: TEXTOS.sinDatos,
		centros: v.centrosTodas ?? []
	};
	const l = lugarDe(v, e);
	const centros = [...l?.centros ?? [], ...v.centrosTodas ?? []];
	const nombre = COMUNIDADES.find((c) => c.id === e)?.dondeEn;
	if (!centros.length && !l?.resto) return {
		aviso: TEXTOS.sinDatos,
		centros: [],
		bueno: l?.bueno
	};
	return {
		titulo: `Dónde, en ${nombre}`,
		centros,
		resto: l?.resto,
		bueno: l?.bueno
	};
}
//#endregion
//#region src/pages/resultados/index.astro
var resultados_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://sheisdigitalab.github.io");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const tema = Astro.props.tema ?? "negro";
	const mostrarGuardar = false;
	const MAX_MESES = 48;
	const ramas = [
		"M150 0 V10 C150 38 50 34 50 70",
		"M150 0 V70",
		"M150 0 V10 C150 38 250 34 250 70"
	];
	const iconosCamino = {
		contenido: "<rect x=\"7\" y=\"2.5\" width=\"10\" height=\"19\" rx=\"2.5\"/><circle cx=\"12\" cy=\"11\" r=\"2.6\"/><path d=\"M10.5 18.5h3\"/>",
		animacion: "<path d=\"M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z\"/><path d=\"M3.5 7.25L12 12l8.5-4.75M12 12v9.5\"/>",
		ciberseguridad: "<path d=\"M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6z\"/><rect x=\"9\" y=\"10.5\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10.5V9a2 2 0 0 1 4 0v1.5\"/>"
	};
	const iconosPerfil = {
		crear: "<path d=\"M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z\"/>",
		contar: "<path d=\"M5 6h14v9H10l-4 3.5V15H5z\"/><path d=\"M9 10.5h6\"/>",
		retos: "<path d=\"M6 21V4\"/><path d=\"M6 5h11l-2.5 4 2.5 4H6\"/>"
	};
	const iconos = {
		fp: "<path d=\"M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z\"/>",
		uni: "<path d=\"M2 9l10-5 10 5-10 5z\"/><path d=\"M6 11v5c3 2 9 2 12 0v-5\"/>",
		curso: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M2 19h20\"/>",
		solo: "<path d=\"M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z\"/>"
	};
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": "Tus 3 caminos · NextYou",
		"descripcion": "Tus 3 caminos profesionales: en qué consiste cada uno, qué formación necesitas y cómo llegar. Y, si quieres, un coach que te acompañe.",
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": "",
		"robots": "noindex, follow",
		"cta": {
			texto: "Repetir el test",
			href: CTA_PRINCIPAL.href
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido"${addAttribute(`res res--${tema}`, "class")} data-ccaa="cat"><script>
      (function () {
        var main = document.currentScript.parentElement, validas = ['cat', 'mad', 'val', 'and', 'otra'], v = '';
        try { v = (new URLSearchParams(location.search).get('ccaa') || '').toLowerCase(); } catch (e) {}
        if (validas.indexOf(v) < 0) { try { v = localStorage.getItem('nextyou-ccaa') || ''; } catch (e) { v = ''; } }
        main.setAttribute('data-ccaa', validas.indexOf(v) < 0 ? 'cat' : v);
      })();
    <\/script><div class="ancho res__caja"><header class="res__cab"><p class="res__saludo" data-saludo>¡Listo!</p><h1 class="res__titulo">Tus <span class="res__tres">3</span> caminos</h1><p class="res__lead">Salen de tus respuestas. No son una lista cerrada: son tres pistas para empezar a explorar.</p></header><section class="perfil" aria-labelledby="perfil-tit"><p id="perfil-tit" class="mp__sup">${perfil.eti}</p><ul class="perfil__lista" role="list">${perfil.rasgos.map((r) => renderTemplate`<li class="perfil__rasgo"><span class="perfil__ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(iconosPerfil[r.icono])}</svg></span><span class="perfil__tx"><b>${r.titulo}</b><span>${r.texto}</span></span></li>`)}</ul></section><section class="donde" aria-labelledby="donde-tit"><p id="donde-tit" class="donde__tit">¿Dónde vives?</p><div class="donde__op" role="group" aria-labelledby="donde-tit">${COMUNIDADES.map((c) => renderTemplate`<button type="button" class="donde__b"${addAttribute(c.id, "data-ccaa")} aria-pressed="false">${c.nombre}</button>`)}</div></section><p class="res__toca">Toca cada uno para ver de qué va y cómo llegar.</p><section class="mp" data-mapa data-sel="0" aria-label="Mapa de tus caminos"><div class="mp__tu"><span class="mp__punto" aria-hidden="true"></span><b>Tú</b></div><svg class="mp__ramas" viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true">${ramas.map((d, i) => renderTemplate`<path class="mp__rama"${addAttribute(i, "data-r")}${addAttribute(d, "d")}></path>`)}</svg><div class="mp__destinos" role="tablist" aria-label="Tus 3 caminos">${caminos.map((c, i) => renderTemplate`<button type="button" role="tab" class="mp__dest"${addAttribute(`tab-${c.id}`, "id")}${addAttribute(`panel-${c.id}`, "aria-controls")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute(i === 0 ? 0 : -1, "tabindex")}${addAttribute(i, "data-i")}><span class="mp__foto"><span class="mp__ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(iconosCamino[c.id])}</svg></span><span class="mp__n" aria-hidden="true">${i + 1}</span></span><small class="mp__tipo">${c.tipo}</small><b class="mp__nombre">${c.nombre}</b></button>`)}</div></section><nav class="mp__fija" aria-label="Cambiar de camino" data-fija>${caminos.map((c, i) => renderTemplate`<button type="button" class="mp__fb"${addAttribute(i, "data-i")}${addAttribute(i === 0 ? "true" : "false", "aria-pressed")}${addAttribute(`Camino ${i + 1}: ${c.nombre}`, "aria-label")}><span class="mp__fn" aria-hidden="true">${i + 1}</span><span class="mp__ft">${c.nombre}</span></button>`)}</nav>${caminos.map((c, i) => renderTemplate`<section class="mp__panel" role="tabpanel"${addAttribute(`panel-${c.id}`, "id")}${addAttribute(`tab-${c.id}`, "aria-labelledby")}${addAttribute(i !== 0, "hidden")} data-placeholder="true" tabindex="0"><header class="mp__cab"><p class="mp__sup">Camino ${i + 1} · ${c.tipo}</p><p class="mp__def">${c.definicion}</p><h2 class="mp__h2">${c.nombre}</h2><ul class="mp__chips" role="list" aria-label="Se te da bien">${c.chips.map((t) => renderTemplate`<li>${t}</li>`)}</ul></header><div class="mp__bloque"><h3 class="mp__h3">En qué consiste</h3><dl class="mp__datos"><div class="mp__dato mp__dato--que"><dt>Qué haces</dt><dd>${c.que}</dd></div>${c.trabajo && renderTemplate`<div class="mp__dato mp__dato--trabajo"><dt>Cómo se llama este trabajo</dt><dd>${c.trabajo}</dd></div>`}<div class="mp__dato mp__dato--dia"><dt>Un día normal</dt><dd>${c.dia}</dd></div><div class="mp__dato mp__dato--porque"><dt>Por qué encaja contigo</dt><dd>${c.porque}</dd></div></dl></div><div class="mp__par"><div class="mp__bloque"><h3 class="mp__h3">El dato</h3><p class="mp__p">${c.dato}</p><p class="mp__ref">${c.fuente}</p></div><div class="mp__bloque"><h3 class="mp__h3">${c.formacionTitulo ?? "La formación"}</h3><p class="mp__p">${c.formacion}</p></div></div><div class="mp__bloque"><h3 class="mp__h3">Cómo llegar <small>Hay varias vías</small></h3>${c.id !== "ciberseguridad" && renderTemplate`<div class="donde donde--cl" role="group" aria-label="¿Dónde vives?"><p class="donde__tit" aria-hidden="true">¿Dónde vives?</p><div class="donde__op">${COMUNIDADES.map((z) => renderTemplate`<button type="button" class="donde__b"${addAttribute(z.id, "data-ccaa")} aria-pressed="false">${z.nombre}</button>`)}</div></div>`}${c.id === "ciberseguridad" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="cl">${comoLlegar[c.id].map((v, k) => renderTemplate`<details${addAttribute(`cl__via cl__via--${v.icono}`, "class")}${addAttribute(k === 0, "open")}><summary class="cl__sum"${addAttribute(v.meses ? `--w: ${Math.round(v.meses / MAX_MESES * 100)}%` : void 0, "style")}><span class="cl__ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(iconos[v.icono])}</svg></span><span class="cl__st"><b class="cl__tit">${v.titulo}</b><span class="cl__of">${v.oficial}</span></span><span class="cl__dur">${v.duracion}</span><span class="cl__mas" aria-hidden="true">+</span></summary><div class="cl__in"><p class="cl__que">${v.frase}</p><div class="cl__qa"><div class="cl__d"><small>Qué necesitas</small><b>${v.necesitas.valor}</b>${v.necesitas.nota && renderTemplate`<em>${v.necesitas.nota}</em>`}</div>${(v.depende ? ESTADOS : [""]).map((e) => {
		const { nota, cuesta } = datosDe(v, e);
		const tarjetas = [["Nota para entrar", nota], ["Cuánto cuesta", cuesta]];
		return renderTemplate`<div class="cl__est"${addAttribute(v.depende ? e : void 0, "data-est")}>${tarjetas.map(([t, d]) => renderTemplate`<div class="cl__d"><small>${t}</small><b>${d.valor}</b>${d.nota && renderTemplate`<em>${d.nota}</em>`}</div>`)}</div>`;
	})}</div>${v.depende && ESTADOS.map((e) => {
		const d = dondeDe(v, e);
		return renderTemplate`<div class="cl__est cl__est--lugar"${addAttribute(e, "data-est")}>${d?.titulo && renderTemplate`<h4 class="cl__h4">${d.titulo}</h4>`}${d?.centros.length ? renderTemplate`<ul class="cl__centros" role="list">${d.centros.map((z) => renderTemplate`<li><b>${z.nombre}</b>${z.lugar && renderTemplate`<span class="cl__lugar">${z.lugar}</span>`}${z.tipo && renderTemplate`<span${addAttribute(`cl__tag${z.tipo === "Pública" ? " cl__tag--pub" : ""}`, "class")}>${z.tipo}</span>`}${z.etiquetas?.map((t) => renderTemplate`<span class="cl__tag cl__tag--dat">${t}</span>`)}</li>`)}</ul>` : null}${d?.aviso && renderTemplate`<p class="cl__aviso">${d.aviso}</p>`}${d?.resto && renderTemplate`<p class="cl__aviso">${d.resto}</p>`}${d?.bueno && renderTemplate`<p class="cl__tip"><b>Bueno saber:</b> ${d.bueno}</p>`}</div>`;
	})}${v.bueno && renderTemplate`<p class="cl__tip"><b>Bueno saber:</b> ${v.bueno}</p>`}</div></details>`)}</div><p class="cl__glos"><b>${TEXTOS.notaDeCorte.pregunta}</b> ${TEXTOS.notaDeCorte.respuesta}</p><p class="cl__pie">${TEXTOS.pie}</p>` })}` : renderTemplate`${renderComponent($$result, "ComoLlegarV2", $$ComoLlegarV2, {
		"camino": comoLlegarV2[c.id],
		"id": c.id,
		"iconos": iconos
	})}`}</div>${clipsPorCamino[c.id] && renderTemplate`<div class="mp__bloque mp__clips"><h3 class="mp__h3">Profesionales que te cuentan cómo llegaron a su trabajo</h3>${renderComponent($$result, "ClipsProfesionales", $$ClipsProfesionales, {
		"clips": clipsPorCamino[c.id],
		"grupo": c.id
	})}</div>`}</section>`)}${mostrarGuardar}${renderTemplate`<aside id="coach" class="rc" aria-labelledby="rc-titulo" data-placeholder="true">${renderComponent($$result, "Image", $$Image, {
		"src": acompanamiento.foto,
		"alt": "",
		"width": 240,
		"height": 240,
		"class": "rc__av",
		"loading": "lazy"
	})}<div class="rc__txt"><p class="rc__eti">${comoAppLima.coach.eti}</p><h2 id="rc-titulo" class="rc__tit">Un profesional te ayuda a <span class="rc__l2">ordenar tus opciones</span></h2><ul class="rc__lista" role="list">${comoAppLima.coach.puntos.map((t) => renderTemplate`<li>${t}</li>`)}</ul></div><a class="rc__boton"${addAttribute(`${BASE}acompanamiento/#planes`, "href")}>${acompanamiento.cta} <span aria-hidden="true">→</span></a></aside>`}${false}</div></main>${renderComponent($$result, "VisorClips", $$VisorClips, {})}` })}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/resultados/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/resultados/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/resultados/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/resultados";
//#endregion
export { resultados_exports as n, $$Index as t };
