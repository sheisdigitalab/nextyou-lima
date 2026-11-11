// Página de resultados del test (/resultados/): los 3 caminos y el acompañamiento premium.
// PENDIENTE CLIENTA: todo el contenido es de EJEMPLO (profesiones, formaciones, duraciones, textos y
// condiciones del coach). En el producto real, los 3 caminos salen de las respuestas del test.
import noa from '../assets/muestra/noa.jpg';
import laia from '../assets/muestra/laia.jpg';
import aitana from '../assets/muestra/aitana.jpg';
import coach from '../assets/muestra/coach-4.jpg';

export interface Ruta {
  titulo: string;
  detalle: string;
  tipo: 'fp' | 'uni' | 'curso' | 'solo';
  // Duración aproximada en meses, solo para dibujar la línea de cada vía; null = a tu ritmo
  meses: number | null;
  // Duración en pocas palabras, visible junto a la línea de la vía
  duracion: string;
}

export interface Camino {
  id: string;
  tipo: string; // «El que más te pega», «El puente», «El salto»
  definicion: string; // qué significa ese tipo (sale en la ficha, bajo «Camino N · tipo»)
  nombre: string;
  foto: ImageMetadata;
  chips: string[];
  que: string;
  dia: string;
  porque: string;
  formacion: string;
  // El dato: una cifra de contexto sobre la profesión
  dato: string;
  // Pie de «El dato»: de dónde sale
  fuente: string;
  // Opcionales: cómo se llama el trabajo y el título del bloque de formación (por defecto, «La formación»)
  trabajo?: string;
  formacionTitulo?: string;
  rutas: Ruta[];
}

