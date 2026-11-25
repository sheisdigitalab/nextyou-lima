import { a as createComponent, o as __exportAll, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { i as $$Base, n as $$Boton, t as $$Menu } from "./Menu_yyCvNEpS.mjs";
import { n as $$Picture, r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { a as noEresElUnico, i as losDeDentro, l as quienHayDetras, n as hero, s as queEsNextYou, t as familias, u as sara } from "./home_AzZ1C02B.mjs";
import { n as $$Icono, r as $$Pie, t as resaltar } from "./resaltar_DPoRxwg5.mjs";
//#region src/components/Hero.astro
var $$Hero = createComponent(async ($$result, $$props, $$slots) => {
	const poster = hero.video ? await getImage({
		src: hero.foto,
		width: 1440,
		format: "webp"
	}) : null;
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero" aria-labelledby="hero-titulo" data-astro-cid-ge2uvauf>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}<div class="hero__media"${addAttribute(hero.placeholder ? "true" : void 0, "data-placeholder")} data-astro-cid-ge2uvauf>${hero.video ? renderTemplate`<video class="hero__video"${addAttribute(hero.video.src, "src")}${addAttribute(poster?.src, "poster")} autoplay muted loop playsinline${addAttribute(`Vídeo de ${hero.nombre}, ${hero.edad} años`, "aria-label")} data-astro-cid-ge2uvauf></video>` : renderTemplate`${renderComponent($$result, "Picture", $$Picture, {
		"src": hero.foto,
		"formats": ["avif", "webp"],
		"widths": [
			480,
			768,
			1080,
			1440,
			2e3
		],
		"sizes": "(min-width: 64rem) 54vw, 100vw",
		"alt": hero.alt,
		"loading": "eager",
		"fetchpriority": "high",
		"class": "hero__foto",
		"data-astro-cid-ge2uvauf": true
	})}`}</div><div class="hero__contenido contenedor" data-astro-cid-ge2uvauf>${hero.video && renderTemplate`<div class="hero__controles" data-astro-cid-ge2uvauf><span class="pastilla hero__pastilla" data-astro-cid-ge2uvauf><svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true" data-astro-cid-ge2uvauf><path d="M0 0l10 6-10 6z" fill="currentColor" data-astro-cid-ge2uvauf></path></svg>Ver a ${hero.nombre} · ${hero.video.duracion}</span><button class="hero__sonido" type="button" aria-pressed="false" data-astro-cid-ge2uvauf><span class="solo-lector" data-astro-cid-ge2uvauf>Activar sonido</span><svg class="ico-mudo" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ge2uvauf><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" data-astro-cid-ge2uvauf></path><path d="M17 9l5 6M22 9l-5 6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" data-astro-cid-ge2uvauf></path></svg><svg class="ico-sonido" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ge2uvauf><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" data-astro-cid-ge2uvauf></path><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round" data-astro-cid-ge2uvauf></path></svg></button></div>`}<figure class="hero__cita"${addAttribute(hero.placeholder ? "true" : void 0, "data-placeholder")} data-astro-cid-ge2uvauf><blockquote data-astro-cid-ge2uvauf><p data-astro-cid-ge2uvauf><span class="hero__comilla" data-astro-cid-ge2uvauf>«</span>${hero.cita}<span class="hero__comilla" data-astro-cid-ge2uvauf>»</span></p></blockquote><figcaption data-astro-cid-ge2uvauf><span class="hero__nombre" data-astro-cid-ge2uvauf>${hero.nombre}, ${hero.edad}</span><span class="hero__detalle" data-astro-cid-ge2uvauf>${hero.detalle}</span></figcaption></figure><div class="hero__que" data-astro-cid-ge2uvauf><h1 id="hero-titulo" class="hero__h1" data-astro-cid-ge2uvauf>${hero.titular}</h1><p class="hero__texto" data-astro-cid-ge2uvauf>${hero.texto}</p></div><div class="hero__accion" data-astro-cid-ge2uvauf>${renderComponent($$result, "Boton", $$Boton, {
		"ancho": true,
		"flecha": true,
		"data-astro-cid-ge2uvauf": true
	}, { "default": ($$result) => renderTemplate`${hero.boton}` })}${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE de decisión de la clienta: línea de precio bajo el botón -->")}` })}<ul class="hero__meta" role="list" data-astro-cid-ge2uvauf>${hero.meta.map((m, i) => renderTemplate`<li${addAttribute(["pastilla", i === 0 ? "pastilla--lima" : "pastilla--contorno"], "class:list")} data-astro-cid-ge2uvauf>${m}</li>`)}</ul></div></div></section>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/NoEresElUnico.astro
