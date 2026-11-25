import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, o as __exportAll, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { r as $$LogoV3 } from "./archivo-sub_Bh8oSwcD.mjs";
import { n as $$Picture, r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { i as losDeDentro, n as hero, t as familias, u as sara } from "./home_AzZ1C02B.mjs";
import { i as queV4, s as unicoV4, t as bifurcacion } from "./v4_vKSioh4u.mjs";
import { t as $$V4 } from "./V4_5Tv46HR2.mjs";
//#region src/components/DemoPantallaV4.astro
createAstro("https://sheisdigitalab.github.io");
var $$DemoPantallaV4 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DemoPantallaV4;
	const { n, respuestas, variante } = Astro.props;
	const energias = [
		{
			nombre: "Creador/a",
			texto: "Imaginas y construyes cosas nuevas"
		},
		{
			nombre: "Estratega",
			texto: "Planificas y resuelves problemas"
		},
		{
			nombre: "Conector/a",
			texto: "Unes personas e ideas"
		},
		{
			nombre: "Explorador/a",
			texto: "Buscas lo desconocido"
		}
	];
	const caminos = [
		{
			tipo: "Lo que más te pega",
			profesion: "Edición de vídeo",
			motivo: "Disfrutas creando y contando historias."
		},
		{
			tipo: "El puente",
			profesion: "Diseño UX/UI",
			motivo: "Une lo creativo con resolver problemas de la gente."
		},
		{
			tipo: "El salto",
			profesion: "Sonido para videojuegos",
			motivo: "Quizá no lo conocías, y encaja con lo que te mueve."
		}
	];
	const videos = [
		{
			titulo: "Edita para una productora",
			meta: "2 min",
			tono: "a"
		},
		{
			titulo: "Monta vídeos para marcas en redes",
			meta: "3 min",
			tono: "b"
		},
		{
			titulo: "Empezó subiendo vídeos a YouTube",
			meta: "2 min",
			tono: "c"
		}
	];
	return renderTemplate`${n === 0 && variante === "test" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="m-cabecera"><span>Brújula Interior</span><span>1 de 12</span></div><div class="m-progreso"><span style="width: 8.33%"></span></div><p class="m-pregunta">¿Cómo describirías tu energía natural?</p><div class="m-energias">${energias.map((e, i) => renderTemplate`<span${addAttribute({ sel: i === 0 }, "class:list")}><strong>${e.nombre}</strong>${e.texto}</span>`)}</div><p class="m-nota">Sin respuestas correctas ni incorrectas. Solo tú.</p><div class="m-pie"><span>← Volver</span><span class="m-siguiente">Siguiente →</span></div>` })}`}${n === 0 && variante !== "test" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="m-cabecera"><span>Un día prestado</span><span>Parada 1 de 4</span></div><div class="m-progreso"><span style="width: 25%"></span></div><p class="m-pregunta">Sábado sin planes. ¿Qué te apetece?</p><div class="m-tarea"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="6" width="13" height="12" rx="2"></rect><path d="M16 10l5-3v10l-5-3z"></path></svg>Grabar y editar un vídeo para redes</div><div class="m-respuestas">${respuestas.map((r, i) => renderTemplate`<span${addAttribute({ sel: i === 3 }, "class:list")}>${r}</span>`)}</div><p class="m-nota">No hay respuestas buenas ni malas</p><div class="m-pie"><span>← Volver</span><span class="m-siguiente">Siguiente →</span></div>` })}`}${n === 1 && variante === "test" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p class="m-titulo">Tus tres caminos</p><p class="m-sub">Según tus respuestas. Sin ranking.</p><!-- Desde ti salen tres ramas: se dibujan y las tarjetas entran una a una (v5) --><div class="m-ramas"><svg class="m-ramas__lineas" viewBox="0 0 40 120" preserveAspectRatio="none"><path class="m-l m-l--1" d="M4 60 C 24 60, 18 20, 40 20"></path><path class="m-l m-l--2" d="M4 60 L 40 60"></path><path class="m-l m-l--3" d="M4 60 C 24 60, 18 100, 40 100"></path></svg><span class="m-ramas__tu">Tú</span><div class="m-ramas__lista">${caminos.map((c, i) => renderTemplate`<div${addAttribute(["m-rama", `m-rama--${i + 1}`], "class:list")}${addAttribute(`--d: ${i}`, "style")}><span class="m-rama__tipo">${c.tipo}</span><strong>${c.profesion}</strong></div>`)}</div></div><p class="m-nota">Ninguno es «el bueno». Los tres merecen una prueba.</p>` })}`}${n === 1 && variante !== "test" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p class="m-titulo">Tus tres caminos</p><p class="m-sub">Para explorar. Sin ranking.</p>${caminos.map((c, i) => renderTemplate`<div${addAttribute(["m-camino", { "m-camino--uno": i === 0 }], "class:list")}><span class="m-camino__tipo">${c.tipo}</span><strong>${c.profesion}</strong><span class="m-camino__motivo">${c.motivo}</span></div>`)}` })}`}${n === 2 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p class="m-titulo">Edición de vídeo</p><p class="m-sub">Gente que ya trabaja en esto</p>${videos.map((v) => renderTemplate`<div class="m-video"><span${addAttribute(["m-video__mini", `m-video__mini--${v.tono}`], "class:list")}><svg width="14" height="16" viewBox="0 0 12 14"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg></span><span class="m-video__texto"><strong>${v.titulo}</strong><span>${v.meta} · sin discursos</span></span></div>`)}` })}`}${n === 3 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<!-- El MVP no tiene chat con el coach: tarjeta de sesión --><div class="m-sesion3"><span class="m-avatar">C</span><p class="m-titulo">Sesión con tu coach</p><p class="m-sub">online</p></div><div class="m-reto"><span>Reto para probar</span><strong>Rediseñar una web que conoces</strong></div><p class="m-nota">Hablas de lo que has probado. Decides tú.</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: duración y frecuencia de las sesiones -->")}` })}` })}`}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/DemoPantallaV4.astro", void 0);
