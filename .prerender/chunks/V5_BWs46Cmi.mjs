import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, _ as defineScriptVars, g as addAttribute, h as renderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { n as marker_default, r as $$LogoV3, t as archivo_sub_default } from "./archivo-sub_Bh8oSwcD.mjs";
import { t as fraunces_default } from "./fraunces_vSZHgqit.mjs";
//#region src/layouts/V5.astro
createAstro("https://sheisdigitalab.github.io");
var $$V5 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$V5;
	const { titulo, descripcion, actual, pagina, ruta = "v5/", soloBachillerato = false, paletaFija, robots = "noindex, nofollow", cta = {
		texto: "Test gratis",
		href: CTA_PRINCIPAL.href
	} } = Astro.props;
	const ogImagen = new URL(`${BASE}og.jpg`, Astro.site).href;
	const url = new URL(Astro.url.pathname, Astro.site).href;
	const INICIO = `${BASE}${ruta}`;
	const FAMILIAS_V5 = `${INICIO}#familias`;
	const UNIVERSIDAD_V5 = `${INICIO}#universidad`;
	const menu = soloBachillerato ? [
		{
			texto: "Qué es",
			href: `${INICIO}#que-es`,
			actual: false
		},
		{
			texto: "Cómo funciona",
			href: `${INICIO}#como-funciona`,
			actual: false
		},
		{
			texto: "Los de dentro",
			href: `${INICIO}#los-de-dentro`,
			actual: false
		},
		{
			texto: "Quién hay detrás",
			href: `${INICIO}#quien-hay-detras`,
			actual: false
		}
	] : [
		{
			texto: "Estoy en bachillerato",
			href: `${INICIO}#como-funciona`,
			actual: false
		},
		{
			texto: "Estoy en la universidad",
			href: UNIVERSIDAD_V5,
			actual: false
		},
		{
			texto: "Soy madre o padre",
			href: FAMILIAS_V5,
			actual: false
		}
	];
	return renderTemplate`<html lang="es"${addAttribute("no", "data-selector")}${addAttribute(pagina, "data-pagina")}${addAttribute(BASE, "data-base")}${addAttribute(paletaFija, "data-fija")}><head><meta charset="utf-8"><script>(function(){${defineScriptVars({
		SELECTOR: false,
		FIJA: paletaFija ?? null
	})}
      document.documentElement.classList.add('js');
      (function (selector, fija) {
        var p = null;
        if (fija) {
          p = fija;
        } else if (selector) {
          // Siempre se abre la roja; Lima solo se ve al pulsarla (o con un enlace explícito ?paleta=d). No se recuerda la elección.
          p = new URLSearchParams(location.search).get('paleta');
        }
        document.documentElement.dataset.paleta = /^[df]$/.test(p || '') ? p : 'd';
      })(SELECTOR, FIJA);
    })();<\/script><meta name="viewport" content="width=device-width, initial-scale=1"><title>${titulo}</title><meta name="description"${addAttribute(descripcion, "content")}><meta name="robots"${addAttribute(robots, "content")}><meta name="theme-color" content="#161412"><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:site_name"${addAttribute(SITIO.nombre, "content")}><meta property="og:title"${addAttribute(titulo, "content")}><meta property="og:description"${addAttribute(descripcion, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(ogImagen, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="NextYou. Tu futuro no se adivina, se explora."><meta name="twitter:image"${addAttribute(ogImagen, "content")}><meta name="twitter:image:alt" content="NextYou. Tu futuro no se adivina, se explora."><meta name="twitter:card" content="summary_large_image"><link rel="icon"${addAttribute(`${BASE}favicon.svg`, "href")} type="image/svg+xml"><link rel="icon"${addAttribute(`${BASE}marca/favicon-32.png`, "href")} type="image/png" sizes="32x32"><link rel="icon"${addAttribute(`${BASE}marca/favicon-512.png`, "href")} type="image/png" sizes="512x512"><link rel="apple-touch-icon"${addAttribute(`${BASE}marca/apple-touch-icon.png`, "href")}><link rel="preload"${addAttribute(archivo_sub_default, "href")} as="font" type="font/woff2" crossorigin><style>${unescapeHTML(`
      @font-face { font-family: 'Archivo'; font-style: normal; font-weight: 400 800; font-stretch: 100% 105%; font-display: swap; src: url('${archivo_sub_default}') format('woff2-variations'); }
      @font-face { font-family: 'Fraunces'; font-style: normal; font-weight: 100 900; font-display: swap; src: url('${fraunces_default}') format('woff2-variations'); }
      @font-face { font-family: 'Marker'; font-style: normal; font-weight: 400; font-display: swap; src: url('${marker_default}') format('woff2'); }
    `)}</style>${renderHead($$result)}</head><body><a class="saltar" href="#contenido">Saltar al contenido</a>${false}<header class="menu"><div class="menu__barra ancho"><a${addAttribute(INICIO, "href")} class="logo" aria-label="NextYou, inicio">${renderComponent($$result, "LogoV3", $$LogoV3, {})}</a><nav class="menu__nav" aria-label="Principal"><button class="menu__abrir" type="button" aria-expanded="false" aria-controls="menu-enlaces"><span class="solo-lector">Menú</span><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M3 7h16M3 15h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button><ul id="menu-enlaces" class="menu__enlaces" role="list">${menu.map((e) => renderTemplate`<li>${e.href === "#" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="pronto" aria-disabled="true">${e.texto}<small>pronto</small></span>` })}` : renderTemplate`<a${addAttribute(e.href, "href")}${addAttribute(e.actual ? "page" : void 0, "aria-current")}>${e.texto}</a>`}</li>`)}</ul></nav><a${addAttribute(cta.href, "href")} class="boton boton--sm menu__cta">${cta.texto}</a></div></header>${renderSlot($$result, $$slots["default"])}${renderSlot($$result, $$slots["antes-del-pie"])}<dialog class="aviso" aria-labelledby="aviso-titulo"><div class="aviso__caja"><button type="button" class="aviso__cerrar" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button><p class="aviso__nota" aria-hidden="true">casi listo</p><h2 id="aviso-titulo">El test llega muy pronto</h2><p>Estamos preparando los ocho minutos. Mientras, puedes ver cómo funciona y conocer a la gente que ya trabaja en lo suyo.</p><a${addAttribute(`${INICIO}#como-funciona`, "href")} class="boton">Ver cómo funciona</a><form class="espera"${addAttribute(true, "hidden")} action="#" method="post" novalidate><p class="espera__titulo">Te avisamos cuando abra</p><label class="espera__campo">Tu correo<input type="email" name="correo" autocomplete="email" required></label><fieldset class="espera__edad"><legend>Tu edad</legend><label><input type="radio" name="edad" value="menor-14" required>Menos de 14</label><label><input type="radio" name="edad" value="14-o-mas">14 o más</label></fieldset><label class="espera__check"><input type="checkbox" name="privacidad" required><span>He leído y acepto la <a${addAttribute(ENLACES.privacidad, "href")}>política de privacidad</a>.</span></label><label class="espera__check"><input type="checkbox" name="novedades">Quiero recibir novedades de NextYou (opcional).</label><button type="submit" class="boton">Apuntarme</button></form></div></dialog><footer class="pie"><div class="estrecho"><div class="pie__rejilla"><div class="pie__marca"><a${addAttribute(INICIO, "href")} class="logo logo--pie" aria-label="NextYou, inicio">${renderComponent($$result, "LogoV3", $$LogoV3, {})}</a><p class="pie__desc">Te ayudamos a explorar qué estudiar y a qué dedicarte, con gente real que ya trabaja en ello.</p></div><nav class="pie__col" aria-labelledby="pie-explora"><h2 id="pie-explora" class="pie__tit">Explora</h2><ul role="list"><li><a${addAttribute(`${INICIO}#que-es`, "href")}>Qué es NextYou</a></li><li><a${addAttribute(`${INICIO}#como-funciona`, "href")}>Cómo funciona</a></li><li><a${addAttribute(`${INICIO}#los-de-dentro`, "href")}>Los de dentro</a></li><li><a${addAttribute(`${INICIO}#quien-hay-detras`, "href")}>Quién hay detrás</a></li><li><a${addAttribute(CTA_PRINCIPAL.href, "href")}>Haz el test gratis</a></li></ul></nav><nav class="pie__col" aria-labelledby="pie-legal"><h2 id="pie-legal" class="pie__tit">Legal</h2><ul role="list"><li><a${addAttribute(ENLACES.privacidad, "href")}>Política de privacidad</a></li><li><a${addAttribute(ENLACES.avisoLegal, "href")}>Aviso legal</a></li><li><a${addAttribute(ENLACES.cookies, "href")}>Política de cookies</a></li><li><a${addAttribute(ENLACES.menores, "href")}>Datos y menores</a></li></ul></nav></div><p class="pie__lema">Tu futuro no se adivina, <span class="pie__explora">se explora</span>.</p><div class="pie__base"><p>© ${(/* @__PURE__ */ new Date()).getFullYear()} NextYou. Todos los derechos reservados.</p><a href="#contenido" class="pie__subir">Volver arriba <span aria-hidden="true">↑</span></a></div></div></footer>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/V5.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/V5.astro", void 0);
//#endregion
export { $$V5 as t };