var $$NoEresElUnico = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="unico bloque" aria-labelledby="unico-titulo" data-astro-cid-vs5ofcw4><header class="unico__cabecera contenedor" data-aparece data-astro-cid-vs5ofcw4><p class="etiqueta" data-astro-cid-vs5ofcw4>${noEresElUnico.etiqueta}</p><h2 id="unico-titulo" data-astro-cid-vs5ofcw4>${unescapeHTML(resaltar(noEresElUnico.titulo, noEresElUnico.resaltado))}</h2><p class="unico__sub" data-astro-cid-vs5ofcw4>${noEresElUnico.subtitulo}</p></header><ul class="unico__lista carril" role="list" tabindex="0" aria-label="Testimonios" data-astro-cid-vs5ofcw4>${noEresElUnico.personas.map((p) => renderTemplate`<li data-astro-cid-vs5ofcw4>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}<figure class="polaroid cinta"${addAttribute(p.placeholder ? "true" : void 0, "data-placeholder")} data-astro-cid-vs5ofcw4>${renderComponent($$result, "Picture", $$Picture, {
		"src": p.foto,
		"formats": ["avif", "webp"],
		"widths": [
			320,
			480,
			640
		],
		"sizes": "(min-width: 64rem) 17rem, (min-width: 48rem) 45vw, 74vw",
		"alt": p.alt,
		"data-astro-cid-vs5ofcw4": true
	})}<blockquote class="polaroid__cita" data-astro-cid-vs5ofcw4><p data-astro-cid-vs5ofcw4>«${p.cita}»</p></blockquote><figcaption class="polaroid__firma nota" data-astro-cid-vs5ofcw4>${p.nombre}, ${p.edad}</figcaption></figure></li>`)}</ul></section>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/NoEresElUnico.astro", void 0);
