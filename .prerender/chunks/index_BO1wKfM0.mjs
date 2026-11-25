import { a as createComponent, o as __exportAll } from "./config_B9QUz7ke.mjs";
import { m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_BtBXtWq_.mjs";
import { t as $$V5 } from "./V5_Dxz31m6R.mjs";
//#region src/pages/logica-del-test/index.astro
var logica_del_test_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "V5", $$V5, {
		"titulo": "Lógica del test · NextYou",
		"descripcion": "Cómo calcula NextYou tus 3 caminos: qué te atrae, cómo trabajas y el cruce con cada estudio.",
		"actual": "bachillerato",
		"soloBachillerato": true,
		"ruta": "home-v3/",
		"robots": "noindex, follow"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main id="contenido" class="ldt"><div class="bar">Propuesta para revisar con Sara · las preguntas son un borrador y deben pasar por una psicóloga antes de usarse</div><header class="w hero"><p class="ey">NextYou · cómo funciona el test por dentro</p><h1>Cómo salen tus 3 caminos</h1><p class="lede">El test cruza dos cosas: qué actividades te atraen y cómo te gusta trabajar. Con eso compara tus respuestas con cada estudio del catálogo y elige tres caminos distintos, cada uno con el porqué a la vista.</p><div class="signals"><div class="sig"><small>Señal principal</small><b>Qué te atrae</b><p>Modelo RIASEC (Holland): seis tipos de actividad. Sale de «La bandeja», 18 tareas reales.</p><p class="w8">Pesa el 75 %</p></div><div class="sig"><small>Señal secundaria</small><b>Cómo trabajas</b><p>Modelo HEXACO: seis rasgos de personalidad. Sale de «La brújula», 24 frases sobre ti.</p><p class="w8">Pesa el 25 %</p></div><div class="sig"><small>El cruce</small><b>Tus 3 caminos</b><p>Cada estudio tiene su código de actividad y los rasgos que más ayudan en ese trabajo. Se calcula el encaje con cada uno.</p><p class="w8">29 estudios de ejemplo</p></div></div></header><section id="prueba" aria-labelledby="t-prueba"><div class="w"><div class="head"><p class="ey">Pruébalo</p><h2 id="t-prueba">Cambia una respuesta y mira cómo se mueve todo</h2><p>Empieza con un perfil de ejemplo o contesta tú. El resultado se recalcula con cada respuesta, con las mismas reglas que tendría el test de verdad.</p></div><div class="lab"><div><div class="presets" role="group" aria-label="Perfiles de ejemplo"><button class="chip" type="button" data-p="noa" aria-pressed="true">Ejemplo: Noa</button><button class="chip" type="button" data-p="pau" aria-pressed="false">Ejemplo: Pau</button><button class="chip" type="button" data-p="nil" aria-pressed="false">Ejemplo: Nil</button><button class="chip" type="button" data-p="cero" aria-pressed="false">Contestar desde cero</button></div><div class="tabs" role="tablist" aria-label="Partes del test"><button class="tab" type="button" role="tab" id="tab-b" aria-controls="pan-b" aria-selected="true">La bandeja · 18</button><button class="tab" type="button" role="tab" id="tab-h" aria-controls="pan-h" aria-selected="false" tabindex="-1">La brújula · 24</button></div><div class="panel" id="pan-b" role="tabpanel" aria-labelledby="tab-b"><p class="intro">¿Pasarías una tarde haciendo esto? La etiqueta dice qué tipo de actividad mide cada tarea.</p><div id="lista-b"></div></div><div class="panel" id="pan-h" role="tabpanel" aria-labelledby="tab-h" hidden><p class="intro">¿Cuánto se parece a ti? La etiqueta dice qué rasgo mide. Las que tienen borde discontinuo cuentan al revés.</p><div id="lista-h"></div></div></div><div class="res" aria-live="polite"><div class="card"><p class="ey">Qué te atrae</p><div class="bars" id="bars"></div><p class="hol" id="hol"></p></div><div class="card"><p class="ey">Cómo trabajas</p><div class="styl" id="styl"></div></div><div class="card"><p class="ey">Tus 3 caminos</p><div id="cams"></div></div><div class="card"><details class="calc"><summary>Ver el cálculo de los 8 estudios con más encaje</summary><div class="tw"><table><thead><tr><th>Estudio</th><th>Código</th><th>Intereses</th><th>Estilo</th><th>Encaje</th></tr></thead><tbody id="tabla"></tbody></table></div></details></div></div></div></div></section><section aria-labelledby="t-est" style="padding-top:24px"><div class="w"><div class="head"><p class="ey">El test completo</p><h2 id="t-est">Cuatro partes, unos 8 minutos</h2><p>Cambia la segunda parte. Las doce preguntas con licencia sobre cómo llevas los cambios (CAAS-SF) se sustituyen por 24 frases propias sobre cómo eres.</p></div><ol class="st"><li><span class="k"><span>1 · La bandeja</span><span>2:00</span></span><h3>Qué te atrae</h3><p>18 tareas reales, 3 por cada tipo de actividad RIASEC. Respondes: ni de broma · bah · me pega · eso sí.</p></li><li class="new"><span class="k"><span>2 · La brújula</span><span>2:00</span></span><span class="tagn">Nueva</span><h3>Cómo trabajas</h3><p>24 frases, 4 por cada rasgo HEXACO. Respondes: nada yo · poco yo · bastante yo · muy yo.</p></li><li><span class="k"><span>3 · El motor</span><span>0:50</span></span><h3>Qué te frena</h3><p>6 frases sobre confianza, apoyos y lo que esperas. No cambia: sirve para redactar el siguiente paso.</p></li><li><span class="k"><span>4 · Las escenas</span><span>1:25</span></span><h3>Qué harías tú</h3><p>3 situaciones de trabajo con vídeo. No cambia: sirve para proponer retos después.</p></li></ol><p class="total">Con la portada, el consentimiento y el email, el test sigue en unos 8 minutos.</p></div></section><section aria-labelledby="t-calc"><div class="w"><div class="head"><p class="ey">Las reglas</p><h2 id="t-calc">Así se calcula, paso a paso</h2><p>Todo se puede explicar con las respuestas. No hay nada que el estudiante no pueda ver de dónde sale.</p></div><ol class="steps"><li><div><h3>Puntúa qué te atrae</h3><p>Cada tipo de actividad suma sus 3 tareas (de 0 a 9) y se pasa a 100. Las tres más altas forman tu código, por ejemplo ACI: Crear, Ordenar, Entender. Si la primera y la tercera están a menos de 12 puntos, el perfil es abierto y se dice así.</p><code class="f">Interés de una letra = (suma de sus 3 tareas ÷ 9) × 100</code></div></li><li><div><h3>Puntúa cómo trabajas</h3><p>Cada rasgo suma sus 4 frases. En las invertidas, «muy yo» cuenta 0 y «nada yo» cuenta 3. Así se evita contestar a todo que sí.</p><code class="f">Rasgo = (suma de sus 4 frases, con las invertidas al revés) ÷ 12 × 100</code></div></li><li><div><h3>Mide el encaje con cada estudio</h3><p>Cada estudio tiene un código de 3 letras: la primera pesa el triple y la segunda el doble. El estilo compara tus dos rasgos clave con los que más ayudan en ese trabajo. El estilo nunca descarta un estudio: solo matiza.</p><code class="f">Intereses = (3 × 1.ª letra + 2 × 2.ª + 1 × 3.ª) ÷ 6 · Estilo = 100 − distancia media en 2 rasgos · Encaje = 75 % intereses + 25 % estilo</code></div></li><li><div><h3>Elige tres caminos distintos</h3><p><b>El que más te pega:</b> el de más encaje. <b>El puente:</b> comparte tu actividad favorita, pero en otra familia de estudios. <b>El salto:</b> empieza por tu segunda o tercera actividad y es de una familia distinta a las otras dos.</p></div></li><li><div><h3>Explica cada camino</h3><p>Cada camino enseña la tarea concreta que elegiste y qué tiene que ver con ese trabajo, más un rasgo tuyo que ayuda. Si el estudio pide algo en lo que marcaste poco, se dice con una pregunta abierta, sin descartarlo.</p></div></li></ol></div></section><section aria-labelledby="t-cat" style="padding-top:24px"><div class="w"><div class="head"><p class="ey">El catálogo</p><h2 id="t-cat">Cada estudio, con su código</h2><p>Códigos asignados a partir de las ocupaciones parecidas de O*NET, la base pública de profesiones de Estados Unidos. Son un punto de partida: hay que revisarlos con la orientadora. <span class="pv">Por validar</span></p></div><div class="tw card" style="padding:6px 10px"><table><thead><tr><th>Estudio</th><th>Familia</th><th>Código</th><th>Rasgos clave</th><th>Cómo se llega</th></tr></thead><tbody id="cat"></tbody></table></div></div></section><section aria-labelledby="t-donde"><div class="w"><div class="head"><p class="ey">Dónde se nota</p><h2 id="t-donde">En los resultados y con el coach</h2><p>Con el perfil de Noa, estos son los textos que verían ella y su coach. Salen solos de las reglas de arriba.</p></div><div class="two"><div class="box"><p class="ey">Página de resultados</p><h3>«Así eres, según tus respuestas»</h3><div class="styl" id="rasgos-ej"></div><h3 style="margin-top:8px">«Por qué te lo proponemos»</h3><div id="porque-ej"></div></div><div class="box"><p class="ey">Cuestionario del coach</p><h3>Antes de la primera sesión</h3><p class="ex">Tu coach ya ve qué te atrae y cómo trabajas. Estas preguntas comprueban si te reconoces y añaden lo que el test no sabe.</p><div class="fq"><p>De tus 3 caminos, ¿cuál te tira más?</p><div class="opts" id="opts-cam"></div><small>Comprueba la señal principal: qué te atrae.</small></div><div class="fq"><p>¿Te reconoces en «cómo trabajas»?</p><div class="opts"><span>Sí, bastante</span><span>En parte</span><span>No mucho</span></div><small>Comprueba la señal secundaria. Si dice «no mucho», el coach empieza por ahí.</small></div><div class="fq"><p>¿Cuánto te falta para la selectividad?</p><div class="opts"><span>Más de un año</span><span>Este curso</span><span>Ya la hice</span><span>No voy a hacerla</span></div><small>El test no lo sabe: marca el ritmo de las sesiones.</small></div><div class="fq"><p>¿Participarán tus padres?</p><div class="opts"><span>Sí</span><span>Solo al principio</span><span>No</span></div><small>Igual que ahora.</small></div></div></div></div></section><section class="dark" aria-labelledby="t-lim"><div class="w"><div class="head"><p class="ey">Antes de lanzarlo</p><h2 id="t-lim">Lo que no decimos y lo que falta</h2><p>Para que el test sea serio, tiene que ser claro sobre lo que mide.</p></div><ul class="lim"><li><h3>Mide gustos, no talento</h3><p>Nunca decimos «test validado», «precisión del X %» ni «tu profesión ideal». Hablamos de caminos para explorar.</p></li><li><h3>Las preguntas son propias</h3><p>El cuestionario HEXACO oficial es de pago para empresas y exige una psicóloga. Estas 24 frases son nuestras, inspiradas en el modelo y en el banco público IPIP. No se pueden llamar «HEXACO oficial».</p></li><li><h3>Dos rasgos no se enseñan</h3><p>Emocionalidad y honestidad no cambian los caminos ni salen en los resultados. Solo le sirven al coach para adaptar el tono, si la familia lo acepta.</p></li><li><h3>Hay que revisarlo y probarlo</h3><p>Una psicóloga u orientadora revisa frases y códigos. Después, unas 30 personas hacen el test y se comprueba que los resultados tienen sentido.</p></li><li><h3>Datos de menores</h3><p>Los rasgos de personalidad son datos personales delicados. Hace falta consentimiento claro y explicar en la política de privacidad qué se guarda y quién lo ve.</p></li><li><h3>Si se usan datos de O*NET</h3><p>Su licencia permite el uso comercial, pero pide citar la fuente. Se añade una línea en la página de metodología.</p></li></ul></div></section><footer class="w">NextYou · propuesta de lógica del test · noviembre de 2026</footer></main>` })}<script>

// Lógica del test NextYou: RIASEC (qué te atrae) + HEXACO (cómo trabajas) + cruce con estudios
var LETRAS = {
  R: { n: 'Manos', d: 'hacer cosas con las manos y con herramientas' },
  I: { n: 'Entender', d: 'investigar y entender por qué pasan las cosas' },
  A: { n: 'Crear', d: 'crear cosas nuevas y expresarte' },
  S: { n: 'Gente', d: 'ayudar, enseñar y cuidar a otras personas' },
  E: { n: 'Mover', d: 'convencer, liderar y poner en marcha cosas' },
  C: { n: 'Ordenar', d: 'organizar, revisar y que todo cuadre' }
};
var ORDEN_L = ['R', 'I', 'A', 'S', 'E', 'C'];

// La bandeja: 18 tareas, 3 por letra. Escala: ni de broma 0 · bah 1 · me pega 2 · eso sí 3
var BANDEJA = [
  { id: 'b1', l: 'R', t: 'Pasar una mañana en un río midiendo la calidad del agua' },
  { id: 'b2', l: 'R', t: 'Recorrer un edificio a pie para ver por dónde entra el sol' },
  { id: 'b3', l: 'R', t: 'Montar y calibrar un equipo tú mismo hasta que funcione' },
  { id: 'b4', l: 'I', t: 'Buscar por qué un dato no cuadra hasta dar con el motivo' },
  { id: 'b5', l: 'I', t: 'Leerte un informe de cincuenta páginas y sacar las tres ideas que importan' },
  { id: 'b6', l: 'I', t: 'Comparar diez estudios para ver si dicen lo mismo' },
  { id: 'b7', l: 'A', t: 'Inventar el sonido de algo que no existe' },
  { id: 'b8', l: 'A', t: 'Dibujar cómo debería ser algo y enseñárselo a cuatro personas' },
  { id: 'b9', l: 'A', t: 'Escribir la misma frase doce veces hasta que suene bien' },
  { id: 'b10', l: 'S', t: 'Llamar a cuatro personas y preguntarles por qué dejaron de usar algo' },
  { id: 'b11', l: 'S', t: 'Sentarte con alguien mayor y explicarle un trámite hasta que lo entienda' },
  { id: 'b12', l: 'S', t: 'Moderar una reunión donde nadie se pone de acuerdo' },
  { id: 'b13', l: 'E', t: 'Convencer a un jefe de cambiar algo que lleva años igual' },
  { id: 'b14', l: 'E', t: 'Presentar tu idea delante de gente que no la ha pedido' },
  { id: 'b15', l: 'E', t: 'Negociar un presupuesto sabiendo que te van a decir que no' },
  { id: 'b16', l: 'C', t: 'Ordenar un caos de archivos hasta que cualquiera encuentre lo suyo' },
  { id: 'b17', l: 'C', t: 'Revisar línea a línea que no falte ningún dato' },
  { id: 'b18', l: 'C', t: 'Montar un calendario que haga que quince personas no choquen' }
];

// La brújula: 24 frases, 4 por rasgo HEXACO (2 directas, 2 invertidas). Escala: nada yo 0 · poco yo 1 · bastante yo 2 · muy yo 3
var RASGOS = {
  H: { n: 'Honestidad y humildad', alto: 'Juegas limpio aunque nadie mire', bajo: 'Te motiva destacar y que se note', publico: false },
  E: { n: 'Emocionalidad', alto: 'Vives las cosas con intensidad y te apoyas en los tuyos', bajo: 'Mantienes la calma cuando hay presión', publico: false },
  X: { n: 'Extraversión', alto: 'Te carga de energía estar con gente', bajo: 'Rindes mejor concentrándote a tu ritmo', publico: true },
  A: { n: 'Amabilidad', alto: 'Buscas el acuerdo cuando hay roces', bajo: 'Defiendes tu punto de vista con firmeza', publico: true },
  C: { n: 'Responsabilidad', alto: 'Te organizas y rematas lo que empiezas', bajo: 'Te mueves bien improvisando', publico: true },
  O: { n: 'Apertura', alto: 'Te tira lo nuevo y lo distinto', bajo: 'Prefieres lo práctico y lo que ya funciona', publico: true }
};
var ORDEN_R = ['H', 'E', 'X', 'A', 'C', 'O'];
var BRUJULA = [
  { id: 'h1', r: 'H', inv: false, t: 'Si en una tienda me devuelven de más, lo digo aunque nadie se dé cuenta.' },
  { id: 'h2', r: 'H', inv: false, t: 'Prefiero que me valoren por lo que hago, no por lo que tengo.' },
  { id: 'h3', r: 'H', inv: true, t: 'Si me conviene, exagero un poco para quedar bien.' },
  { id: 'h4', r: 'H', inv: true, t: 'Me gustaría tener cosas caras para que se note.' },
  { id: 'e1', r: 'E', inv: false, t: 'La noche antes de algo importante me cuesta dormir.' },
  { id: 'e2', r: 'E', inv: false, t: 'Cuando tengo un problema, necesito contárselo a alguien.' },
  { id: 'e3', r: 'E', inv: false, t: 'Me emociono con facilidad con una película o una canción.' },
  { id: 'e4', r: 'E', inv: true, t: 'Las cosas arriesgadas, como una tirolina, no me dan nada de miedo.' },
  { id: 'x1', r: 'X', inv: false, t: 'En un grupo nuevo, suelo ser de los primeros en hablar.' },
  { id: 'x2', r: 'X', inv: false, t: 'Después de un día rodeado de gente, acabo con más energía.' },
  { id: 'x3', r: 'X', inv: true, t: 'Prefiero que otra persona presente el trabajo en clase.' },
  { id: 'x4', r: 'X', inv: true, t: 'Necesito ratos a solas para recargar las pilas.' },
  { id: 'a1', r: 'A', inv: false, t: 'Si alguien me hace una faena, se me pasa pronto.' },
  { id: 'a2', r: 'A', inv: false, t: 'Cuando discuto, intento entender lo que piensa la otra persona.' },
  { id: 'a3', r: 'A', inv: true, t: 'Me cuesta no enfadarme cuando alguien hace algo mal.' },
  { id: 'a4', r: 'A', inv: true, t: 'Si creo que tengo razón, no cedo.' },
  { id: 'c1', r: 'C', inv: false, t: 'Apunto las fechas de entrega para que no se me pasen.' },
  { id: 'c2', r: 'C', inv: false, t: 'Reviso un trabajo antes de entregarlo, aunque ya esté bien.' },
  { id: 'c3', r: 'C', inv: true, t: 'Suelo dejar las cosas para el último día.' },
  { id: 'c4', r: 'C', inv: true, t: 'Decido rápido, sin darle muchas vueltas.' },
  { id: 'o1', r: 'O', inv: false, t: 'Me pierdo leyendo o viendo vídeos de temas que no entran en ningún examen.' },
  { id: 'o2', r: 'O', inv: false, t: 'Me gusta probar formas nuevas de hacer algo, aunque la de siempre funcione.' },
  { id: 'o3', r: 'O', inv: false, t: 'Me paro a mirar un edificio, un cuadro o un paisaje bonito.' },
  { id: 'o4', r: 'O', inv: true, t: 'Prefiero lo que ya conozco a probar algo raro.' }
];

// Catálogo de estudios: código de 3 letras (pesos 3, 2, 1) y los 2 rasgos de estilo que más pesan en ese trabajo (0-100)
var ESTUDIOS = [
  { id: 'contenido', n: 'Creación de contenido', f: 'Comunicación', v: 'FP Marketing y Publicidad · Grado en Comunicación Audiovisual', c: 'AES', s: { X: 70, O: 75 } },
  { id: 'periodismo', n: 'Periodismo', f: 'Comunicación', v: 'Grado en Periodismo', c: 'ASE', s: { X: 65, O: 70 } },
  { id: 'marketing', n: 'Marketing', f: 'Comunicación', v: 'Grado en Marketing · FP Marketing y Publicidad', c: 'EAS', s: { X: 70, O: 60 } },
  { id: 'animacion', n: 'Animación 3D', f: 'Arte y diseño', v: 'FP Animaciones 3D, Juegos y Entornos Interactivos', c: 'ARI', s: { O: 75, C: 60 } },
  { id: 'diseno', n: 'Diseño gráfico', f: 'Arte y diseño', v: 'Grado en Diseño · FP Gráfica Publicitaria', c: 'AER', s: { O: 75, C: 55 } },
  { id: 'bellas', n: 'Bellas Artes', f: 'Arte y diseño', v: 'Grado en Bellas Artes', c: 'AIR', s: { O: 80, X: 40 } },
  { id: 'arquitectura', n: 'Arquitectura', f: 'Arte y diseño', v: 'Grado en Fundamentos de la Arquitectura', c: 'AIR', s: { O: 70, C: 70 } },
  { id: 'sonido', n: 'Sonido para videojuegos', f: 'Arte y diseño', v: 'FP Sonido para Audiovisuales y Espectáculos', c: 'ARI', s: { O: 70, C: 60 } },
  { id: 'ciber', n: 'Ciberseguridad', f: 'Ciencia y tecnología', v: 'Grado en Ingeniería Informática · Curso de especialización en Ciberseguridad', c: 'ICR', s: { O: 70, C: 60 } },
  { id: 'informatica', n: 'Ingeniería Informática', f: 'Ciencia y tecnología', v: 'Grado en Ingeniería Informática · FP DAM o DAW', c: 'IRC', s: { C: 65, O: 60 } },
  { id: 'datos', n: 'Ciencia de datos', f: 'Ciencia y tecnología', v: 'Grado en Ciencia de Datos', c: 'ICE', s: { C: 75, O: 55 } },
  { id: 'biologia', n: 'Biología', f: 'Ciencia y tecnología', v: 'Grado en Biología', c: 'IRS', s: { O: 70, C: 60 } },
  { id: 'ambientales', n: 'Ciencias Ambientales', f: 'Ciencia y tecnología', v: 'Grado en Ciencias Ambientales', c: 'IRS', s: { O: 65, X: 50 } },
  { id: 'mecanica', n: 'Ingeniería Mecánica', f: 'Ciencia y tecnología', v: 'Grado en Ingeniería Mecánica', c: 'RIC', s: { C: 70, O: 50 } },
  { id: 'enfermeria', n: 'Enfermería', f: 'Salud', v: 'Grado en Enfermería', c: 'SIR', s: { A: 70, C: 70 } },
  { id: 'fisio', n: 'Fisioterapia', f: 'Salud', v: 'Grado en Fisioterapia', c: 'SRI', s: { A: 65, X: 60 } },
  { id: 'psicologia', n: 'Psicología', f: 'Salud', v: 'Grado en Psicología', c: 'SIA', s: { A: 70, O: 65 } },
  { id: 'veterinaria', n: 'Veterinaria', f: 'Salud', v: 'Grado en Veterinaria', c: 'IRS', s: { C: 65, A: 60 } },
  { id: 'cafyd', n: 'Ciencias del Deporte', f: 'Salud', v: 'Grado en Ciencias de la Actividad Física y del Deporte', c: 'SRE', s: { X: 70, A: 55 } },
  { id: 'magisterio', n: 'Magisterio', f: 'Educación y social', v: 'Grado en Educación Primaria o Infantil', c: 'SAE', s: { X: 65, A: 70 } },
  { id: 'social', n: 'Trabajo Social', f: 'Educación y social', v: 'Grado en Trabajo Social', c: 'SEA', s: { A: 70, X: 60 } },
  { id: 'integracion', n: 'Integración Social', f: 'Educación y social', v: 'FP Integración Social', c: 'SEC', s: { A: 70, C: 55 } },
  { id: 'ade', n: 'Administración de Empresas', f: 'Negocio y derecho', v: 'Grado en ADE', c: 'ECS', s: { C: 65, X: 65 } },
  { id: 'derecho', n: 'Derecho', f: 'Negocio y derecho', v: 'Grado en Derecho', c: 'EIC', s: { C: 65, X: 55 } },
  { id: 'turismo', n: 'Turismo', f: 'Negocio y derecho', v: 'Grado en Turismo · FP Agencias de Viajes', c: 'ESC', s: { X: 70, A: 60 } },
  { id: 'finanzas', n: 'Administración y Finanzas', f: 'Negocio y derecho', v: 'FP Administración y Finanzas', c: 'CEI', s: { C: 75, X: 45 } },
  { id: 'electromecanica', n: 'Mantenimiento electromecánico', f: 'Oficios técnicos', v: 'FP Mecatrónica Industrial', c: 'RCI', s: { C: 65, X: 40 } },
  { id: 'renovables', n: 'Energías renovables', f: 'Oficios técnicos', v: 'FP Energías Renovables', c: 'RIC', s: { C: 60, O: 55 } },
  { id: 'cocina', n: 'Cocina y gastronomía', f: 'Oficios técnicos', v: 'FP Dirección de Cocina', c: 'RAE', s: { C: 60, X: 55 } }
];

function calcular(resp) {
  // 1. Intereses: suma de las 3 tareas de cada letra (0-9) pasada a 0-100
  var I = {};
  ORDEN_L.forEach(function (l) {
    var s = 0;
    BANDEJA.forEach(function (it) { if (it.l === l) s += (resp[it.id] || 0); });
    I[l] = Math.round(s / 9 * 100);
  });
  var codigo = ORDEN_L.slice().sort(function (a, b) { return I[b] - I[a] || ORDEN_L.indexOf(a) - ORDEN_L.indexOf(b); });
  var abierto = (I[codigo[0]] - I[codigo[2]]) < 12;
  // 2. Estilo: media de las 4 frases de cada rasgo (las invertidas cuentan 3 - respuesta), 0-100
  var H = {};
  ORDEN_R.forEach(function (r) {
    var s = 0;
    BRUJULA.forEach(function (it) { if (it.r === r) { var v = resp[it.id] || 0; s += it.inv ? 3 - v : v; } });
    H[r] = Math.round(s / 12 * 100);
  });
  // 3. Cruce con cada estudio
  var lista = ESTUDIOS.map(function (e) {
    var ci = (3 * I[e.c[0]] + 2 * I[e.c[1]] + I[e.c[2]]) / 6;
    var ks = Object.keys(e.s), ce = 0;
    ks.forEach(function (k) { ce += 100 - Math.abs(H[k] - e.s[k]); });
    ce = ce / ks.length;
    return { e: e, ci: Math.round(ci), ce: Math.round(ce), af: Math.round(0.75 * ci + 0.25 * ce) };
  }).sort(function (a, b) { return b.af - a.af; });
  // 4. Tres caminos distintos
  var top = codigo[0];
  var p1 = lista[0];
  var p2 = pick(lista, function (x) { return x !== p1 && x.e.f !== p1.e.f && (x.e.c[0] === top || x.e.c[1] === top); })
        || pick(lista, function (x) { return x !== p1 && x.e.f !== p1.e.f; });
  var p3 = pick(lista, function (x) { return x !== p1 && x !== p2 && x.e.f !== p1.e.f && x.e.f !== p2.e.f && x.e.c[0] !== top && codigo.slice(1, 4).indexOf(x.e.c[0]) > -1; })
        || pick(lista, function (x) { return x !== p1 && x !== p2 && x.e.f !== p1.e.f && x.e.f !== p2.e.f; });
  var caminos = [
    { tipo: 'El que más te pega', def: 'El que mejor encaja con lo que elegiste.', x: p1 },
    { tipo: 'El puente', def: 'Comparte lo que más te atrae, en otro terreno.', x: p2 },
    { tipo: 'El salto', def: 'Sale de tu segunda o tercera señal. Quizá no te lo habías planteado.', x: p3 }
  ];
  var usados = {};
  caminos.forEach(function (c) { c.porque = porque(c.x, I, H, resp, usados); c.pregunta = pregunta(c.x, I); });
  // 5. Cómo trabajas: solo rasgos públicos claramente marcados (≥ 62 o ≤ 38), máx. 3
  var estilo = ORDEN_R.filter(function (r) { return RASGOS[r].publico && (H[r] >= 62 || H[r] <= 38); })
    .sort(function (a, b) { return Math.abs(H[b] - 50) - Math.abs(H[a] - 50); }).slice(0, 3)
    .map(function (r) { return { r: r, t: H[r] >= 62 ? RASGOS[r].alto : RASGOS[r].bajo }; });
  return { I: I, H: H, codigo: codigo.slice(0, 3).join(''), abierto: abierto, lista: lista, caminos: caminos, estilo: estilo };
}
function pick(l, f) { for (var i = 0; i < l.length; i++) if (f(l[i])) return l[i]; return null; }
function mejorTarea(l, resp, usados) {
  var best = null;
  BANDEJA.forEach(function (it) {
    if (it.l !== l) return;
    var v = (resp[it.id] || 0) - (usados[it.id] ? 0.5 : 0), bv = best ? (resp[best.id] || 0) - (usados[best.id] ? 0.5 : 0) : -9;
    if (v > bv) best = it;
  });
  usados[best.id] = 1;
  return best;
}
function porque(x, I, H, resp, usados) {
  var partes = [];
  x.e.c.split('').slice(0, 2).forEach(function (l) {
    if (I[l] >= 55) {
      var t = mejorTarea(l, resp, usados);
      partes.push('Elegiste «' + (resp[t.id] === 3 ? 'eso sí' : 'me pega') + '» en «' + t.t.charAt(0).toLowerCase() + t.t.slice(1) + '». Aquí se trata de ' + LETRAS[l].d + '.');
    }
  });
  var ks = Object.keys(x.e.s).filter(function (k) { return Math.abs(H[k] - x.e.s[k]) <= 20 && Math.abs(H[k] - 50) >= 12 && Math.abs(x.e.s[k] - 50) >= 10; });
  ks.sort(function (a, b) { return (usados[a] ? 1 : 0) - (usados[b] ? 1 : 0); });
  if (ks.length) { var k = ks[0]; usados[k] = 1; partes.push((H[k] >= 50 ? RASGOS[k].alto : RASGOS[k].bajo) + ', y en este trabajo eso ayuda.'); }
  if (!partes.length) partes.push('Encaja con tu mezcla de intereses, aunque ninguno destaca mucho.');
  return partes;
}
function pregunta(x, I) {
  var bajo = x.e.c.split('').filter(function (l) { return I[l] < 40; })[0];
  if (!bajo) return null;
  return 'Aquí también toca ' + LETRAS[bajo].d + ', y en eso marcaste poco. ¿Te ves haciéndolo una parte del día?';
}
var ESC_B = ['ni de broma', 'bah', 'me pega', 'eso sí'];
var ESC_H = ['nada yo', 'poco yo', 'bastante yo', 'muy yo'];
function split(n) { return n <= 3 ? [n, 0, 0] : n <= 6 ? [3, n - 3, 0] : [3, 3, n - 6]; }
function perfil(bandeja, brujula) { var r = {}; BANDEJA.forEach(function (it, i) { r[it.id] = bandeja[i]; }); BRUJULA.forEach(function (it, i) { r[it.id] = brujula[i]; }); return r; }
var PRESETS = {
  // orden bandeja: R R R · I I I · A A A · S S S · E E E · C C C | brújula: H E X A C O (4 cada uno)
  noa: perfil([1,2,1, 3,1,1, 2,3,3, 2,1,1, 1,2,1, 3,2,2], [3,2,1,0, 2,3,2,1, 2,3,1,1, 2,2,1,1, 1,2,2,2, 3,3,2,0]),
  pau: perfil([1,0,1, 2,2,1, 0,1,0, 3,3,2, 1,0,0, 1,2,1], [3,3,0,0, 3,3,3,1, 2,2,1,1, 3,3,0,1, 3,3,0,1, 1,1,1,2]),
  nil: perfil([3,3,3, 2,1,2, 1,0,1, 0,1,0, 1,1,2, 2,2,1], [2,2,1,1, 1,1,1,2, 1,1,2,2, 1,2,1,2, 2,3,1,1, 2,1,2,2]),
  cero: perfil([1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1, 1,1,1], [1,1,2,2, 1,1,1,2, 1,1,2,2, 1,1,2,2, 1,1,2,2, 1,1,1,2])
};
var resp = {};
function $(id) { return document.getElementById(id); }
function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
function item(it, tipo) {
  var lab = tipo === 'b' ? it.l + ' · ' + LETRAS[it.l].n : it.r;
  var escala = tipo === 'b' ? ESC_B : ESC_H;
  var h = '<div class="item"><p class="q"><span class="code' + (it.inv ? ' inv' : '') + '" title="' + (tipo === 'b' ? LETRAS[it.l].n : RASGOS[it.r].n + (it.inv ? ', cuenta al revés' : '')) + '">' + esc(tipo === 'b' ? it.l : it.r) + '</span><span>' + esc(it.t) + '</span></p><div class="scale" role="group" aria-label="' + esc(it.t) + '">';
  escala.forEach(function (e, v) { h += '<button type="button" data-id="' + it.id + '" data-v="' + v + '" aria-pressed="false">' + e + '</button>'; });
  return h + '</div></div>';
}
function pintarItems() {
  $('lista-b').innerHTML = BANDEJA.map(function (it) { return item(it, 'b'); }).join('');
  $('lista-h').innerHTML = BRUJULA.map(function (it) { return item(it, 'h'); }).join('');
}
function syncBotones() {
  document.querySelectorAll('.scale button').forEach(function (b) { b.setAttribute('aria-pressed', String(resp[b.dataset.id] === +b.dataset.v)); });
}
function render() {
  var o = calcular(resp);
  var orden = ['R', 'I', 'A', 'S', 'E', 'C'].slice().sort(function (a, b) { return o.I[b] - o.I[a]; });
  $('bars').innerHTML = orden.map(function (l, i) {
    return '<div class="br' + (i === 0 ? ' top' : '') + '"><span><b>' + LETRAS[l].n + '</b> · ' + l + '</span><span class="track"><i style="width:' + Math.max(o.I[l], 2) + '%"></i></span><em>' + o.I[l] + '</em></div>';
  }).join('');
  $('hol').innerHTML = 'Tu código: <b>' + o.codigo + '</b>' + (o.abierto ? ' · perfil abierto: tus tres primeras actividades están muy igualadas' : '');
  $('styl').innerHTML = o.estilo.length ? o.estilo.map(function (e) { return '<span>' + esc(e.t) + '</span>'; }).join('') : '<span>Ningún rasgo destaca: te adaptas según el momento</span>';
  $('cams').innerHTML = o.caminos.map(function (c) {
    return '<div class="cam"><p class="tp">' + c.tipo + '</p><h3><span>' + esc(c.x.e.n) + '</span><small>' + c.x.af + ' de encaje</small></h3><p style="font-size:var(--t1);color:var(--g3)">' + esc(c.x.e.v) + '</p><ul>' + c.porque.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' + (c.pregunta ? '<p class="pq"><b>Para pensar:</b> ' + esc(c.pregunta) + '</p>' : '') + '</div>';
  }).join('');
  $('tabla').innerHTML = o.lista.slice(0, 8).map(function (x) {
    return '<tr><td>' + esc(x.e.n) + '</td><td class="mono">' + x.e.c + '</td><td class="n">' + x.ci + '</td><td class="n">' + x.ce + '</td><td class="n"><b>' + x.af + '</b></td></tr>';
  }).join('');
  syncBotones();
}
function cargar(p) {
  resp = JSON.parse(JSON.stringify(PRESETS[p]));
  document.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.p === p)); });
  render();
}
function ejemploNoa() {
  var o = calcular(PRESETS.noa);
  $('rasgos-ej').innerHTML = o.estilo.map(function (e) { return '<span>' + esc(e.t) + '</span>'; }).join('');
  $('porque-ej').innerHTML = o.caminos.map(function (c) {
    return '<div class="cam" style="margin-top:10px"><p class="tp">' + c.tipo + ' · ' + esc(c.x.e.n) + '</p><ul>' + c.porque.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>';
  }).join('');
  $('opts-cam').innerHTML = o.caminos.map(function (c) { return '<span>' + esc(c.x.e.n) + '</span>'; }).join('') + '<span>Ninguno todavía</span>';
}
function catalogo() {
  $('cat').innerHTML = ESTUDIOS.map(function (e) {
    var ks = Object.keys(e.s).map(function (k) { return RASGOS[k].n + ' ' + (e.s[k] >= 60 ? 'alta' : e.s[k] <= 40 ? 'baja' : 'media'); }).join(' · ');
    return '<tr><td><b>' + esc(e.n) + '</b></td><td>' + esc(e.f) + '</td><td class="mono">' + e.c + '</td><td>' + ks + '</td><td>' + esc(e.v) + '</td></tr>';
  }).join('');
}
document.addEventListener('click', function (ev) {
  var b = ev.target.closest('.scale button');
  if (b) { resp[b.dataset.id] = +b.dataset.v; document.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); }); render(); return; }
  var c = ev.target.closest('.chip'); if (c) { cargar(c.dataset.p); return; }
  var t = ev.target.closest('.tab');
  if (t) {
    document.querySelectorAll('.tab').forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; $(x.getAttribute('aria-controls')).hidden = !on; });
  }
});
document.querySelector('.tabs').addEventListener('keydown', function (ev) {
  if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
  var tabs = [].slice.call(document.querySelectorAll('.tab')); var i = tabs.indexOf(document.activeElement);
  var n = tabs[(i + (ev.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]; n.click(); n.focus();
});
pintarItems(); catalogo(); ejemploNoa(); cargar('noa');

<\/script>`;
}, "D:/Clientes she is/Next you/nextyou-lima/src/pages/logica-del-test/index.astro", void 0);
var $$file = "D:/Clientes she is/Next you/nextyou-lima/src/pages/logica-del-test/index.astro";
var $$url = "/C:/Program%20Files/Git/nextyou-lima/logica-del-test";
//#endregion
//#region \0virtual:astro:page:src/pages/logica-del-test/index@_@astro
var page = () => logica_del_test_exports;
//#endregion
export { page };
