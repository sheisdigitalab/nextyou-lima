import { a as createComponent, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { n as $$Boton, r as $$Logo } from "./Menu_yyCvNEpS.mjs";
import { n as hero, o as pie } from "./home_AzZ1C02B.mjs";
//#region src/components/Pie.astro
createAstro("https://sheisdigitalab.github.io");
var $$Pie = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pie;
	const { cierre = true } = Astro.props;
	const [lema1, lema2] = pie.lema.split(/(?<=\.)\s+/);
	const enlaces = [
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
			href: ENLACES.familias
		},
		{
			texto: "Quién hay detrás",
			href: ENLACES.acompanamiento
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
	return renderTemplate`${maybeRenderHead($$result)}<footer class="pie" data-astro-cid-kb2vq6wp><div class="contenedor" data-astro-cid-kb2vq6wp><!-- Cierre: quien llega hasta aquí tiene el botón a mano. -->${cierre && renderTemplate`<div class="pie__cierre" data-astro-cid-kb2vq6wp><p class="pie__lema" data-astro-cid-kb2vq6wp>${lema1} ${lema2 && renderTemplate`<span class="nota pie__mano" data-astro-cid-kb2vq6wp>${lema2}</span>`}</p><div class="pie__accion" data-astro-cid-kb2vq6wp>${renderComponent($$result, "Boton", $$Boton, {
		"flecha": true,
		"data-astro-cid-kb2vq6wp": true
	}, { "default": ($$result) => renderTemplate`${hero.boton}` })}<ul class="pie__meta" role="list" data-astro-cid-kb2vq6wp>${hero.meta.map((m, i) => renderTemplate`<li${addAttribute(["pastilla", i === 0 ? "pastilla--lima" : "pastilla--contorno"], "class:list")} data-astro-cid-kb2vq6wp>${m}</li>`)}</ul></div></div>`}<div class="pie__arriba" data-astro-cid-kb2vq6wp><a${addAttribute(BASE, "href")} class="pie__logo" aria-label="NextYou, inicio" data-astro-cid-kb2vq6wp>${renderComponent($$result, "Logo", $$Logo, {
		"tam": "pie",
		"data-astro-cid-kb2vq6wp": true
	})}</a><nav aria-label="Pie" data-astro-cid-kb2vq6wp><ul class="pie__enlaces" role="list" data-astro-cid-kb2vq6wp>${enlaces.map((e) => renderTemplate`<li data-astro-cid-kb2vq6wp>${e.href === "#" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE: página fase posterior -->")}` })}`}<a${addAttribute(e.href, "href")}${addAttribute(e.href !== "#" && Astro.url.pathname.replace(/\/?$/, "/") === e.href ? "page" : void 0, "aria-current")} data-astro-cid-kb2vq6wp>${e.texto}</a></li>`)}</ul></nav></div><p class="pie__legal" data-astro-cid-kb2vq6wp>© ${(/* @__PURE__ */ new Date()).getFullYear()} NextYou</p></div></footer>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Pie.astro", void 0);
//#endregion
//#region src/components/Icono.astro
createAstro("https://sheisdigitalab.github.io");
var $$Icono = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icono;
	const { nombre, tam = 40 } = Astro.props;
	const L = "var(--lima)";
	const punto = (x, y, r = 3.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${L}" stroke="currentColor" stroke-width="1.6"/>`;
	const trazos = {
		brujula: "<circle cx=\"24\" cy=\"24\" r=\"17\"/><path d=\"M24 11 L28.5 24 L24 37 L19.5 24 Z\"/>" + punto(24, 24),
		camino: "<path d=\"M7 40 C 16 40, 15 27, 24 26 S 33 14, 40 11\" stroke-dasharray=\"1 6\"/>" + punto(40, 11, 4.4),
		aqui: "<path d=\"M24 42 C 16 32, 11 26, 11 19 A 13 13 0 1 1 37 19 C 37 26, 32 32, 24 42 Z\"/>" + punto(24, 19, 4.6),
		lado: "<circle cx=\"17\" cy=\"16\" r=\"5.5\"/><path d=\"M7 38 C 7 29, 11 25, 17 25 C 21 25, 24 27, 25 31\"/><path d=\"M23 40 C 23 32, 27 28, 32 28 C 37 28, 41 32, 41 40\"/>" + punto(32, 18, 5.5),
		reto: "<path d=\"M13 42 V 7\"/><path d=\"M13 9 C 20 5, 26 13, 36 9 V 25 C 26 29, 20 21, 13 25\"/>" + punto(13, 42, 3.4),
		dentro: `<rect x="6" y="11" width="36" height="26" rx="7"/><path d="M21 18 L 30 24 L 21 30 Z" fill="${L}"/>`,
		descubrir: "<path d=\"M24 6 C 26 18, 30 22, 42 24 C 30 26, 26 30, 24 42 C 22 30, 18 26, 6 24 C 18 22, 22 18, 24 6 Z\"/>" + punto(38, 9, 3.4),
		perfil: "<path d=\"M13 7 H 35 V 42 L 24 33 L 13 42 Z\"/>" + punto(24, 18, 4)
	};
	return renderTemplate`${maybeRenderHead($$result)}<svg class="icono" viewBox="0 0 48 48"${addAttribute(tam, "width")}${addAttribute(tam, "height")} aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" filter="url(#trazo-mano)">${unescapeHTML(trazos[nombre])}</g></svg>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/Icono.astro", void 0);
//#endregion
//#region src/utils/resaltar.ts
var escapar = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function resaltar(texto, parte, clase = "subrayado") {
	if (!parte || !texto.includes(parte)) return escapar(texto);
	const i = texto.indexOf(parte);
	return escapar(texto.slice(0, i)) + `<span class="${clase}">${escapar(parte)}</span>` + escapar(texto.slice(i + parte.length));
}
//#endregion
export { $$Icono as n, $$Pie as r, resaltar as t };
