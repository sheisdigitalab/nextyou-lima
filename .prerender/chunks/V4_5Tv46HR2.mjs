import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, _ as defineScriptVars, g as addAttribute, h as renderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { n as marker_default, r as $$LogoV3, t as archivo_sub_default } from "./archivo-sub_Bh8oSwcD.mjs";
import { t as fraunces_default } from "./fraunces_vSZHgqit.mjs";
//#region src/layouts/V4.astro
createAstro("https://sheisdigitalab.github.io");
var $$V4 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$V4;
	const { titulo, descripcion, actual, pagina } = Astro.props;
	const ogImagen = new URL(`${BASE}og.jpg`, Astro.site).href;
	const url = new URL(Astro.url.pathname, Astro.site).href;
	const FAMILIAS_V4 = `${BASE}v4/familias/`;
	const UNIVERSIDAD_V4 = `${BASE}v4/universidad/`;
	const menu = [
		{
			texto: "Estoy en bachillerato",
			href: `${BASE}v4/`,
			actual: actual === "bachillerato"
		},
		{
			texto: "Estoy en la universidad",
			href: UNIVERSIDAD_V4,
			actual: actual === "universidad"
		},
		{
			texto: "Soy madre o padre",
			href: FAMILIAS_V4,
			actual: actual === "familias"
		}
	];
	const pie = [
		{
			texto: "Historias",
			href: ENLACES.historias
		},
		{
			texto: "Profesiones",
			href: ENLACES.profesiones
		},
		{
			texto: "Estoy en la universidad",
			href: UNIVERSIDAD_V4
		},
		{
			texto: "Soy madre o padre",
			href: FAMILIAS_V4
		},
		{
			texto: "Sobre Sara",
			href: ENLACES.sara
		},
		{
			texto: "Privacidad",
			href: ENLACES.privacidad
		},
		{
			texto: "Datos y menores",
			href: ENLACES.menores
		}
	];
	return renderTemplate`<html lang="es"${addAttribute("no", "data-selector")}${addAttribute(pagina, "data-pagina")}><head><meta charset="utf-8"><script>(function(){${defineScriptVars({ SELECTOR: false })}
      document.documentElement.classList.add('js');
      (function (selector) {
        var p = null;
        if (selector) {
          p = new URLSearchParams(location.search).get('paleta');
          try { p = p || localStorage.getItem('nextyou-paleta-v4'); } catch (e) {}
        }
        document.documentElement.dataset.paleta = /^[adf]$/.test(p || '') ? p : 'd';
      })(SELECTOR);
    })();<\/script><meta name="viewport" content="width=device-width, initial-scale=1"><title>${titulo}</title><meta name="description"${addAttribute(descripcion, "content")}><!-- Vista previa de una versión alternativa: nunca se indexa --><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#161412"><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:site_name"${addAttribute(SITIO.nombre, "content")}><meta property="og:title"${addAttribute(titulo, "content")}><meta property="og:description"${addAttribute(descripcion, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(ogImagen, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="NextYou. Tu futuro no se adivina, se explora."><meta name="twitter:image"${addAttribute(ogImagen, "content")}><meta name="twitter:image:alt" content="NextYou. Tu futuro no se adivina, se explora."><meta name="twitter:card" content="summary_large_image"><link rel="icon"${addAttribute(`${BASE}favicon.svg`, "href")} type="image/svg+xml"><link rel="preload"${addAttribute(archivo_sub_default, "href")} as="font" type="font/woff2" crossorigin><style>${unescapeHTML(`
      @font-face { font-family: 'Archivo'; font-style: normal; font-weight: 400 800; font-stretch: 100% 105%; font-display: swap; src: url('${archivo_sub_default}') format('woff2-variations'); }
      @font-face { font-family: 'Fraunces'; font-style: normal; font-weight: 100 900; font-display: swap; src: url('${fraunces_default}') format('woff2-variations'); }
      @font-face { font-family: 'Marker'; font-style: normal; font-weight: 400; font-display: swap; src: url('${marker_default}') format('woff2'); }
    `)}</style>${renderHead($$result)}</head><body><a class="saltar" href="#contenido">Saltar al contenido</a><!-- Solo para la presentación: elegir paleta. Para quitarla, MOSTRAR_PALETAS_V4 = false en src/config.ts -->${false}<!-- ===================== Menú ===================== --><header class="menu"><div class="menu__barra ancho"><a${addAttribute(`${BASE}v4/`, "href")} class="logo" aria-label="NextYou, inicio">${renderComponent($$result, "LogoV3", $$LogoV3, {})}</a><nav class="menu__nav" aria-label="Principal"><button class="menu__abrir" type="button" aria-expanded="false" aria-controls="menu-enlaces"><span class="solo-lector">Menú</span><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M3 7h16M3 15h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button><ul id="menu-enlaces" class="menu__enlaces" role="list">${menu.map((e) => renderTemplate`<li>${e.href === "#" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: página fase posterior -->")}` })}<span class="pronto" aria-disabled="true">${e.texto}<small>pronto</small></span>` })}` : renderTemplate`<a${addAttribute(e.href, "href")}${addAttribute(e.actual ? "page" : void 0, "aria-current")}>${e.texto}</a>`}</li>`)}</ul></nav><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--sm menu__cta">Test gratis</a></div></header>${renderSlot($$result, $$slots["default"])}${renderSlot($$result, $$slots["antes-del-pie"])}<!-- Aviso de los botones del test mientras no exista (fase 2). PENDIENTE: destino real del botón. --><dialog class="aviso" aria-labelledby="aviso-titulo"><div class="aviso__caja"><button type="button" class="aviso__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><p class="aviso__nota" aria-hidden="true">casi listo</p><h2 id="aviso-titulo">El test llega muy pronto</h2><p>Estamos preparando los ocho minutos. Mientras, puedes ver cómo funciona y conocer a la gente que ya trabaja en lo suyo.</p><a${addAttribute(`${BASE}v4/#como-funciona`, "href")} class="boton">Ver cómo funciona</a>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: activar lista de espera (LISTA_ESPERA_V4 en src/config.ts), destino de los datos, textos legales y enlace de baja -->")}` })}<form class="espera"${addAttribute(true, "hidden")} action="#" method="post" novalidate><p class="espera__titulo">Te avisamos cuando abra</p><label class="espera__campo">Tu correo<input type="email" name="correo" autocomplete="email" required></label><fieldset class="espera__edad"><legend>Tu edad</legend><label><input type="radio" name="edad" value="menor-14" required>Menos de 14</label><label><input type="radio" name="edad" value="14-o-mas">14 o más</label></fieldset><label class="espera__check"><input type="checkbox" name="privacidad" required><span>He leído y acepto la <a${addAttribute(ENLACES.privacidad, "href")}>política de privacidad</a>.</span></label>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: texto legal de privacidad y datos de menores (enlace aún sin página) -->")}` })}<label class="espera__check"><input type="checkbox" name="novedades">Quiero recibir novedades de NextYou (opcional).</label><button type="submit" class="boton">Apuntarme</button></form></div></dialog><!-- ===================== Pie ===================== --><footer class="pie"><div class="estrecho"><div class="pie__arriba"><a${addAttribute(`${BASE}v4/`, "href")} class="logo logo--pie" aria-label="NextYou, inicio">${renderComponent($$result, "LogoV3", $$LogoV3, {})}</a><nav aria-label="Pie"><ul role="list">${pie.map((e) => renderTemplate`<li>${e.href === "#" ? renderTemplate`<span class="pronto" aria-disabled="true">${e.texto}<small>pronto</small></span>` : renderTemplate`<a${addAttribute(e.href, "href")}>${e.texto}</a>`}</li>`)}</ul></nav></div><p class="pie__lema">Tu futuro no se adivina. Se explora.</p></div></footer>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/V4.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/V4.astro", void 0);
//#endregion
export { $$V4 as t };
