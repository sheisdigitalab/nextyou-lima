import { a as createComponent, o as __exportAll, t as BASE } from "./config_B9QUz7ke.mjs";
import { E as createAstro, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { r as $$LogoV3 } from "./archivo-sub_Bh8oSwcD.mjs";
import { t as $$V5 } from "./V5_BWs46Cmi.mjs";
import { r as $$Image } from "./_astro_assets_BroqqTbI.mjs";
import { t as $$AppPantalla } from "./AppPantalla_39RSHPzP.mjs";
import { t as dentro_4_default } from "./dentro-4_ByLq84ly.mjs";
import { a as prof_dev_default, i as prof_ele_default, n as prof_fot_default, o as prof_coc_default, r as prof_fis_default, t as prof_enf_default } from "./prof-enf_8wSC3cWp.mjs";
//#region src/components/GuiaCabecera.astro
createAstro("https://sheisdigitalab.github.io");
var $$GuiaCabecera = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$GuiaCabecera;
	const { actual, titulo, lead } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="rs__nav" aria-label="Guía de marca"><a${addAttribute(`${BASE}redes/`, "href")}${addAttribute(actual === "redes" ? "page" : void 0, "aria-current")}>Redes sociales</a><a${addAttribute(`${BASE}redes-v2/`, "href")}${addAttribute(actual === "redes2" ? "page" : void 0, "aria-current")}>Redes v2</a><a${addAttribute(`${BASE}logo/`, "href")}${addAttribute(actual === "logo" ? "page" : void 0, "aria-current")}>Logo</a></nav><header class="rs__cab"><p class="rs__eti">Marca en uso</p><h1 class="rs__h1">${titulo}</h1><p class="rs__lead">${lead}</p></header>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/GuiaCabecera.astro", void 0);
//#endregion
//#region src/components/RedesStory.astro
createAstro("https://sheisdigitalab.github.io");
var $$RedesStory = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RedesStory;
	const { tipo } = Astro.props;
	const avatar = `${BASE}marca/avatar.svg`;
	const opciones = [
		{
			t: "Crear algo desde cero",
			p: 41
		},
		{
			t: "Resolver un reto",
			p: 27
		},
		{
			t: "Quedar con gente",
			p: 20
		},
		{
			t: "Descubrir un sitio nuevo",
			p: 12
		}
	];
	const enlace = "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>";
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["rst", `rst--${tipo}`], "class:list")}>${tipo !== "caminos" && renderTemplate`<div class="rst__top" aria-hidden="true"><span class="rst__bar"><i></i></span><span class="rst__cuenta"><img${addAttribute(avatar, "src")} alt="" width="24" height="24">nextyou<small>ahora</small></span></div>`}${tipo === "pregunta" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="rst__captura" aria-hidden="true">${renderComponent($$result, "AppPantalla", $$AppPantalla, { "pantalla": "test" })}</div><div class="rst__poll"><p class="rst__pq">Un sábado libre, ¿qué te apetece más?</p><ul role="list">${opciones.map((o) => renderTemplate`<li>${o.t}</li>`)}</ul></div><span class="rst__enlace"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unescapeHTML(enlace)}</svg>Haz el test</span>` })}`}${tipo === "resultado" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="rst__res"><p class="rst__eti">Vuestras respuestas</p><p class="rst__q">Un sábado libre, ¿qué te apetece más?</p><ul role="list">${opciones.map((o, i) => renderTemplate`<li${addAttribute([i === 0 && "gana"], "class:list")}${addAttribute(`--p:${o.p}%`, "style")}><b>${o.t}</b><em>${o.p}%</em></li>`)}</ul></div><span class="rst__enlace"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${unescapeHTML(enlace)}</svg>Haz el test</span>` })}`}${tipo === "caminos" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AppPantalla", $$AppPantalla, {
		"pantalla": "caminos",
		"sinPie": true
	})}<div class="rst__banda"><span class="rst__sello">se explora</span><p><b>¿Y los tuyos?</b>nextyou.example</p></div>` })}`}</div>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/components/RedesStory.astro", void 0);
