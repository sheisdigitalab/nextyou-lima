import { a as createComponent, o as __exportAll, t as BASE } from "./config_B9QUz7ke.mjs";
import { m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_BtBXtWq_.mjs";
import { i as $$Base, n as $$Boton, t as $$Menu } from "./Menu_yyCvNEpS.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"titulo": "Esta página no existe · NextYou",
		"descripcion": "La página que buscas no existe. Vuelve al inicio de NextYou.",
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-ibpinaeu": true })}${maybeRenderHead($$result)}<main id="contenido" class="error" data-astro-cid-ibpinaeu><div class="contenedor error__caja" data-astro-cid-ibpinaeu><p class="nota error__nota" aria-hidden="true" data-astro-cid-ibpinaeu>te has salido del mapa ↓</p><h1 class="error__titulo" data-astro-cid-ibpinaeu>Esta página no existe.</h1><p class="error__texto" data-astro-cid-ibpinaeu>Puede que el enlace esté mal o que esta parte de NextYou todavía no esté lista. Mejor vuelve al principio.</p>${renderComponent($$result, "Boton", $$Boton, {
		"href": BASE,
		"flecha": true,
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`Volver al inicio` })}</div></main>` })}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/404.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/404.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
