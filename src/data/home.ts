// Contenido de la home. Para cambiar textos, se cambian aquí.
//
// IMPORTANTE: todas las personas, citas y fotos de este archivo son DE MUESTRA
// (placeholder: true). No se puede publicar ninguna como si fuera real.
// Antes de publicar, cada una se sustituye por una persona real que haya
// firmado la cesión de derechos de imagen.

import heroAisha from '../assets/muestra/hero-aisha.jpg';
import testNil from '../assets/muestra/testimonio-nil.jpg';
import testLucia from '../assets/muestra/testimonio-lucia.jpg';
import testJan from '../assets/muestra/testimonio-jan.jpg';
import testSofia from '../assets/muestra/testimonio-sofia.jpg';
import dentro1 from '../assets/muestra/dentro-1.jpg';
import dentro2 from '../assets/muestra/dentro-2.jpg';
import dentro3 from '../assets/muestra/dentro-3.jpg';
import dentro4 from '../assets/muestra/dentro-4.jpg';

// ---------------------------------------------------------------------------
// Hero
// La pastilla del vídeo y la cita salen de la MISMA persona: un solo objeto.
// ---------------------------------------------------------------------------
export const hero = {
  placeholder: true,
  nombre: 'Aisha',
  edad: 21,
  detalle: 'Hoy estudia diseño UX/UI',
  cita: 'A los 17 nadie me habló del diseño UX/UI. Ni sabía que existía.', // sin «esto» (Sara)
  foto: heroAisha,
  alt: 'Aisha, 21 años, con sudadera crema, sentada a una mesa junto a un balcón.',
  // PENDIENTE: vídeo real del hero. Con { src, duracion } aparecen la pastilla
  // "Ver a …" y el botón de sonido; mientras sea null se muestra solo la foto.
  video: null as null | { src: string; duracion: string },
  // h1: lo que es NextYou, con las palabras que busca la gente («no sé qué estudiar»,
  // «test vocacional gratis»). Comentario #3 de Sara: que se entienda qué es.
  titular: '¿No sabes qué estudiar? Haz el test gratis y descubre a qué te podrías dedicar.',
  // v5 · titular emocional de Elías (opción 2), encima del h1 con las palabras que busca la gente
  lema: { inicio: 'Tu futuro no se adivina.', fin: 'Se explora.' },
  texto:
    'Nadie te ha enseñado la mitad de las cosas a las que podrías dedicarte. En 8 minutos te salen tres caminos para explorar, contados por gente que ya trabaja en ellos.',
  // v3: sin la primera frase, que ya dice «No eres el único» justo debajo
  textoCorto: 'En 8 minutos te salen tres caminos para explorar, contados por gente que ya trabaja en ellos.',
  // v5 · «¿Qué es NextYou?»: la primera frase del texto de la v2 (el resto ya lo dice la portada)
  textoQueEs: 'Nadie te ha enseñado la mitad de las cosas a las que podrías dedicarte.',
  boton: 'Haz el test gratis',
  meta: ['8 minutos', 'gratis', 'tres caminos para explorar'],
};