//#endregion
//#region src/pages/redes-v2/index.astro
var redes_v2_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const monograma = `${BASE}marca/avatar.svg`;
	const svg = (d, s = 20, w = 1.7) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
	const I = {
		corazon: "<path d=\"M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z\"/>",
		coment: "<path d=\"M4 5h16v11H9l-5 4z\"/>",
		guardar: "<path d=\"M6 3h12v18l-6-4-6 4z\"/>",
		enviar: "<path d=\"M21 3L3 10l7 3 3 7z\"/><path d=\"M10 13l11-10\"/>",
		enlace: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
		mas: "<path d=\"M12 5v14M5 12h14\"/>",
		flecha: "<path d=\"M5 12h14M13 6l6 6-6 6\"/>",
		pulgar: "<path d=\"M7 11v9H4v-9zM7 11l4-7c1.5 0 2.5 1 2.5 2.5V9H19a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 18 19H7\"/>",
		carrusel: "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/><path d=\"M3 8v8M21 8v8\"/>",
		libro: "<path d=\"M4 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-7\"/>"
	};
	const dentro = [
		{
			foto: dentro_4_default,
			gancho: "Lo que nadie te cuenta de ser arquitecta",
			tag: "Arquitecta · 31 años",
			bajo: true
		},
		{
			foto: prof_fot_default,
			gancho: "¿Se puede vivir de la fotografía?",
			tag: "Fotógrafa · 27 años"
		},
		{
			foto: prof_dev_default,
			gancho: "Cómo llegué a programar sin saber nada",
			tag: "Programador · 24 años"
		}
	];
	const senales = [
		{
			n: 1,
			t: "Te interesan muchas cosas",
			s: "No es falta de rumbo. Es tener de dónde elegir."
		},
		{
			n: 2,
			t: "Dudas, y está bien",
			s: "Dudar es parte de elegir con calma."
		},
		{
			n: 3,
			t: "Quieres probar antes de decidir",
			s: "Probar es la mejor forma de saber qué te gusta."
		}
	];
	const destacadas = [
		{
			t: "Test",
			i: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15 9l-2 6-4 0 2-6z\"/>"
		},
		{
			t: "Caminos",
			i: "<path d=\"M5 20c0-6 3-9 7-11M12 9c3 1 6 4 7 11M12 9V3\"/>"
		},
		{
			t: "Dentro",
			i: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M5 21c0-4 3-6 7-6s7 2 7 6\"/>"
		},
		{
			t: "Familias",
			i: "<circle cx=\"9\" cy=\"9\" r=\"3\"/><path d=\"M3 19c0-3 3-5 6-5s6 2 6 5M16 7a3 3 0 0 1 0 6M18 19c0-2-1-3-2-4\"/>"
		}
	];
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": "NextYou en redes sociales · v2",
		"descripcion": "Qué publica NextYou y por qué.",
		"actual": "",
		"ruta": "",
		"robots": "noindex, nofollow"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido" class="rs"><div class="ancho rs__caja">${renderComponent($$result, "GuiaCabecera", $$GuiaCabecera, {
		"actual": "redes2",
		"titulo": "Qué publica NextYou",
		"lead": "Dos públicos y una sola marca: jóvenes que no saben qué estudiar (Instagram y TikTok) y las familias y centros que les acompañan (Instagram, Facebook y LinkedIn). Fotos y datos de ejemplo."
	})}<p class="lema">Tu futuro no se adivina, <span class="explora">se explora.</span></p><section class="v2b v2b--grande" aria-labelledby="b1"><header class="v2b__cab"><p class="v2b__n">01</p><h2 id="b1" class="v2b__t">Los de dentro</h2><p class="v2b__p">Gente real que cuenta su trabajo. Es lo que diferencia a NextYou.</p><ul class="v2b__donde" role="list" aria-label="Dónde se publica"><li>Instagram</li><li>TikTok</li></ul></header><figure class="rs__card rs__card--ancha"><div class="v2f v2f--movil">${dentro.map((d) => renderTemplate`<div class="tk">${renderComponent($$result, "Image", $$Image, {
		"src": d.foto,
		"alt": "",
		"width": 700,
		"height": 1300,
		"class": d.bajo ? "tk__img tk__img--bajo" : "tk__img"
	})}<div class="tk__tabs" aria-hidden="true"><span>Siguiendo</span><span class="on">Para ti</span></div><p class="tk__gancho">${d.gancho}</p><div class="tk__lat" aria-hidden="true"><span class="tk__av"><img${addAttribute(monograma, "src")} alt="" width="40" height="40"><i>${unescapeHTML(svg(I.mas, 10, 2.6))}</i></span><span>${unescapeHTML(svg(I.corazon, 28))}</span><span>${unescapeHTML(svg(I.coment, 28))}</span><span>${unescapeHTML(svg(I.guardar, 28))}</span><span>${unescapeHTML(svg(I.enviar, 28))}</span></div><div class="tk__pie"><span class="tk__tag">${d.tag}</span><b>@nextyou</b><span>Los de dentro</span></div>${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "tk__ex" })}</div>`)}</div><p class="nota"><i>${unescapeHTML(svg("<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><circle cx=\"12\" cy=\"13.5\" r=\"3.5\"/><path d=\"M8 7l1.5-3h5L16 7\"/>", 18))}</i><span><b>Dirección de foto.</b> Vídeos reales: grabados con móvil, luz natural, en su sitio de trabajo. Mejor auténtico que perfecto.</span></p><figcaption>Portadas de reel / TikTok 9:16 · el gancho arriba, la persona en el centro y la profesión y la edad en una etiqueta lima</figcaption></figure></section><section class="v2b" aria-labelledby="b2"><header class="v2b__cab"><p class="v2b__n">02</p><h2 id="b2" class="v2b__t">¿Esto o esto?</h2><p class="v2b__p">Las preguntas del test convertidas en encuestas. Generan respuesta y llevan al test.</p><ul class="v2b__donde" role="list" aria-label="Dónde se publica"><li>Instagram</li><li>TikTok</li></ul></header><figure class="rs__card rs__card--ancha"><div class="v2f v2f--movil">${renderComponent($$result, "RedesStory", $$RedesStory, { "tipo": "pregunta" })}${renderComponent($$result, "RedesStory", $$RedesStory, { "tipo": "resultado" })}${renderComponent($$result, "RedesStory", $$RedesStory, { "tipo": "caminos" })}</div><figcaption>Stories 9:16 con las pantallas reales de la app: la pregunta del test como encuesta, el resultado de la encuesta y la pantalla de resultados para compartir.</figcaption></figure></section><section class="v2b" aria-labelledby="b3"><header class="v2b__cab"><p class="v2b__n">03</p><h2 id="b3" class="v2b__t">Carruseles para guardar</h2><p class="v2b__p">Contenido útil que se guarda y se comparte.</p><ul class="v2b__donde" role="list" aria-label="Dónde se publica"><li>Instagram</li><li>TikTok</li><li>LinkedIn</li></ul></header><figure class="rs__card rs__card--ancha"><div class="car" tabindex="0" role="group" aria-label="Carrusel de 6 diapositivas, desliza para verlo entero"><div class="sl sl--negra"><p class="sl__n">1/6</p><div class="sl__c"><p class="sl__t sl__t--g">¿No sabes qué estudiar?</p><p class="sl__s">3 señales de que vas bien</p></div><p class="sl__pie">Desliza <i>${unescapeHTML(svg(I.flecha, 16))}</i></p></div>${senales.map((s) => renderTemplate`<div${addAttribute(s.n % 2 ? "sl" : "sl sl--blanca", "class")}><p class="sl__n">${s.n + 1}/6</p><div class="sl__c"><i class="sl__num">${s.n}</i><p class="sl__t">${s.t}</p><p class="sl__s">${s.s}</p></div><p class="sl__pie">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "sl__logo" })}</p></div>`)}<div class="sl sl--blanca"><p class="sl__n">5/6</p><div class="sl__c"><p class="sl__t">Haz el test y mira tus 3 caminos</p><span class="sl__btn">nextyou.example/test</span></div><p class="sl__pie">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "sl__logo" })}</p></div><div class="sl sl--negra"><p class="sl__n">6/6</p><div class="sl__c"><span class="sl__ic">${unescapeHTML(svg(I.guardar, 34))}</span><p class="sl__t">Guárdalo para cuando lo necesites</p></div><p class="sl__pie">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "sl__logo" })}</p></div></div><figcaption>Carrusel 4:5 de 6 diapositivas · portada corta, una idea por diapositiva, cierre con llamada a la acción y recordatorio de guardar</figcaption><div class="serie"><div class="sl sl--serie"><p class="sl__n">Serie · Cómo llegar a…</p><div class="sl__c"><p class="sl__t">Cómo llegar a… Animación 3D</p><p class="sl__s">4 caminos (y no todos son la uni)</p></div><p class="sl__pie">Desliza <i>${unescapeHTML(svg(I.flecha, 16))}</i></p></div><p class="serie__tx"><b>Portada de un segundo carrusel</b>Una serie fija: el mismo formato, una profesión distinta cada vez, para que se reconozca de un vistazo.</p></div></figure></section><section class="v2b" aria-labelledby="b4"><header class="v2b__cab"><p class="v2b__n">04</p><h2 id="b4" class="v2b__t">Para familias, centros y orientadores</h2><p class="v2b__p">Familias en Instagram y Facebook; centros y orientadores en LinkedIn. Mismo tono sereno.</p><ul class="v2b__donde" role="list" aria-label="Dónde se publica"><li>Instagram</li><li>Facebook</li><li>LinkedIn</li></ul></header><figure class="rs__card rs__card--ancha"><div class="v2f v2f--li"><article class="igp"><header class="igp__cab"><span class="igp__av"><img${addAttribute(monograma, "src")} alt="" width="40" height="40"></span><b>nextyou</b><span class="igp__mas" aria-hidden="true">···</span></header><div class="igp__img"><p class="igp__t">Tu hijo no sabe qué estudiar. Y está bien.</p><p class="igp__s">Cómo acompañarle sin presionar: 5 ideas</p>${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "igp__logo" })}</div><div class="igp__acc" aria-hidden="true"><span>${unescapeHTML(svg(I.corazon, 24))}</span><span>${unescapeHTML(svg(I.coment, 24))}</span><span>${unescapeHTML(svg(I.enviar, 24))}</span><span class="igp__g">${unescapeHTML(svg(I.guardar, 24))}</span></div><p class="igp__pie"><b>nextyou</b> Tu hijo no sabe qué estudiar. Y está bien. <span>…más</span></p></article><div class="li-col"><div class="li2"><div class="li2__banner">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "li2__logo" })}</div><div class="li2__perfil"><div class="li2__av"><img${addAttribute(monograma, "src")} alt="" width="80" height="80"></div><p class="li2__nombre">NextYou</p><p class="li2__desc">Te ayudamos a explorar qué estudiar y a qué dedicarte, con gente real que ya trabaja en ello. Para jóvenes y para las familias y centros que les acompañan.</p><p class="li2__meta">Educación · España</p></div></div><article class="lp"><header class="lp__cab"><span class="lp__av"><img${addAttribute(monograma, "src")} alt="" width="48" height="48"></span><span><b>NextYou</b><small>Educación · 1 sem</small></span></header><p class="lp__tx">Tu hijo no sabe qué estudiar. Es más normal de lo que crees.<br>A los 16 o 17 años casi nadie lo tiene claro. Lo que ayuda no es elegir ya, sino probar y hablar con gente que trabaja en ello. <span>…ver más</span></p><div class="lp__img"><p class="lp__dato"><b>Elegir con 16 años da vértigo.</b>Y es normal.</p>${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "lp__logo" })}</div><div class="lp__reac" aria-hidden="true"><span>${unescapeHTML(svg(I.pulgar, 18) + " Me gusta")}</span><span>${unescapeHTML(svg(I.coment, 18) + " Comentar")}</span><span>${unescapeHTML(svg(I.enviar, 18) + " Compartir")}</span></div></article></div></div><figcaption>Familias en Instagram y Facebook; centros y orientadores en LinkedIn.</figcaption></figure></section><section class="v2b v2b--peq" aria-labelledby="b5"><header class="v2b__cab"><p class="v2b__n">05</p><h2 id="b5" class="v2b__t">El perfil</h2><p class="v2b__p">Lo que ve quien llega: la mezcla real de contenidos, no un tablero.</p><ul class="v2b__donde" role="list" aria-label="Dónde se publica"><li>Instagram</li></ul></header><figure class="rs__card rs__card--ancha"><div class="v2f v2f--perfil"><div class="ig2"><div class="ig2__cab"><div class="av"><span><img${addAttribute(monograma, "src")} alt="Monograma de NextYou" width="96" height="96"></span></div><ul class="ig2__c" role="list"><li><b>24</b>publicaciones</li><li><b>—</b>seguidores</li><li><b>—</b>seguidos</li></ul></div><p class="ig2__nombre">NextYou</p><p class="ig2__cat">Educación</p><p class="ig2__bio">¿No sabes qué estudiar? Explora tus 3 caminos con gente que ya trabaja en ello.</p><p class="ig2__enlace">nextyou.example/test</p><div class="ig2__bot"><span class="s">Seguir</span><span>Mensaje</span></div><ul class="ig2__d" role="list">${destacadas.map((d) => renderTemplate`<li><span><i>${unescapeHTML(svg(d.i, 22))}</i></span>${d.t}</li>`)}</ul><div class="ig2__tabs" aria-hidden="true"><span class="on">${unescapeHTML(svg("<rect x=\"4\" y=\"4\" width=\"7\" height=\"7\"/><rect x=\"13\" y=\"4\" width=\"7\" height=\"7\"/><rect x=\"4\" y=\"13\" width=\"7\" height=\"7\"/><rect x=\"13\" y=\"13\" width=\"7\" height=\"7\"/>", 22))}</span><span>${unescapeHTML(svg("<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"3\"/><path d=\"M10 9l5 3-5 3z\"/>", 22))}</span><span>${unescapeHTML(svg("<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M5 21c0-4 3-6 7-6s7 2 7 6\"/>", 22))}</span></div></div><div class="fd"><div class="fp fp--foto">${renderComponent($$result, "Image", $$Image, {
		"src": prof_coc_default,
		"alt": "",
		"width": 500,
		"height": 500
	})}<p>Lo que no ves en una cocina</p><span>Cocinero · 34</span></div><div class="fp fp--car fp--negra"><i>${unescapeHTML(svg(I.carrusel, 16))}</i><p>¿No sabes qué estudiar?</p><small>3 señales de que vas bien</small></div><div class="fp fp--foto">${renderComponent($$result, "Image", $$Image, {
		"src": prof_ele_default,
		"alt": "",
		"width": 500,
		"height": 500
	})}<p>Mi primer día con las herramientas</p><span>Electricista · 29</span></div><div class="fp fp--frase fp--negra"><p>No hace falta elegir ya.</p><span class="explora">se explora</span></div><div class="fp fp--foto">${renderComponent($$result, "Image", $$Image, {
		"src": prof_enf_default,
		"alt": "",
		"width": 500,
		"height": 500
	})}<p>Por qué elegí enfermería</p><span>Enfermera · 36</span></div><div class="fp fp--enc"><small>¿Esto o esto?</small><span class="a" style="--p:41%"><b>Crear algo</b><em>41%</em></span><span style="--p:27%"><b>Resolver un reto</b><em>27%</em></span><span style="--p:20%"><b>Quedar con gente</b><em>20%</em></span><span style="--p:12%"><b>Un sitio nuevo</b><em>12%</em></span></div><div class="fp fp--car fp--cre"><i>${unescapeHTML(svg(I.carrusel, 16))}</i><p>Cómo llegar a… Animación 3D</p><small>4 caminos</small></div><div class="fp fp--foto">${renderComponent($$result, "Image", $$Image, {
		"src": prof_fis_default,
		"alt": "",
		"width": 500,
		"height": 500
	})}<p>Un día en mi consulta</p><span>Fisioterapeuta · 32</span></div><div class="fp fp--frase fp--negra"><p>Probar también es avanzar.</p><span class="explora">se explora</span></div></div></div><figcaption>Perfil de Instagram y 9 publicaciones: 4 portadas de «Los de dentro», 2 carruseles, 1 encuesta y 2 frases de marca</figcaption></figure></section><section class="v2b v2b--peq" aria-labelledby="b6"><header class="v2b__cab"><p class="v2b__n">06</p><h2 id="b6" class="v2b__t">Una semana tipo</h2><p class="v2b__p">Tres publicaciones a la semana. Suficiente para mantener el ritmo sin quemarse.</p></header><figure class="rs__card rs__card--ancha"><div class="sem"><article class="sem__c"><p class="sem__dia">Lunes</p><div class="sem__mini"><div class="esc esc--reel" aria-hidden="true"><div class="tk">${renderComponent($$result, "Image", $$Image, {
		"src": dentro[0].foto,
		"alt": "",
		"width": 700,
		"height": 1300,
		"class": "tk__img tk__img--bajo"
	})}<div class="tk__tabs"><span>Siguiendo</span><span class="on">Para ti</span></div><p class="tk__gancho">${dentro[0].gancho}</p><div class="tk__lat"><span class="tk__av"><img${addAttribute(monograma, "src")} alt="" width="40" height="40"><i>${unescapeHTML(svg(I.mas, 10, 2.6))}</i></span><span>${unescapeHTML(svg(I.corazon, 28))}</span><span>${unescapeHTML(svg(I.coment, 28))}</span><span>${unescapeHTML(svg(I.guardar, 28))}</span><span>${unescapeHTML(svg(I.enviar, 28))}</span></div><div class="tk__pie"><span class="tk__tag">${dentro[0].tag}</span><b>@nextyou</b><span>Los de dentro</span></div>${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "tk__ex" })}</div></div></div><h3 class="sem__t">Reel de «Los de dentro»</h3><p class="sem__d">Instagram + TikTok</p><p class="sem__o"><i>${unescapeHTML(svg("<path d=\"M5 12l5 5 9-10\"/>", 14, 2.2))}</i>Que te conozcan</p></article><article class="sem__c"><p class="sem__dia">Miércoles</p><div class="sem__mini"><div class="esc esc--car" aria-hidden="true"><div class="esc__fila"><div class="sl sl--negra"><p class="sl__n">1/6</p><div class="sl__c"><p class="sl__t sl__t--g">¿No sabes qué estudiar?</p><p class="sl__s">3 señales de que vas bien</p></div><p class="sl__pie">Desliza <i>${unescapeHTML(svg(I.flecha, 16))}</i></p></div><div class="sl"><p class="sl__n">2/6</p><div class="sl__c"><i class="sl__num">1</i><p class="sl__t">${senales[0].t}</p><p class="sl__s">${senales[0].s}</p></div><p class="sl__pie">${renderComponent($$result, "LogoV3", $$LogoV3, { "clase": "sl__logo" })}</p></div></div></div></div><h3 class="sem__t">Carrusel para guardar</h3><p class="sem__d">Instagram (+ LinkedIn adaptado para familias)</p><p class="sem__o"><i>${unescapeHTML(svg("<path d=\"M5 12l5 5 9-10\"/>", 14, 2.2))}</i>Que te guarden</p></article><article class="sem__c"><p class="sem__dia">Viernes</p><div class="sem__mini"><div class="esc esc--st" aria-hidden="true">${renderComponent($$result, "RedesStory", $$RedesStory, { "tipo": "pregunta" })}</div></div><h3 class="sem__t">Encuesta «¿Esto o esto?»</h3><p class="sem__d">Stories de Instagram</p><p class="sem__o"><i>${unescapeHTML(svg("<path d=\"M5 12l5 5 9-10\"/>", 14, 2.2))}</i>Que respondan y hagan el test</p></article></div><figcaption>Una semana tipo · miniaturas de las piezas que ya salen más arriba en esta página</figcaption></figure></section><section class="v2b v2b--peq" aria-labelledby="b7"><header class="v2b__cab"><p class="v2b__n">07</p><h2 id="b7" class="v2b__t">Tono</h2><p class="v2b__p">Una sola marca, dos maneras de hablar.</p></header><figure class="rs__card rs__card--ancha"><div class="ton"><div class="ton__c"><p class="ton__t">Jóvenes</p><ul role="list"><li><b>Cercano y directo.</b> Hablamos de tú, con frases cortas.</li><li><b>Sin presión.</b> No saberlo todavía es normal.</li><li><b>Curioso.</b> Preguntas y cosas para probar.</li></ul><blockquote>«Está bien no saberlo todavía. Empieza por probar.»</blockquote></div><div class="ton__c"><p class="ton__t">Familias</p><ul role="list"><li><b>Sereno.</b> Tranquilidad antes que urgencia.</li><li><b>Explicativo.</b> Qué hacemos y por qué.</li><li><b>Que acompaña.</b> Ayudamos, no decidimos por nadie.</li></ul><blockquote>«Es normal que aún no lo sepa. Os contamos cómo explorar sin prisa.»</blockquote></div></div><figcaption>Tono de voz por público</figcaption></figure></section><footer class="rs__pie"><p>Prototipo con fotos y datos de ejemplo. Nada de lo que aparece es una cuenta real.</p></footer></div></main>` })}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/redes-v2/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/redes-v2/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/redes-v2";
//#endregion
//#region \0virtual:astro:page:src/pages/redes-v2/index@_@astro
var page = () => redes_v2_exports;
//#endregion
export { page };
