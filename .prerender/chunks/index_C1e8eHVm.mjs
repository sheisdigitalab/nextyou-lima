import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, o as __exportAll, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { a as noEresElUnico, i as losDeDentro, n as hero, s as queEsNextYou, t as familias, u as sara } from "./home_AzZ1C02B.mjs";
import { t as $$V2 } from "./V2_DZrviYZq.mjs";
//#region src/pages/v2/index.astro
var v2_exports = /* @__PURE__ */ __exportAll({
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
	const insider = reels[0];
	const heroGrande = (await getImage({
		src: hero.foto,
		width: 900,
		format: "webp"
	})).src;
	const cursiva = (texto, palabra) => texto.replace(palabra, `<em>${palabra}</em>`);
	return renderTemplate`${renderComponent($$result, "V2", $$V2, {
		"titulo": SITIO.titulo,
		"descripcion": SITIO.descripcion,
		"actual": "bachillerato"
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido"><!-- ===================== Hero ===================== --><section class="hero" aria-label="Aisha, 21: hoy estudia diseño UX/UI">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": hero.foto,
			"alt": hero.alt,
			"widths": [
				640,
				1080,
				1440,
				2e3
			],
			"sizes": "100vw",
			"loading": "eager",
			"fetchpriority": "high",
			"class": "hero__foto"
		})}<div class="hero__contenido ancho"><button type="button" class="hero__ver" data-visor-abrir aria-haspopup="dialog"${addAttribute(`${hero.nombre}, ${hero.edad}`, "data-nombre")}${addAttribute(hero.detalle, "data-profesion")}${addAttribute(hero.cita, "data-cita")} data-duracion="2 min"${addAttribute(heroGrande, "data-img")}${addAttribute(hero.video?.src ?? "", "data-video")}><svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path></svg>Ver a ${hero.nombre} · 2 min</button><div class="hero__abajo"><figure class="hero__cita"><blockquote><p>«${hero.cita}»</p></blockquote><figcaption><span class="hero__nombre">${hero.nombre}, ${hero.edad}</span><span class="hero__detalle">${hero.detalle}</span></figcaption></figure></div></div></section><!-- ===================== Qué es, en un bloque propio fuera de la portada =====================
           La portada se queda solo con la frase de la persona (Sara: demasiado texto arriba). --><section class="intro" aria-labelledby="hero-titulo"><div class="estrecho intro__rejilla" data-aparece><h1 id="hero-titulo">${hero.titular}</h1><div class="intro__texto"><p>${hero.texto}</p><div class="intro__accion"><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${hero.boton}</a><span>8 minutos · gratis · sin crear cuenta</span></div></div></div></section><!-- ===================== No eres el único ===================== --><section class="seccion unico" aria-labelledby="unico-titulo"><div class="ancho"><header class="cabecera cabecera--centro" data-aparece><p class="antetitulo">${noEresElUnico.etiqueta}</p><h2 id="unico-titulo" class="titular titular--unico">${unescapeHTML(cursiva(noEresElUnico.titulo, noEresElUnico.resaltado))}</h2><p class="cabecera__sub">${noEresElUnico.subtitulo}</p></header><ul data-aparece class="unico__lista" role="list" aria-label="Testimonios" tabindex="0">${noEresElUnico.personas.map((p) => renderTemplate`<li class="tarjeta">${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 480,
			"height": 420,
			"class": "tarjeta__foto"
		})}<div class="tarjeta__texto"><p class="tarjeta__cita">«${p.cita}»</p><p class="tarjeta__firma">— ${p.nombre}, ${p.edad}</p></div></li>`)}</ul></div></section><!-- ===================== ¿Qué es NextYou? =====================
           Fondo claro (#6), en modo pregunta con el logo (#7), titular de Sara (#8)
           y una demo del producto en lugar de las frases y del «Cómo funciona» (#9, #12).
           «Lo que no va a pasar» integrado como lista, sin caja de color (#13). --><section class="seccion que" aria-labelledby="que-titulo"><div class="estrecho"><header class="que__cabecera" data-aparece><p class="que__pregunta">¿Qué es <span class="logo logo--grande">Next<em>You</em></span>?</p><h2 id="que-titulo">${unescapeHTML(cursiva(queEsNextYou.titulo, queEsNextYou.resaltado))}</h2></header><ol data-aparece class="demo" role="list" aria-label="Cómo funciona, en cuatro pasos" tabindex="0"><li class="demo__paso"><div class="pantalla" aria-hidden="true"><p class="pantalla__titulo">Sábado sin planes. ¿Qué te apetece?</p><p class="pantalla__tarea">Grabar y editar un vídeo</p><div class="pantalla__resp">${queEsNextYou.respuestas.map((r, i) => renderTemplate`<span${addAttribute({ sel: i === 3 }, "class:list")}>${r}</span>`)}</div></div><span class="demo__n" aria-hidden="true">01</span><h3>${queEsNextYou.pasos[0].titulo}</h3><p>${queEsNextYou.pasos[0].texto}</p><span class="pastilla">${queEsNextYou.pasos[0].tiempo}</span></li><li class="demo__paso"><div class="pantalla" aria-hidden="true"><p class="pantalla__titulo">Tus tres caminos</p>${queEsNextYou.caminos.map((c, i) => renderTemplate`<p class="pantalla__camino"><span${addAttribute(["pantalla__punto", { lleno: i === 0 }], "class:list")}></span>${c}</p>`)}</div><span class="demo__n" aria-hidden="true">02</span><h3>${queEsNextYou.pasos[1].titulo}</h3><p>${queEsNextYou.pasos[1].texto}</p><span class="pastilla">${queEsNextYou.pasos[1].tiempo}</span></li><li class="demo__paso"><div class="pantalla pantalla--foto" aria-hidden="true">${renderComponent($$result, "Image", $$Image, {
			"src": insider.foto,
			"alt": "",
			"width": 360,
			"height": 420,
			"class": "pantalla__img"
		})}<span class="pantalla__dur">▷ ${insider.duracion}</span><p class="pantalla__pie"><strong>${insider.nombre}, ${insider.edad}</strong>${insider.profesion}</p></div><span class="demo__n" aria-hidden="true">03</span><h3>${queEsNextYou.pasos[2].titulo}</h3><p>${queEsNextYou.pasos[2].texto}</p><span class="pastilla">${queEsNextYou.pasos[2].tiempo}</span></li><li class="demo__paso"><div class="pantalla" aria-hidden="true"><p class="pantalla__titulo">Sesión con tu coach</p><p class="pantalla__burbuja">¿Qué te dio más energía esta semana?</p><p class="pantalla__burbuja pantalla__burbuja--tu">El reto de diseño, sin duda</p><p class="pantalla__meta">online · 1 al mes</p></div><span class="demo__n" aria-hidden="true">04</span><h3>${queEsNextYou.pasos[3].titulo}</h3><p>${queEsNextYou.pasos[3].texto}</p><span class="pastilla pastilla--contorno">${queEsNextYou.pasos[3].tiempo}</span></li></ol><p class="desliza" aria-hidden="true">Desliza para ver los cuatro pasos →</p><div class="que__pie"><ul class="nopasa" role="list" aria-label="Lo que no va a pasar">${queEsNextYou.noVaAPasar.map((t) => renderTemplate`<li><svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>${t}</li>`)}</ul>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) -->")}` })}<a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${queEsNextYou.boton}</a></div></div></section><!-- ===================== Los de dentro ===================== --><section class="seccion dentro" aria-labelledby="dentro-titulo"><div class="ancho"><header class="cabecera cabecera--centro" data-aparece><p class="antetitulo">${losDeDentro.etiqueta}</p><h2 id="dentro-titulo" class="titular titular--dentro">${unescapeHTML(cursiva(losDeDentro.titulo, losDeDentro.resaltado))}</h2><p class="cabecera__sub">Sin discursos. Te cuentan cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.</p></header><div class="dentro__nav"><button type="button" class="flecha" data-mover="-1" aria-label="Anterior" disabled>←</button><span class="dentro__cuenta" aria-live="polite"><span data-actual>1</span> / ${reels.length}</span><button type="button" class="flecha" data-mover="1" aria-label="Siguiente">→</button></div></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: clips de noviembre de Sara (comentario #11) -->")}` })}<ul class="reels" role="list" aria-label="Vídeos de profesionales" tabindex="0">${reels.map((p) => renderTemplate`<li class="reel">${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 600,
			"height": 800,
			"loading": "eager",
			"class": "reel__foto"
		})}<span class="reel__dur"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path></svg>${p.duracion}</span><div class="reel__pie"><p class="reel__nombre">${p.nombre}, ${p.edad}</p><span class="etiqueta-marco etiqueta-marco--grande">${p.profesion}</span></div><button type="button" class="reel__abrir" data-visor-abrir aria-haspopup="dialog"${addAttribute(`Ver el vídeo de ${p.nombre}, ${p.profesion}, ${p.duracion}`, "aria-label")}${addAttribute(`${p.nombre}, ${p.edad}`, "data-nombre")}${addAttribute(p.profesion, "data-profesion")}${addAttribute(p.cita, "data-cita")}${addAttribute(p.duracion, "data-duracion")}${addAttribute(p.grande, "data-img")}${addAttribute(p.video ?? "", "data-video")}><span class="reel__play" aria-hidden="true"><svg width="18" height="20" viewBox="0 0 12 14"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg></span></button></li>`)}</ul><div class="ancho"><div class="puntos" aria-hidden="true">${reels.map((_, i) => renderTemplate`<span${addAttribute({ activo: i === 0 }, "class:list")}></span>`)}</div></div></section><!-- ===================== Familias: los padres son quienes pagan ===================== --><section class="familias" aria-labelledby="familias-titulo"><div class="estrecho familias__caja" data-aparece><div><h2 id="familias-titulo">${familias.titulo}</h2><p>${familias.texto}</p></div><a${addAttribute(`${BASE}v2/familias/`, "href")} class="boton boton--oscuro">${familias.boton}</a></div></section><!-- Vídeo en grande. Mientras no haya clip, se ve la foto con un aviso. --><dialog class="visor" aria-labelledby="visor-nombre"><div class="visor__caja"><button type="button" class="visor__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><div class="visor__media"><img class="visor__img" alt=""><video class="visor__video" controls playsinline hidden></video><p class="visor__aviso">Aquí irá el vídeo · <span data-visor="duracion"></span></p></div><div class="visor__texto"><p id="visor-nombre" class="visor__nombre" data-visor="nombre"></p><span class="etiqueta-marco" data-visor="profesion"></span><p class="visor__cita">«<span data-visor="cita"></span>»</p></div></div></dialog><!-- ===================== Sara · fondo oscuro (comentario #15). Texto provisional suyo. ===================== --><section class="sara" aria-labelledby="sara-titulo"><div class="estrecho sara__rejilla"><div class="sara__texto" data-aparece><p class="antetitulo">${sara.etiqueta}</p><h2 id="sara-titulo" class="titular titular--sara">${sara.titulo}</h2><p>${sara.texto}</p><p class="firma">${sara.firma}</p><a${addAttribute(ENLACES.sara, "href")} class="boton boton--contorno">${sara.boton}</a></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: foto de Sara -->")}` })}<div class="sara__foto" role="img" aria-label="Foto de Sara, pendiente"><span class="sara__aviso" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"></path><circle cx="12" cy="13" r="3.5"></circle></svg>Aquí irá la foto de Sara</span><p><strong>Sara</strong>${sara.cargo}</p></div></div></section></main>`,
		"antes-del-pie": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "antes-del-pie" }, { "default": ($$result) => renderTemplate`<aside class="fijo" aria-label="Acceso rápido al test" aria-hidden="true" inert><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${hero.boton}</a><span>8 min · gratis</span></aside>` })}`
	})}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v2/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v2/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/v2/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/v2";
//#endregion
//#region \0virtual:astro:page:src/pages/v2/index@_@astro
var page = () => v2_exports;
//#endregion
export { page };