export const caminos: Camino[] = [
  {
    id: 'contenido',
    tipo: 'El que más te pega',
    definicion: 'El que mejor encaja con cómo eres.',
    nombre: 'Creación de contenido',
    foto: noa,
    chips: ['Creatividad', 'Comunicación', 'Redes'],
    que: 'Conviertes una idea en algo que la gente quiere ver hasta el final: un vídeo, un post, una historia. La mayor parte del trabajo es para marcas, que te piden contar lo que hacen de forma que enganche y no parezca un anuncio.',
    trabajo: 'Creador/a de contenido, editor/a de vídeo, community manager o social media manager. Al principio sueles hacer un poco de todo; con el tiempo te especializas en lo que mejor se te da: grabar, editar o planificar.',
    dia: 'Por la mañana grabas tres vídeos cortos para una marca. Por la tarde los editas y miras los datos de la semana pasada: qué se vio hasta el final y qué no. De ahí sale lo que harás la semana que viene. Gran parte del oficio es probar, medir y corregir.',
    porque: 'Dijiste que te gusta crear y contar cosas a los demás. Aquí lo haces cada día, y además aprendes algo que sirve en cualquier trabajo: explicar una idea para que llegue.',
    // PENDIENTE CLIENTA: validar dato
    // FUENTE: informe 2btube y MarketingDirecto, mayo de 2025 (más de 15.000 creadores con más de 100.000 seguidores; +16 % sobre 2024). Revisar cada año.
    dato: 'En España hay más de 15.000 creadores con más de 100.000 seguidores, y el número crece cada año. Pero la mayoría de quienes viven de esto no son famosos: trabajan creando contenido para marcas.',
    fuente: 'Fuente: estudio citado por Puro Marketing. Datos de referencia en España.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Grabar y editar vídeo, escribir textos cortos que enganchen y entender los números: qué funciona y por qué. Las empresas no te piden un título concreto. Te piden ver lo que ya has hecho.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones y requisitos de acceso
    rutas: [
      { titulo: 'FP de Realización de Proyectos Audiovisuales y Espectáculos', detalle: 'Grado superior · 2 años · Grabación, montaje y postproducción', tipo: 'fp', meses: 24, duracion: '2 años' },
      { titulo: 'FP de Marketing y Publicidad', detalle: 'Grado superior · 2 años · Redes y campañas para marcas', tipo: 'fp', meses: 24, duracion: '2 años' },
      { titulo: 'Grado en Comunicación Audiovisual', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48, duracion: '4 años' },
      { titulo: 'Cursos de vídeo y redes', detalle: 'Unos meses · Muchos son online', tipo: 'curso', meses: 6, duracion: 'Unos meses' },
      { titulo: 'Por tu cuenta', detalle: 'Abre un canal y aprende publicando', tipo: 'solo', meses: null, duracion: 'A tu ritmo' },
    ],
  },
  {
    id: 'animacion',
    tipo: 'El puente',
    definicion: 'Cerca de algo que ya te gusta.',
    nombre: 'Animación 3D',
    foto: laia,
    chips: ['Dibujo', 'Tecnología', 'En equipo'],
    que: 'Das vida a personajes y objetos en 3D: cómo andan, cómo saltan, cómo ponen cara de sorpresa. El reto no es que se muevan, sino que te creas lo que sienten. Se usa en videojuegos, películas, series y anuncios, pero también para explicar cómo funciona un edificio o el cuerpo humano.',
    trabajo: 'Animador/a 3D. En los estudios el trabajo se reparte: el modelador/a crea los personajes, el rigger les pone «huesos» para que se puedan mover y el animador/a les da movimiento. Puedes empezar en uno y pasar a otro.',
    dia: 'Te dan una escena de cinco segundos y la trabajas fotograma a fotograma hasta que el salto parezca de verdad. A veces te grabas con el móvil haciendo el gesto para copiarlo. Luego tu equipo la revisa, te dicen qué cambiar y vuelves a empezar. Pide paciencia, pero ver la escena acabada compensa.',
    porque: 'Dijiste que te gusta dibujar y también la tecnología. La animación 3D junta las dos cosas, y premia algo que quizá ya haces sin darte cuenta: fijarte en cómo se mueven las personas y los animales.',
    // PENDIENTE CLIENTA: validar dato
    // FUENTE: Libro Blanco del Desarrollo Español de Videojuegos (DEV), mayo de 2025. Revisar cada año.
    // Resumen ejecutivo del Libro Blanco: 10.508 empleos directos en 2024; previsión de 12.750 en 2027 y 13.770 en 2028.
    dato: 'El videojuego en España da trabajo directo a más de 10.000 personas, y se espera que lleguen a unos 12.750 en 2027. Y no solo hay videojuegos: la animación se usa también en cine, publicidad, arquitectura y medicina.',
    fuente: 'Fuente: Libro Blanco del Desarrollo Español de Videojuegos (DEV). Datos de referencia en España.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Dibujar y entender cómo se mueven las cosas (el peso, el equilibrio, el ritmo), y manejar programas 3D. En este sector tu portfolio pesa tanto como el título: lo que importa es lo que eres capaz de hacer.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones y si los cursos son online
    rutas: [
      { titulo: 'Grado en Animación', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48, duracion: '4 años' },
      { titulo: 'Grado medio y después superior de Animación 3D', detalle: 'FP · 2 + 2 años', tipo: 'fp', meses: 48, duracion: '2 + 2 años' },
      { titulo: 'Curso, trabajo y especialización', detalle: 'Un curso, 2 años trabajando y 1 especializándote', tipo: 'curso', meses: 48, duracion: '1 + 2 + 1 años' },
    ],
  },
  {
    id: 'ciberseguridad',
    tipo: 'El salto',
    definicion: 'Uno que quizá no te habías planteado.',
    nombre: 'Ciberseguridad',
    foto: aitana,
    chips: ['Lógica', 'Retos', 'Tecnología'],
    que: 'Proteges los ordenadores, las redes y los datos de empresas y personas. Hay dos lados: el que ataca con permiso para encontrar los fallos antes que nadie y el que vigila y defiende para pararlos a tiempo. Los dos hacen falta.',
    trabajo: 'Hacker ético (pentester) si te gusta atacar con permiso; analista de seguridad si prefieres vigilar y defender; auditor/a si te va más revisar que una empresa cumple las normas. Mucha gente empieza en sistemas o redes y se especializa después.',
    dia: 'Unos días intentas entrar en el sistema de una empresa, con su permiso, para encontrar sus puntos débiles. Otros revisas alertas y decides cuáles son un ataque de verdad y cuáles una falsa alarma. Al final lo explicas en un informe que entienda alguien que no es técnico, para que lo puedan arreglar.',
    porque: 'Dijiste que te gusta resolver retos y la tecnología. Aquí cada fallo es un reto nuevo, y como la tecnología cambia tan rápido, nunca dejas de aprender.',
    // PENDIENTE CLIENTA: validar dato
    // FUENTE: INCIBE, previsión publicada en diciembre de 2023. OJO: el estudio original es de marzo de 2022 («Análisis y Diagnóstico del Talento en Ciberseguridad en España») y proyecta la demanda para 2024; la nota de diciembre de 2023 repite la cifra.
    dato: 'Es una de las profesiones donde más gente falta: el INCIBE estimó que en 2024 harían falta más de 83.000 profesionales, el doble de los que había formados.',
    fuente: 'Fuente: INCIBE.',
    formacionTitulo: 'Qué necesitas saber',
    formacion:
      'Cómo funcionan los ordenadores y las redes, y después cómo se protegen y cómo se atacan (siempre de forma legal). Se aprende practicando: hay webs gratuitas con retos para empezar desde cero.',
    // PENDIENTE CLIENTA (Lali): confirmar títulos, duraciones, requisitos de acceso y la duración del curso de especialización
    rutas: [
      { titulo: 'FP de Informática + curso de especialización en Ciberseguridad', detalle: 'Grado superior como ASIR (2 años) y después un curso de unos 9 meses', tipo: 'fp', meses: 33, duracion: '2 años + curso' },
      { titulo: 'Grado en Ingeniería de la Ciberseguridad', detalle: 'Universidad · 4 años', tipo: 'uni', meses: 48, duracion: '4 años' },
      { titulo: 'Cursos y certificaciones', detalle: 'Unos meses · Muchos son online', tipo: 'curso', meses: 6, duracion: 'Unos meses' },
      { titulo: 'Por tu cuenta', detalle: 'Retos gratis de hacking ético, como picoCTF o TryHackMe', tipo: 'solo', meses: null, duracion: 'A tu ritmo' },
    ],
  },
];