//#endregion
//#region src/components/QueEs.astro
var $$QueEs = createComponent(($$result, $$props, $$slots) => {
	const insider = losDeDentro.personas[0];
	return renderTemplate`${maybeRenderHead($$result)}<section class="que claro bloque" aria-labelledby="que-titulo" data-astro-cid-33fhsu6d><div class="contenedor" data-astro-cid-33fhsu6d><header class="que__cabecera" data-aparece data-astro-cid-33fhsu6d><p class="que__pregunta" data-astro-cid-33fhsu6d><span data-astro-cid-33fhsu6d>¿Qué es</span><span class="que__marca" data-astro-cid-33fhsu6d><img${addAttribute(`${BASE}marca/logo-crema.svg`, "src")} alt="NextYou" width="230" height="54" class="que__logo" data-astro-cid-33fhsu6d>?</span></p><h2 id="que-titulo" data-astro-cid-33fhsu6d>${unescapeHTML(resaltar(queEsNextYou.titulo, queEsNextYou.resaltado, "subrayado subrayado--negro"))}</h2></header><!-- Demo del producto: lo que pasa, en cuatro pantallas --><ol class="demo" role="list" data-astro-cid-33fhsu6d><li class="demo__paso" data-astro-cid-33fhsu6d><div class="pantalla" aria-hidden="true" data-astro-cid-33fhsu6d><p class="pantalla__titulo" data-astro-cid-33fhsu6d>Sábado sin planes. ¿Qué te apetece?</p><p class="pantalla__tarea" data-astro-cid-33fhsu6d>Grabar y editar un vídeo</p><div class="pantalla__resp" data-astro-cid-33fhsu6d>${queEsNextYou.respuestas.map((r, i) => renderTemplate`<span${addAttribute({ sel: i === 3 }, "class:list")} data-astro-cid-33fhsu6d>${r}</span>`)}</div></div><h3 data-astro-cid-33fhsu6d><span class="demo__n" data-astro-cid-33fhsu6d>1</span>${queEsNextYou.pasos[0].titulo}</h3><p data-astro-cid-33fhsu6d>${queEsNextYou.pasos[0].texto}</p><span class="pastilla pastilla--lima" data-astro-cid-33fhsu6d>${queEsNextYou.pasos[0].tiempo}</span></li><li class="demo__paso" data-astro-cid-33fhsu6d><div class="pantalla" aria-hidden="true" data-astro-cid-33fhsu6d><p class="pantalla__titulo" data-astro-cid-33fhsu6d>Tus tres caminos</p>${queEsNextYou.caminos.map((c, i) => renderTemplate`<p class="pantalla__camino" data-astro-cid-33fhsu6d><span${addAttribute(["pantalla__punto", { lleno: i === 0 }], "class:list")} data-astro-cid-33fhsu6d></span>${c}</p>`)}</div><h3 data-astro-cid-33fhsu6d><span class="demo__n" data-astro-cid-33fhsu6d>2</span>${queEsNextYou.pasos[1].titulo}</h3><p data-astro-cid-33fhsu6d>${queEsNextYou.pasos[1].texto}</p><span class="pastilla pastilla--lima" data-astro-cid-33fhsu6d>${queEsNextYou.pasos[1].tiempo}</span></li><li class="demo__paso" data-astro-cid-33fhsu6d><div class="pantalla pantalla--foto" aria-hidden="true" data-astro-cid-33fhsu6d>${renderComponent($$result, "Image", $$Image, {
		"src": insider.foto,
		"alt": "",
		"width": 360,
		"height": 420,
		"class": "pantalla__img",
		"data-astro-cid-33fhsu6d": true
	})}<span class="pantalla__dur" data-astro-cid-33fhsu6d>▷ ${insider.duracion}</span><p class="pantalla__pie" data-astro-cid-33fhsu6d><strong data-astro-cid-33fhsu6d>${insider.nombre}, ${insider.edad}</strong>${insider.profesion}</p></div><h3 data-astro-cid-33fhsu6d><span class="demo__n" data-astro-cid-33fhsu6d>3</span>${queEsNextYou.pasos[2].titulo}</h3><p data-astro-cid-33fhsu6d>${queEsNextYou.pasos[2].texto}</p><span class="pastilla pastilla--lima" data-astro-cid-33fhsu6d>${queEsNextYou.pasos[2].tiempo}</span></li><li class="demo__paso" data-astro-cid-33fhsu6d><div class="pantalla" aria-hidden="true" data-astro-cid-33fhsu6d><p class="pantalla__titulo" data-astro-cid-33fhsu6d>Sesión con tu coach</p><p class="pantalla__burbuja" data-astro-cid-33fhsu6d>¿Qué te dio más energía esta semana?</p><p class="pantalla__burbuja pantalla__burbuja--tu" data-astro-cid-33fhsu6d>El reto de diseño, sin duda</p><p class="pantalla__meta" data-astro-cid-33fhsu6d>online · 1 al mes</p></div><h3 data-astro-cid-33fhsu6d><span class="demo__n" data-astro-cid-33fhsu6d>4</span>${queEsNextYou.pasos[3].titulo}</h3><p data-astro-cid-33fhsu6d>${queEsNextYou.pasos[3].texto}</p><span class="pastilla pastilla--contorno" data-astro-cid-33fhsu6d>${queEsNextYou.pasos[3].tiempo}</span></li></ol><!-- Lo que no va a pasar: integrado como una línea, no como caja de color (comentario #13) --><div class="que__pie" data-astro-cid-33fhsu6d><ul class="nopasa" role="list" aria-label="Lo que no va a pasar" data-astro-cid-33fhsu6d>${queEsNextYou.noVaAPasar.map((t) => renderTemplate`<li data-astro-cid-33fhsu6d><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" data-astro-cid-33fhsu6d><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-astro-cid-33fhsu6d></path></svg>${t}</li>`)}</ul>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE de decisión de la clienta: línea de precio bajo el botón -->")}` })}${renderComponent($$result, "Boton", $$Boton, {
		"variante": "oscuro",
		"flecha": true,
		"data-astro-cid-33fhsu6d": true
	}, { "default": ($$result) => renderTemplate`${queEsNextYou.boton}` })}</div></div></section>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/QueEs.astro", void 0);
//#endregion
//#region src/components/Reel.astro
createAstro("https://sheisdigitalab.github.io");
var $$Reel = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Reel;
	const { persona: p, sizes = "(min-width: 64rem) 17rem, 72vw" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="reel"${addAttribute(p.placeholder ? "true" : void 0, "data-placeholder")} data-astro-cid-qsmq67p2>${renderComponent($$result, "Picture", $$Picture, {
		"src": p.foto,
		"formats": ["avif", "webp"],
		"widths": [
			320,
			480,
			700
		],
		"sizes": sizes,
		"alt": p.alt,
		"class": "reel__foto",
		"data-astro-cid-qsmq67p2": true
	})}<span class="reel__duracion" data-astro-cid-qsmq67p2><svg width="10" height="11" viewBox="0 0 10 12" aria-hidden="true" data-astro-cid-qsmq67p2><path d="M1.2 1.2l7.6 4.8-7.6 4.8z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" data-astro-cid-qsmq67p2></path></svg><span class="solo-lector" data-astro-cid-qsmq67p2>Vídeo de </span>${p.duracion}</span><figcaption class="reel__pie" data-astro-cid-qsmq67p2><blockquote class="reel__cita" data-astro-cid-qsmq67p2><p data-astro-cid-qsmq67p2>«${p.cita}»</p></blockquote><span class="reel__nombre" data-astro-cid-qsmq67p2>${p.nombre}, ${p.edad}</span><span class="reel__profesion" data-astro-cid-qsmq67p2>${p.profesion}</span></figcaption></figure>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Reel.astro", void 0);
//#endregion
//#region src/components/LosDeDentro.astro
var $$LosDeDentro = createComponent(($$result, $$props, $$slots) => {
	const total = losDeDentro.personas.length;
	return renderTemplate`${maybeRenderHead($$result)}<section class="dentro bloque" aria-labelledby="dentro-titulo" data-astro-cid-uzw7sag6><header class="dentro__cabecera contenedor" data-aparece data-astro-cid-uzw7sag6><div class="dentro__intro" data-astro-cid-uzw7sag6><p class="etiqueta" data-astro-cid-uzw7sag6>${losDeDentro.etiqueta}</p><h2 id="dentro-titulo" data-astro-cid-uzw7sag6>${unescapeHTML(resaltar(losDeDentro.titulo, losDeDentro.resaltado, "mano-acento"))}</h2><p class="dentro__texto" data-astro-cid-uzw7sag6>${losDeDentro.texto}</p><p class="nota dentro__nota" aria-hidden="true" data-astro-cid-uzw7sag6><span class="solo-movil" data-astro-cid-uzw7sag6>desliza →</span><span class="solo-escritorio" data-astro-cid-uzw7sag6>dale al play ↓</span></p></div><div class="dentro__controles" data-astro-cid-uzw7sag6><button class="dentro__flecha" type="button" data-dir="-1" aria-controls="dentro-carril" data-astro-cid-uzw7sag6><span class="solo-lector" data-astro-cid-uzw7sag6>Anterior</span><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-uzw7sag6><path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uzw7sag6></path></svg></button><p class="dentro__contador" aria-live="polite" data-astro-cid-uzw7sag6><span data-actual data-astro-cid-uzw7sag6>1</span> / ${total}</p><button class="dentro__flecha" type="button" data-dir="1" aria-controls="dentro-carril" data-astro-cid-uzw7sag6><span class="solo-lector" data-astro-cid-uzw7sag6>Siguiente</span><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" data-astro-cid-uzw7sag6><path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" stroke-width="1.75" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uzw7sag6></path></svg></button></div></header><!-- PENDIENTE: vídeos de los profesionales. Cuando existan, cada tarjeta abre su vídeo. --><ul id="dentro-carril" class="dentro__carril carril" role="list" tabindex="0" aria-label="Profesionales" data-astro-cid-uzw7sag6>${losDeDentro.personas.map((p) => renderTemplate`<li data-astro-cid-uzw7sag6>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Reel", $$Reel, {
		"persona": p,
		"data-astro-cid-uzw7sag6": true
	})}</li>`)}</ul></section>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/components/LosDeDentro.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/LosDeDentro.astro", void 0);