//#endregion
//#region src/pages/v4/index.astro
var v4_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const reels = await Promise.all(losDeDentro.personas.map(async (p) => ({
		...p,
		grande: (await getImage({
			src: p.foto,
			width: 900,
			format: "webp"
		})).src
	})));
	reels[0];
	const heroGrande = (await getImage({
		src: hero.foto,
		width: 900,
		format: "webp"
	})).src;
	const tiempos = [
		"8 min",
		"al momento",
		"2-3 min por vídeo"
	];
	const UNIVERSIDAD = `${BASE}v4/universidad/`;
	const cursiva = (texto, palabra) => texto.replace(palabra, `<em>${palabra}</em>`);
	return renderTemplate`${renderComponent($$result, "V4", $$V4, {
		"titulo": SITIO.titulo,
		"descripcion": SITIO.descripcion,
		"actual": "bachillerato"
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido"><!-- ===================== Hero ===================== --><section class="hero" aria-labelledby="hero-titulo" data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Picture", $$Picture, {
			"src": hero.foto,
			"alt": hero.alt,
			"formats": ["avif", "webp"],
			"widths": [
				480,
				768,
				1080,
				1440,
				2e3
			],
			"sizes": "100vw",
			"quality": 60,
			"loading": "eager",
			"fetchpriority": "high",
			"class": "hero__foto"
		})}<div class="hero__contenido ancho"><button type="button" class="hero__ver" data-visor-abrir aria-haspopup="dialog"${addAttribute(`${hero.nombre}, ${hero.edad}`, "data-nombre")}${addAttribute(hero.detalle, "data-profesion")}${addAttribute(hero.cita, "data-cita")} data-duracion="2 min"${addAttribute(heroGrande, "data-img")}${addAttribute(hero.video?.src ?? "", "data-video")}><svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path></svg>Ver a ${hero.nombre} · 2 min</button><div class="hero__abajo"><figure class="hero__cita"><blockquote><p>«${hero.cita}»</p></blockquote><figcaption><span class="hero__nombre">${hero.nombre}, ${hero.edad}</span><span class="hero__detalle">${hero.detalle}</span></figcaption></figure><!-- Qué es NextYou y acción, ya en la primera pantalla --><div class="hero__accion"><h1 id="hero-titulo" class="hero__h1">Haz el test gratis y descubre a qué te podrías dedicar</h1><div class="hero__botones"><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${hero.boton}</a><span>8 min · gratis · sin crear cuenta</span></div></div></div></div></section><!-- ===================== Bifurcación: universidad y FP ===================== --><aside class="bifurca" aria-label="Para universitarios y FP"><a class="bifurca__enlace ancho"${addAttribute(UNIVERSIDAD, "href")}><span>${bifurcacion.texto}</span><strong>${bifurcacion.enlace} <span aria-hidden="true">→</span></strong></a></aside><!-- ===================== No eres el único ===================== --><section class="seccion unico" aria-labelledby="unico-titulo"><div class="ancho"><header class="cabecera cabecera--centro" data-aparece><p class="antetitulo">${unicoV4.etiqueta}</p><h2 id="unico-titulo" class="titular titular--unico">${unescapeHTML(cursiva(unicoV4.titulo, unicoV4.resaltado))}</h2><p class="cabecera__sub">${unicoV4.subtitulo}</p></header><ul data-aparece class="unico__lista" role="list" aria-label="Testimonios" tabindex="0">${unicoV4.personas.map((p) => renderTemplate`<li${addAttribute(["tarjeta", { "tarjeta--uni": p.universidad }], "class:list")} data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 480,
			"height": 420,
			"quality": 70,
			"class": "tarjeta__foto"
		})}<div class="tarjeta__texto"><p class="tarjeta__cita">«${p.cita}»</p><p class="tarjeta__firma">— ${p.nombre}, ${p.edad}</p>${p.universidad && renderTemplate`<a class="tarjeta__enlace"${addAttribute(UNIVERSIDAD, "href")}>¿También en la uni? Mira esto →</a>`}</div></li>`)}</ul></div></section><!-- ===================== ¿Qué es NextYou? =====================
           Fondo claro (#6), en modo pregunta con el logo (#7), titular de Sara (#8)
           y una demo del producto en lugar de las frases y del «Cómo funciona» (#9, #12).
           «Lo que no va a pasar» integrado como lista, sin caja de color (#13). --><section id="como-funciona" class="seccion que sobre-claro" aria-labelledby="que-titulo"><div class="estrecho"><header class="que__cabecera" data-aparece><p class="que__pregunta">¿Qué es <span class="que__marca">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "logo--grande" })}<span class="solo-lector">NextYou</span>?</span></p><h2 id="que-titulo">${unescapeHTML(cursiva(queV4.titulo, queV4.resaltado))}</h2></header><!-- Demo: en móvil, cada paso con su pantalla; en escritorio, un móvil fijo que cambia de pantalla --><div class="demo3"><ol class="pasos3" role="list" aria-label="Cómo funciona, en cuatro pasos"><li class="paso3"${addAttribute(0, "data-paso")}><div class="paso3__texto"><span class="paso3__n" aria-hidden="true">01</span><h3>${queV4.pasos[0].titulo}</h3><p class="paso3__lead">${queV4.pasos[0].texto}</p><span class="pastilla">${tiempos[0]}</span></div><div class="movil movil--paso" aria-hidden="true"><div class="movil__pantalla">${renderComponent($$result, "DemoPantalla", $$DemoPantallaV4, {
			"n": 0,
			"respuestas": queV4.respuestas
		})}</div></div></li><li class="paso3"${addAttribute(1, "data-paso")}><div class="paso3__texto"><span class="paso3__n" aria-hidden="true">02</span><h3>${queV4.pasos[1].titulo}</h3><p class="paso3__lead">${queV4.pasos[1].texto}</p><span class="pastilla">${tiempos[1]}</span></div><div class="movil movil--paso" aria-hidden="true"><div class="movil__pantalla">${renderComponent($$result, "DemoPantalla", $$DemoPantallaV4, {
			"n": 1,
			"respuestas": queV4.respuestas
		})}</div></div></li><li class="paso3"${addAttribute(2, "data-paso")}><div class="paso3__texto"><span class="paso3__n" aria-hidden="true">03</span><h3>${queV4.pasos[2].titulo}</h3><p class="paso3__lead">${queV4.pasos[2].texto}</p><span class="pastilla">${tiempos[2]}</span></div><div class="movil movil--paso" aria-hidden="true"><div class="movil__pantalla">${renderComponent($$result, "DemoPantalla", $$DemoPantallaV4, {
			"n": 2,
			"respuestas": queV4.respuestas
		})}</div></div></li><li class="paso3"${addAttribute(3, "data-paso")}><div class="paso3__texto"><span class="paso3__n" aria-hidden="true">04</span><h3>${queV4.pasos[3].titulo}</h3><p class="paso3__lead">${queV4.pasos[3].texto}</p><span class="pastilla pastilla--contorno">opcional · de pago</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: duración y frecuencia de las sesiones -->")}` })}${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: precio del acompañamiento con coach -->")}` })}</div><div class="movil movil--paso" aria-hidden="true"><div class="movil__pantalla">${renderComponent($$result, "DemoPantalla", $$DemoPantallaV4, {
			"n": 3,
			"respuestas": queV4.respuestas
		})}</div></div></li></ol><div class="demo3__fijo" aria-hidden="true"><div class="movil">${[
			0,
			1,
			2,
			3
		].map((n) => renderTemplate`<div${addAttribute([
			"movil__pantalla",
			"movil__capa",
			{ activa: n === 0 }
		], "class:list")}${addAttribute(n, "data-capa")}>${renderComponent($$result, "DemoPantalla", $$DemoPantallaV4, {
			"n": n,
			"respuestas": queV4.respuestas
		})}</div>`)}</div></div></div><!-- Lo que no va a pasar: cierre de la sección en un panel propio, con título y botón --><div class="promesa" data-aparece><div class="promesa__texto"><h3 class="promesa__titulo">Lo que no va a pasar</h3><ul class="promesa__lista" role="list">${queV4.noVaAPasar.map((t) => renderTemplate`<li><span class="promesa__x" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 14 14"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"></path></svg></span>${t}</li>`)}</ul></div><div class="promesa__accion">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) -->")}` })}<a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">${queV4.boton}</a><span>8 minutos · gratis · sin crear cuenta</span></div></div></div></section><!-- ===================== Los de dentro ===================== --><section class="seccion dentro" aria-labelledby="dentro-titulo"><div class="ancho"><header class="cabecera cabecera--centro" data-aparece><p class="antetitulo">${losDeDentro.etiqueta}</p><h2 id="dentro-titulo" class="titular titular--dentro rotulador">${unescapeHTML(cursiva(losDeDentro.titulo, losDeDentro.resaltado))}</h2><p class="cabecera__sub">Sin discursos. Te cuentan cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.</p></header><div class="dentro__nav" data-solo-carrusel><button type="button" class="flecha" data-mover="-1" aria-label="Anterior" disabled>←</button><span class="dentro__cuenta" aria-live="polite"><span data-actual>1</span> / ${reels.length}</span><button type="button" class="flecha" data-mover="1" aria-label="Siguiente">→</button></div></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: clips de noviembre de Sara (comentario #11) -->")}` })}<ul class="reels" data-reels role="list" aria-label="Vídeos de profesionales" tabindex="0">${reels.map((p, i) => renderTemplate`<li class="reel"${addAttribute(`--i: ${i}`, "style")} data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 540,
			"height": 960,
			"loading": i < 2 ? "eager" : "lazy",
			"quality": 70,
			"class": "reel__foto"
		})}<div class="reel__pie"><!-- La frase gancho, como una pegatina: encima del nombre para no tapar la cara --><p class="reel__gancho"><span>${p.cita}</span></p><p class="reel__nombre">${p.nombre}, ${p.edad}</p><p class="reel__camino">${p.camino.join(" → ")}</p><span class="reel__ver"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>Ver su día · ${p.duracion}</span></div><button type="button" class="reel__abrir" data-visor-abrir aria-haspopup="dialog"${addAttribute(`Ver el vídeo de ${p.nombre}, ${p.profesion}, ${p.duracion}`, "aria-label")}${addAttribute(`${p.nombre}, ${p.edad}`, "data-nombre")}${addAttribute(p.profesion, "data-profesion")}${addAttribute(p.cita, "data-cita")}${addAttribute(p.duracion, "data-duracion")}${addAttribute(p.grande, "data-img")}${addAttribute(p.video ?? "", "data-video")}${addAttribute(p.subtitulos ?? "", "data-subtitulos")}${addAttribute(i, "data-indice")}${addAttribute(p.camino.join("|"), "data-camino")}${addAttribute(p.estudios, "data-estudios")}${addAttribute(p.primerTrabajo, "data-trabajo")}${addAttribute(p.martes, "data-martes")}><span class="reel__play" aria-hidden="true"><svg width="18" height="20" viewBox="0 0 12 14"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg></span></button></li>`)}</ul><div class="ancho"><div class="puntos" aria-hidden="true">${reels.map((_, i) => renderTemplate`<span${addAttribute({ activo: i === 0 }, "class:list")}></span>`)}</div></div></section><!-- ===================== Familias: los padres son quienes pagan ===================== --><section class="familias" aria-labelledby="familias-titulo"><div class="estrecho familias__caja" data-aparece><div class="familias__texto"><p class="familias__para">Para madres y padres</p><h2 id="familias-titulo">${familias.titulo}</h2><p>Hay una página para ti. Sin prisas y sin decidir en su lugar.</p></div><div class="familias__lado"><ul class="familias__lista" role="list" aria-label="Qué encontrarás"><li><span class="familias__check"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>El método, paso a paso</li><li><span class="familias__check"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>Qué datos guardamos y cuáles no</li><li><span class="familias__check"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>Cómo acompañar sin decidir por él o ella</li></ul><a${addAttribute(`${BASE}v4/familias/`, "href")} class="boton familias__boton">${familias.boton} <span aria-hidden="true">→</span></a></div></div></section><!-- Vídeo en grande. Mientras no haya clip, se ve la foto con un aviso. --><dialog class="visor" aria-labelledby="visor-nombre"><div class="visor__caja"><button type="button" class="visor__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><div class="visor__media"><img class="visor__img" alt=""><video class="visor__video" controls playsinline preload="metadata" hidden></video><p class="visor__aviso">Aquí irá el vídeo · <span data-visor="duracion"></span></p></div><div class="visor__texto"><p id="visor-nombre" class="visor__nombre" data-visor="nombre"></p><span class="etiqueta-marco" data-visor="profesion"></span><p class="visor__cita">«<span data-visor="cita"></span>»</p><!-- Ficha mientras no haya vídeo (PLACEHOLDER: datos de ejemplo) --><div class="visor__ficha" data-visor="ficha"><ol class="visor__camino" data-visor="camino" aria-label="Su camino"></ol><dl class="visor__datos"><div><dt>Qué estudió</dt><dd data-visor="estudios"></dd></div><div><dt>Su primer trabajo</dt><dd data-visor="trabajo"></dd></div><div><dt>Cómo es un martes</dt><dd data-visor="martes"></dd></div></dl></div><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton visor__cta">¿Te ves aquí? Haz el test</a><div class="visor__nav" data-visor="nav"><button type="button" class="flecha" data-visor-mover="-1" aria-label="Profesional anterior">←</button><span class="visor__cuenta" aria-live="polite"><span data-visor="actual"></span> / ${reels.length}</span><button type="button" class="flecha" data-visor-mover="1" aria-label="Siguiente profesional">→</button></div></div></div></dialog><!-- ===================== Sara · fondo oscuro (comentario #15). Texto provisional suyo. ===================== --><section class="sara" aria-labelledby="sara-titulo"><div class="estrecho sara__rejilla"><div class="sara__texto" data-aparece><p class="antetitulo">${sara.etiqueta}</p><h2 id="sara-titulo" class="titular titular--sara">${sara.titulo}</h2><p>${sara.texto}</p><p class="firma">${sara.firma}</p>${ENLACES.sara === "#" ? renderTemplate`<span class="boton boton--contorno boton--pronto" aria-disabled="true">${sara.boton}<small>pronto</small></span>` : renderTemplate`<a${addAttribute(ENLACES.sara, "href")} class="boton boton--contorno">${sara.boton}</a>`}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: foto de Sara -->")}` })}<div class="sara__polaroid" role="img" aria-label="Foto de Sara, pendiente"><div class="sara__hueco" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"></path><circle cx="12" cy="13" r="3.5"></circle></svg><span>Aquí irá la foto de Sara</span></div><p class="sara__pie" aria-hidden="true"><strong>Sara</strong> · ${sara.cargo}</p></div></div></section><!-- ===================== Cierre: última llamada antes del pie ===================== --><section class="cierre" aria-labelledby="cierre-titulo"><div class="estrecho cierre__caja" data-aparece><p class="nota-mano" aria-hidden="true">tu turno ↓</p><h2 id="cierre-titulo" class="titular rotulador">¿Y tú, a qué te <em>podrías dedicar</em>?</h2><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">${hero.boton}</a><p class="cierre__meta">8 minutos · gratis · sin crear cuenta</p></div></section></main>`,
		"antes-del-pie": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "antes-del-pie" }, { "default": ($$result) => renderTemplate`<aside class="fijo" aria-label="Acceso rápido al test" aria-hidden="true" inert><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${hero.boton}</a><span>8 min · gratis</span></aside>` })}`
	})}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v4/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v4/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/v4/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/v4";
//#endregion
//#region \0virtual:astro:page:src/pages/v4/index@_@astro
var page = () => v4_exports;
//#endregion
export { page };