// Tu perfil: tres rasgos que se muestran bajo «Así eres, según tus respuestas».
// PENDIENTE CLIENTA: son de ejemplo; los reales dependen de la lógica del test.
export interface Rasgo {
  icono: 'crear' | 'contar' | 'retos';
  titulo: string;
  texto: string;
}

export const perfil: { eti: string; rasgos: Rasgo[] } = {
  eti: 'Así eres, según tus respuestas',
  rasgos: [
    { icono: 'crear', titulo: 'Te mueve crear', texto: 'Disfrutas haciendo cosas que antes no existían.' },
    { icono: 'contar', titulo: 'Te gusta contar cosas', texto: 'Explicar, mostrar y compartir te sale natural.' },
    { icono: 'retos', titulo: 'Te motivan los retos', texto: 'Cuando algo es difícil, te pica la curiosidad.' },
  ],
};

// Acompañamiento premium (los textos parten de los del bloque «Cómo funciona»)
export const acompanamiento = {
  foto: coach,
  eti: 'Acompañamiento opcional de pago',
  // Opción C · tarjeta crema (la que se ve); su titular («¿Quieres ayuda para decidir? Habla con un coach») va en la página
  firma: 'Coach profesional · Sesiones 1 a 1 por videollamada',
  // Opción B · «Tus 3 caminos llevan al coach» (montada, oculta mientras coachVariante sea 'C')
  titulo: { antes: '¿Aún dudas entre tus ', enfasis: '3 caminos', despues: '?' },
  intro: 'Un coach los repasa contigo, uno a uno, hasta que sepas cuál probar primero.',
  tuCoach: 'Tu coach',
  plan: { titulo: 'Tu plan', texto: 'Qué estudiar y por dónde empezar' },
  chips: ['Online', 'Por videollamada', '1 a 1'],
  // Común a las dos
  cta: 'Ver los planes',
  // PENDIENTE CLIENTA: precio, número y duración de las sesiones, condiciones, enlace de contratación y nombre del coach
  nota: 'Opcional · El test y tus 3 caminos son gratis.',
};
