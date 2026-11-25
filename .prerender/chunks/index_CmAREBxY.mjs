import { a as createComponent, n as CTA_PRINCIPAL, o as __exportAll } from "./config_B9QUz7ke.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as renderScript } from "./script_DQgE2Dhe.mjs";
import { t as $$V5 } from "./V5_BWs46Cmi.mjs";
import { t as $$AppPantalla } from "./AppPantalla_39RSHPzP.mjs";
//#region src/pages/acompanamiento-crema/index.astro
var acompanamiento_crema_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const faq = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "¿Tengo que hacer el test antes?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Sí. El coach parte de tus 3 caminos, así no empezáis de cero. El test es gratis."
				}
			},
			{
				"@type": "Question",
				"name": "¿Me vais a decir qué estudiar?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "No. Te ayudamos a comparar con datos y la decisión es tuya."
				}
			},
			{
				"@type": "Question",
				"name": "¿Mis padres se enteran de lo que hablo?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "No. Están al principio, pero tus sesiones son confidenciales, salvo que estés en peligro."
				}
			},
			{
				"@type": "Question",
				"name": "¿Qué plan me conviene?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Una duda concreta: «Resolver dudas». Varias opciones: «Comparar caminos». Tienes que elegir pronto: «Decidir con calma»."
				}
			},
			{
				"@type": "Question",
				"name": "¿Por qué pagar si hay orientador en el instituto?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "El orientador atiende a muchos alumnos a la vez. Aquí las sesiones son solo para tu hijo o hija y acaban con un plan concreto. Es un complemento, no un sustituto."
				}
			},
			{
				"@type": "Question",
				"name": "¿Y si no puedo ir a una sesión?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Avisas con antelación y buscáis otro día."
				}
			}
		]
	};
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": "Coach para decidir qué estudiar · NextYou",
		"descripcion": "Sesiones por videollamada con un coach para comparar tus 3 caminos con datos reales y decidir qué estudiar. Desde 49 €.",
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": "home-v3/",
		"robots": "noindex, follow"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido" class="acc"><div class="ancho"><div class="acc-hero"><div><h1>Decide qué estudiar <em class="acc-hl">con un coach</em></h1><p class="acc-sub">Comparas tus 3 caminos con datos reales y eliges por dónde empezar.</p><div class="acc-ctas"><a class="boton boton--oscuro" href="#planes">Ver planes · desde 49 €</a><a class="acc-tl" href="#familias">Soy madre o padre <span aria-hidden="true">→</span></a></div><p class="acc-meta">Por videollamada · Sesiones de 45 min</p></div><figure class="acc-chat" aria-label="Ejemplo de conversación en una sesión"><p class="acc-m acc-y">Me salen Animación 3D y Ciberseguridad. ¿Por cuál tiro?</p><p class="acc-m acc-k">Hoy no tienes que decidirlo todo. Buscamos un primer paso que puedas probar.</p><figcaption>Así puede ser una sesión</figcaption></figure></div><section aria-labelledby="t-quien"><div class="acc-head"><h2 id="t-quien">¿Te <em class="acc-hl">suena?</em></h2><p>Para eso está el coach.</p></div><ul class="acc-sit" role="region" aria-label="Situaciones frecuentes, desliza para ver más" tabindex="0"><li>Me salen tres caminos y no sé por cuál empezar.</li><li>Me gusta algo creativo, pero en casa no lo ven claro.</li><li>Tengo que elegir este curso y me bloqueo.</li></ul></section><section id="como" aria-labelledby="t-como"><div class="acc-head"><h2 id="t-como">Así <em class="acc-hl">funciona</em></h2></div><ol class="acc-steps"><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"></circle><circle cx="17" cy="9" r="2.5"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path><path d="M15 14.5c2.8 0 5 2.2 5 5"></path></svg></span><h3>Empezáis en familia</h3><p>Qué buscáis y qué queda entre tú y tu coach.</p></li><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"></path></svg></span><h3>Sesiones solo para ti</h3><p>Comparáis tus caminos con datos. Todo es confidencial.</p></li><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 3h6"></path><path d="M10 3v6L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"></path><path d="M7.5 14h9"></path></svg></span><h3>Pruebas entre sesiones</h3><p>Un vídeo, unas puertas abiertas, una pregunta a un estudiante.</p></li><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path><path d="M9 13h6M9 17h4"></path></svg></span><h3>Te llevas tu plan</h3><p>Tu primer paso, los plazos y un plan B.</p></li></ol><p class="acc-note"><b>No decide por ti ni hace terapia.</b> Si necesitas un psicólogo, te lo dice.</p></section><section id="planes" aria-labelledby="t-planes"><div class="acc-head"><h2 id="t-planes">Elige tu <em class="acc-hl">plan</em></h2><p>Los tres empiezan con tu familia y acaban con algo por escrito.</p></div><div class="acc-plans"><article class="acc-card acc-plan"><h3>Resolver dudas</h3><p class="acc-for">Tienes una duda concreta.</p><p class="acc-pr">49 €<small>IVA incl.</small></p><p class="acc-per">Sesión suelta</p><ul class="acc-li"><li>1 sesión de 45 min</li><li>10 min con tu familia</li><li>Tu siguiente paso por escrito</li></ul><a class="boton boton--contorno-oscuro" href="#" aria-label="Reservar el plan Resolver dudas, 49 euros">Reservar sesión</a></article><article class="acc-card acc-plan acc-rec"><span class="acc-tag">Para comparar tus 3 caminos</span><h3>Comparar caminos</h3><p class="acc-for">Dudas entre varias opciones.</p><p class="acc-pr">149 €<small>IVA incl.</small></p><p class="acc-per">Unos 37 € por sesión</p><ul class="acc-li"><li>4 sesiones (1 con tu familia)</li><li>Comparativa hecha para ti</li><li>Dudas por mensaje entre sesiones</li></ul><a class="boton" href="#" aria-label="Empezar el plan Comparar caminos, 149 euros">Empezar</a></article><article class="acc-card acc-plan"><h3>Decidir con calma</h3><p class="acc-for">Tienes que elegir pronto.</p><p class="acc-pr">249 €<small>IVA incl.</small></p><p class="acc-per">Unos 42 € por sesión</p><ul class="acc-li"><li>6 sesiones (2 con tu familia)</li><li>Charla con un Insider de tu camino</li><li>1 mes de dudas por mensaje al acabar</li></ul><a class="boton boton--contorno-oscuro" href="#" aria-label="Empezar el plan Decidir con calma, 249 euros">Empezar</a></article></div><ul class="acc-book" aria-label="Cómo se reserva"><li><span class="acc-mi" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path></svg></span>Eliges coach</li><li class="acc-ar" aria-hidden="true">→</li><li><span class="acc-mi" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 3v4M16 3v4"></path></svg></span>Día y hora</li><li class="acc-ar" aria-hidden="true">→</li><li><span class="acc-mi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5z"></path><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg></span>Te llega el enlace</li></ul><p class="acc-small">IVA incluido. Si eres menor, reserva y paga un adulto.</p></section><section id="familias" aria-labelledby="t-fam"><div class="acc-fam"><div class="acc-head"><div><p class="acc-ey">Para madres, padres y tutores</p><h2 id="t-fam">Lo que <em class="acc-hl">tenéis que saber</em></h2></div></div><ul class="acc-fg" role="region" aria-label="Lo que tenéis que saber, desliza para ver más" tabindex="0"><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"></circle><circle cx="17" cy="9" r="2.5"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"></path><path d="M15 14.5c2.8 0 5 2.2 5 5"></path></svg></span><h3>Estáis al principio</h3><p>La primera sesión es con vosotros.</p></li><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg></span><h3>Sus sesiones son suyas</h3><p>Confidenciales, salvo que esté en peligro.</p></li><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path><path d="M9 13h6M9 17h4"></path></svg></span><h3>Datos, no opiniones</h3><p>Plan y comparativa por escrito.</p></li><li><span class="acc-mk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"></path><path d="M9 12l2 2 4-4"></path></svg></span><h3>Nadie cobra por recomendar</h3><p>Cero comisiones de universidades ni centros.</p></li></ul><a class="boton" href="#planes">Ver planes</a></div></section><section id="coaches" aria-labelledby="t-co"><div class="acc-head"><h2 id="t-co">Elige a <em class="acc-hl">tu coach</em></h2><p>Cada uno se presenta en un vídeo de un minuto.</p></div><ul class="acc-co"><li class="acc-cl"><div class="acc-fo" aria-hidden="true">L</div><div class="acc-pie"><h3>Laura, 38</h3><p>Pedagoga · FP y salidas técnicas</p><button type="button" aria-label="Ver el vídeo de Laura, 1 minuto"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>1 min</button></div></li><li class="acc-cl"><div class="acc-fo" aria-hidden="true">M</div><div class="acc-pie"><h3>Marc, 41</h3><p>Educador social · Dudas y miedo a equivocarse</p><button type="button" aria-label="Ver el vídeo de Marc, 1 minuto"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>1 min</button></div></li><li class="acc-cl"><div class="acc-fo" aria-hidden="true">N</div><div class="acc-pie"><h3>Nuria, 35</h3><p>Orientadora · Universidad y notas de corte</p><button type="button" aria-label="Ver el vídeo de Nuria, 1 minuto"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>1 min</button></div></li><li class="acc-cl"><div class="acc-fo" aria-hidden="true">Á</div><div class="acc-pie"><h3>Álex, 33</h3><p>Coach · Estudios creativos</p><button type="button" aria-label="Ver el vídeo de Álex, 1 minuto"><svg width="10" height="12" viewBox="0 0 12 14" aria-hidden="true"><path d="M1.5 1.2l9 5.8-9 5.8z" fill="currentColor"></path></svg>1 min</button></div></li></ul><ul class="acc-badges" aria-label="Cómo los elegimos"><li>Mínimo 5 años de experiencia</li><li>Verificados</li><li>Saben cuándo derivar a un psicólogo</li></ul></section><section id="faq" aria-labelledby="t-faq"><div class="acc-fq"><div><h2 id="t-faq">Preguntas <em class="acc-hl">frecuentes</em></h2><div class="acc-card acc-contact"><p>¿Otra duda?<span>Escríbenos y te respondemos.</span></p><a class="boton boton--contorno-oscuro" href="#">Escríbenos</a></div></div><div class="acc-faq"><details open><summary>¿Tengo que hacer el test antes?</summary><p>Sí. El coach parte de tus 3 caminos, así no empezáis de cero. El test es gratis.</p></details><details><summary>¿Me vais a decir qué estudiar?</summary><p>No. Te ayudamos a comparar con datos y la decisión es tuya.</p></details><details><summary>¿Mis padres se enteran de lo que hablo?</summary><p>No. Están al principio, pero tus sesiones son confidenciales, salvo que estés en peligro.</p></details><details><summary>¿Qué plan me conviene?</summary><p>Una duda concreta: «Resolver dudas». Varias opciones: «Comparar caminos». Tienes que elegir pronto: «Decidir con calma».</p></details><details><summary>¿Por qué pagar si hay orientador en el instituto?</summary><p>El orientador atiende a muchos alumnos a la vez. Aquí las sesiones son solo para tu hijo o hija y acaban con un plan concreto. Es un complemento, no un sustituto.</p></details><details><summary>¿Y si no puedo ir a una sesión?</summary><p>Avisas con antelación y buscáis otro día.</p></details></div></div></section><section class="acc-end" aria-labelledby="t-end"><div class="acc-endg"><div><h2 id="t-end">¿Aún no tienes <em class="acc-hl">tus 3 caminos</em>?</h2><p class="acc-sub">El test es gratis. Después decides si quieres un coach.</p><div class="acc-ctas"><a class="boton"${addAttribute(CTA_PRINCIPAL.href, "href")}>Hacer el test gratis</a><a class="boton boton--contorno-oscuro" href="#planes">Ver planes</a></div></div><div class="acc-tel" aria-hidden="true">${renderComponent($$result, "AppPantalla", $$AppPantalla, {
		"pantalla": "caminos",
		"nombre": "Lucía",
		"iconos": true
	})}<div class="acc-noti"><i>N</i><span><small>NextYou · ahora</small><b>Tus 3 caminos están listos</b></span></div></div></div></section></div></main><div class="acc-stick" id="acc-stick" aria-hidden="true"><p><b>Desde 49 €</b></p><a class="boton" href="#planes" tabindex="-1">Ver planes</a></div><script type="application/ld+json">${unescapeHTML(JSON.stringify(faq))}<\/script>` })}${renderScript($$result, "D:/Clientes she is/Next you/nextyou-lima/src/pages/acompanamiento-crema/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/acompanamiento-crema/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/acompanamiento-crema/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/acompanamiento-crema";
//#endregion
//#region \0virtual:astro:page:src/pages/acompanamiento-crema/index@_@astro
var page = () => acompanamiento_crema_exports;
//#endregion
export { page };
