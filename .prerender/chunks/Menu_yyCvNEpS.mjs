import { a as createComponent, i as SITIO, n as CTA_PRINCIPAL, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, h as renderHead, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { t as archivo_default } from "./archivo_DH6hyKB1.mjs";
//#region src/layouts/Base.astro
createAstro("https://sheisdigitalab.github.io");
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { titulo = SITIO.titulo, descripcion = SITIO.descripcion } = Astro.props;
	const canonica = new URL(Astro.url.pathname, Astro.site);
	const imagenOg = new URL(`${BASE}og.jpg`, Astro.site);
	return renderTemplate`<html lang="es" data-astro-cid-hkbrpulz><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${titulo}</title><meta name="description"${addAttribute(descripcion, "content")}><link rel="canonical"${addAttribute(canonica, "href")}><meta name="theme-color" content="#161412"><link rel="icon"${addAttribute(`${BASE}favicon.svg`, "href")} type="image/svg+xml">${renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- Open Graph: se va a compartir mucho por WhatsApp --><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:site_name"${addAttribute(SITIO.nombre, "content")}><meta property="og:title"${addAttribute(titulo, "content")}><meta property="og:description"${addAttribute(descripcion, "content")}><meta property="og:url"${addAttribute(canonica, "content")}><meta property="og:image"${addAttribute(imagenOg, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="NextYou. Tu futuro no se adivina, se explora."><meta name="twitter:image"${addAttribute(imagenOg, "content")}><meta name="twitter:image:alt" content="NextYou. Tu futuro no se adivina, se explora."><meta name="twitter:card" content="summary_large_image"><!-- Datos estructurados: quién es NextYou, para buscadores y asistentes --><script type="application/ld+json">${unescapeHTML(JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "Organization",
			name: SITIO.nombre,
			url: new URL(BASE, Astro.site).href,
			logo: new URL(`${BASE}marca/avatar.png`, Astro.site).href,
			description: SITIO.descripcion
		}, {
			"@type": "WebSite",
			name: SITIO.nombre,
			url: new URL(BASE, Astro.site).href,
			inLanguage: "es"
		}]
	}))}<\/script><!-- Fuentes en local --><link rel="preload"${addAttribute(archivo_default, "href")} as="font" type="font/woff2" crossorigin><script>document.documentElement.classList.add('js');<\/script>${renderHead($$result)}</head><body data-astro-cid-hkbrpulz><a class="saltar" href="#contenido" data-astro-cid-hkbrpulz>Saltar al contenido</a><!-- Filtro que da a los iconos un trazo irregular, como pintado a mano --><svg width="0" height="0" style="position:absolute" aria-hidden="true" data-astro-cid-hkbrpulz><filter id="trazo-mano" data-astro-cid-hkbrpulz><feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="7" data-astro-cid-hkbrpulz></feTurbulence><feDisplacementMap in="SourceGraphic" scale="1.3" data-astro-cid-hkbrpulz></feDisplacementMap></filter></svg>${renderSlot($$result, $$slots["default"])}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/layouts/Base.astro", void 0);
//#endregion
//#region src/components/Logo.astro
createAstro("https://sheisdigitalab.github.io");
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Logo;
	const { tam = "menu" } = Astro.props;
	const alto = tam === "pie" ? 44 : 34;
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(`${BASE}marca/logo-negro.svg`, "src")} alt="NextYou"${addAttribute(Math.round(alto * 4.25), "width")}${addAttribute(alto, "height")} class="logo"${addAttribute(`height:${alto}px`, "style")} data-astro-cid-f7espo7c>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Logo.astro", void 0);
//#endregion
//#region src/components/Boton.astro
createAstro("https://sheisdigitalab.github.io");
var $$Boton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Boton;
	const { href = CTA_PRINCIPAL.href, variante = "principal", ancho = false, flecha = false, class: clase } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([
		"boton",
		`boton--${variante}`,
		{ "boton--ancho": ancho },
		clase
	], "class:list")} data-astro-cid-2tnhbeo3>${renderSlot($$result, $$slots["default"])}${flecha && renderTemplate`<span class="boton__flecha" aria-hidden="true" data-astro-cid-2tnhbeo3>→</span>`}</a>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Boton.astro", void 0);
//#endregion
//#region src/components/Menu.astro
createAstro("https://sheisdigitalab.github.io");
var $$Menu = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Menu;
	const { solido = false } = Astro.props;
	const enlaces = [
		{
			texto: "Estoy en bachillerato",
			href: BASE
		},
		{
			texto: "Estoy en la universidad",
			href: ENLACES.universidad
		},
		{
			texto: "Soy madre o padre",
			href: ENLACES.familias
		}
	];
	const actual = (href) => href !== "#" && Astro.url.pathname.replace(/\/?$/, "/") === href;
	return renderTemplate`${maybeRenderHead($$result)}<header${addAttribute(["menu", { "menu--solido": solido }], "class:list")} data-astro-cid-xrc56gie><div class="menu__barra contenedor" data-astro-cid-xrc56gie><a${addAttribute(BASE, "href")} class="menu__logo" aria-label="NextYou, inicio" data-astro-cid-xrc56gie>${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-xrc56gie": true })}</a><nav class="menu__nav" aria-label="Principal" data-astro-cid-xrc56gie><button class="menu__abrir" type="button" aria-expanded="false" aria-controls="menu-enlaces" data-astro-cid-xrc56gie><span class="solo-lector" data-astro-cid-xrc56gie>Menú</span><svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" data-astro-cid-xrc56gie><path class="l1" d="M3 7h16" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" data-astro-cid-xrc56gie></path><path class="l2" d="M3 15h16" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" data-astro-cid-xrc56gie></path></svg></button><ul id="menu-enlaces" class="menu__enlaces" role="list" data-astro-cid-xrc56gie>${enlaces.map((e) => renderTemplate`<li data-astro-cid-xrc56gie>${e.href === "#" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: página fase posterior -->")}` })}`}<a${addAttribute(e.href, "href")}${addAttribute(actual(e.href) ? "page" : void 0, "aria-current")} data-astro-cid-xrc56gie>${e.texto}</a></li>`)}</ul></nav>${renderComponent($$result, "Boton", $$Boton, {
		"class": "menu__cta",
		"data-astro-cid-xrc56gie": true
	}, { "default": ($$result) => renderTemplate`Test gratis` })}</div></header>${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/components/Menu.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Menu.astro", void 0);
//#endregion
export { $$Base as i, $$Boton as n, $$Logo as r, $$Menu as t };
