import { a as createComponent } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { r as $$Image } from "./_astro_assets_BroqqTbI.mjs";
import { n as noa_default, t as aitana_default } from "./aitana_DOl7QgDr.mjs";
import { t as laia_default } from "./laia_BGPabz0x.mjs";
//#region src/components/AppPantalla.astro
createAstro("https://sheisdigitalab.github.io");
var $$AppPantalla = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AppPantalla;
	const { pantalla, nombre = "Lucía", sinPie = false, clase, iconos = false } = Astro.props;
	const opciones = [
		{
			t: "Crear algo desde cero",
			i: "<path d=\"M4 20l4-1 11-11-3-3L5 16z\"/><path d=\"M14 6l3 3\"/>"
		},
		{
			t: "Resolver un reto",
			i: "<path d=\"M9 3h6v4a2 2 0 1 0 0 4v4h-4a2 2 0 1 0-4 0H3V9h4a2 2 0 1 0 0-4V3z\"/>"
		},
		{
			t: "Quedar con gente",
			i: "<circle cx=\"8\" cy=\"9\" r=\"3\"/><circle cx=\"16\" cy=\"9\" r=\"3\"/><path d=\"M3 19c1-3 3-4 5-4s4 1 5 4M11 19c1-3 3-4 5-4s4 1 5 4\"/>"
		},
		{
			t: "Descubrir un sitio nuevo",
			i: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.5 8.5l-2 5-5 2 2-5z\"/>"
		}
	];
	const caminos = [
		{
			tipo: "Lo que más te pega",
			nombre: "Creación de contenido",
			foto: noa_default,
			i: "<path d=\"M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z\"/>"
		},
		{
			tipo: "El puente",
			nombre: "Animación 3D",
			foto: laia_default,
			i: "<path d=\"M12 3l8 4.5v9L12 21l-8-4.5v-9z\"/><path d=\"M12 12l8-4.5M12 12v9M12 12L4 7.5\"/>"
		},
		{
			tipo: "El salto",
			nombre: "Ciberseguridad",
			foto: aitana_default,
			i: "<path d=\"M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z\"/>"
		}
	];
	return renderTemplate`${pantalla === "test" ? renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"cfa-pan",
		"cfa-pan--test",
		clase
	], "class:list")} aria-hidden="true"><div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-t-top"><span class="cfa-x">✕</span><span class="cfa-seg">${Array.from({ length: 12 }, (_, i) => renderTemplate`<i${addAttribute(i < 4 ? "cfa-on" : void 0, "class")}></i>`)}</span><small>4/12</small></div><p class="cfa-pill">Brújula interior</p><h4>Un sábado libre, ¿qué te apetece más?</h4><div class="cfa-ops">${opciones.map((o, i) => renderTemplate`<span${addAttribute(["cfa-op", i === 0 && "cfa-sel"], "class:list")}><i><svg viewBox="0 0 24 24">${unescapeHTML(o.i)}</svg></i><b>${o.t}</b></span>`)}</div><div class="cfa-perfil"><p>Tu perfil se está formando</p><span style="--v:62%"><small>Creatividad</small><i><b></b></i></span><span style="--v:40%"><small>Autonomía</small><i><b></b></i></span><span style="--v:28%"><small>Ayudar a otros</small><i><b></b></i></span></div><span class="cfa-cta">Continuar</span></div>` : renderTemplate`<div${addAttribute([
		"cfa-pan",
		"cfa-pan--cam",
		clase
	], "class:list")} aria-hidden="true"><div class="cfa-est"><span>9:41</span><b></b></div><div class="cfa-c-top"><small>¡Listo, ${nombre}!</small><h4>Tus <em>3</em> caminos</h4><p>Elegidos con tus respuestas</p></div><div class="cfa-c-lista" data-cfa-lista><span class="cfa-tu"><i></i>Tú</span><svg class="cfa-ramas"></svg>${caminos.map((c, n) => renderTemplate`<div class="cfa-cam"><span class="cfa-cam__n">${n + 1}</span><span class="cfa-cam__tx"><small>${c.tipo}</small><b>${c.nombre}</b></span>${iconos ? renderTemplate`<i class="cfa-cam__f cfa-cam__f--ic"><svg viewBox="0 0 24 24">${unescapeHTML(c.i)}</svg></i>` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": c.foto,
		"alt": "",
		"width": 120,
		"height": 120,
		"class": "cfa-cam__f"
	})}`}</div>`)}</div>${!sinPie && renderTemplate`<p class="cfa-c-pie">Toca un camino para ver cómo llegar</p>`}${!sinPie && renderTemplate`<nav class="cfa-nav"><span><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9H4z"></path></svg>Inicio</span><span class="cfa-on"><svg viewBox="0 0 24 24"><path d="M5 20c0-6 3-9 7-11M12 9c3 1 6 4 7 11M12 9V3"></path></svg>Caminos</span><span><svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2"></rect><path d="M16 10l5-3v10l-5-3"></path></svg>Vídeos</span><span><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c1-4 4-6 8-6s7 2 8 6"></path></svg>Perfil</span></nav>`}</div>`}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/components/AppPantalla.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/AppPantalla.astro", void 0);
//#endregion
export { $$AppPantalla as t };
