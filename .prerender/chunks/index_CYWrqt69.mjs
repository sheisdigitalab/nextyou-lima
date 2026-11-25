import { a as createComponent, o as __exportAll, t as BASE } from "./config_B9QUz7ke.mjs";
import { g as addAttribute, h as renderHead, p as renderTemplate } from "./server_BtBXtWq_.mjs";
//#region src/pages/logo/index.astro
var logo_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const destino = `${BASE}brandsite/`;
	return renderTemplate`<html lang="es" data-astro-cid-kjvpgejp><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Guía de marca de NextYou</title><meta name="robots" content="noindex, nofollow"><meta http-equiv="refresh"${addAttribute(`0; url=${destino}`, "content")}><link rel="canonical"${addAttribute(destino, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(`${BASE}favicon.svg`, "href")}>${renderHead($$result)}</head><body data-astro-cid-kjvpgejp><p data-astro-cid-kjvpgejp><a${addAttribute(destino, "href")} data-astro-cid-kjvpgejp>La guía de marca está aquí</a></p></body></html>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/logo/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/logo/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/logo";
//#endregion
//#region \0virtual:astro:page:src/pages/logo/index@_@astro
var page = () => logo_exports;
//#endregion
export { page };
