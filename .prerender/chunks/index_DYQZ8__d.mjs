import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, o as __exportAll, r as ENLACES } from "./config_B9QUz7ke.mjs";
import { _ as defineScriptVars, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { t as $$V5 } from "./V5_BWs46Cmi.mjs";
import { n as $$Picture, r as $$Image, t as getImage } from "./_astro_assets_BroqqTbI.mjs";
import { i as losDeDentro, n as hero, r as historiaLucia, u as sara } from "./home_AzZ1C02B.mjs";
import { t as familiasPagina } from "./familias_Cw3k0GSM.mjs";
import { r as historiasUni, s as unicoV4, t as bifurcacion } from "./v4_vKSioh4u.mjs";
import { t as universidad } from "./universidad_CPp2J4hL.mjs";
//#region src/components/HistoriaLucia.astro
var $$HistoriaLucia = createComponent(async ($$result, $$props, $$slots) => {
	const e = historiaLucia.escenas;
	const primero = historiaLucia.pasos[0];
	const poster = (await getImage({
		src: e.dentro.foto,
		width: 640,
		format: "webp"
	})).src;
	return renderTemplate`${maybeRenderHead($$result)}<section id="como-funciona" class="historia sobre-claro" aria-labelledby="hero-titulo" data-placeholder="true" data-astro-cid-re6bnlcw>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: Lucía, Laura, Iván, Dani y Marta son personajes de muestra; sustituir por personas reales -->")}` })}<div class="ancho" data-astro-cid-re6bnlcw><!-- h1 de la página: el texto completo para buscadores («¿No sabes qué estudiar? Haz el test gratis…») --><header class="historia__intro" data-astro-cid-re6bnlcw><h1 id="hero-titulo" class="historia__h1" data-astro-cid-re6bnlcw><span class="historia__pregunta" data-astro-cid-re6bnlcw>¿No sabes qué estudiar?</span><span class="historia__resto" data-astro-cid-re6bnlcw>Haz el test gratis y descubre <em data-astro-cid-re6bnlcw>a qué te podrías dedicar</em>.</span></h1><p class="historia__entrada" data-astro-cid-re6bnlcw>${historiaLucia.entrada}</p></header><div class="historia__bloque"${addAttribute(`--gx: ${primero.brillo}`, "style")} data-astro-cid-re6bnlcw><header class="historia__cab" data-astro-cid-re6bnlcw><p class="historia__etiqueta" data-astro-cid-re6bnlcw>${historiaLucia.etiqueta}</p><h2 id="historia-titulo" class="historia__titulo" data-astro-cid-re6bnlcw>${historiaLucia.titulo} <span class="historia__mano" data-astro-cid-re6bnlcw>${historiaLucia.mano}</span></h2></header><div class="escenario" data-astro-cid-re6bnlcw><!-- Lucía: su foto, lo que piensa en cada paso y cómo lo ve --><div class="lucia" data-astro-cid-re6bnlcw><figure class="lucia__polaroid" data-astro-cid-re6bnlcw><span class="lucia__cinta" aria-hidden="true" data-astro-cid-re6bnlcw></span>${renderComponent($$result, "Image", $$Image, {
		"src": historiaLucia.lucia.foto,
		"alt": historiaLucia.lucia.alt,
		"width": 560,
		"height": 640,
		"quality": 70,
		"class": "lucia__foto",
		"data-astro-cid-re6bnlcw": true
	})}<figcaption data-astro-cid-re6bnlcw>${historiaLucia.lucia.nombre} <span data-astro-cid-re6bnlcw>· ${historiaLucia.lucia.detalle}</span></figcaption></figure><p class="lucia__voz" data-voz data-astro-cid-re6bnlcw>${primero.voz}</p><!-- Solo se anuncia cuando la persona cambia de paso, nunca con el avance automático --><p class="solo-lector" role="status" data-anuncio data-astro-cid-re6bnlcw></p><div class="animo" aria-hidden="true" data-astro-cid-re6bnlcw><small data-astro-cid-re6bnlcw>${historiaLucia.animo.titulo}</small><div class="animo__tira" data-astro-cid-re6bnlcw>${historiaLucia.pasos.map((_, i) => renderTemplate`<i${addAttribute({ on: i < primero.animo }, "class:list")} data-astro-cid-re6bnlcw></i>`)}</div><div class="animo__ext" data-astro-cid-re6bnlcw><span data-astro-cid-re6bnlcw>${historiaLucia.animo.desde}</span><span data-astro-cid-re6bnlcw>${historiaLucia.animo.hasta}</span></div></div></div><!-- El móvil con las cinco escenas (ilustración: los lectores de pantalla siguen la lista de pasos) --><div class="centro" data-astro-cid-re6bnlcw><div class="tel" aria-hidden="true" data-astro-cid-re6bnlcw><div class="tel__pantalla" data-astro-cid-re6bnlcw><div class="tel__notch" data-astro-cid-re6bnlcw></div><div class="capa activa" data-capa="0" data-astro-cid-re6bnlcw><p class="mini" data-astro-cid-re6bnlcw>${e.inicio.paso}</p><div class="barrita" data-astro-cid-re6bnlcw><i class="on" data-astro-cid-re6bnlcw></i><i data-astro-cid-re6bnlcw></i><i data-astro-cid-re6bnlcw></i><i data-astro-cid-re6bnlcw></i></div><p class="tit" data-astro-cid-re6bnlcw>${e.inicio.pregunta}</p><div class="opc" data-astro-cid-re6bnlcw>${e.inicio.opciones.map((o, i) => renderTemplate`<div${addAttribute({ sel: i === e.inicio.elegida }, "class:list")} data-astro-cid-re6bnlcw>${o}</div>`)}</div><p class="mini capa__pie" data-astro-cid-re6bnlcw>${e.inicio.pie}</p></div><div class="capa" data-capa="1" data-astro-cid-re6bnlcw><p class="mini" data-astro-cid-re6bnlcw>${e.misiones.paso}</p><div class="barrita" data-astro-cid-re6bnlcw><i class="on" data-astro-cid-re6bnlcw></i><i class="on" data-astro-cid-re6bnlcw></i><i data-astro-cid-re6bnlcw></i><i data-astro-cid-re6bnlcw></i></div><div class="pila" data-astro-cid-re6bnlcw>${e.misiones.cartas.map((c) => renderTemplate`<div class="carta" data-astro-cid-re6bnlcw><p class="mini" data-astro-cid-re6bnlcw>¿Te apetece?</p><p class="carta__tx" data-astro-cid-re6bnlcw>${c.tarea}</p>${c.foto && renderTemplate`<div class="carta__de" data-astro-cid-re6bnlcw>${renderComponent($$result, "Image", $$Image, {
		"src": c.foto,
		"alt": "",
		"width": 68,
		"height": 68,
		"quality": 60,
		"data-astro-cid-re6bnlcw": true
	})}<span data-astro-cid-re6bnlcw>Esto lo hace <b data-astro-cid-re6bnlcw>${c.quien}</b>${c.detalle && ` · ${c.detalle}`}</span></div>`}</div>`)}</div><div class="resp" data-astro-cid-re6bnlcw>${e.misiones.respuestas.map((r, i) => renderTemplate`<span${addAttribute({ p: i === 3 }, "class:list")} data-astro-cid-re6bnlcw>${r}</span>`)}</div></div><div class="capa" data-capa="2" data-astro-cid-re6bnlcw><p class="mini" data-astro-cid-re6bnlcw>Tus tres caminos</p><p class="tit capa__tit" data-astro-cid-re6bnlcw>${e.caminos.titulo}</p><div class="caminos" data-astro-cid-re6bnlcw>${e.caminos.lista.map((c) => renderTemplate`<div class="camino" data-astro-cid-re6bnlcw>${c.foto ? renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": c.foto,
		"alt": "",
		"width": 104,
		"height": 104,
		"quality": 60,
		"data-astro-cid-re6bnlcw": true
	})}` : renderTemplate`<span class="camino__ph" data-astro-cid-re6bnlcw></span>`}<div data-astro-cid-re6bnlcw><b data-astro-cid-re6bnlcw>${c.tipo}</b><span data-astro-cid-re6bnlcw>${c.profesion}</span></div></div>`)}</div><p class="capa__pie" data-astro-cid-re6bnlcw>${e.caminos.pie}</p></div><div class="capa capa--llena" data-capa="3" data-astro-cid-re6bnlcw><div class="llamada" data-astro-cid-re6bnlcw>${renderComponent($$result, "Image", $$Image, {
		"src": e.coach.foto,
		"alt": "",
		"width": 640,
		"height": 1100,
		"quality": 65,
		"class": "llamada__foto",
		"data-astro-cid-re6bnlcw": true
	})}<div class="llamada__cab" data-astro-cid-re6bnlcw><span data-astro-cid-re6bnlcw>${e.coach.nombre} · ${e.coach.rol}</span><span data-astro-cid-re6bnlcw>● ${e.coach.hora}</span></div><div class="llamada__yo" data-astro-cid-re6bnlcw>${renderComponent($$result, "Image", $$Image, {
		"src": historiaLucia.lucia.foto,
		"alt": "",
		"width": 150,
		"height": 200,
		"quality": 60,
		"data-astro-cid-re6bnlcw": true
	})}</div><p class="llamada__sub" data-astro-cid-re6bnlcw><b data-astro-cid-re6bnlcw>${e.coach.nombre}</b>${e.coach.frase}</p><div class="llamada__ctrl" data-astro-cid-re6bnlcw><i data-astro-cid-re6bnlcw></i><i class="r" data-astro-cid-re6bnlcw></i><i data-astro-cid-re6bnlcw></i></div></div></div><div class="capa capa--llena" data-capa="4" data-astro-cid-re6bnlcw><div class="dani" data-astro-cid-re6bnlcw>${e.dentro.video ? renderTemplate`<video class="dani__media"${addAttribute(e.dentro.video, "src")}${addAttribute(poster, "poster")} muted loop playsinline preload="none" data-video data-astro-cid-re6bnlcw></video>` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": e.dentro.foto,
		"alt": "",
		"width": 640,
		"height": 1100,
		"quality": 65,
		"class": "dani__media",
		"data-astro-cid-re6bnlcw": true
	})}`}<p class="mini dani__top" data-astro-cid-re6bnlcw>${e.dentro.etiqueta}</p>${!e.dentro.video && renderTemplate`<div class="dani__play" data-astro-cid-re6bnlcw>▶</div>`}<div class="dani__pie" data-astro-cid-re6bnlcw><span class="dani__stk" data-astro-cid-re6bnlcw>${e.dentro.cita}</span><p class="dani__nombre" data-astro-cid-re6bnlcw>${e.dentro.nombre}</p><p class="dani__ruta" data-astro-cid-re6bnlcw>${e.dentro.ruta}</p><div class="dani__bt" data-astro-cid-re6bnlcw>${e.dentro.boton}</div></div></div></div></div></div><div class="puntos" role="group" aria-label="Pasos de la historia" data-astro-cid-re6bnlcw>${historiaLucia.pasos.map((p, i) => renderTemplate`<button type="button"${addAttribute(i, "data-ir")}${addAttribute(`Paso ${i + 1}: ${p.titulo}. ${p.pantalla}`, "aria-label")}${addAttribute(i === 0 ? "step" : void 0, "aria-current")}${addAttribute({ on: i === 0 }, "class:list")} data-astro-cid-re6bnlcw></button>`)}</div><p class="ley" aria-hidden="true" data-astro-cid-re6bnlcw><small data-ley-c data-astro-cid-re6bnlcw>${primero.cuando}</small><b data-ley-t data-astro-cid-re6bnlcw>${primero.titulo}</b></p><button type="button" class="pausa" data-pausa data-astro-cid-re6bnlcw>Pausar</button></div><!-- Línea de tiempo: también es la versión sin JavaScript --><ol class="linea" aria-label="El recorrido de Lucía" data-astro-cid-re6bnlcw>${historiaLucia.pasos.map((p, i) => renderTemplate`<li${addAttribute({ on: i === 0 }, "class:list")}${addAttribute(i, "data-paso")} data-astro-cid-re6bnlcw><button type="button"${addAttribute(i, "data-ir")}${addAttribute(i === 0 ? "step" : void 0, "aria-current")} data-astro-cid-re6bnlcw><span class="linea__pt" aria-hidden="true" data-astro-cid-re6bnlcw>${i + 1}</span><span data-astro-cid-re6bnlcw><span class="linea__cu" data-astro-cid-re6bnlcw>${p.cuando}${p.siQuiere && renderTemplate`<span class="linea__si" data-astro-cid-re6bnlcw>si quiere</span>`}</span><span class="linea__tt" data-astro-cid-re6bnlcw>${p.titulo}</span><span class="solo-lector" data-astro-cid-re6bnlcw>${p.pantalla}</span></span></button></li>`)}</ol></div><div class="historia__pie" data-astro-cid-re6bnlcw>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: CTA a revisar con la propuesta de Elias (comentario #14) -->")}` })}<a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande" data-astro-cid-re6bnlcw>${historiaLucia.boton} <span aria-hidden="true" data-astro-cid-re6bnlcw>→</span></a><ul class="nopasa" role="list" aria-label="Lo que no va a pasar" data-astro-cid-re6bnlcw>${historiaLucia.noVaAPasar.map((t) => renderTemplate`<li data-astro-cid-re6bnlcw><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" data-astro-cid-re6bnlcw><path d="M3 8.5l3 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-re6bnlcw></path></svg>${t}</li>`)}</ul></div></div></div></section><script>(function(){${defineScriptVars({ pasos: historiaLucia.pasos })}
  (function () {
    var raiz = document.getElementById('como-funciona');
    if (!raiz) return;
    var bloque = raiz.querySelector('.historia__bloque');
    var capas = Array.prototype.slice.call(raiz.querySelectorAll('.capa'));
    var items = Array.prototype.slice.call(raiz.querySelectorAll('.linea li'));
    var tira = Array.prototype.slice.call(raiz.querySelectorAll('.animo__tira i'));
    var puntos = Array.prototype.slice.call(raiz.querySelectorAll('.puntos button'));
    var voz = raiz.querySelector('[data-voz]');
    var leyC = raiz.querySelector('[data-ley-c]');
    var leyT = raiz.querySelector('[data-ley-t]');
    var pausa = raiz.querySelector('[data-pausa]');
    var video = raiz.querySelector('[data-video]');
    var anuncio = raiz.querySelector('[data-anuncio]');
    var mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    var quieto = mql.matches;
    var actual = 0, reloj = null, pausado = quieto, visible = false;

    function ir(i) {
      actual = i;
      capas.forEach(function (c, k) {
        c.classList.remove('activa');
        if (k === i) { void c.offsetWidth; c.classList.add('activa'); }
      });
      items.forEach(function (li, k) {
        li.classList.toggle('on', k === i);
        li.classList.toggle('hecho', k < i);
        var b = li.querySelector('button');
        if (k === i) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
      });
      puntos.forEach(function (b, k) {
        b.classList.toggle('on', k === i);
        if (k === i) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
      });
      tira.forEach(function (x, k) { x.classList.toggle('on', k < pasos[i].animo); });
      if (quieto) { voz.textContent = pasos[i].voz; }
      else {
        voz.classList.add('cambia');
        setTimeout(function () { voz.textContent = pasos[i].voz; voz.classList.remove('cambia'); }, 250);
      }
      leyC.textContent = pasos[i].cuando + (pasos[i].siQuiere ? ' · si quiere' : '');
      leyT.textContent = pasos[i].titulo;
      bloque.style.setProperty('--gx', pasos[i].brillo);
      if (video) { if (i === 4) video.play().catch(function () {}); else video.pause(); }
    }
    function arrancar() {
      clearInterval(reloj);
      if (pausado || !visible) return;
      reloj = setInterval(function () { ir((actual + 1) % capas.length); }, 6500);
    }
    function parar() {
      pausado = true; clearInterval(reloj);
      pausa.textContent = 'Reproducir';
    }
    raiz.querySelectorAll('[data-ir]').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = Number(b.dataset.ir);
        ir(n); parar();
        anuncio.textContent = 'Paso ' + (n + 1) + ': ' + pasos[n].titulo + '. Lucía piensa: ' + pasos[n].voz;
      });
    });
    pausa.addEventListener('click', function () {
      if (pausado) { pausado = false; pausa.textContent = 'Pausar'; arrancar(); }
      else parar();
    });
    // Si alguien entra con el teclado en el bloque, se para el avance automático
    raiz.addEventListener('focusin', function () { if (!pausado) parar(); });
    // Solo avanza mientras el bloque está en pantalla
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) { visible = en.isIntersecting; if (visible) arrancar(); else clearInterval(reloj); });
      }, { threshold: 0.35 }).observe(bloque);
    } else { visible = true; }
    if (quieto) parar();
    // Si la persona activa «reducir movimiento» con la página abierta, se para
    mql.addEventListener && mql.addEventListener('change', function (ev) { quieto = ev.matches; if (quieto) parar(); });
    ir(0);
    arrancar();
  })();
})();<\/script>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/HistoriaLucia.astro", void 0);
//#endregion
//#region src/pages/que-es-nextyou/index.astro
var que_es_nextyou_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const modos = familiasPagina.modos;
	const reels = await Promise.all(losDeDentro.personas.map(async (p) => ({
		...p,
		grande: (await getImage({
			src: p.foto,
			width: 900,
			format: "webp"
		})).src
	})));
	const heroGrande = (await getImage({
		src: hero.foto,
		width: 900,
		format: "webp"
	})).src;
	const UNIVERSIDAD = "#universidad";
	const cursiva = (texto, palabra) => texto.replace(palabra, `<em>${palabra}</em>`);
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": SITIO.titulo,
		"descripcion": SITIO.descripcion,
		"actual": "bachillerato",
		"ruta": "que-es-nextyou/"
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido"><!-- ===================== Hero ===================== --><section class="hero" aria-label="Aisha, 21: hoy estudia diseño UX/UI" data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Picture", $$Picture, {
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
		})}<div class="hero__contenido ancho"><button type="button" class="hero__ver" data-visor-abrir aria-haspopup="dialog"${addAttribute(`${hero.nombre}, ${hero.edad}`, "data-nombre")}${addAttribute(hero.detalle, "data-profesion")}${addAttribute(hero.cita, "data-cita")} data-duracion="2 min"${addAttribute(heroGrande, "data-img")}${addAttribute(hero.video?.src ?? "", "data-video")}><svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path></svg>Ver a ${hero.nombre} · 2 min</button><div class="hero__abajo"><figure class="hero__cita"><blockquote><p>«${hero.cita}»</p></blockquote><figcaption><span class="hero__nombre">${hero.nombre}, ${hero.edad}</span><span class="hero__detalle">${hero.detalle}</span></figcaption></figure></div></div></section><!-- ===================== ¿No sabes qué estudiar? + ¿Qué es NextYou? (historia de Lucía) =====================
           Un solo bloque: el h1 y el texto de la v2 arriba, la historia de Lucía como demo y un único botón.
           Sustituye al «pase» del test, a la demo de 4 pasos y a «Lo que no va a pasar» (comentarios 9, 12 y 13 de Sara). -->${renderComponent($$result, "HistoriaLucia", $$HistoriaLucia, {})}<!-- ===================== Bifurcación: universidad y FP ===================== --><aside class="bifurca" aria-label="Para universitarios y FP"><a class="bifurca__enlace ancho"${addAttribute(UNIVERSIDAD, "href")}><span>${bifurcacion.texto}</span><strong>${bifurcacion.enlace} <span aria-hidden="true">→</span></strong></a></aside><!-- ===================== No eres el único ===================== --><section class="seccion unico" aria-labelledby="unico-titulo"><div class="ancho"><header class="cabecera" data-aparece><p class="antetitulo">${unicoV4.etiqueta}</p><h2 id="unico-titulo" class="titular titular--unico">${unescapeHTML(cursiva(unicoV4.titulo, unicoV4.resaltado))}</h2><p class="cabecera__sub">${unicoV4.subtitulo}</p></header><ul data-aparece class="unico__lista" role="list" aria-label="Testimonios" tabindex="0">${unicoV4.personas.map((p) => renderTemplate`<li${addAttribute(["tarjeta", { "tarjeta--uni": p.universidad }], "class:list")} data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 480,
			"height": 420,
			"quality": 70,
			"class": "tarjeta__foto"
		})}<div class="tarjeta__texto"><p class="tarjeta__cita">«${p.cita}»</p><p class="tarjeta__firma">— ${p.nombre}, ${p.edad}</p>${p.universidad && renderTemplate`<a class="tarjeta__enlace"${addAttribute(UNIVERSIDAD, "href")}>¿También en la uni? Mira esto →</a>`}</div></li>`)}</ul></div></section><!-- ===================== Los de dentro ===================== --><section class="seccion dentro" aria-labelledby="dentro-titulo"><div class="ancho"><header class="cabecera" data-aparece><p class="antetitulo">${losDeDentro.etiqueta}</p><h2 id="dentro-titulo" class="titular titular--dentro rotulador">${unescapeHTML(cursiva(losDeDentro.titulo, losDeDentro.resaltado))}</h2><p class="cabecera__sub">Sin discursos. Te cuentan cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.</p></header><div class="dentro__nav" data-solo-carrusel><button type="button" class="flecha" data-mover="-1" aria-label="Anterior" disabled>←</button><span class="dentro__cuenta" aria-live="polite"><span data-actual>1</span> / ${reels.length}</span><button type="button" class="flecha" data-mover="1" aria-label="Siguiente">→</button></div></div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: clips de noviembre de Sara (comentario #11) -->")}` })}<ul class="reels" data-reels role="list" aria-label="Vídeos de profesionales" tabindex="0">${reels.map((p, i) => renderTemplate`<li class="reel"${addAttribute(`--i: ${i}`, "style")} data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real -->")}` })}${renderComponent($$result, "Image", $$Image, {
			"src": p.foto,
			"alt": p.alt,
			"width": 540,
			"height": 960,
			"loading": i < 2 ? "eager" : "lazy",
			"quality": 70,
			"class": "reel__foto"
		})}<div class="reel__pie"><!-- La frase gancho, como una pegatina: encima del nombre para no tapar la cara --><p class="reel__gancho"><span>${p.cita}</span></p><p class="reel__nombre">${p.nombre}, ${p.edad}</p><p class="reel__camino">${p.camino.join(" → ")}</p><span class="reel__ver"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>Ver su día · ${p.duracion}</span></div><button type="button" class="reel__abrir" data-visor-abrir aria-haspopup="dialog"${addAttribute(`Ver el vídeo de ${p.nombre}, ${p.profesion}, ${p.duracion}`, "aria-label")}${addAttribute(`${p.nombre}, ${p.edad}`, "data-nombre")}${addAttribute(p.profesion, "data-profesion")}${addAttribute(p.cita, "data-cita")}${addAttribute(p.duracion, "data-duracion")}${addAttribute(p.grande, "data-img")}${addAttribute(p.video ?? "", "data-video")}${addAttribute(p.subtitulos ?? "", "data-subtitulos")}${addAttribute(i, "data-indice")}${addAttribute(p.camino.join("|"), "data-camino")}${addAttribute(p.estudios, "data-estudios")}${addAttribute(p.primerTrabajo, "data-trabajo")}${addAttribute(p.martes, "data-martes")}><span class="reel__play" aria-hidden="true"><svg width="18" height="20" viewBox="0 0 12 14"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg></span></button></li>`)}</ul><div class="ancho"><div class="puntos" aria-hidden="true">${reels.map((_, i) => renderTemplate`<span${addAttribute({ activo: i === 0 }, "class:list")}></span>`)}</div></div></section><!-- ===================== Universidad y FP (antes página propia) ===================== --><section id="universidad" class="seccion uni5" aria-labelledby="uni5-titulo"><div class="ancho"><header class="uni5__cabecera" data-aparece><p class="antetitulo">${universidad.hero.etiqueta}</p><h2 id="uni5-titulo" class="titular">${universidad.hero.titulo}</h2><p class="uni5__lead">${universidad.hero.lema} ${universidad.hero.texto}</p></header><ul class="uni5__caminos" role="list" data-aparece>${universidad.caminos.lista.map((c) => renderTemplate`<li><h3>${c.nombre}</h3><p>${c.texto}</p></li>`)}</ul><ul class="uni5__historias" role="list"${addAttribute(historiasUni.titulo, "aria-label")} data-aparece>${historiasUni.personas.map((p) => renderTemplate`<li data-placeholder="true">${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PLACEHOLDER: sustituir por persona real (también falta su foto) -->")}` })}<p class="uni5__cita">«${p.cita}»</p><p class="uni5__quien"><strong>${p.nombre}, ${p.edad}</strong> · ${p.recorrido.join(" → ")}</p></li>`)}</ul><div class="uni5__accion"><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${universidad.hero.boton}</a><span>${universidad.hero.meta.join(" · ")}</span></div></div></section><!-- ===================== Familias: los padres son quienes pagan ===================== --><section id="familias" class="familias" aria-labelledby="familias-titulo"><div class="estrecho familias__caja" data-aparece><div class="familias__texto"><p class="familias__para">Para madres y padres</p><h2 id="familias-titulo">Acompañar no es decidir por ellos</h2><p>Responde vuestro hijo o hija. Vosotros recibís lo que decida compartir y una guía para hablarlo en casa.</p></div><div class="familias__lado"><ul class="familias__lista" role="list" aria-label="Cómo funciona para las familias"><li><span class="familias__check"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>Él o ella decide qué se comparte</li><li><span class="familias__check"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>Sus respuestas una a una, nunca</li><li><span class="familias__check"><svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>Si queréis coach, con la familia al principio y al final</li></ul>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: precio. Cuando lo haya: Empieza gratis · si queréis coach, desde X € al mes -->")}` })}<p class="familias__futuro">Así funcionará cuando abramos el test. <button type="button" data-abrir-aviso>Si queréis, os avisamos.</button></p></div></div><!-- Dos formas de empezar --><div class="estrecho fam5" data-aparece><div class="fam5__cabecera"><h3 class="fam5__titulo">${modos.titulo}</h3><p>En las dos, quien responde es él o ella. Elegid la que os resulte más cómoda.</p></div><ul class="fam5__modos" role="list">${modos.opciones.map((o, i) => renderTemplate`<li class="fam5__modo"><span class="fam5__icono">${i === 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="7" width="20" height="13" rx="2" /><path d="M12 25h8M16 20v5" /><circle cx="11" cy="13.5" r="1.4" /><circle cx="21" cy="13.5" r="1.4" /></svg>`)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 15l21-9-7 21-4-9-10-3z" /><path d="M15 18l11-12" /></svg>`)}` })}`}</span><h4>${o.nombre}</h4><p>${o.texto}</p><ul class="fam5__datos" role="list">${o.puntos.map((pt) => renderTemplate`<li>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5l3 3L13 4.5" /></svg>`)}` })}${pt}</li>`)}</ul><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="fam5__enlace" data-abrir-aviso>${i === 0 ? "Empezar juntos" : "Enviarle el enlace"} <span aria-hidden="true">→</span></a></li>`)}</ul></div></section><!-- Vídeo en grande. Mientras no haya clip, se ve la foto con un aviso. --><dialog class="visor" aria-labelledby="visor-nombre"><div class="visor__caja"><button type="button" class="visor__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><div class="visor__media"><img class="visor__img" alt=""><video class="visor__video" controls playsinline preload="metadata" hidden></video><p class="visor__aviso">Aquí irá el vídeo · <span data-visor="duracion"></span></p></div><div class="visor__texto"><p id="visor-nombre" class="visor__nombre" data-visor="nombre"></p><span class="etiqueta-marco" data-visor="profesion"></span><p class="visor__cita">«<span data-visor="cita"></span>»</p><!-- Ficha mientras no haya vídeo (PLACEHOLDER: datos de ejemplo) --><div class="visor__ficha" data-visor="ficha"><ol class="visor__camino" data-visor="camino" aria-label="Su camino"></ol><dl class="visor__datos"><div><dt>Qué estudió</dt><dd data-visor="estudios"></dd></div><div><dt>Su primer trabajo</dt><dd data-visor="trabajo"></dd></div><div><dt>Cómo es un martes</dt><dd data-visor="martes"></dd></div></dl></div><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton visor__cta">¿Te ves aquí? Haz el test</a><div class="visor__nav" data-visor="nav"><button type="button" class="flecha" data-visor-mover="-1" aria-label="Profesional anterior">←</button><span class="visor__cuenta" aria-live="polite"><span data-visor="actual"></span> / ${reels.length}</span><button type="button" class="flecha" data-visor-mover="1" aria-label="Siguiente profesional">→</button></div></div></div></dialog><!-- ===================== Sara · fondo oscuro (comentario #15). Texto provisional suyo. ===================== --><section class="sara" aria-labelledby="sara-titulo"><div class="estrecho sara__rejilla"><div class="sara__texto" data-aparece><p class="antetitulo">${sara.etiqueta}</p><h2 id="sara-titulo" class="titular titular--sara">${sara.titulo}</h2><p>${sara.texto}</p><p class="firma">${sara.firma}</p>${ENLACES.sara === "#" ? renderTemplate`<span class="boton boton--contorno boton--pronto" aria-disabled="true">${sara.boton}<small>pronto</small></span>` : renderTemplate`<a${addAttribute(ENLACES.sara, "href")} class="boton boton--contorno">${sara.boton}</a>`}</div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: foto de Sara -->")}` })}<div class="sara__polaroid" role="img" aria-label="Foto de Sara, pendiente"><div class="sara__hueco" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"></path><circle cx="12" cy="13" r="3.5"></circle></svg><span>Aquí irá la foto de Sara</span></div><p class="sara__pie" aria-hidden="true"><strong>Sara</strong> · ${sara.cargo}</p></div></div></section><!-- ===================== Cierre: última llamada antes del pie ===================== --><section class="cierre" aria-labelledby="cierre-titulo"><div class="estrecho cierre__caja" data-aparece><p class="nota-mano" aria-hidden="true">tu turno ↓</p><h2 id="cierre-titulo" class="titular rotulador">¿Y tú, a qué te <em>podrías dedicar</em>?</h2><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--grande">${hero.boton}</a><p class="cierre__meta">8 minutos · gratis · sin crear cuenta</p></div></section></main>`,
		"antes-del-pie": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "antes-del-pie" }, { "default": ($$result) => renderTemplate`<aside class="fijo" aria-label="Acceso rápido al test" aria-hidden="true" inert><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton">${hero.boton}</a><span>8 min · gratis</span></aside>` })}`
	})}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/que-es-nextyou/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/que-es-nextyou/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/que-es-nextyou/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/que-es-nextyou";
//#endregion
//#region \0virtual:astro:page:src/pages/que-es-nextyou/index@_@astro
var page = () => que_es_nextyou_exports;
//#endregion
export { page };