//#endregion
//#region src/components/QuienHayDetras.astro
var $$QuienHayDetras = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="detras bloque" aria-labelledby="detras-titulo" data-astro-cid-nt3qlmup><div class="contenedor" data-astro-cid-nt3qlmup><header class="detras__cabecera" data-aparece data-astro-cid-nt3qlmup><p class="etiqueta" data-astro-cid-nt3qlmup>${quienHayDetras.etiqueta}</p><h2 id="detras-titulo" data-astro-cid-nt3qlmup>${quienHayDetras.titulo}</h2><p class="detras__sub" data-astro-cid-nt3qlmup>${quienHayDetras.subtitulo}</p></header><ul class="detras__tarjetas" role="list" data-astro-cid-nt3qlmup>${quienHayDetras.tarjetas.map((t, i) => renderTemplate`<li${addAttribute(["figura", i === 1 && "figura--clara claro"], "class:list")} data-aparece data-astro-cid-nt3qlmup><div class="figura__cabeza" data-astro-cid-nt3qlmup>${i === 0 ? renderTemplate`<ul class="caras" role="list" aria-label="Algunos Insiders" data-astro-cid-nt3qlmup>${losDeDentro.personas.map((p) => renderTemplate`<li data-astro-cid-nt3qlmup>${renderComponent($$result, "Image", $$Image, {
		"src": p.foto,
		"alt": `${p.nombre}, ${p.profesion}`,
		"width": 96,
		"height": 96,
		"class": "cara",
		"data-astro-cid-nt3qlmup": true
	})}</li>`)}</ul>` : renderTemplate`${renderComponent($$result, "Icono", $$Icono, {
		"nombre": t.icono,
		"tam": 48,
		"data-astro-cid-nt3qlmup": true
	})}`}<span${addAttribute(["pastilla", i === 0 ? "pastilla--lima" : "pastilla--negra"], "class:list")} data-astro-cid-nt3qlmup>${t.pastilla}</span></div><h3 class="figura__titulo" data-astro-cid-nt3qlmup>${t.titulo}</h3><p class="figura__texto" data-astro-cid-nt3qlmup>${t.texto}</p><ul class="figura__puntos" role="list" data-astro-cid-nt3qlmup>${t.puntos.map((pt) => renderTemplate`<li data-astro-cid-nt3qlmup>${pt}</li>`)}</ul></li>`)}</ul><div class="detras__mas" data-astro-cid-nt3qlmup>${renderComponent($$result, "Boton", $$Boton, {
		"href": ENLACES.acompanamiento,
		"variante": "contorno",
		"flecha": true,
		"data-astro-cid-nt3qlmup": true
	}, { "default": ($$result) => renderTemplate`Cómo es cada uno, por dentro` })}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: precio del acompañamiento con coach -->")}` })}</div></section>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/QuienHayDetras.astro", void 0);
