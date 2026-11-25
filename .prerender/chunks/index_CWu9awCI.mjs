import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, o as __exportAll, t as BASE } from "./config_B9QUz7ke.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { r as $$LogoV3 } from "./archivo-sub_Bh8oSwcD.mjs";
import { t as $$V5 } from "./V5_BWs46Cmi.mjs";
import { r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { n as noa_default, t as aitana_default } from "./aitana_DOl7QgDr.mjs";
import { d as uniNoUnico, i as losDeDentro, n as hero, u as sara } from "./home_AzZ1C02B.mjs";
import { a as queEsV7, i as pasosV7, o as unicoV7Cambios, r as hugoV7 } from "./v7_DHAIYzOh.mjs";
import { t as familiasPagina } from "./familias_Cw3k0GSM.mjs";
import { a as queV5, r as historiasUni, s as unicoV4 } from "./v4_vKSioh4u.mjs";
import { n as uni_ruben_default, r as uni_claudia_default, t as uni_hugo_default } from "./uni-hugo_3uafgZEB.mjs";
//#region src/assets/muestra/leo.jpg
var leo_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/leo.Cjyb4fCy.jpg",
	"width": 1e3,
	"height": 667,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/leo.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/leo.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/leo.jpg");
	}
	return target[name];
} });
//#endregion
//#region src/assets/muestra/sara.jpg
var sara_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/sara.QFvQUMvA.jpg",
	"width": 720,
	"height": 720,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/sara.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/sara.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/sara.jpg");
	}
	return target[name];
} });
//#endregion
//#region src/pages/v8/index.astro
var v8_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	familiasPagina.modos;
	const reels = await Promise.all(losDeDentro.personas.map(async (p) => ({
		...p,
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
	const posterCromo = (inicial) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#24201c"/><text x="450" y="370" font-family="Arial,sans-serif" font-size="260" font-weight="700" fill="#c8f53b" text-anchor="middle">${inicial}</text></svg>`)}`;
	const caraCromo = {
		Noa: noa_default,
		Leo: leo_default,
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
	const trayectorias = [hugoV7, ...historiasUni.personas].map((r) => ({
		...r,
		foto: fotosUni[r.nombre]
	}));
	reels[0].foto, reels[1].foto, reels[2].foto;
	const VIDEO = `${BASE}videos/`;
	const CFA = `${BASE}cfa/`;
	const cursiva = (texto, palabra) => texto.replace(palabra, `<em>${palabra}</em>`);
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": SITIO.titulo,
		"descripcion": SITIO.descripcion,
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": ""
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
          <\/script></div><div class="v7hero__texto ancho"><h1 id="hero-titulo" class="v7hero__titulo"><span class="v7hero__lema">Tu futuro no se adivina, <span class="v7hero__explora">se explora</span>.</span></h1></div></section><!-- Universidad y familias: aparcadas para más adelante (fase 1 solo bachillerato). Siguen en /v4/. --><!-- ===================== No eres el único ===================== --><section class="seccion unico v7unico" aria-labelledby="unico-titulo"><div class="ancho"><header class="cabecera cabecera--centro" data-aparece><p class="antetitulo">${unicoV4.etiqueta}</p><h2 id="unico-titulo" class="titular titular--unico">${unescapeHTML(cursiva(unicoV4.titulo, unicoV4.resaltado))}</h2></header></div><!-- Slider horizontal a todo el ancho: se desliza hasta la última tarjeta (flechas, ratón, dedo o trackpad) --><div class="unico__carril" data-aparece><ul class="unico__lista" role="list" aria-label="Testimonios" tabindex="0" data-unico-pista>${unicoV4.personas.map((p0) => ({
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
		})}<div class="tarjeta__texto"><p class="tarjeta__cita">«${p.cita}»</p><p class="tarjeta__firma">— ${p.nombre}, ${p.edad}</p></div></li>`)}</ul><div class="ancho unico__ctrl"><span class="unico__prog" aria-hidden="true"><i data-unico-barra></i></span><span class="unico__cuenta" aria-live="polite"><span data-unico-actual>1</span> / ${unicoV4.personas.length}</span><button type="button" class="flecha" data-unico-mover="-1" aria-label="Testimonio anterior" disabled>←</button><button type="button" class="flecha" data-unico-mover="1" aria-label="Testimonio siguiente">→</button></div></div></section><!-- ===================== ¿Qué es NextYou? (v7: fondo negro, párrafo corto y directo) ===================== --><section id="que-es" class="v7que" aria-labelledby="que-titulo"><div class="ancho v7que__rejilla"><div class="v7que__texto" data-aparece><h2 id="que-titulo" class="v7que__tit">¿Qué es <span class="que__marca">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "logo--grande" })}<span class="solo-lector">NextYou</span>?</span></h2><p class="v7que__lema">${unescapeHTML(cursiva(queEsV7.lema, queEsV7.resaltado))}</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: validar el texto -->")}` })}<p class="v7que__p">${queEsV7.texto}</p></div><!-- Antes en la portada: la pregunta, el botón del test y el microtexto --><div class="v7que__accion" data-aparece><p class="v7que__pregunta">¿No sabes qué estudiar? Haz el test gratis y descubre <em>3 caminos</em> que encajan contigo.</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) -->")}` })}<a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">${hero.boton} <span aria-hidden="true">→</span></a><p class="v7que__micro">${pasosV7.micro}</p></div></div></section><!-- ===================== Cómo funciona (v8) =====================
           Sustituye a la sección de la v7 por la propuesta «NextYou-como-funciona.html»: tres pasos con su pantalla de móvil
           animada (deslizable en móvil, tres columnas en escritorio). Imágenes de muestra en public/cfa/. --><section id="como-funciona" class="cfa" aria-labelledby="como-titulo"><header class="cfa__cab"><p class="cfa__eti"><i aria-hidden="true"></i>Cómo funciona</p><h2 id="como-titulo" class="cfa__tit">De no saber qué estudiar a saber qué <u>quieres probar</u></h2><p class="cfa__sub">Tres pasos. Gratis. Desde el móvil.</p></header><ol class="cfa__pasos" role="list" data-cfa-pasos=""><li class="cfa__paso"><span class="cfa__n" aria-hidden="true">1</span><h3>Haces el test</h3><p>¿Cómo es tu energía? Eliges lo que más se parece a ti y en 8 minutos tienes tu perfil. Solo te pedimos tu email para mandarte los resultados.</p><div class="cfa-app" aria-hidden="true"><div class="cfa-pan" data-cfa-test=""><div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-t-top"><span class="cfa-x">✕</span><span class="cfa-barra"><i></i></span><small>3/12</small></div><div class="cfa-t-q"><p class="cfa-mini">Brújula interior</p><h4>¿Cómo describirías tu energía natural?</h4></div><div class="cfa-ops"><span class="cfa-sel"><span class="cfa-ic"><svg viewBox="0 0 24 24"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"></path></svg></span>Creador/a<small>Construyes cosas nuevas</small></span><span><span class="cfa-ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle></svg></span>Estratega<small>Resuelves problemas</small></span><span><span class="cfa-ic"><svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="3"></circle><circle cx="16" cy="9" r="3"></circle><path d="M3 19c1-3 3-4 5-4s4 1 5 4M11 19c1-3 3-4 5-4s4 1 5 4"></path></svg></span>Conector/a<small>Unes personas</small></span><span><span class="cfa-ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M15.5 8.5l-2 5-5 2 2-5z"></path></svg></span>Explorador/a<small>Buscas lo nuevo</small></span></div><div class="cfa-t-pie"><p>Sin respuestas buenas ni malas</p><span class="cfa-cta">Continuar</span></div></div></div></li><li class="cfa__paso"><span class="cfa__n" aria-hidden="true">2</span><h3>Recibes 3 caminos</h3><p>Al acabar, recibes 3 caminos que encajan contigo: el que más te pega, un puente hacia algo conocido y un salto hacia algo nuevo.</p><div class="cfa-app" aria-hidden="true"><div class="cfa-pan cfa-vivo" data-cfa-caminos=""><div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-c-top"><small>Hola, Lucía</small><h4>Tus <em>3</em> caminos</h4></div><div class="cfa-c-lista" data-placeholder="true"><div class="cfa-cam" style="--p:40%"><img${addAttribute(`${CFA}cfa-cam-1.webp`, "src")} alt="" loading="eager" decoding="async" width="120" height="120" class="cfa-cam__f"><span class="cfa-cam__tx"><span class="cfa-tag">Lo que más te pega</span><b>Creación de contenido</b><span class="cfa-prog"><i><b></b></i>2/5</span></span><span class="cfa-fl">›</span></div><div class="cfa-cam" style="--p:20%"><img${addAttribute(`${CFA}cfa-cam-2.webp`, "src")} alt="" loading="eager" decoding="async" width="120" height="120" class="cfa-cam__f"><span class="cfa-cam__tx"><span class="cfa-tag">El puente</span><b>Animación 3D</b><span class="cfa-prog"><i><b></b></i>1/5</span></span><span class="cfa-fl">›</span></div><div class="cfa-cam" style="--p:0%"><img${addAttribute(`${CFA}cfa-cam-3.webp`, "src")} alt="" loading="eager" decoding="async" width="120" height="120" class="cfa-cam__f"><span class="cfa-cam__tx"><span class="cfa-tag">El salto</span><b>Ciberseguridad</b><span class="cfa-prog"><i><b></b></i>0/5</span></span><span class="cfa-fl">›</span></div></div><!-- PENDIENTE CLIENTA: los retos (2/5) y «Tu próximo paso» son de ejemplo --><div class="cfa-reto"><small>Tu próximo paso</small>Graba un vídeo de 30 segundos explicando algo que te guste.</div><nav class="cfa-nav"><span><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9H4z"></path></svg>Inicio</span><span class="cfa-on"><svg viewBox="0 0 24 24"><path d="M5 20c0-6 3-9 7-11M12 9c3 1 6 4 7 11M12 9V3"></path></svg>Caminos</span><span><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c1-4 4-6 8-6s7 2 8 6"></path></svg>Gente</span><span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 18c1-2 3-3 5-3s4 1 5 3"></path></svg>Perfil</span></nav></div></div></li><li class="cfa__paso"><span class="cfa__n" aria-hidden="true">3</span><h3>Hablas con gente real</h3><p>Según tus resultados, recibes consejos y acceso a entrevistas con personas que ya se dedican a ello: qué estudiaron, cómo empezaron y cómo es su día a día.</p><div class="cfa-app" aria-hidden="true"><div class="cfa-pan cfa-osc cfa-vivo" data-cfa-gente="" data-placeholder="true"><img${addAttribute(`${CFA}cfa-leo.webp`, "src")} alt="" loading="eager" decoding="async" width="600" height="800" class="cfa-v-img"><div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-v-top"><div class="cfa-v-bars"><i><b></b></i><i><b></b></i><i><b></b></i></div><div class="cfa-v-who"><img${addAttribute(`${CFA}cfa-leo-av.webp`, "src")} alt="" loading="eager" decoding="async" width="64" height="64" class="cfa-v-av"><span><b>Leo, 26</b><small>Anima personajes 3D</small></span></div></div><div class="cfa-v-bot"><div class="cfa-v-bur"><p class="cfa-yo cfa-ver">¿Qué estudiaste?</p><p class="cfa-ella cfa-ver">Dibujaba cómics y luego hice una FP de Animación 3D.</p></div><div class="cfa-v-chips"><span class="cfa-tap">¿Qué estudiaste?</span><span>¿Cómo empezaste?</span><span>¿Cómo es tu día?</span></div></div></div></div></li></ol><div class="cfa__puntos" aria-hidden="true"><i class="cfa-on"></i><i></i><i></i></div><!-- PENDIENTE CLIENTA: precio y condiciones del coach --><div class="cfa__prem"><span class="cfa__prem-av" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c1-4 4-6 8-6s7 2 8 6"></path><path d="M18 4l1.5 1.5L22 3"></path></svg></span><div><p class="cfa__prem-eti">+ Opción premium</p><p class="cfa__prem-tit">Un coach te acompaña</p><p class="cfa__prem-tx">Para quien quiera ir un paso más allá: sesiones online con un coach para probar tus caminos en la vida real y decidir qué estudiar.</p></div></div><div class="cfa__pie"><!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) --><a href="#" class="cfa__boton">Haz el test gratis <span aria-hidden="true">→</span></a><p class="cfa__micro">8 minutos · gratis · te mandamos tus resultados por email</p></div></section><!-- ===================== Los de dentro ===================== --><section id="los-de-dentro" class="seccion dentro" aria-labelledby="dentro-titulo"><div class="ancho"><header class="cabecera" data-aparece><p class="antetitulo">${losDeDentro.etiqueta}</p><h2 id="dentro-titulo" class="titular titular--dentro rotulador">Así es <em>su día a día</em></h2><p class="cabecera__sub">Sin discursos. Te cuentan cómo entraron, en qué se equivocaron y cómo es su día a día.</p></header><div class="dentro__nav" data-solo-carrusel><button type="button" class="flecha" data-mover="-1" aria-label="Anterior" disabled>←</button><span class="dentro__cuenta" aria-live="polite"><span data-actual>1</span> / ${reels.length}</span><button type="button" class="flecha" data-mover="1" aria-label="Siguiente">→</button></div></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: clips de noviembre de Sara (comentario #11) -->")}` })}<ul class="reels" data-reels role="list" aria-label="Vídeos de profesionales" tabindex="0">${reels.map((p, i) => renderTemplate`<li class="reel"${addAttribute(`--i: ${i}`, "style")} data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 540,
			"height": 960,
			"loading": i < 2 ? "eager" : "lazy",
			"quality": 70,
			"class": "reel__foto"
		})}<div class="reel__pie"><!-- La frase gancho, como una pegatina: encima del nombre para no tapar la cara --><p class="reel__gancho"><span>${p.cita}</span></p><p class="reel__nombre">${p.nombre}, ${p.edad}</p><p class="reel__camino">${p.camino.join(" → ")}</p><span class="reel__ver"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>Ver su día · ${p.duracion}</span></div><button type="button" class="reel__abrir" data-visor-abrir aria-haspopup="dialog"${addAttribute(`Ver el vídeo de ${p.nombre}, ${p.profesion}, ${p.duracion}`, "aria-label")}${addAttribute(`${p.nombre}, ${p.edad}`, "data-nombre")}${addAttribute(p.profesion, "data-profesion")}${addAttribute(p.cita, "data-cita")}${addAttribute(p.duracion, "data-duracion")}${addAttribute(p.grande, "data-img")}${addAttribute(p.video ?? "", "data-video")}${addAttribute(p.subtitulos ?? "", "data-subtitulos")}${addAttribute(i, "data-indice")}${addAttribute(p.camino.join("|"), "data-camino")}${addAttribute(p.estudios, "data-estudios")}${addAttribute(p.primerTrabajo, "data-trabajo")}${addAttribute(p.martes, "data-martes")}><span class="reel__play" aria-hidden="true"><svg width="18" height="20" viewBox="0 0 12 14"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg></span></button></li>`)}</ul><div class="ancho"><div class="puntos" aria-hidden="true">${reels.map((_, i) => renderTemplate`<span${addAttribute({ activo: i === 0 }, "class:list")}></span>`)}</div></div></section><!-- ===================== La uni no es el único camino (punto 5 de Sara) ===================== --><section id="la-uni-no-es-lo-unico" class="seccion uni-no v7uni" aria-labelledby="uni-no-titulo" data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: validar el texto de esta sección -->")}` })}<div class="ancho uni-no__rejilla"><div class="uni-no__texto" data-aparece><h2 id="uni-no-titulo" class="titular uni-no__titulo">${unescapeHTML(cursiva(uniNoUnico.titulo, uniNoUnico.resaltado))}</h2><p class="uni-no__lead">${uniNoUnico.texto}</p><ul class="uni-no__rutas" role="list" aria-label="Algunos caminos posibles">${uniNoUnico.rutas.map((r) => renderTemplate`<li>${r}</li>`)}</ul></div><!-- Carrusel con parallax: una tarjeta centrada, las de los lados asoman más pequeñas y apagadas --><div class="uni-par" data-uni-par data-aparece><div class="uni-par__pista" data-uni-pista role="region" aria-roledescription="carrusel" aria-label="Gente que cambió de camino" tabindex="0">${[
			0,
			1,
			2
		].flatMap((copia) => trayectorias.map((r, n) => renderTemplate`<article${addAttribute(["uni-par__it", { act: copia === 1 && n === 0 }], "class:list")} data-placeholder="true"${addAttribute(`${r.nombre}, ${r.edad}`, "aria-label")}${addAttribute(copia === 1 ? void 0 : "true", "aria-hidden")}>${copia === 1 && n === 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: foto real (ahora, foto de muestra de banco de imágenes) -->")}` })}`}<div class="uni-par__marco">${renderComponent($$result, "Image", $$Image, {
			"src": r.foto,
			"alt": copia === 1 ? `Retrato de muestra de ${r.nombre}` : "",
			"width": 700,
			"height": 700,
			"widths": [
				360,
				540,
				700
			],
			"sizes": "(min-width: 64rem) 22rem, 70vw",
			"loading": "eager",
			"quality": 72,
			"class": "uni-par__foto"
		})}</div><p class="uni-par__quien">${r.nombre}, ${r.edad}</p><p class="uni-par__cita">«${r.cita}»</p><span class="uni-par__ola" aria-hidden="true"></span><p class="uni-par__camino">${r.recorrido.join(" → ")}</p></article>`))}</div><div class="uni-par__puntos">${trayectorias.map((r, n) => renderTemplate`<button type="button"${addAttribute(["uni-par__punto", { on: n === 0 }], "class:list")}${addAttribute(n, "data-uni-punto")}${addAttribute(`Ver a ${r.nombre}`, "aria-label")}${addAttribute(n === 0 ? "true" : void 0, "aria-current")}></button>`)}</div></div></div></section><!-- Vídeo en grande. Mientras no haya clip, se ve la foto con un aviso. --><dialog class="visor" aria-labelledby="visor-nombre"><div class="visor__caja"><button type="button" class="visor__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><div class="visor__media"><img class="visor__img" alt=""><video class="visor__video" controls playsinline preload="metadata" hidden></video><p class="visor__aviso">Aquí irá el vídeo · <span data-visor="duracion"></span></p></div><div class="visor__texto"><p id="visor-nombre" class="visor__nombre" data-visor="nombre"></p><span class="etiqueta-marco" data-visor="profesion"></span><p class="visor__cita">«<span data-visor="cita"></span>»</p><!-- Ficha mientras no haya vídeo (PLACEHOLDER: datos de ejemplo) --><div class="visor__ficha" data-visor="ficha"><ol class="visor__camino" data-visor="camino" aria-label="Su camino"></ol><dl class="visor__datos"><div><dt>Qué estudió</dt><dd data-visor="estudios"></dd></div><div><dt>Su primer trabajo</dt><dd data-visor="trabajo"></dd></div><div><dt>Cómo es un martes</dt><dd data-visor="martes"></dd></div></dl></div><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton visor__cta">¿Te ves aquí? Haz el test</a><div class="visor__nav" data-visor="nav"><button type="button" class="flecha" data-visor-mover="-1" aria-label="Profesional anterior">←</button><span class="visor__cuenta" aria-live="polite"><span data-visor="actual"></span> / ${reels.length}</span><button type="button" class="flecha" data-visor-mover="1" aria-label="Siguiente profesional">→</button></div></div></div></dialog><!-- ===================== Sara · fondo oscuro (comentario #15). Texto provisional suyo. ===================== --><section id="quien-hay-detras" class="sara" aria-labelledby="sara-titulo"><div class="estrecho sara__rejilla"><div class="sara__texto" data-aparece><p class="antetitulo">${sara.etiqueta}</p><h2 id="sara-titulo" class="titular titular--sara">${sara.titulo}</h2><p>${sara.texto}</p><p class="firma">${sara.firma}</p>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: botón «Leer su historia» cuando exista la página de Sara -->")}` })}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: foto real de Sara. Ahora hay una foto de muestra de banco de imágenes que NO es ella -->")}` })}<div class="sara__polaroid" data-placeholder="true">${renderComponent($$result, "Image", $$Image, {
			"src": sara_default,
			"alt": "Foto de muestra, pendiente de la foto real de Sara",
			"width": 720,
			"height": 720,
			"widths": [
				360,
				540,
				720
			],
			"sizes": "(min-width: 56rem) 19rem, 80vw",
			"loading": "lazy",
			"quality": 74,
			"class": "sara__foto"
		})}<p class="sara__pie" aria-hidden="true"><strong>Sara</strong> · ${sara.cargo}</p></div></div></section><!-- ===================== Cierre: última llamada antes del pie ===================== --><section class="cierre" aria-labelledby="cierre-titulo"><div class="estrecho cierre__caja" data-aparece><p class="nota-mano" aria-hidden="true">tu turno ↓</p><h2 id="cierre-titulo" class="titular rotulador">¿Y tú, a qué te <em>podrías dedicar</em>?</h2><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">${hero.boton}</a><p class="cierre__meta">${pasosV7.micro}</p></div></section></main>`,
		"antes-del-pie": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "antes-del-pie" }, { "default": ($$result) => renderTemplate`<aside class="fijo" aria-label="Acceso rápido al test" aria-hidden="true" inert><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${hero.boton}</a><span>8 min · gratis</span></aside>` })}`
	})}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v8/index.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v8/index.astro?astro&type=script&index=1&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/v8/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/v8/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/v8";
//#endregion
//#region \0virtual:astro:page:src/pages/v8/index@_@astro
var page = () => v8_exports;
//#endregion
export { page };
