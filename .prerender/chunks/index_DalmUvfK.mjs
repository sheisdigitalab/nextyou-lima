import { a as createComponent, o as __exportAll, t as BASE } from "./config_B9QUz7ke.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as $$V5 } from "./V5_Dxz31m6R.mjs";
//#region src/pages/legal/index.astro
var legal_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const INICIO = BASE;
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": "Información legal · NextYou",
		"descripcion": "Privacidad, aviso legal, cookies y datos de menores de NextYou.",
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": ""
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido" class="legal"><div class="estrecho legal__caja"><a class="legal__volver"${addAttribute(INICIO, "href")}><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>Volver</a><h1 class="legal__titulo">Información legal</h1><p class="legal__lead">Aquí encontrarás cómo tratamos tus datos y las condiciones de uso de NextYou, explicado de forma clara.</p><ul class="legal__indice" role="list" aria-label="Contenido"><li><a href="#privacidad">Política de privacidad</a></li><li><a href="#aviso-legal">Aviso legal</a></li><li><a href="#cookies">Política de cookies</a></li><li><a href="#menores">Datos y menores</a></li></ul><section id="privacidad" class="legal__seccion" aria-labelledby="t-privacidad"><h2 id="t-privacidad">Política de privacidad</h2>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: texto legal definitivo (responsable, base legal, derechos, conservación) -->")}` })}<p>Te pedimos tu nombre y tu correo para dos cosas: dirigirnos a ti como quieras y enviarte tus resultados, tus 3 caminos y la información para que explores el tuyo.</p><p>No compartimos ni vendemos tus datos, no te enviamos publicidad y puedes darte de baja con un clic desde cualquier correo que te enviemos.</p><p class="legal__nota">El texto completo de esta política se publicará antes del lanzamiento del test.</p></section><section id="aviso-legal" class="legal__seccion" aria-labelledby="t-aviso"><h2 id="t-aviso">Aviso legal</h2>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: titular de la web, datos de contacto y condiciones de uso -->")}` })}<p class="legal__nota">Aquí figurarán los datos del titular de NextYou y las condiciones de uso de la web. Se publicará antes del lanzamiento.</p></section><section id="cookies" class="legal__seccion" aria-labelledby="t-cookies"><h2 id="t-cookies">Política de cookies</h2>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: cookies reales y gestor de consentimiento cuando se activen analítica u otros servicios -->")}` })}<p>Esta versión de la web no usa cookies de seguimiento ni de publicidad. Solo recuerda, en tu propio navegador, la variante de color que hayas elegido.</p><p class="legal__nota">Si más adelante se añaden herramientas de medición, aquí se detallarán y te pediremos permiso antes.</p></section><section id="menores" class="legal__seccion" aria-labelledby="t-menores"><h2 id="t-menores">Datos y menores</h2>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: tratamiento de datos de menores de 18 años y consentimiento de madre, padre o tutor -->")}` })}<p>NextYou está pensado para chicos y chicas de 16 a 21 años. Cuidamos con especial atención los datos de las personas menores de edad y solo pedimos lo imprescindible.</p><p class="legal__nota">Aquí se explicará cómo se tratan los datos de menores y qué hacer si una madre, un padre o una persona tutora quiere consultarlos o eliminarlos.</p></section></div></main>` })}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/legal/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/legal/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/legal";
//#endregion
//#region \0virtual:astro:page:src/pages/legal/index@_@astro
var page = () => legal_exports;
//#endregion
export { page };