//#endregion
//#region src/components/Familias.astro
var $$Familias = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="familias" aria-labelledby="familias-titulo" data-astro-cid-3dfn7fkl><div class="contenedor familias__fila" data-astro-cid-3dfn7fkl>${renderComponent($$result, "Icono", $$Icono, {
		"nombre": "lado",
		"tam": 52,
		"data-astro-cid-3dfn7fkl": true
	})}<div class="familias__texto" data-astro-cid-3dfn7fkl><h2 id="familias-titulo" class="familias__titulo" data-astro-cid-3dfn7fkl>${familias.titulo}</h2><p data-astro-cid-3dfn7fkl>${familias.texto}</p></div>${renderComponent($$result, "Boton", $$Boton, {
		"href": ENLACES.familias,
		"variante": "contorno",
		"data-astro-cid-3dfn7fkl": true
	}, { "default": ($$result) => renderTemplate`${familias.boton}` })}</div></section>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Familias.astro", void 0);
//#endregion
//#region src/components/Sara.astro
var $$Sara = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="sara bloque" aria-labelledby="sara-titulo" data-astro-cid-52kbtel7><div class="sara__rejilla contenedor" data-astro-cid-52kbtel7><div class="sara__texto" data-aparece data-astro-cid-52kbtel7><p class="etiqueta" data-astro-cid-52kbtel7>${sara.etiqueta}</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: texto escrito para la propuesta, validarlo con Sara -->")}` })}<h2 id="sara-titulo" data-astro-cid-52kbtel7>${unescapeHTML(resaltar(sara.titulo, sara.resaltado))}</h2><p class="sara__parrafo" data-astro-cid-52kbtel7>${sara.texto}</p><p class="sara__firma" data-astro-cid-52kbtel7>${sara.firma}</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: página fase posterior -->")}` })}${renderComponent($$result, "Boton", $$Boton, {
		"href": ENLACES.sara,
		"variante": "contorno",
		"data-astro-cid-52kbtel7": true
	}, { "default": ($$result) => renderTemplate`${sara.boton}` })}</div><figure class="sara__foto" data-astro-cid-52kbtel7>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: foto de Sara (aún no existe). Marcador dentro de la polaroid. -->")}` })}<div class="polaroid-sara cinta" data-astro-cid-52kbtel7><div class="sara__marcador" data-placeholder="true" role="img" aria-label="Foto de Sara pendiente" data-astro-cid-52kbtel7><svg width="44" height="44" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-52kbtel7><circle cx="12" cy="9" r="4" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-52kbtel7></circle><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-astro-cid-52kbtel7></path></svg><span data-astro-cid-52kbtel7>Foto de Sara</span></div><figcaption class="sara__pie" data-astro-cid-52kbtel7><span class="sara__nombre mano" data-astro-cid-52kbtel7>Sara</span><span data-astro-cid-52kbtel7>${sara.cargo}</span></figcaption></div></figure></div></section>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Sara.astro", void 0);
//#endregion
//#region src/pages/v1/index.astro
var v1_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Menu", $$Menu, {})}${maybeRenderHead($$result)}<main id="contenido">${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "NoEresElUnico", $$NoEresElUnico, {})}${renderComponent($$result, "QueEs", $$QueEs, {})}${renderComponent($$result, "LosDeDentro", $$LosDeDentro, {})}${renderComponent($$result, "QuienHayDetras", $$QuienHayDetras, {})}${renderComponent($$result, "Familias", $$Familias, {})}${renderComponent($$result, "Sara", $$Sara, {})}</main>${renderComponent($$result, "Pie", $$Pie, {})}` })}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v1/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/v1/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/v1";
//#endregion
//#region \0virtual:astro:page:src/pages/v1/index@_@astro
var page = () => v1_exports;
//#endregion
export { page };
