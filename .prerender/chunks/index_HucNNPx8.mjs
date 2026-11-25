import { a as createComponent, o as __exportAll, r as ENLACES, t as BASE } from "./config_B9QUz7ke.mjs";
import { _ as defineScriptVars, g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment, w as unescapeHTML } from "./server_BtBXtWq_.mjs";
import { t as $$V5 } from "./V5_Dxz31m6R.mjs";
//#region src/pages/empezar/index.astro
var empezar_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const INICIO = BASE;
	const DESTINO_TEST = "#";
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": "Antes de empezar · NextYou",
		"descripcion": "Dos pasos rápidos antes del test: cómo quieres que te llamemos y a dónde te mandamos tus resultados.",
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": ""
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido" class="paso"><div class="paso__fondo" aria-hidden="true"><span></span><span></span></div><div class="paso__caja"><div class="paso__cabeza"><p class="paso__cuenta" aria-hidden="true"><b data-cuenta>1</b> / 2</p></div><div class="paso__linea" aria-hidden="true"><i data-seg="1" class="on"></i><i data-seg="2"></i></div><!-- ===== Pantalla 1: el nombre ===== --><section class="paso__pantalla" data-pantalla="1" aria-labelledby="p1-titulo"><p class="paso__eti">Antes de empezar…</p><h1 id="p1-titulo" class="paso__titulo" tabindex="-1">¿Cómo quieres que te llamemos?</h1><p class="paso__lead">Tu nombre, un apodo, lo que prefieras. Así hablamos contigo como tú quieras.</p><form class="paso__form" novalidate data-form="1"><label class="solo-lector" for="in-nombre">Tu nombre</label><div class="paso__campo"><input id="in-nombre" name="nombre" type="text" autocomplete="given-name" autocapitalize="words" maxlength="60" placeholder="Escribe aquí"><button type="submit" class="paso__ir" aria-label="Continuar"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><button type="button" class="paso__saltar" data-saltar="1">Prefiero no decirlo</button></form><ul class="paso__fichas" role="list" aria-label="Qué hacemos con tu nombre"><li><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10.5" width="16" height="10" rx="2.5"></rect><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"></path></svg>Solo para dirigirnos a ti</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path></svg>Nunca lo compartimos</li></ul></section><!-- ===== Pantalla 2: el correo ===== --><section class="paso__pantalla" data-pantalla="2" aria-labelledby="p2-titulo" hidden><button type="button" class="paso__atras" data-atras aria-label="Volver al paso anterior"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><p class="paso__eti" data-eti-2>Último paso</p><h1 id="p2-titulo" class="paso__titulo" tabindex="-1"><span class="paso__nombre" data-nombre-2></span><span data-resto-2>¿Cuál es tu correo electrónico?</span></h1><p class="paso__lead">Para que tengas tus resultados siempre a mano y te avisemos cuando el test esté listo. Prometido: nada de spam.</p><form class="paso__form" novalidate data-form="2"><label class="solo-lector" for="in-correo">Tu correo</label><div class="paso__campo"><input id="in-correo" name="correo" type="email" inputmode="email" autocomplete="email" spellcheck="false" placeholder="nombre@correo.com" aria-describedby="error-correo"></div><p id="error-correo" class="paso__error" hidden>Revisa el correo, parece que falta algo. Por ejemplo: nombre@gmail.com</p><fieldset class="paso__edad" aria-describedby="edad-porque error-edad"><legend>¿Tienes 14 años o más?</legend><p class="paso__porque" id="edad-porque">Si tienes menos, la ley pide el permiso de un adulto.</p><div class="paso__opciones"><label class="paso__op"><input type="radio" name="edad" value="si"><span>Sí, 14 o más</span></label><label class="paso__op"><input type="radio" name="edad" value="no"><span>No, menos de 14</span></label></div><p id="error-edad" class="paso__error" hidden>Elige una de las dos opciones.</p><div class="paso__tutor" data-tutor hidden><p>Escribimos a tu madre, padre o tutor para que dé el permiso. Cuéntaselo antes, así no le pilla por sorpresa.</p><label class="solo-lector" for="in-tutor">Correo de tu madre, padre o tutor</label><div class="paso__campo"><input id="in-tutor" name="tutor" type="email" inputmode="email" autocomplete="off" spellcheck="false" placeholder="Su correo" aria-describedby="error-tutor"></div><p id="error-tutor" class="paso__error" hidden>Escribe su correo para poder pedirle el permiso.</p></div></fieldset><div class="paso__checks"><label class="paso__chk"><input type="checkbox" id="in-priv" name="privacidad" aria-describedby="error-priv"><span>He leído y acepto la <a${addAttribute(ENLACES.privacidad, "href")} target="_blank" rel="noopener">política de privacidad</a>.</span></label><p id="error-priv" class="paso__error" hidden>Marca esta casilla para seguir.</p><label class="paso__chk"><input type="checkbox" id="in-nov" name="novedades"><span>Quiero recibir novedades de NextYou. <small>(Opcional)</small></span></label></div><details class="paso__info"><summary>¿Qué guardamos y para qué?</summary><ul><li><b>Tu nombre o apodo:</b> solo para dirigirnos a ti.</li><li><b>Tu correo:</b> para enviarte tus resultados y avisarte cuando el test esté listo.</li><li><b>Tu edad:</b> para saber si necesitamos el permiso de un adulto.</li></ul><p>No vendemos tus datos ni los compartimos con universidades ni centros. Puedes pedir que los borremos cuando quieras.</p></details><div class="paso__envio"><button type="submit" class="paso__ir paso__ir--texto">Empezar</button></div><div class="paso__otros"><button type="button" class="paso__saltar" data-saltar="2">Prefiero empezar sin dejar mi correo</button></div></form><ul class="paso__fichas" role="list" aria-label="Qué hacemos con tu correo"><li><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10.5" width="16" height="10" rx="2.5"></rect><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"></path></svg>Solo para tus resultados</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path></svg>Nunca lo compartimos ni lo vendemos</li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>Te das de baja con un clic</li></ul>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML("<!-- PENDIENTE CLIENTA: texto legal de privacidad y de menores (el enlace ya lleva a /legal/#privacidad) -->")}` })}</section><!-- ===== Final: aquí arrancará el test ===== --><section class="paso__pantalla paso__listo" data-pantalla="3" aria-labelledby="p3-titulo" hidden><span class="paso__visto" aria-hidden="true"><svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="24"></circle><path d="M15 27l8 8 14-16"></path></svg></span><h1 id="p3-titulo" class="paso__titulo" tabindex="-1" data-titulo-3>¡Gracias!</h1><p class="paso__lead" data-mensaje></p><a class="boton paso__seguir"${addAttribute(INICIO, "href")}>Seguir explorando</a><a class="paso__ejemplo"${addAttribute(`${BASE}resultados/`, "href")} data-ejemplo>Mientras tanto, mira cómo serán tus resultados</a></section></div></main><script>(function(){${defineScriptVars({ DESTINO_TEST })}
    (function () {
      var $ = function (s, r) { return (r || document).querySelector(s); };
      var pantallas = { 1: $('[data-pantalla="1"]'), 2: $('[data-pantalla="2"]'), 3: $('[data-pantalla="3"]') };
      var nombre = $('#in-nombre'), correo = $('#in-correo'), tutor = $('#in-tutor'), priv = $('#in-priv'), nov = $('#in-nov');
      var form2 = $('[data-form="2"]'), cajaTutor = $('[data-tutor]');
      // Lo que se recoge en las dos pantallas. edad: 'si' (14 o más) | 'no' (menos de 14) | ''
      var datos = { nombre: '', correo: '', edad: '', tutor: '', privacidad: false, novedades: false };
      var intentado = false;

      function ir(n) {
        Object.keys(pantallas).forEach(function (k) { pantallas[k].hidden = String(k) !== String(n); });
        var cab = $('.paso__cabeza'), lin = $('.paso__linea');
        cab.hidden = lin.hidden = n === 3;
        $('[data-cuenta]').textContent = String(Math.min(n, 2));
        document.querySelectorAll('[data-seg]').forEach(function (b) { b.classList.toggle('on', Number(b.dataset.seg) <= Math.min(n, 2)); });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (n === 1) nombre.focus({ preventScroll: true });
        else if (n === 2) correo.focus({ preventScroll: true });
        else $('.paso__titulo', pantallas[n]).focus({ preventScroll: true });
      }
      function pasarACorreo() {
        $('[data-nombre-2]').textContent = datos.nombre ? datos.nombre + ', ' : '';
        $('[data-resto-2]').textContent = datos.nombre ? '¿cuál es tu correo electrónico?' : '¿Cuál es tu correo electrónico?';
        ir(2);
      }
      function terminar() {
        // PENDIENTE: enviar \`datos\` (nombre, correo, edad, correo del tutor, privacidad y novedades) al destino real:
        // hoy no se guardan en ningún sitio.
        if (DESTINO_TEST !== '#') { location.href = DESTINO_TEST; return; }
        // Mientras no haya test ni destino de datos, se dice tal cual
        $('[data-titulo-3]').textContent = datos.nombre ? '¡Gracias, ' + datos.nombre + '!' : '¡Gracias!';
        $('[data-mensaje]').textContent = !datos.correo
          ? 'No hace falta dejar tu correo. En cuanto el test esté listo podrás hacerlo y ver tus resultados en pantalla.'
          : datos.edad === 'no'
            ? 'Hemos escrito a tu madre, padre o tutor para pedirle el permiso. Cuando lo acepte, te enviaremos a ' + datos.correo + ' el aviso de que el test está listo.'
            : 'Te escribiremos a ' + datos.correo + ' en cuanto el test esté listo, con tus resultados y todo lo necesario para explorar tu camino.';
        // El ejemplo de resultados lleva el nombre, para que el saludo salga personalizado
        var ej = $('[data-ejemplo]');
        if (ej && datos.nombre) ej.href = ej.getAttribute('href').split('?')[0] + '?nombre=' + encodeURIComponent(datos.nombre);
        ir(3);
      }

      // Pantalla 1 · nombre (opcional: seguir en blanco también vale)
      $('[data-form="1"]').addEventListener('submit', function (e) { e.preventDefault(); datos.nombre = nombre.value.trim(); pasarACorreo(); });
      $('[data-saltar="1"]').addEventListener('click', function () { datos.nombre = ''; pasarACorreo(); });

      // Pantalla 2 · correo, edad y privacidad. Se valida solo al pulsar «Empezar»; después, los errores se actualizan al corregir.
      var esCorreo = function (v) { return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(v); };
      var edad = function () { var r = form2.querySelector('input[name="edad"]:checked'); return r ? r.value : ''; };
      function marcar(id, hayError, campo) {
        $('#' + id).hidden = !hayError;
        if (campo) { if (hayError) campo.setAttribute('aria-invalid', 'true'); else campo.removeAttribute('aria-invalid'); }
      }
      function validar(enfocar) {
        var primero = null, e = edad();
        var malCorreo = !esCorreo(correo.value.trim());
        marcar('error-correo', malCorreo, correo); if (malCorreo) primero = correo;
        marcar('error-edad', !e); if (!e) primero = primero || form2.querySelector('input[name="edad"]');
        var malTutor = e === 'no' && !esCorreo(tutor.value.trim());
        marcar('error-tutor', malTutor, tutor); if (malTutor) primero = primero || tutor;
        marcar('error-priv', !priv.checked, priv); if (!priv.checked) primero = primero || priv;
        if (enfocar && primero) primero.focus();
        return !primero;
      }
      function actualizar() {
        cajaTutor.hidden = edad() !== 'no';
        if (intentado) validar(false);
      }
      form2.querySelectorAll('input[name="edad"]').forEach(function (r) { r.addEventListener('change', actualizar); });
      [correo, tutor].forEach(function (i) { i.addEventListener('input', actualizar); });
      priv.addEventListener('change', actualizar);
      form2.addEventListener('submit', function (e) {
        e.preventDefault();
        intentado = true;
        if (!validar(true)) return;
        datos.correo = correo.value.trim(); datos.edad = edad();
        datos.tutor = datos.edad === 'no' ? tutor.value.trim() : '';
        datos.privacidad = priv.checked; datos.novedades = nov.checked;
        terminar();
      });
      // Sin correo no se guarda nada de esta pantalla ni hace falta la casilla
      $('[data-saltar="2"]').addEventListener('click', function () {
        datos.correo = ''; datos.edad = ''; datos.tutor = ''; datos.privacidad = false; datos.novedades = false;
        terminar();
      });
      $('[data-atras]').addEventListener('click', function () { ir(1); });
      // La pantalla ocupa todo el hueco bajo el menú, sin scroll
      var rellenar = function () {
        var menu = $('.menu'), main = $('.paso');
        if (!menu || !main) return;
        main.style.minHeight = Math.max(0, window.innerHeight - (menu.offsetTop + menu.offsetHeight)) + 'px';
      };
      rellenar(); window.addEventListener('resize', rellenar);
      nombre.focus({ preventScroll: true });
    })();
  })();<\/script>` })}`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/empezar/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/empezar/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/empezar";
//#endregion
//#region \0virtual:astro:page:src/pages/empezar/index@_@astro
var page = () => empezar_exports;
//#endregion
export { page };
