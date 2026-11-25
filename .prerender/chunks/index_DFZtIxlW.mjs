import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, o as __exportAll, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { r as $$LogoV3 } from "./archivo-sub_Bh8oSwcD.mjs";
import { t as $$V5 } from "./V5_BWs46Cmi.mjs";
import { r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { n as noa_default, t as aitana_default } from "./aitana_DOl7QgDr.mjs";
import { t as laia_default } from "./laia_BGPabz0x.mjs";
import { i as losDeDentro, n as hero, u as sara } from "./home_AzZ1C02B.mjs";
import { i as pasosV7, o as unicoV7Cambios, r as hugoV7 } from "./v7_DHAIYzOh.mjs";
import { t as familiasPagina } from "./familias_Cw3k0GSM.mjs";
import { a as queV5, r as historiasUni } from "./v4_vKSioh4u.mjs";
import { t as coach_4_default } from "./coach-4_JoOuWTHs.mjs";
import { n as uni_ruben_default, r as uni_claudia_default, t as uni_hugo_default } from "./uni-hugo_3uafgZEB.mjs";
import { a as uniNoUnicoLima, i as queEsLima, n as masDentro, o as unicoLima, r as comoAppLima, t as laia_v3_video_default } from "./laia-v3-video_C_8BrGYS.mjs";
import { t as laia_v3_av_default } from "./laia-v3-av_DukA6gm1.mjs";
//#region src/pages/home-v3/index.astro
var home_v3_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	familiasPagina.modos;
	const reels = await Promise.all([...losDeDentro.personas, ...masDentro].map(async (p) => ({
		...p,
		camino: Array.isArray(p.camino) ? p.camino.map((c) => c.replace("Estudió Turismo", "Empezó Turismo")) : p.camino,
		martes: typeof p.martes === "string" ? p.martes.replace("el recorrido de un servicio", "el camino de un servicio") : p.martes,
		grande: (await getImage({
			src: p.foto,
			width: 900,
			format: "webp"
		})).src
	})));
	reels[0];
	(await getImage({
		src: hero.foto,
		width: 900,
		format: "webp"
	})).src;
	const iconosCromo = {
		contenido: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"7\" y=\"2.5\" width=\"10\" height=\"19\" rx=\"2.5\"/><circle cx=\"12\" cy=\"11\" r=\"2.6\"/><path d=\"M10.5 18.5h3\"/></svg>",
		animacion: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"><path d=\"M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z\"/><path d=\"M3.5 7.25L12 12l8.5-4.75M12 12v9.5\"/></svg>",
		ciber: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6z\"/><rect x=\"9\" y=\"10.5\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10.5V9a2 2 0 0 1 4 0v1.5\"/></svg>"
	};
	const posterCromo = (inicial) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#24201c"/><text x="450" y="370" font-family="Arial,sans-serif" font-size="260" font-weight="700" fill="#c8f53b" text-anchor="middle">${inicial}</text></svg>`)}`;
	const caraCromo = {
		Noa: noa_default,
		Leo: laia_default,
		Aitana: aitana_default
	};
	const grandesCromo = Object.fromEntries(await Promise.all(Object.entries(caraCromo).map(async ([k, v]) => [k, (await getImage({
		src: v,
		width: 900,
		format: "webp"
	})).src])));
	const cromos = queV5.pasos[2].cromos.map((c, n) => ({
		...c,
		camino: queV5.pasos[1].ramas[n].tipo,
		img: caraCromo[c.nombre],
		i: void 0,
		r: {
			edad: c.edad,
			foto: caraCromo[c.nombre],
			profesion: c.profesion,
			cita: c.cita,
			duracion: c.duracion,
			grande: grandesCromo[c.nombre] ?? posterCromo(c.nombre[0]),
			video: "",
			subtitulos: "",
			camino: c.camino,
			estudios: c.estudios,
			primerTrabajo: c.primerTrabajo,
			martes: c.martes
		}
	}));
	[
		0,
		1,
		2,
		3,
		4,
		5
	].map((k) => ({
		...cromos[k % 3],
		k: k % 3,
		copia: k >= 3
	}));
	const fotosUni = {
		Claudia: uni_claudia_default,
		"Rubén": uni_ruben_default,
		Hugo: uni_hugo_default
	};
	[hugoV7, ...historiasUni.personas].map((r) => ({
		...r,
		foto: fotosUni[r.nombre]
	}));
	reels[0].foto, reels[1].foto, reels[2].foto;
	const VIDEO = `${BASE}videos/`;
	const cursiva = (texto, palabra) => texto.replace(palabra, `<em>${palabra}</em>`);
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": SITIO.titulo,
		"descripcion": SITIO.descripcion,
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": "home-v3/"
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido"><!-- ===================== Portada =====================
           Nada más entrar se entiende qué es: título (h1), una frase y el botón del test.
           De fondo, el vídeo (decorativo). --><section class="v7hero" aria-labelledby="hero-titulo" data-placeholder="true"><!-- v7: vídeo a pantalla completa (como en la v5) y el texto centrado, con «se explora» a rotulador:
             distinto del titular gigante abajo a la izquierda de Roadtrip Nation. Sin botón de pausa --><div class="v7hero__video" aria-hidden="true"><picture><source media="(max-width: 47.99rem)"${addAttribute(`${VIDEO}hero-movil-poster.jpg`, "srcset")}><img class="v7hero__poster"${addAttribute(`${VIDEO}hero-escritorio-poster.jpg`, "src")} alt="" width="1280" height="720" fetchpriority="high"></picture><video class="v7hero__vid" data-hero-video autoplay muted loop playsinline preload="metadata" disablepictureinpicture tabindex="-1"><source${addAttribute(`${VIDEO}hero-movil.mp4`, "src")} type="video/mp4" media="(max-width: 47.99rem)"><source${addAttribute(`${VIDEO}hero-escritorio.mp4`, "src")} type="video/mp4"></video><script>
            // Con «reducir movimiento» no se reproduce: se queda el póster
            (function () {
              var v = document.currentScript.previousElementSibling;
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.preload = 'none'; v.pause(); }
            })();
          <\/script></div><div class="v7hero__texto ancho"><h1 id="hero-titulo" class="v7hero__titulo"><span class="v7hero__lema">Tu futuro no se adivina, <span class="v7hero__explora">se explora</span>.</span></h1><p class="v7hero__sub">¿No sabes qué estudiar ni a qué dedicarte? Descubre qué te interesa y qué profesiones podrían encajar contigo.</p></div></section><!-- Universidad y familias: aparcadas para más adelante (fase 1 solo bachillerato). Siguen en /v4/. --><!-- ===================== No eres el único ===================== --><section class="seccion unico v7unico" aria-labelledby="unico-titulo"><div class="ancho"><header class="cabecera cabecera--centro" data-aparece><p class="antetitulo">${unicoLima.etiqueta}</p><h2 id="unico-titulo" class="titular titular--unico">${unescapeHTML(cursiva(unicoLima.titulo, unicoLima.resaltado))}</h2><p class="cabecera__sub">${unicoLima.preguntas}</p></header><ul data-aparece class="unico__lista" role="list" aria-label="Testimonios" tabindex="0">${unicoLima.personas.map((p0) => ({
			...p0,
			...unicoV7Cambios[p0.nombre] ?? {},
			universidad: false
		})).map((p) => renderTemplate`<li${addAttribute(["tarjeta", { "tarjeta--uni": p.universidad }], "class:list")} data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 480,
			"height": 420,
			"quality": 70,
			"class": "tarjeta__foto"
		})}<div class="tarjeta__texto"><p class="tarjeta__cita">«${p.cita}»</p><p class="tarjeta__firma">— ${p.nombre}, ${p.edad}</p></div></li>`)}</ul></div></section><!-- ===================== ¿Qué es NextYou? (v7: fondo negro, párrafo corto y directo) ===================== --><section id="que-es" class="v7que" aria-labelledby="que-titulo"><div class="ancho v7que__rejilla"><div class="v7que__texto" data-aparece><h2 id="que-titulo" class="v7que__tit">¿Qué es <span class="que__marca"><span class="que__logo-d">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "logo--grande" })}</span><span class="que__logo-f" aria-hidden="true"><span class="que__next">Next</span>${renderComponent($$result, "LogoV3", $$LogoV3, {
			"clase": "logo--grande",
			"solo": "you"
		})}</span><span class="solo-lector">NextYou</span>?</span></h2><p class="v7que__lema">${unescapeHTML(cursiva(queEsLima.lema, queEsLima.resaltado))}</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: validar el texto -->")}` })}<p class="v7que__p">${queEsLima.texto}</p></div><!-- Antes en la portada: la pregunta, el botón del test y el microtexto --><div class="v7que__accion" data-aparece><p class="v7que__pregunta">¿No sabes qué estudiar? Haz el test gratis y descubre <em>3 caminos</em> que encajan contigo.</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) -->")}` })}<a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">${hero.boton} <span aria-hidden="true">→</span></a><p class="v7que__micro">${pasosV7.micro}</p></div></div></section><!-- ===================== Cómo funciona (v7 · versión app, rica) =====================
           Ordenador: textos a la izquierda y un solo móvil fijo a la derecha (plano) que cambia de pantalla
           al llegar a cada paso (el script mueve los tres móviles a .cfa__escena). Móvil: cada paso con su móvil debajo.
           Las pantallas se animan solas (no son interactivas). Versión anterior en exploracion/_respaldo/v7-index-antes-como-rico.astro --><section id="como-funciona" class="cfa" aria-labelledby="como-titulo"><header class="cfa__cab"><p class="cfa__eti">Cómo funciona</p><h2 id="como-titulo" class="cfa__tit">De no saber qué estudiar a saber qué <u>quieres probar</u></h2><p class="cfa__sub">${comoAppLima.sub}</p></header><div class="cfa__flujo" data-cfa-flujo><ol class="cfa__pasos" role="list">${comoAppLima.pasos.map((p, i) => renderTemplate`<li class="cfa__paso"${addAttribute(i, "data-cfa-paso")}><div class="cfa__txt"><p class="cfa__num"><span aria-hidden="true">0${i + 1}</span>${p.eti}</p><h3>${p.titulo}</h3><p class="cfa__p">${p.texto}</p><ul class="cfa__lista" role="list">${p.puntos.map((t) => renderTemplate`<li>${unescapeHTML(t)}</li>`)}</ul>${p.nota && renderTemplate`<p class="cfa__p">${p.nota}</p>`}${p.cierre && renderTemplate`<p class="cfa__cierre">${p.cierre}</p>`}</div><div class="cfa__hueco"${addAttribute(i, "data-cfa-hueco")}>${i === 0 && renderTemplate`<div class="cfa-app cfa-app--1" aria-hidden="true" data-cfa-app="0"><div class="cfa-tel"><div class="cfa-pan cfa-pan--test" data-cfa-test><div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-t-top"><span class="cfa-x">✕</span><span class="cfa-seg">${Array.from({ length: 12 }, () => renderTemplate`<i></i>`)}</span><small data-cfa-q>4/12</small></div><p class="cfa-pill">Test NextYou</p><h4 data-cfa-preg>Un sábado libre, ¿qué te apetece más?</h4><div class="cfa-ops" data-cfa-ops><span class="cfa-op"><i><svg viewBox="0 0 24 24"><path d="M4 20l4-1 11-11-3-3L5 16z"></path><path d="M14 6l3 3"></path></svg></i><b>Crear algo desde cero</b></span><span class="cfa-op"><i><svg viewBox="0 0 24 24"><path d="M9 3h6v4a2 2 0 1 0 0 4v4h-4a2 2 0 1 0-4 0H3V9h4a2 2 0 1 0 0-4V3z"></path></svg></i><b>Resolver un reto</b></span><span class="cfa-op"><i><svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="3"></circle><circle cx="16" cy="9" r="3"></circle><path d="M3 19c1-3 3-4 5-4s4 1 5 4M11 19c1-3 3-4 5-4s4 1 5 4"></path></svg></i><b>Quedar con gente</b></span><span class="cfa-op"><i><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M15.5 8.5l-2 5-5 2 2-5z"></path></svg></i><b>Descubrir un sitio nuevo</b></span></div><div class="cfa-perfil"><p>Tu perfil se está formando</p><span style="--v:62%" data-cfa-r="0"><small>Creatividad</small><i><b></b></i></span><span style="--v:40%" data-cfa-r="1"><small>Autonomía</small><i><b></b></i></span><span style="--v:28%" data-cfa-r="2"><small>Ayudar a otros</small><i><b></b></i></span></div><span class="cfa-cta cfa-off" data-cfa-cta>Continuar</span></div></div><div class="cfa-flota cfa-flota--a" data-cfa-insight><i><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"></path></svg></i><span><b data-cfa-insight-tx>Te mueve crear cosas nuevas</b></span></div></div>`}${i === 1 && renderTemplate`<div class="cfa-app cfa-app--2" aria-hidden="true" data-cfa-app="1"><div class="cfa-tel"><div class="cfa-pan cfa-pan--cam" data-cfa-caminos data-placeholder="true"><div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-c-top"><small>¡Listo, Lucía!</small><h4>Tus <em>3</em> caminos</h4><p>Elegidos con tus respuestas</p></div><div class="cfa-c-lista" data-cfa-lista><span class="cfa-tu" aria-hidden="true"><i></i>Tú</span><svg class="cfa-ramas" aria-hidden="true"></svg><div class="cfa-cam" data-cfa-cam="0"><span class="cfa-cam__n">1</span><span class="cfa-cam__tx"><small>El que más te pega</small><b>Creación de contenido</b></span>${renderComponent($$result, "Image", $$Image, {
			"src": noa_default,
			"alt": "",
			"width": 120,
			"height": 120,
			"class": "cfa-cam__f",
			"loading": "lazy"
		})}</div><div class="cfa-cam" data-cfa-cam="1"><span class="cfa-cam__n">2</span><span class="cfa-cam__tx"><small>El puente</small><b>Animación 3D</b></span>${renderComponent($$result, "Image", $$Image, {
			"src": laia_default,
			"alt": "",
			"width": 120,
			"height": 120,
			"class": "cfa-cam__f",
			"loading": "lazy"
		})}</div><div class="cfa-cam" data-cfa-cam="2"><span class="cfa-cam__n">3</span><span class="cfa-cam__tx"><small>El salto</small><b>Ciberseguridad</b></span>${renderComponent($$result, "Image", $$Image, {
			"src": aitana_default,
			"alt": "",
			"width": 120,
			"height": 120,
			"class": "cfa-cam__f",
			"loading": "lazy"
		})}</div></div><p class="cfa-c-pie">Toca un camino para ver cómo llegar</p><nav class="cfa-nav"><span><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9H4z"></path></svg>Inicio</span><span class="cfa-on"><svg viewBox="0 0 24 24"><path d="M5 20c0-6 3-9 7-11M12 9c3 1 6 4 7 11M12 9V3"></path></svg>Caminos</span><span><svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2"></rect><path d="M16 10l5-3v10l-5-3"></path></svg>Vídeos</span><span><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c1-4 4-6 8-6s7 2 8 6"></path></svg>Perfil</span></nav><span class="cfa-toque" data-cfa-toque></span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: textos de ejemplo de las fichas de profesión -->")}` })}<div class="cfa-ficha" data-cfa-ficha><span class="cfa-ficha__asa"></span><div class="cfa-ficha__vp"><div class="cfa-ficha__in" data-cfa-fin><div class="cfa-ficha__ban">${renderComponent($$result, "Image", $$Image, {
			"src": noa_default,
			"alt": "",
			"width": 520,
			"height": 347,
			"loading": "lazy",
			"data-cfa-ff": "0"
		})}${renderComponent($$result, "Image", $$Image, {
			"src": laia_default,
			"alt": "",
			"width": 520,
			"height": 347,
			"loading": "lazy",
			"data-cfa-ff": "1",
			"class": "cfa-on"
		})}${renderComponent($$result, "Image", $$Image, {
			"src": aitana_default,
			"alt": "",
			"width": 520,
			"height": 347,
			"loading": "lazy",
			"data-cfa-ff": "2"
		})}<span><small data-cfa-f="tag">Camino 2 · El puente</small><b data-cfa-f="nom">Animación 3D</b></span></div><p class="cfa-ficha__chips"><span data-cfa-chip>Dibujo</span><span data-cfa-chip>Tecnología</span><span data-cfa-chip>En equipo</span></p><dl><div><dt>Qué haces</dt><dd data-cfa-f="que">Das vida a personajes para videojuegos, series y anuncios.</dd></div><div><dt>Un día normal</dt><dd data-cfa-f="dia">Animas escenas y las revisas con tu equipo.</dd></div><div><dt>Por qué encaja contigo</dt><dd data-cfa-f="porque">Está cerca del dibujo, que ya te gusta.</dd></div></dl><div class="cfa-ficha__rutas"><p><b>Cómo llegar</b><small>Hay más de un camino</small></p><ul><li><i><svg viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5z"></path><path d="M6 11v5c3 2 9 2 12 0v-5"></path></svg></i><span><b data-cfa-rt>Grado en Animación</b><small data-cfa-rd>Universidad · 4 años</small></span></li><li><i><svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"></path></svg></i><span><b data-cfa-rt>Grado medio y después el superior de Animación 3D</b><small data-cfa-rd>FP · 2 + 2 años</small></span></li><li><i><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="11" rx="2"></rect><path d="M2 19h20"></path></svg></i><span><b data-cfa-rt>Curso, trabajo y especialización</b><small data-cfa-rd>1 + 2 + 1 años</small></span></li><li hidden><i><svg viewBox="0 0 24 24"><path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"></path></svg></i><span><b data-cfa-rt></b><small data-cfa-rd></small></span></li></ul></div></div></div><span class="cfa-cta">Contratar un coach</span></div></div></div><div class="cfa-flota cfa-flota--noti"><i class="cfa-logo">N</i><span><small>NextYou · ahora</small><b>Tus 3 caminos están listos</b></span></div></div>`}${i === 2 && renderTemplate`<div class="cfa-app cfa-app--3" aria-hidden="true" data-cfa-app="2"><div class="cfa-tel"><div class="cfa-pan cfa-pan--video" data-cfa-gente data-placeholder="true">${renderComponent($$result, "Image", $$Image, {
			"src": laia_v3_video_default,
			"alt": "Laia, animadora 3D, contando cómo empezó",
			"width": 640,
			"height": 800,
			"class": "cfa-vi__img",
			"loading": "lazy"
		})}<div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-vi__top"><span class="cfa-vi__quien">${renderComponent($$result, "Image", $$Image, {
			"src": laia_v3_av_default,
			"alt": "Laia, animadora 3D, contando cómo empezó",
			"width": 64,
			"height": 64,
			"loading": "lazy"
		})}<span><b>Laia, 29</b><small>Animadora 3D</small></span><span class="cfa-onda"><i></i><i></i><i></i><i></i></span></span></div><div class="cfa-vi__bot"><p class="cfa-vi__tit"><small>Animación 3D · Entrevista</small><b>Cómo empecé a animar personajes</b></p><div class="cfa-vi__barra"><i><b></b></i><span><small data-cfa-tiempo>1:12</small><small>4:05</small></span></div><div class="cfa-vi__ctrl"><i><svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v5h5"></path></svg></i><i class="cfa-vi__pausa"><svg viewBox="0 0 24 24"><path d="M9 5v14M15 5v14"></path></svg></i><i><svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5"></path></svg></i></div></div></div></div><div class="cfa-flota cfa-flota--frase" data-cfa-frase><p data-cfa-ella>«Hice un curso de animación 3D y empecé en un estudio pequeño.»</p><small>Laia, animadora 3D</small></div><div class="cfa-flota cfa-flota--gente"><span class="cfa-avs">${renderComponent($$result, "Image", $$Image, {
			"src": laia_v3_av_default,
			"alt": "Laia, animadora 3D, contando cómo empezó",
			"width": 64,
			"height": 64,
			"loading": "lazy"
		})}<i>M</i><i>J</i></span><span><small>Gente como tú</small><b>Te cuentan su camino</b></span></div></div>`}</div></li>`)}</ol><div class="cfa__escena" data-cfa-escena aria-hidden="true"><div class="cfa__halo"></div><div class="cfa__marcas"><i class="cfa-on"></i><i></i><i></i></div></div></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: precio y condiciones del coach (número de sesiones, duración) -->")}` })}<div class="cfa__prem" data-cfa-prem><div class="cfa__coach" id="acompanamiento"><div class="cfa__coach-txt"><p class="cfa__num cfa__num--prem"><span aria-hidden="true">04</span>${comoAppLima.coach.eti}</p><h3>${comoAppLima.coach.titulo}</h3><p class="cfa__p">${comoAppLima.coach.texto}</p><ul class="cfa__lista" role="list">${comoAppLima.coach.puntos.map((t) => renderTemplate`<li>${t}</li>`)}</ul><p class="cfa__micro cfa__nota-coach">El test, los caminos y las historias son gratis.</p><a class="cfa__boton cfa__boton--borde cfa__boton--coach"${addAttribute(ENLACES.acompanamiento, "href")}><span class="cfa__t cfa__t--f">Ver servicios de acompañamiento</span> <span aria-hidden="true">→</span></a></div><div class="cfa__call" aria-hidden="true" data-placeholder="true">${renderComponent($$result, "Image", $$Image, {
			"src": coach_4_default,
			"alt": "",
			"width": 900,
			"height": 600,
			"class": "cfa__call-img",
			"loading": "lazy"
		})}<span class="cfa__call-tag"><i></i>Sesión con tu coach · en directo</span><span class="cfa__call-yo"><svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="4"></circle><path d="M4 21c1-4 4-6 8-6s7 2 8 6"></path></svg><b>Tú</b></span><span class="cfa__call-bar"><i><svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path></svg></i><i><svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2"></rect><path d="M16 10l5-3v10l-5-3"></path></svg></i><i class="cfa-colgar"><svg viewBox="0 0 24 24"><path d="M3 14c5-4 13-4 18 0l-2 3-4-1v-2a10 10 0 0 0-6 0v2l-4 1z"></path></svg></i></span></div></div></div></section><!-- ===================== Los de dentro ===================== --><section id="los-de-dentro" class="seccion dentro" aria-labelledby="dentro-titulo"><div class="ancho"><header class="cabecera" data-aparece><p class="antetitulo">Su camino, contado por ellos</p><h2 id="dentro-titulo" class="titular titular--dentro">Profesionales que te cuentan <u>cómo llegaron</u> a su trabajo</h2><p class="cabecera__sub">Sin discursos. Te cuentan cómo entraron, en qué se equivocaron y cómo es su día a día.</p></header><div class="dentro__nav" data-solo-carrusel><button type="button" class="flecha" data-mover="-1" aria-label="Anterior" disabled>←</button><span class="dentro__cuenta" aria-live="polite"><span data-actual>1</span> / ${reels.length}</span><button type="button" class="flecha" data-mover="1" aria-label="Siguiente">→</button></div></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: clips de noviembre de Sara (comentario #11) -->")}` })}<ul class="reels" data-reels role="list" aria-label="Vídeos de profesionales" tabindex="0">${reels.map((p, i) => renderTemplate`<li class="reel"${addAttribute(`--i: ${i}`, "style")} data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 540,
			"height": 960,
			"loading": i < 2 ? "eager" : "lazy",
			"quality": 70,
			"class": "reel__foto"
		})}<div class="reel__pie"><p class="reel__nombre">${p.nombre}, ${p.edad}</p><p class="reel__camino">${p.camino.join(" → ")}</p><span class="reel__ver"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>${p.duracion}</span></div><button type="button" class="reel__abrir" data-visor-abrir aria-haspopup="dialog"${addAttribute(`Ver el vídeo de ${p.nombre}, ${p.profesion}, ${p.duracion}`, "aria-label")}${addAttribute(`${p.nombre}, ${p.edad}`, "data-nombre")}${addAttribute(p.profesion, "data-profesion")}${addAttribute(p.cita, "data-cita")}${addAttribute(p.duracion, "data-duracion")}${addAttribute(p.grande, "data-img")}${addAttribute(p.video ?? "", "data-video")}${addAttribute(p.subtitulos ?? "", "data-subtitulos")}${addAttribute(i, "data-indice")}${addAttribute(p.camino.join("|"), "data-camino")}${addAttribute(p.estudios, "data-estudios")}${addAttribute(p.primerTrabajo, "data-trabajo")}${addAttribute(p.martes, "data-martes")}><span class="reel__play" aria-hidden="true"><svg width="18" height="20" viewBox="0 0 12 14"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg></span></button></li>`)}</ul><div class="ancho"><div class="puntos" aria-hidden="true">${reels.map((_, i) => renderTemplate`<span${addAttribute({ activo: i === 0 }, "class:list")}></span>`)}</div></div></section><!-- ===================== La uni no es el único camino (punto 5 de Sara) ===================== --><section id="la-uni-no-es-lo-unico" class="seccion uni-no v7uni" aria-labelledby="uni-no-titulo" data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: validar el texto de esta sección -->")}` })}<div class="ancho uni-no__rejilla"><div class="uni-no__texto" data-aparece><p class="antetitulo uni-no__eti">Cómo llegar</p><h2 id="uni-no-titulo" class="titular uni-no__titulo">${unescapeHTML(cursiva(uniNoUnicoLima.titulo, uniNoUnicoLima.resaltado))}</h2><p class="uni-no__lead">${uniNoUnicoLima.texto}</p></div></div><!-- Gráfico del camino: empieza en «Tú», se abre en todas las opciones y desemboca en varias profesiones.
             PENDIENTE CLIENTA: las profesiones son de ejemplo (las mismas que en «Cómo funciona») --><div class="ancho camino8" data-aparece><div class="camino8__tu"><span>Tú</span></div><p class="camino8__rotulo camino8__rotulo--1">Tres caminos, una misma profesión</p><div class="camino8__izq" aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 50 C 50 50, 50 15.03, 100 15.03" class="camino8__l"></path><path d="M0 50 L 100 50" class="camino8__l"></path><path d="M0 50 C 50 50, 50 84.97, 100 84.97" class="camino8__l"></path></svg></div><ol class="camino8__lista" role="list" aria-label="Tres caminos para llegar a la animación 3D">${uniNoUnicoLima.rutas.map((r, k) => renderTemplate`<li${addAttribute(`--k: ${k}`, "style")}><span><b>${r.t}</b><small>${r.d}</small>${r.x && renderTemplate`<em>${r.x}</em>`}</span></li>`)}</ol><div class="camino8__der" aria-hidden="true"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 15.03 C 50 15.03, 50 50, 100 50" class="camino8__l"></path><path d="M0 50 L 100 50" class="camino8__l"></path><path d="M0 84.97 C 50 84.97, 50 50, 100 50" class="camino8__l"></path></svg></div><p class="camino8__rotulo camino8__rotulo--2">para llegar a:</p><ul class="camino8__profs" role="list" aria-label="Profesión a la que llegas"><li><span class="camino8__ic" aria-hidden="true">${unescapeHTML(iconosCromo.animacion)}</span><b>Animación 3D</b></li></ul></div></section><!-- Vídeo en grande. Mientras no haya clip, se ve la foto con un aviso. --><dialog class="visor" aria-labelledby="visor-nombre"><div class="visor__caja"><button type="button" class="visor__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><div class="visor__media"><img class="visor__img" alt=""><video class="visor__video" controls playsinline preload="metadata" hidden></video><p class="visor__aviso">Aquí irá el vídeo · <span data-visor="duracion"></span></p></div><div class="visor__texto"><p id="visor-nombre" class="visor__nombre" data-visor="nombre"></p><span class="etiqueta-marco" data-visor="profesion"></span><p class="visor__cita">«<span data-visor="cita"></span>»</p><!-- Ficha mientras no haya vídeo (PLACEHOLDER: datos de ejemplo) --><div class="visor__ficha" data-visor="ficha"><ol class="visor__camino" data-visor="camino" aria-label="Su camino"></ol><dl class="visor__datos"><div><dt>Qué estudió</dt><dd data-visor="estudios"></dd></div><div><dt>Su primer trabajo</dt><dd data-visor="trabajo"></dd></div><div><dt>Cómo es un martes</dt><dd data-visor="martes"></dd></div></dl></div><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton visor__cta">¿Te ves aquí? Haz el test</a><div class="visor__nav" data-visor="nav"><button type="button" class="flecha" data-visor-mover="-1" aria-label="Profesional anterior">←</button><span class="visor__cuenta" aria-live="polite"><span data-visor="actual"></span> / ${reels.length}</span><button type="button" class="flecha" data-visor-mover="1" aria-label="Siguiente profesional">→</button></div></div></div></dialog><!-- ===================== Sara · fondo oscuro (comentario #15). Texto provisional suyo. ===================== --><section id="quien-hay-detras" class="sara" aria-labelledby="sara-titulo"><div class="estrecho sara__rejilla"><div class="sara__texto" data-aparece><p class="antetitulo">${sara.etiqueta}</p><h2 id="sara-titulo" class="titular titular--sara">${sara.titulo}</h2><p>${sara.texto}</p><p class="firma">${sara.firma}</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: botón «Leer su historia» cuando exista la página de Sara -->")}` })}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: foto real de Sara (retrato sobrio, fondo liso, formato 4:5). Ahora hay un hueco neutro -->")}` })}<div class="sara__polaroid" data-placeholder="true"><div class="sara__hueco" role="img" aria-label="Foto de Sara, pendiente"><svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="4"></circle><path d="M4 21c1-4 4-6 8-6s7 2 8 6"></path></svg><span>Foto de Sara</span></div><p class="sara__pie"><strong>Sara</strong> · ${sara.cargo}</p></div></div></section></main>`,
		"antes-del-pie": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "antes-del-pie" }, { "default": ($$result) => renderTemplate`<aside class="fijo" aria-label="Acceso rápido al test" aria-hidden="true" inert><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${hero.boton}</a><span>8 min · gratis</span></aside>` })}`
	})}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/home-v3/index.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/home-v3/index.astro?astro&type=script&index=1&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/home-v3/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/home-v3/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/home-v3";
//#endregion
//#region \0virtual:astro:page:src/pages/home-v3/index@_@astro
var page = () => home_v3_exports;
//#endregion
export { page };
