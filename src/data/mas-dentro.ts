// Ocho profesionales de muestra de «Los de dentro» (los usa la home v3 y los clips de la página de resultados).
import profArq from '../assets/muestra/prof-arq.jpg';
import profCoc from '../assets/muestra/prof-coc.jpg';
import profDev from '../assets/muestra/prof-dev.jpg';
import profEle from '../assets/muestra/prof-ele.jpg';
import profFis from '../assets/muestra/prof-fis.jpg';
import profFot from '../assets/muestra/prof-fot.jpg';
import profPer from '../assets/muestra/prof-per.jpg';
import profEnf from '../assets/muestra/prof-enf.jpg';

// PLACEHOLDER: ocho profesionales de muestra (fotos de banco de imágenes, datos inventados). PENDIENTE: sustituir por personas reales
export const masDentro = [
  {
    placeholder: true, nombre: 'Pol', edad: 31, profesion: 'Arquitectura', cita: 'Dibujaba casas en los márgenes del cuaderno.', duracion: '3 min',
    video: null as string | null, subtitulos: null as string | null, foto: profArq,
    camino: ['Empezó Derecho', 'Arquitectura', 'Diseña viviendas'],
    estudios: 'Un año de Derecho y después Arquitectura',
    primerTrabajo: 'Delineante en un estudio pequeño',
    martes: 'Visita una obra por la mañana, revisa planos con el aparejador y por la tarde ajusta el proyecto con el cliente.',
    alt: 'Pol, sentado en su mesa de trabajo, sonriendo.',
  },
  {
    placeholder: true, nombre: 'Jordi', edad: 29, profesion: 'Cocina', cita: 'Empecé fregando platos y no he salido de la cocina.', duracion: '2 min',
    video: null as string | null, subtitulos: null as string | null, foto: profCoc,
    camino: ['Empezó Turismo', 'Escuela de hostelería', 'Jefe de partida'],
    estudios: 'Dos años de Turismo y después un ciclo de cocina',
    primerTrabajo: 'Ayudante de cocina en un restaurante de barrio',
    martes: 'Prepara el mise en place a primera hora, cocina el servicio de mediodía y por la tarde planea el menú de la semana.',
    alt: 'Jordi, cortando verduras en la cocina de un restaurante.',
  },
  {
    placeholder: true, nombre: 'Raúl', edad: 26, profesion: 'Desarrollo de software', cita: 'Aprendí a programar de noche, con vídeos.', duracion: '2 min',
    video: null as string | null, subtitulos: null as string | null, foto: profDev,
    camino: ['Empezó Económicas', 'Bootcamp de programación', 'Desarrolla apps'],
    estudios: 'Un año de Económicas y un bootcamp de seis meses',
    primerTrabajo: 'Desarrollador junior en una consultora',
    martes: 'Revisa el código del equipo, arregla errores que le han llegado y por la tarde construye una pantalla nueva.',
    alt: 'Raúl, con gafas y la mano en la barbilla, concentrado delante del ordenador.',
  },
  {
    placeholder: true, nombre: 'Samir', edad: 35, profesion: 'Electricidad', cita: 'Quería trabajar con las manos y que se notara.', duracion: '3 min',
    video: null as string | null, subtitulos: null as string | null, foto: profEle,
    camino: ['Empezó Bachillerato', 'FP de Electricidad', 'Instalador autónomo'],
    estudios: 'Un ciclo de FP de Instalaciones eléctricas',
    primerTrabajo: 'Ayudante de un electricista veterano',
    martes: 'Visita dos casas por la mañana, monta un cuadro eléctrico y por la tarde pasa presupuestos.',
    alt: 'Samir, con casco blanco, sonriendo a cámara.',
  },
  {
    placeholder: true, nombre: 'Nerea', edad: 30, profesion: 'Fisioterapia', cita: 'Una lesión mía me cambió la carrera.', duracion: '2 min',
    video: null as string | null, subtitulos: null as string | null, foto: profFis,
    camino: ['Empezó Biología', 'Fisioterapia', 'Clínica propia'],
    estudios: 'Dos años de Biología y después el grado de Fisioterapia',
    primerTrabajo: 'Fisioterapeuta en un gimnasio',
    martes: 'Atiende a siete pacientes en la clínica, prepara ejercicios personalizados y por la tarde da una clase de movilidad.',
    alt: 'Nerea, sonriendo y mirando hacia un lado.',
  },
  {
    placeholder: true, nombre: 'Carla', edad: 28, profesion: 'Fotografía', cita: 'Empecé retratando a mis amigas con el móvil.', duracion: '2 min',
    video: null as string | null, subtitulos: null as string | null, foto: profFot,
    camino: ['Empezó Publicidad', 'Curso de fotografía', 'Fotógrafa freelance'],
    estudios: 'Publicidad y un curso intensivo de fotografía',
    primerTrabajo: 'Ayudante en un estudio de moda',
    martes: 'Hace una sesión por la mañana, edita las fotos al mediodía y por la tarde responde presupuestos.',
    alt: 'Carla, sentada en unas escaleras con la cámara.',
  },
  {
    placeholder: true, nombre: 'Irene', edad: 33, profesion: 'Periodismo', cita: 'Quería contar lo que nadie estaba contando.', duracion: '3 min',
    video: null as string | null, subtitulos: null as string | null, foto: profPer,
    camino: ['Empezó Filología', 'Periodismo', 'Reportera de radio'],
    estudios: 'Dos años de Filología y después Periodismo',
    primerTrabajo: 'Becaria en la redacción de un periódico local',
    martes: 'Va a la reunión de la mañana, sale a grabar una entrevista y por la tarde escribe y monta la pieza.',
    alt: 'Irene, de pie con los brazos cruzados, sobre fondo blanco.',
  },
  {
    placeholder: true, nombre: 'Mar', edad: 37, profesion: 'Enfermería', cita: 'Pasé de querer ser médica a querer cuidar.', duracion: '2 min',
    video: null as string | null, subtitulos: null as string | null, foto: profEnf,
    camino: ['Empezó Medicina', 'Enfermería', 'Enfermera de urgencias'],
    estudios: 'Un año de Medicina y después el grado de Enfermería',
    primerTrabajo: 'Enfermera en planta de un hospital',
    martes: 'Entra al turno de mañana, pasa visita con el equipo y atiende a los pacientes que llegan a urgencias.',
    alt: 'Mar, con uniforme azul, sentada en un taburete.',
  },
];