// ---------------------------------------------------------------------------
// No eres el único
// ---------------------------------------------------------------------------
export const noEresElUnico = {
  etiqueta: 'No eres el único',
  titulo: 'Chicos de tu edad que se sienten igual de perdidos que tú',
  resaltado: 'igual de perdidos', // subrayado a mano
  subtitulo: 'Es normal: nadie te ha contado todo lo que existe. Nosotros te lo enseñamos.',
  personas: [
    {
      placeholder: true,
      nombre: 'Nil',
      edad: 19,
      cita: 'Elegí por la nota, no porque me gustara.',
      foto: testNil,
      alt: 'Nil, con gafas y chaqueta verde, de brazos cruzados en un parque.',
    },
    {
      placeholder: true,
      nombre: 'Lucía',
      edad: 18,
      cita: 'En casa nadie sabía aconsejarme.',
      foto: testLucia,
      alt: 'Lucía, con camisa de cuadros, apoyada en una barandilla roja.',
    },
    {
      placeholder: true,
      nombre: 'Jan',
      edad: 17,
      cita: 'Me da pánico equivocarme y perder años.',
      foto: testJan,
      alt: 'Jan, con camiseta negra, pensativo junto a una pared de piedra.',
    },
    {
      placeholder: true,
      nombre: 'Sofía',
      edad: 18,
      cita: 'Todo el mundo opina y nadie me pregunta.',
      foto: testSofia,
      alt: 'Sofía, con chaqueta roja en una calle con gente, mira a cámara.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Qué es NextYou · reducido a tres frases (antes repetía los cinco pasos)
// ---------------------------------------------------------------------------
export const queEsNextYou = {
  // Comentarios #6-#9 y #12 de Sara: en modo pregunta con el logo, otro fondo, su titular
  // y una demo visual del producto en lugar de frases y del paso a paso con texto.
  titulo: 'El método para descubrir tus talentos probando profesiones de futuro con quienes ya trabajan en ellas.',
  resaltado: 'probando',
  // PENDIENTE: revisar con el esquema resumen de la última web de Elias cuando lo tengamos.
  pasos: [
    { titulo: 'Juegas unas misiones', texto: 'Tareas reales de profesionales. Tú dices si te apetecen.', tiempo: '8 min · gratis' },
    { titulo: 'Te salen tres caminos', texto: 'El que más encaja, el puente y el salto. Ninguno es «el bueno».', tiempo: 'sin crear cuenta' },
    { titulo: 'Conoces a quien ya está ahí', texto: 'Vídeos de profesionales que te enseñan su día a día.', tiempo: '2-3 min por vídeo' },
    { titulo: 'Un coach te acompaña, si quieres', texto: 'Sesiones online para explorar a tu ritmo y decidir tú.', tiempo: 'opcional' },
  ],
  respuestas: ['ni de broma', 'bah', 'me pega', 'eso sí'],
  caminos: ['El que más encaja', 'El puente', 'El salto'],
  noVaAPasar: [
    'No te decimos qué tienes que estudiar.',
    'No hace falta crear cuenta para empezar.',
    'No se lo mandamos a tus padres.',
    'No cuesta nada hasta que tú quieras.',
  ],
  boton: 'Haz el test gratis',
};

// ---------------------------------------------------------------------------
// Los de dentro
// Nadie de aquí puede repetir como persona del hero o de los testimonios.
// Las citas vienen del prompt «Quién hay detrás» del repositorio de diseño (de muestra).
// ---------------------------------------------------------------------------
export const losDeDentro = {
  etiqueta: 'Los de dentro',
  titulo: 'Profesionales que te cuentan cómo llegaron y cómo es su día a día',
  resaltado: 'su día a día', // va a rotulador en lima, como el «YOU» del logo
  texto:
    'Son los Insiders: personas reales en vídeo, no simulaciones. Sin discursos, te cuentan cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.',
  personas: [
    {
      placeholder: true,
      nombre: 'Marta', // en el PDF era "Aisha, 34": misma persona que el hero con otra edad
      edad: 34,
      profesion: 'UX/UI Designer',
      cita: 'A los 17 quería ser veterinaria.',
      duracion: '2 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro1,
      // PLACEHOLDER: camino y ficha de ejemplo, sustituir por los reales de cada profesional
      camino: ['Empezó Veterinaria', 'Bellas Artes', 'Diseña apps'],
      estudios: 'Bellas Artes y un máster de diseño de interacción',
      primerTrabajo: 'Becaria en una agencia, haciendo banners',
      martes: 'Reunión con el equipo a las diez, prueba un prototipo con dos usuarios y por la tarde vuelve a dibujar las pantallas que no se entendieron.',
      alt: 'Marta, en su mesa de trabajo con bocetos y notas en la pared.',
    },
    {
      placeholder: true,
      nombre: 'Dani',
      edad: 27,
      profesion: 'Sonido para videojuegos',
      cita: 'Probé tres cosas antes de dar con esta.',
      duracion: '2 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro2,
      // PLACEHOLDER: camino y ficha de ejemplo, sustituir por los reales de cada profesional
      camino: ['Empezó Informática', 'FP de Sonido', 'Sonido para videojuegos'],
      estudios: 'Dos años de Informática y después un ciclo de FP de Sonido',
      primerTrabajo: 'Técnico de sonido en una sala de conciertos',
      martes: 'Por la mañana graba efectos (pasos, puertas, golpes) y por la tarde los mete en el juego y los prueba con el equipo.',
      alt: 'Dani, en su estudio de sonido, delante de la mesa de mezclas.',
    },
    {
      placeholder: true,
      nombre: 'Iván',
      edad: 41,
      profesion: 'Data Science',
      cita: 'Entré por la puerta de atrás y sin carrera.',
      duracion: '3 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro3,
      // PLACEHOLDER: camino y ficha de ejemplo, sustituir por los reales de cada profesional
      camino: ['Sin carrera', 'Cursos de datos', 'Data Science'],
      estudios: 'Bachillerato y cursos online de Excel, SQL y Python',
      primerTrabajo: 'Administrativo en un almacén, haciendo informes',
      martes: 'Revisa los datos de la noche, prepara un gráfico para el equipo de ventas y prueba un modelo nuevo.',
      alt: 'Iván, en una oficina, conversando con una compañera.',
    },
    {
      placeholder: true,
      nombre: 'Mía',
      edad: 29,
      profesion: 'Diseño de experiencias',
      cita: 'Estudié algo que no tiene nada que ver.',
      duracion: '4 min',
      video: null as string | null, // PENDIENTE: clip de noviembre (ruta al .mp4)
      subtitulos: null as string | null, // PENDIENTE: subtítulos del clip (ruta al .vtt)
      foto: dentro4,
      // PLACEHOLDER: camino y ficha de ejemplo, sustituir por los reales de cada profesional
      camino: ['Estudió Turismo', 'Organizó eventos', 'Diseña experiencias'],
      estudios: 'Grado en Turismo',
      primerTrabajo: 'Recepcionista en un hotel',
      martes: 'Entrevista a clientes, dibuja el recorrido de un servicio en la pared y lo prueba con el equipo.',
      alt: 'Mía, con jersey mostaza, junto a un ventanal.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Portada de la v5: carrusel de historias. Aisha va primero; detrás, gente de «Los de dentro»
// con su misma foto, su misma frase y su mismo papel (decidido con Jenifer el 2026-10-07).
// PLACEHOLDER: todas son personas de muestra.
// ---------------------------------------------------------------------------
export const heroCarrusel = [
  { nombre: 'Dani', detalle: 'Hoy hace sonido para videojuegos' },
  { nombre: 'Iván', detalle: 'Hoy trabaja en Data Science' },
  { nombre: 'Mía', detalle: 'Hoy diseña experiencias' },
  { nombre: 'Marta', detalle: 'Hoy es diseñadora UX/UI' },
];

// ---------------------------------------------------------------------------
// v5 · «¿Qué es NextYou?» (textos de Jenifer, 2026-10-08)
// ---------------------------------------------------------------------------
export const queEsV5 = {
  lema: 'Te ayudamos a explorar tu camino profesional.',
  resaltado: 'tu camino profesional',
  no: 'No te decimos quién debes ser.',
  si: 'Te permitimos probar quién puedes ser.',
  siResaltado: 'probar',
};

// ---------------------------------------------------------------------------
// v5 · «La uni no es el único camino» (punto 5 de la estructura de Sara)
// PENDIENTE CLIENTA: validar el texto. Las trayectorias son las de «Los de dentro» (PLACEHOLDER).
// ---------------------------------------------------------------------------
export const uniNoUnico = {
  titulo: 'La uni no es el único camino',
  resaltado: 'el único camino',
  texto: 'Hay muchas formas de llegar a una profesión: una FP, cursos cortos, empezar trabajando o probar por tu cuenta. La universidad es una de ellas, no la única. Lo importante es encontrar el camino que encaja contigo.',
  rutas: ['Universidad', 'FP de grado medio o superior', 'Cursos y certificados', 'Empezar trabajando', 'Emprender'],
  ejemplos: ['Dani', 'Iván', 'Mía'],
};

// ---------------------------------------------------------------------------
// Quién hay detrás · textos de la documentación del proyecto (prompt «Quién hay detrás»)
// PENDIENTE: precio del acompañamiento con coach, cuando esté definido.
// ---------------------------------------------------------------------------
export const quienHayDetras = {
  etiqueta: 'Quién hay detrás',
  titulo: 'Gente que ya hace lo que tú estás pensando hacer.',
  subtitulo: 'Ninguno te va a decir qué estudiar. Te van a contar cómo es por dentro.',
  tarjetas: [
    {
      pastilla: 'Gratis',
      icono: 'dentro',
      titulo: 'Los Insiders',
      texto:
        'Profesionales que graban cómo es su trabajo de verdad: cómo entraron, en qué se equivocaron y cómo es un martes cualquiera.',
      puntos: ['Vídeos de 2 o 3 minutos', 'Están en cada camino que te sale', 'No hace falta pagar nada para verlos'],
    },
    {
      pastilla: 'Si tú quieres',
      icono: 'lado',
      titulo: 'Los coaches',
      texto:
        'Si después de probar quieres hablarlo con alguien, tienes sesiones con una persona que te acompaña mientras decides.',
      puntos: ['Una sesión al mes, online', 'Lo que cuentas ahí es tuyo', 'Lo dejas cuando quieras'],
    },
  ],
};

// ---------------------------------------------------------------------------
// Familias · franja discreta (texto del prompt de la landing del repositorio de diseño)
// PENDIENTE: página /familias.
// ---------------------------------------------------------------------------
export const familias = {
  titulo: '¿Eres madre o padre y has llegado hasta aquí?',
  texto: 'Hay una página para ti, con el método, qué datos guardamos y cómo acompañar sin decidir en su lugar.',
  boton: 'Ir a la página de familias',
};

// ---------------------------------------------------------------------------
// Por qué existe esto · Sara (persona real, fundadora)
// PENDIENTE: texto escrito para la propuesta; validarlo con Sara antes de publicar.
// ---------------------------------------------------------------------------
export const sara = {
  etiqueta: 'Por qué existe esto',
  titulo: 'Tardé diez años en llegar a un trabajo que ni sabía que existía',
  resaltado: 'ni sabía que existía',
  texto:
    'Nadie me contó que había más caminos. Fui dando tumbos, perdí tiempo y dinero, y acabé bien de casualidad. Monté esto para que tú no tengas que hacer el camino largo.',
  firma: '— Sara',
  boton: 'Leer su historia',
  cargo: 'Fundadora de NextYou',
  // PENDIENTE: la foto de Sara aún no existe. Mientras sea null se ve un marcador.
  foto: null,
};

// ---------------------------------------------------------------------------
// Pie
// ---------------------------------------------------------------------------
export const pie = {
  lema: 'Tu futuro no se adivina. Se explora.',
};

// ---------------------------------------------------------------------------
// v5 · «¿Qué es NextYou?» contado como una historia (exploracion/demo-producto-propuesta-v2.html).
// Responde a los comentarios 9, 12 y 13 de Sara.
// PLACEHOLDER: Lucía, la coach Laura, Iván, Dani y Marta son personajes de muestra con fotos de
// muestra. Sustituir por personas reales (con cesión de imagen) antes de publicar.
// ---------------------------------------------------------------------------
export const historiaLucia = {
  placeholder: true,
  etiqueta: '¿Qué es NextYou?',
  // Entrada del bloque (fusionado con el antiguo «¿No sabes qué estudiar?»): primera frase
  // del texto explicativo de la v2, el que gustó a Sara. El h1 vive en el componente.
  entrada: 'Nadie te ha enseñado la mitad de las cosas a las que podrías dedicarte.',
  titulo: 'Lucía tampoco lo sabía.',
  mano: 'Tres semanas después…',
  lucia: {
    nombre: 'Lucía',
    detalle: '17 · 2º de bachillerato',
    foto: testLucia,
    alt: 'Lucía, 17 años, apoyada en una barandilla de la calle',
  },
  animo: { titulo: 'Cómo lo ve', desde: 'Perdida', hasta: 'Con un plan' },
  // cuando · titulo · frase de Lucía · nivel de la barra (1-5) · posición del brillo
  pasos: [
    { cuando: 'Hoy', titulo: 'Llega sin tenerlo claro', voz: '«¿Y si elijo mal y pierdo años?»', animo: 1, brillo: '18%', pantalla: 'En la pantalla: «¿Cuál se parece más a lo que te pasa?». Lucía elige «Me da miedo elegir mal y perder el tiempo».' },
    { cuando: '8 minutos · gratis', titulo: 'Juega misiones con tareas reales', voz: '«Vale… esto me pega bastante.»', animo: 2, brillo: '35%', pantalla: 'En la pantalla: tareas reales como «Inventar el sonido de algo que no existe», que hace Dani, 27. Lucía responde «eso sí».' },
    { cuando: 'Al momento', titulo: 'Le salen 3 caminos', voz: '«¿Sonido para videojuegos? ¿Eso existe?»', animo: 3, brillo: '50%', pantalla: 'En la pantalla: sus tres caminos. Lo que más te pega, sonido para videojuegos; el puente, diseño de experiencias; el salto, producción de pódcast.' },
    { cuando: 'Semana 1', siQuiere: true, titulo: 'Una coach la ayuda a probarlos', voz: '«Esta semana he grabado sonidos en casa.»', animo: 4, brillo: '65%', pantalla: 'En la pantalla: videollamada con Laura, su coach: «De los tres, ¿cuál te dio más energía esta semana? Vamos a probarlo de verdad».' },
    { cuando: 'Semana 3', titulo: 'Conoce a quien ya se dedica a ello', voz: '«Ahora sé qué quiero probar.»', animo: 5, brillo: '80%', pantalla: 'En la pantalla: vídeo de Dani, 27, que pasó de Informática a FP de Sonido y hoy hace sonido para videojuegos: «Probé tres cosas antes de dar con esta».' },
  ],
  escenas: {
    inicio: {
      paso: 'Para empezar',
      pregunta: '¿Cuál se parece más a lo que te pasa?',
      opciones: [
        'Hay demasiadas opciones y no sé ni por dónde mirar',
        'Me da miedo elegir mal y perder el tiempo',
        'Las que conozco no me convencen',
      ],
      elegida: 1,
      pie: 'Sin crear cuenta · nadie decide por ti',
    },
    misiones: {
      paso: 'Un día prestado · parada 2 de 4',
      cartas: [
        { tarea: 'Explicar un trámite a alguien hasta que lo entienda' },
        { tarea: 'Pasar una mañana midiendo el agua de un río', quien: 'Iván, 41', foto: dentro3 },
        { tarea: 'Inventar el sonido de algo que no existe', quien: 'Dani, 27', detalle: 'sonido para videojuegos', foto: dentro2 },
      ],
      respuestas: ['ni de broma', 'bah', 'me pega', 'eso sí'],
    },
    caminos: {
      titulo: 'Ninguno es «el bueno». Los tres merecen una prueba.',
      lista: [
        { tipo: 'Lo que más te pega', profesion: 'Sonido para videojuegos', foto: dentro2 },
        { tipo: 'El puente', profesion: 'Diseño de experiencias', foto: dentro1 },
        { tipo: 'El salto', profesion: 'Producción de pódcast', foto: null },
      ],
      pie: 'Gratis · se lo enseñas a quien tú quieras',
    },
    coach: {
      nombre: 'Laura',
      rol: 'tu coach',
      hora: '12:48',
      foto: dentro4,
      frase: '«De los tres, ¿cuál te dio más energía esta semana? Vamos a probarlo de verdad.»',
    },
    dentro: {
      etiqueta: 'Los de dentro',
      nombre: 'Dani, 27',
      cita: '«Probé tres cosas antes de dar con esta.»',
      ruta: 'Informática → FP de Sonido → Sonido para videojuegos',
      boton: 'Hablar con Dani',
      foto: dentro2,
      // PENDIENTE: clip real de noviembre (ruta al .mp4). Con vídeo, la escena lo reproduce en silencio.
      video: null as string | null,
    },
  },
  boton: 'Haz el test gratis',
  noVaAPasar: ['Nadie te dice qué estudiar', 'Sin crear cuenta', 'Tus padres solo ven lo que tú quieras'],
};
