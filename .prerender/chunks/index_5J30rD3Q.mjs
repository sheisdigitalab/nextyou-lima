import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, o as __exportAll, t as BASE } from "./config_B9QUz7ke.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { t as $$V5 } from "./V5_BWs46Cmi.mjs";
import { r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { i as losDeDentro, n as hero } from "./home_AzZ1C02B.mjs";
import { n as comoV7 } from "./v7_DHAIYzOh.mjs";
import { t as familiasPagina } from "./familias_Cw3k0GSM.mjs";
import { a as queV5, r as historiasUni } from "./v4_vKSioh4u.mjs";
//#region src/components/ComoFuncionaLinea.astro
var $$ComoFuncionaLinea = createComponent(($$result, $$props, $$slots) => {
	const [marta, dani, ivan, mia] = losDeDentro.personas;
	const gente = [
		marta,
		ivan,
		mia
	];
	const SIL = "<svg class=\"cfl-sil\" viewBox=\"0 0 200 170\" aria-hidden=\"true\"><circle cx=\"100\" cy=\"66\" r=\"36\"/><path d=\"M24 170c0-46 34-72 76-72s76 26 76 72z\"/></svg>";
	const pantCaminos = () => `<div class="cfl-pant" data-p="1">
  <div class="cfl-pant__cab"><span>Tus caminos</span><span>3</span></div>
  <p class="cfl-pant__tit">Tus <em>3</em> caminos</p>
  <p class="cfl-pant__sub">¿Por cuál empiezas?</p>
  <div class="cfl-cam">
    <svg aria-hidden="true"></svg>
    <span class="cfl-cam__tu">Tú</span>
    <div class="cfl-cam__f"><span class="cfl-cam__ic"><svg viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3.5v11L16 14z"/></svg></span><div><small>Lo que más te pega</small><b>Creación de contenido</b></div></div>
    <div class="cfl-cam__f e"><span class="cfl-cam__ic"><svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg></span><div><small>El puente</small><b>Animación 3D</b><span class="cfl-cam__ok">✓ Empiezas por aquí</span></div></div>
    <div class="cfl-cam__f salto"><span class="cfl-cam__ic"><svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5.5-3.5 9-8 11-4.5-2-8-5.5-8-11V5z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg></span><div><small>El salto</small><b>Ciberseguridad</b></div></div>
  </div>
</div>`;
	const MIC = "<svg viewBox=\"0 0 24 24\"><path d=\"M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3\"/></svg>";
	return renderTemplate`${maybeRenderHead($$result)}<section id="como-funciona" class="cfl" aria-labelledby="cfl-titulo" data-cfl data-placeholder="true"><div class="ancho cfl__rej"><div class="cfl__col" data-cfl-col><div class="cfl__hilo" aria-hidden="true"><span class="cfl__base"></span><span class="cfl__viva" data-cfl-viva></span><span class="cfl__tu" data-cfl-tu>Tú</span></div><header class="cfl__cab"><p class="cfl__eti">Cómo funciona</p><h2 id="cfl-titulo" class="cfl__tit">De no saber qué estudiar a saber qué <span>quieres probar</span>.</h2></header><div class="cfl__parada" data-k="0"><span class="cfl__punto" aria-hidden="true"></span><span class="cfl__n">01</span><h3>Haces un test</h3><p class="cfl__t">¿Cómo es tu energía? Eliges lo que más se parece a ti y en 8 minutos tienes tu perfil.</p><span class="cfl__chip">8 min · 12 preguntas</span><div class="cfl__slot" aria-hidden="true"><div class="cfl-pant" data-p="0"><div class="cfl-pant__cab"><span>Brújula interior</span><span>3 de 12</span></div><div class="cfl-pant__barra"><i></i></div><p class="cfl-pant__q">¿Cómo describirías tu energía natural?</p><div class="cfl-ops"><span><b>Creador/a</b>Imaginas y construyes</span><span><b>Estratega</b>Planificas y resuelves</span><span><b>Conector/a</b>Unes personas e ideas</span><span><b>Explorador/a</b>Buscas lo desconocido</span></div><span class="cfl-pant__sig">Siguiente →</span></div></div></div><div class="cfl__parada" data-k="1"><span class="cfl__punto" aria-hidden="true"></span><span class="cfl__n">02</span><h3>Recibes 3 caminos</h3><p class="cfl__t">Al acabar, recibes 3 caminos que encajan contigo: el que más te pega, un puente hacia algo conocido y un salto hacia algo nuevo. Tú eliges por cuál empezar.</p><div class="cfl__slot" aria-hidden="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(pantCaminos())}` })}</div></div><div class="cfl__parada" data-k="2"><span class="cfl__punto" aria-hidden="true"></span><span class="cfl__n">03</span><h3>Hablas con gente real</h3><p class="cfl__t">Recibes consejos y entrevistas con personas que ya se dedican a ello: qué estudiaron, cómo empezaron y cómo es su día a día.</p><div class="cfl__slot" aria-hidden="true"><div class="cfl-pant" data-p="2"><div class="cfl-pant__cab"><span>Entrevista</span><span class="cfl-lima">● En directo</span></div><div class="cfl-vid">${renderComponent($$result, "Image", $$Image, {
		"src": dani.foto,
		"alt": "",
		"width": 540,
		"height": 540,
		"quality": 65,
		"class": "cfl-vid__img"
	})}<span class="cfl-vid__yo">Tú</span><span class="cfl-vid__nom">${dani.nombre}, ${dani.edad} · sonido para videojuegos</span></div><div class="cfl-burb"><p class="yo">¿Qué estudiaste tú?</p><p class="ella">Empecé Informática, me pasé a una FP de Sonido… y aquí estoy.</p></div></div></div><div class="cfl-gente"><p class="cfl-gente__eti">Algunas personas con las que puedes hablar</p><ul class="cfl-gente__lista" role="list" tabindex="0" aria-label="Personas con las que puedes hablar">${gente.map((p) => renderTemplate`<li class="cfl-gente__it"><div class="cfl-gente__foto">${renderComponent($$result, "Image", $$Image, {
		"src": p.foto,
		"alt": p.alt,
		"width": 480,
		"height": 330,
		"quality": 65
	})}<span aria-hidden="true">▶ ${p.duracion}</span></div><b>${p.nombre}, ${p.edad}</b><small>${p.camino.join(" → ")}</small></li>`)}</ul></div></div><div class="cfl__parada cfl__parada--premium" data-k="3"><span class="cfl__punto" aria-hidden="true"></span><span class="cfl__n">+ Opción premium</span><h3>Un coach te acompaña</h3><p class="cfl__t">Para quien quiera ir un paso más allá: sesiones online con un coach para probar tus caminos en la vida real y decidir qué estudiar.</p><span class="cfl__chip">Opcional · de pago</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: precio, duración y frecuencia de las sesiones -->")}` })}<div class="cfl__slot cfl__slot--coach" aria-hidden="true"><div class="cfl-pant" data-p="3"><div class="cfl-pant__cab"><span>Sesión con tu coach</span><span class="cfl-lima">● En directo</span></div><div class="cfl-vid cfl-vid--coach">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(SIL)}` })}<span class="cfl-vid__yo">Tú</span><span class="cfl-vid__nom">Laura · coach</span></div><div class="cfl-burb"><p class="ella">De tus 3 caminos, ¿cuál te apetece probar primero?</p><p class="yo">Animación 3D. ¿Por dónde empiezo?</p></div></div></div><!-- Ordenador: la sesión como videollamada de escritorio --><div class="cfl-meet" aria-hidden="true" data-cfl-meet><div class="cfl-meet__barra"><i></i><i></i><i></i><span>Sesión con tu coach · NextYou</span></div><div class="cfl-meet__cuerpo"><div class="cfl-meet__tile cfl-meet__ella">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(SIL)}` })}<span class="cfl-meet__nom">Laura · coach</span><span class="cfl-meet__mic">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(MIC)}` })}</span></div><div class="cfl-meet__tile cfl-meet__tu"><span class="cfl-meet__nom">Tú</span></div><p class="cfl-meet__sub"><b>Laura:</b> <span data-cfl-subt></span></p></div><div class="cfl-meet__ctrl"><span>10:30 · Sesión 2</span><div class="cfl-meet__bot"><i></i><i></i><i></i><i class="colgar"></i></div><span></span></div></div></div><div class="cfl__final" data-cfl-fin>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) -->")}` })}<a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">Haz el test gratis <span aria-hidden="true">→</span></a><small>8 minutos · gratis</small></div></div><!-- Ordenador: móvil fijo que cambia de pantalla --><div class="cfl__fijo" aria-hidden="true" data-cfl-fijo><div class="cfl-tel"><div class="cfl-tel__in" data-cfl-tel></div></div></div></div></section>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/components/ComoFuncionaLinea.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/ComoFuncionaLinea.astro", void 0);
//#endregion
//#region src/pages/como-funciona/index.astro
var como_funciona_exports = /* @__PURE__ */ __exportAll({
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
	const iconosCromo = {
		contenido: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"7\" y=\"2.5\" width=\"10\" height=\"19\" rx=\"2.5\"/><circle cx=\"12\" cy=\"11\" r=\"2.6\"/><path d=\"M10.5 18.5h3\"/></svg>",
		animacion: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"><path d=\"M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z\"/><path d=\"M3.5 7.25L12 12l8.5-4.75M12 12v9.5\"/></svg>",
		ciber: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6z\"/><rect x=\"9\" y=\"10.5\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10.5V9a2 2 0 0 1 4 0v1.5\"/></svg>"
	};
	const posterCromo = (inicial) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="#24201c"/><text x="450" y="370" font-family="Arial,sans-serif" font-size="260" font-weight="700" fill="#c8f53b" text-anchor="middle">${inicial}</text></svg>`)}`;
	const cromos = queV5.pasos[2].cromos.map((c, n) => ({
		...c,
		camino: queV5.pasos[1].ramas[n].tipo,
		i: void 0,
		r: {
			edad: c.edad,
			foto: null,
			profesion: c.profesion,
			cita: c.cita,
			duracion: c.duracion,
			grande: posterCromo(c.nombre[0]),
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
	historiasUni.personas;
	reels[0].foto, reels[1].foto, reels[2].foto;
	`${BASE}`;
	const ICONOS_MAPA = {
		test: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"16\" rx=\"1.5\"/><path d=\"M9 9h6M9 12h6M9 15h4\"/></svg>",
		caminos: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h6M10 12c3 0 4-5 8-5M10 12c3 0 4 5 8 5M10 12h8\"/></svg>",
		persona: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"9\" r=\"3.2\"/><path d=\"M5.5 19c1.2-3.2 3.7-4.8 6.5-4.8s5.3 1.6 6.5 4.8\"/></svg>",
		coach: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"><path d=\"M5 6h14v9H10l-4 3.5V15H5z\"/><path d=\"M9 10.5h6\"/></svg>"
	};
	const cursiva = (texto, palabra) => texto.replace(palabra, `<em>${palabra}</em>`);
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": SITIO.titulo,
		"descripcion": SITIO.descripcion,
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": ""
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido"><!-- Barra para cambiar de versión (fija arriba) --><div class="comparar" role="group" aria-label="Versión de «Cómo funciona»"><span class="comparar__eti">Comparar «Cómo funciona»:</span><button type="button" data-op="a" aria-pressed="true">A · La línea</button><button type="button" data-op="b" aria-pressed="false">B · La actual</button><span class="comparar__sep" aria-hidden="true"></span><button type="button" class="comparar__pal" data-elegir="d" aria-pressed="false" aria-label="Paleta Lima"><i><b style="background:#161412"></b><b style="background:#c8f53b"></b></i></button><button type="button" class="comparar__pal" data-elegir="a" aria-pressed="false" aria-label="Paleta Azul y lima"><i><b style="background:#161412"></b><b style="background:#3b5bff"></b><b style="background:#c8f53b"></b></i></button><button type="button" class="comparar__pal" data-elegir="f" aria-pressed="false" aria-label="Paleta Original (Figma)"><i><b style="background:#1a1512"></b><b style="background:#c93b22"></b><b style="background:#f6f1e8"></b></i></button></div><div class="op op--a" data-version="a">${renderComponent($$result, "ComoFuncionaLinea", $$ComoFuncionaLinea, {})}</div><div class="op op--b" data-version="b" hidden><section id="como-funciona-b" class="v7como" aria-labelledby="como-titulo"><div class="ancho"><!-- Cabecera: etiqueta fina, la frase como titular y el mapa de pasos (animado) --><header class="v7como__cab" data-aparece><p class="v7como__eti"><span aria-hidden="true"></span>${comoV7.titulo}</p><h2 id="como-titulo" class="v7como__frase">${unescapeHTML(cursiva(comoV7.frase, comoV7.resaltado))}</h2><ol class="v7mapa" aria-label="Los cuatro pasos" data-mapa><li class="v7mapa__tu" aria-hidden="true" style="--i: 0"><span class="v7mapa__nodo">Tú</span></li>${comoV7.indice.map((p, i) => renderTemplate`<li class="v7mapa__paso"${addAttribute(`--i: ${i + 1}`, "style")}><a${addAttribute(`#paso-${i + 1}`, "href")}><span class="v7mapa__nodo" aria-hidden="true">${unescapeHTML(ICONOS_MAPA[p.ic])}</span><span class="v7mapa__t">${p.t}</span><span class="v7mapa__d">${p.d}</span></a></li>`)}</ol><p class="v7como__mail"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3.5 6.5l8.5 6.5 8.5-6.5"></path></svg>${comoV7.email}</p></header><div class="v7demo"><ol class="v7pasos" role="list" aria-label="Cómo funciona, en cuatro pasos"><li class="v7paso" id="paso-1"${addAttribute(0, "data-paso")}><div class="v7paso__texto" data-aparece><span class="v7paso__n" aria-hidden="true">01</span><h3>${comoV7.pasos[0].titulo}</h3><p class="v7paso__p">${comoV7.pasos[0].texto}</p><span class="v7paso__meta">${comoV7.pasos[0].meta}</span></div><!-- En móvil, cada paso enseña su pantalla; en escritorio se usa el móvil fijo de la derecha --><div class="v7paso__movil"><div class="v7tel v7tel--paso" aria-hidden="true"><span class="v7tel__estado" aria-hidden="true"><span>9:41</span><span class="v7tel__bat"></span></span><div class="v7tel__pant"><div class="v7pant v7pant--0" data-pant="0"><p class="v7pant__cab"><span>Brújula interior</span><span>3 de 12</span></p><span class="v7pant__barra"><span style="width:25%"></span></span><p class="v7pant__preg">¿Cómo describirías tu energía natural?</p><div class="v7pant__ops"><span class="sel"><b>Creador/a</b>Imaginas y construyes cosas nuevas</span><span><b>Estratega</b>Planificas y resuelves problemas</span><span><b>Conector/a</b>Unes personas e ideas</span><span><b>Explorador/a</b>Buscas lo desconocido</span></div><span class="v7pant__sig">Siguiente →</span></div></div></div></div></li><li class="v7paso" id="paso-2"${addAttribute(1, "data-paso")}><div class="v7paso__texto" data-aparece><span class="v7paso__n" aria-hidden="true">02</span><h3>${comoV7.pasos[1].titulo}</h3><p class="v7paso__p">${comoV7.pasos[1].texto}</p><span class="v7paso__meta">${comoV7.pasos[1].meta}</span></div><!-- En móvil, cada paso enseña su pantalla; en escritorio se usa el móvil fijo de la derecha --><div class="v7paso__movil"><div class="v7tel v7tel--paso" aria-hidden="true"><span class="v7tel__estado" aria-hidden="true"><span>9:41</span><span class="v7tel__bat"></span></span><div class="v7tel__pant"><div class="v7pant v7pant--1" data-pant="1"><p class="v7pant__cab"><span>Tus recorridos</span><span>3</span></p><!-- De «Tú» salen tres caminos finos, uno hacia cada recorrido (el del salto, punteado) --><p class="v7cam__intro">Según tus respuestas, estos son tus caminos:</p><div class="v7cam"><span class="v7cam__tu">Tú</span><svg class="v7cam__lineas" viewBox="0 0 100 300" preserveAspectRatio="none" aria-hidden="true"><path class="v7cam__l v7cam__l--1" d="M36 0 C36 30 50 50 100 50"></path><path class="v7cam__l v7cam__l--2" d="M36 0 C36 90 50 150 100 150"></path><path class="v7cam__l v7cam__l--3" d="M36 0 C36 150 50 250 100 250"></path></svg><ol class="v7cam__lista">${queV5.pasos[1].ramas.map((r, i) => renderTemplate`<li${addAttribute(["v7cam__op", `v7cam__op--${i + 1}`], "class:list")}><span>${r.tipo}</span><b>${r.ejemplo}</b><small>${r.nota}</small></li>`)}</ol></div></div><!-- Paso 3: un vídeo de «Los de dentro» dentro del móvil (PLACEHOLDER: persona de muestra) --><div class="v7pant v7pant--2 v7reel" data-pant="2" data-reel>${reels.map((r, n) => renderTemplate`<div${addAttribute(["v7reel__diapo", { activa: n === 0 }], "class:list")}${addAttribute(n, "data-reel-diapo")}>${renderComponent($$result, "Image", $$Image, {
		"src": r.foto,
		"alt": "",
		"width": 540,
		"height": 960,
		"quality": 65,
		"class": "v7reel__foto",
		"loading": "lazy"
	})}<div class="v7reel__pie"><p class="v7reel__gancho"><span>«${r.cita}»</span></p><p class="v7reel__nom">${r.nombre}, ${r.edad}</p><p class="v7reel__camino">${r.camino.join(" → ")}</p><span class="v7reel__ver">▶ Ver su día · ${r.duracion}</span></div></div>`)}<div class="v7reel__barras" aria-hidden="true">${reels.map((_, n) => renderTemplate`<i${addAttribute(n, "data-reel-barra")}><b></b></i>`)}</div><p class="v7reel__eti">Los de dentro</p></div></div></div></div></li><li class="v7paso" id="paso-3"${addAttribute(2, "data-paso")}><div class="v7paso__texto" data-aparece><span class="v7paso__n" aria-hidden="true">03</span><h3>${comoV7.pasos[2].titulo}</h3><p class="v7paso__p">${comoV7.pasos[2].texto}</p><span class="v7paso__meta">${comoV7.pasos[2].meta}</span></div><!-- En móvil, cada paso enseña su pantalla; en escritorio se usa el móvil fijo de la derecha --><div class="v7paso__movil"><div class="v7tel v7tel--paso" aria-hidden="true"><span class="v7tel__estado" aria-hidden="true"><span>9:41</span><span class="v7tel__bat"></span></span><div class="v7tel__pant"><div class="v7pant v7pant--2 v7reel" data-pant="2" data-reel>${reels.map((r, n) => renderTemplate`<div${addAttribute(["v7reel__diapo", { activa: n === 0 }], "class:list")}${addAttribute(n, "data-reel-diapo")}>${renderComponent($$result, "Image", $$Image, {
		"src": r.foto,
		"alt": "",
		"width": 540,
		"height": 960,
		"quality": 65,
		"class": "v7reel__foto",
		"loading": "lazy"
	})}<div class="v7reel__pie"><p class="v7reel__gancho"><span>«${r.cita}»</span></p><p class="v7reel__nom">${r.nombre}, ${r.edad}</p><p class="v7reel__camino">${r.camino.join(" → ")}</p><span class="v7reel__ver">▶ Ver su día · ${r.duracion}</span></div></div>`)}<div class="v7reel__barras" aria-hidden="true">${reels.map((_, n) => renderTemplate`<i${addAttribute(n, "data-reel-barra")}><b></b></i>`)}</div><p class="v7reel__eti">Los de dentro</p></div></div></div></div></li><li class="v7paso" id="paso-4"${addAttribute(3, "data-paso")}><div class="v7paso__texto" data-aparece><span class="v7paso__n" aria-hidden="true">04</span><h3>${comoV7.pasos[3].titulo}</h3><p class="v7paso__p">${comoV7.pasos[3].texto}</p><span class="v7paso__meta">${comoV7.pasos[3].meta}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: precio, duración y frecuencia de las sesiones -->")}` })}</div><!-- En móvil, cada paso enseña su pantalla; en escritorio se usa el móvil fijo de la derecha --><div class="v7paso__movil"><div class="v7tel v7tel--paso" aria-hidden="true"><span class="v7tel__estado" aria-hidden="true"><span>9:41</span><span class="v7tel__bat"></span></span><div class="v7tel__pant"><div class="v7pant v7pant--3" data-pant="3"><p class="v7pant__cab"><span>Sesión con tu coach</span><span class="v7pant__vivo">● En directo</span></p><div class="v7llam"><div class="v7llam__ella"><svg class="v7llam__silueta" viewBox="0 0 200 170" aria-hidden="true"><circle cx="100" cy="66" r="36"></circle><path d="M24 170c0-46 34-72 76-72s76 26 76 72z"></path></svg></div><span class="v7llam__nom">${queV5.pasos[3].coach.nombre} · coach</span><div class="v7llam__tu">Tú</div></div><p class="v7llam__burbuja">${comoV7.pregunta}</p><div class="v7llam__ctrl"><i></i><i></i><i class="rojo"></i></div></div></div></div></div></li></ol><div class="v7demo__fijo" aria-hidden="true"><div class="v7tel v7tel--fijo" aria-hidden="true"><span class="v7tel__estado" aria-hidden="true"><span>9:41</span><span class="v7tel__bat"></span></span><div class="v7tel__pant"><div class="v7pant v7pant--0 activa" data-pant="0"><p class="v7pant__cab"><span>Brújula interior</span><span>3 de 12</span></p><span class="v7pant__barra"><span style="width:25%"></span></span><p class="v7pant__preg">¿Cómo describirías tu energía natural?</p><div class="v7pant__ops"><span class="sel"><b>Creador/a</b>Imaginas y construyes cosas nuevas</span><span><b>Estratega</b>Planificas y resuelves problemas</span><span><b>Conector/a</b>Unes personas e ideas</span><span><b>Explorador/a</b>Buscas lo desconocido</span></div><span class="v7pant__sig">Siguiente →</span></div><div class="v7pant v7pant--1" data-pant="1"><p class="v7pant__cab"><span>Tus recorridos</span><span>3</span></p><!-- De «Tú» salen tres caminos finos, uno hacia cada recorrido (el del salto, punteado) --><p class="v7cam__intro">Según tus respuestas, estos son tus caminos:</p><div class="v7cam"><span class="v7cam__tu">Tú</span><svg class="v7cam__lineas" viewBox="0 0 100 300" preserveAspectRatio="none" aria-hidden="true"><path class="v7cam__l v7cam__l--1" d="M36 0 C36 30 50 50 100 50"></path><path class="v7cam__l v7cam__l--2" d="M36 0 C36 90 50 150 100 150"></path><path class="v7cam__l v7cam__l--3" d="M36 0 C36 150 50 250 100 250"></path></svg><ol class="v7cam__lista">${queV5.pasos[1].ramas.map((r, i) => renderTemplate`<li${addAttribute(["v7cam__op", `v7cam__op--${i + 1}`], "class:list")}><span>${r.tipo}</span><b>${r.ejemplo}</b><small>${r.nota}</small></li>`)}</ol></div></div><!-- Paso 3: un vídeo de «Los de dentro» dentro del móvil (PLACEHOLDER: persona de muestra) --><div class="v7pant v7pant--2 v7reel" data-pant="2" data-reel>${reels.map((r, n) => renderTemplate`<div${addAttribute(["v7reel__diapo", { activa: n === 0 }], "class:list")}${addAttribute(n, "data-reel-diapo")}>${renderComponent($$result, "Image", $$Image, {
		"src": r.foto,
		"alt": "",
		"width": 540,
		"height": 960,
		"quality": 65,
		"class": "v7reel__foto",
		"loading": "lazy"
	})}<div class="v7reel__pie"><p class="v7reel__gancho"><span>«${r.cita}»</span></p><p class="v7reel__nom">${r.nombre}, ${r.edad}</p><p class="v7reel__camino">${r.camino.join(" → ")}</p><span class="v7reel__ver">▶ Ver su día · ${r.duracion}</span></div></div>`)}<div class="v7reel__barras" aria-hidden="true">${reels.map((_, n) => renderTemplate`<i${addAttribute(n, "data-reel-barra")}><b></b></i>`)}</div><p class="v7reel__eti">Los de dentro</p></div><div class="v7pant v7pant--3" data-pant="3"><p class="v7pant__cab"><span>Sesión con tu coach</span><span class="v7pant__vivo">● En directo</span></p><div class="v7llam"><div class="v7llam__ella"><svg class="v7llam__silueta" viewBox="0 0 200 170" aria-hidden="true"><circle cx="100" cy="66" r="36"></circle><path d="M24 170c0-46 34-72 76-72s76 26 76 72z"></path></svg></div><span class="v7llam__nom">${queV5.pasos[3].coach.nombre} · coach</span><div class="v7llam__tu">Tú</div></div><p class="v7llam__burbuja">${comoV7.pregunta}</p><div class="v7llam__ctrl"><i></i><i></i><i class="rojo"></i></div></div></div></div></div></div><!-- Paso 3 · las personas, en formato videollamada horizontal (móvil: carrusel con el dedo).
               PLACEHOLDER: personas de muestra; PENDIENTE: sus fotos --><div class="v7gente" data-aparece><p class="v7gente__eti">Algunas de las personas con las que puedes hablar</p><ul class="v7gente__lista" role="list">${cromos.map((c, n) => renderTemplate`<li class="v7gente__item"><div class="v7vid"${addAttribute(n, "data-k")}><span class="v7vid__ic" aria-hidden="true">${unescapeHTML(iconosCromo[c.icono])}</span><span class="v7vid__ini" aria-hidden="true">${c.nombre[0]}</span><span class="v7vid__tag">Entrevista · ${c.r.duracion}</span></div><p class="v7gente__nom"><strong>${c.nombre}, ${c.edad}</strong> · ${c.prof}</p><p class="v7gente__tray">${c.r.camino.join(" → ")}</p><button type="button" class="v7gente__ver" data-visor-abrir aria-haspopup="dialog"${addAttribute(`Ver la entrevista de ${c.nombre}, ${c.r.duracion}`, "aria-label")}${addAttribute(`${c.nombre}, ${c.edad}`, "data-nombre")}${addAttribute(c.profesion, "data-profesion")}${addAttribute(c.cita, "data-cita")}${addAttribute(c.r.duracion, "data-duracion")}${addAttribute(c.r.grande, "data-img")} data-video=""${addAttribute(c.r.camino.join("|"), "data-camino")}${addAttribute(c.estudios, "data-estudios")}${addAttribute(c.primerTrabajo, "data-trabajo")}${addAttribute(c.martes, "data-martes")}>▶ Ver la entrevista</button></li>`)}</ul></div><div class="v7como__pie" data-aparece><ul class="v7nopasa" role="list" aria-label="Lo que no va a pasar">${queV5.noVaAPasar.map((t) => renderTemplate`<li>${t}</li>`)}</ul>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) -->")}` })}<a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">${hero.boton} <span aria-hidden="true">→</span></a></div></div></section></div><dialog class="visor" aria-labelledby="visor-nombre"><div class="visor__caja"><button type="button" class="visor__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><div class="visor__media"><img class="visor__img" alt=""><video class="visor__video" controls playsinline preload="metadata" hidden></video><p class="visor__aviso">Aquí irá el vídeo · <span data-visor="duracion"></span></p></div><div class="visor__texto"><p id="visor-nombre" class="visor__nombre" data-visor="nombre"></p><span class="etiqueta-marco" data-visor="profesion"></span><p class="visor__cita">«<span data-visor="cita"></span>»</p><!-- Ficha mientras no haya vídeo (PLACEHOLDER: datos de ejemplo) --><div class="visor__ficha" data-visor="ficha"><ol class="visor__camino" data-visor="camino" aria-label="Su camino"></ol><dl class="visor__datos"><div><dt>Qué estudió</dt><dd data-visor="estudios"></dd></div><div><dt>Su primer trabajo</dt><dd data-visor="trabajo"></dd></div><div><dt>Cómo es un martes</dt><dd data-visor="martes"></dd></div></dl></div><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton visor__cta">¿Te ves aquí? Haz el test</a><div class="visor__nav" data-visor="nav"><button type="button" class="flecha" data-visor-mover="-1" aria-label="Profesional anterior">←</button><span class="visor__cuenta" aria-live="polite"><span data-visor="actual"></span> / ${reels.length}</span><button type="button" class="flecha" data-visor-mover="1" aria-label="Siguiente profesional">→</button></div></div></div></dialog></main>` })}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/como-funciona/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/como-funciona/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/como-funciona/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/como-funciona";
//#endregion
//#region \0virtual:astro:page:src/pages/como-funciona/index@_@astro
var page = () => como_funciona_exports;
//#endregion
export { page };
