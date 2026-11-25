import { a as createComponent, n as CTA_PRINCIPAL, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, h as renderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { t as archivo_default } from "./archivo_DH6hyKB1.mjs";
import { t as fraunces_default } from "./fraunces_vSZHgqit.mjs";
import { t as caveat_default } from "./caveat_BaD13xk7.mjs";
//#region src/assets/fonts/fraunces-italic.woff2?url
var fraunces_italic_default = "/C:/Program%20Files/Git/nextyou-lima/_astro/fraunces-italic.lSdLDfvT.woff2";
//#endregion
//#region src/layouts/V2.astro
createAstro("https://sheisdigitalab.github.io");
var $$V2 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$V2;
	const { titulo, descripcion, actual } = Astro.props;
	const FAMILIAS_V2 = `${BASE}v2/familias/`;
	const menu = [
		{
			texto: "Estoy en bachillerato",
			href: `${BASE}v2/`,
			actual: actual === "bachillerato"
		},
		{
			texto: "Estoy en la universidad",
			href: ENLACES.universidad,
			actual: actual === "universidad"
		},
		{
			texto: "Soy madre o padre",
			href: FAMILIAS_V2,
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
			texto: "Soy madre o padre",
			href: FAMILIAS_V2
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
	return renderTemplate`<html lang="es"><head><meta charset="utf-8"><script>
      document.documentElement.classList.add('js');
      (function () {
        var p = new URLSearchParams(location.search).get('paleta');
        try { p = p || localStorage.getItem('nextyou-paleta'); } catch (e) {}
        document.documentElement.dataset.paleta = /^[abcdo]$/.test(p || '') ? p : 'o';
      })();
    <\/script><meta name="viewport" content="width=device-width, initial-scale=1"><title>${titulo}</title><meta name="description"${addAttribute(descripcion, "content")}><!-- Vista previa de una versión alternativa: nunca se indexa --><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#161412"><link rel="icon"${addAttribute(`${BASE}favicon.svg`, "href")} type="image/svg+xml"><link rel="preload"${addAttribute(fraunces_default, "href")} as="font" type="font/woff2" crossorigin><link rel="preload"${addAttribute(archivo_default, "href")} as="font" type="font/woff2" crossorigin><style>${unescapeHTML(`
      @font-face { font-family: 'Fraunces'; font-style: normal; font-weight: 100 900; font-display: swap; src: url('${fraunces_default}') format('woff2-variations'); }
      @font-face { font-family: 'Fraunces'; font-style: italic; font-weight: 100 900; font-display: swap; src: url('${fraunces_italic_default}') format('woff2-variations'); }
      @font-face { font-family: 'Caveat'; font-style: normal; font-weight: 400; font-display: swap; src: url('${caveat_default}') format('woff2'); }
      @font-face { font-family: 'Archivo'; font-style: normal; font-weight: 100 900; font-stretch: 62% 125%; font-display: swap; src: url('${archivo_default}') format('woff2-variations'); }
    `)}</style>${renderHead($$result)}</head><body><a class="saltar" href="#contenido">Saltar al contenido</a><!-- Solo para la presentación: elegir paleta de color. Se quita al decidir. --><aside class="paletas" aria-label="Paleta de color"><button type="button" data-elegir="o" aria-pressed="false"><i><b style="background:#000"></b><b style="background:#c93a22"></b><b style="background:#e3d3be"></b></i>Original (Figma)</button><button type="button" data-elegir="a" aria-pressed="false"><i><b style="background:#f6f1e8"></b><b style="background:#3b5bff"></b><b style="background:#c8f53b"></b></i>A · Azul y lima</button><button type="button" data-elegir="b" aria-pressed="false"><i><b style="background:#f6f1e8"></b><b style="background:#c93a22"></b></i>B · Rojo teja</button><button type="button" data-elegir="c" aria-pressed="false"><i><b style="background:#161412"></b><b style="background:#6a43e0"></b></i>C · Lila</button><button type="button" data-elegir="d" aria-pressed="false"><i><b style="background:#161412"></b><b style="background:#c8f53b"></b></i>D · Lima</button></aside><!-- ===================== Menú ===================== --><header class="menu"><div class="menu__barra ancho"><a${addAttribute(`${BASE}v2/`, "href")} class="logo" aria-label="NextYou, inicio">Next<em>You</em></a><nav class="menu__nav" aria-label="Principal"><button class="menu__abrir" type="button" aria-expanded="false" aria-controls="menu-enlaces"><span class="solo-lector">Menú</span><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M3 7h16M3 15h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button><ul id="menu-enlaces" class="menu__enlaces" role="list">${menu.map((e) => renderTemplate`<li>${e.href === "#" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: página fase posterior -->")}` })}`}<a${addAttribute(e.href, "href")}${addAttribute(e.actual ? "page" : void 0, "aria-current")}>${e.texto}</a></li>`)}</ul></nav><a${addAttribute(CTA_PRINCIPAL.href, "href")} class="boton boton--sm menu__cta">Test gratis</a></div></header>${renderSlot($$result, $$slots["default"])}${renderSlot($$result, $$slots["antes-del-pie"])}<!-- ===================== Pie ===================== --><footer class="pie"><div class="estrecho"><div class="pie__arriba"><a${addAttribute(`${BASE}v2/`, "href")} class="logo logo--pie" aria-label="NextYou, inicio">Next<em>You</em></a><nav aria-label="Pie"><ul role="list">${pie.map((e) => renderTemplate`<li><a${addAttribute(e.href, "href")}>${e.texto}</a></li>`)}</ul></nav></div><p class="pie__lema">Tu futuro no se adivina. Se explora.</p></div></footer>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/V2.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/V2.astro", void 0);
//#endregion
export { $$V2 as t };
