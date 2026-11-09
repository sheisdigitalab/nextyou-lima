// Clips de profesionales de las fichas de la página de resultados. Reutiliza a las personas de «Los de dentro» de la home
// (losDeDentro y masDentro) y añade a Laia, la del bloque 03 de «Cómo funciona».
// PLACEHOLDER: fotos de banco de imágenes y fichas de ejemplo; sustituir por las personas reales y sus clips (video / subtitulos).
import { losDeDentro } from './home';
import { masDentro } from './mas-dentro';
import fotoLaia from '../assets/muestra/laia-v3-video.jpg';

const laia = {
  placeholder: true,
  nombre: 'Laia', edad: 29, profesion: 'Animación 3D', cita: 'Empecé en un estudio pequeño, animando un segundo cada día.', duracion: '3 min',
  video: null as string | null, subtitulos: null as string | null, foto: fotoLaia,
  camino: ['Un curso de animación 3D', 'Un estudio pequeño', 'Anima personajes'],
  estudios: 'Un curso de animación 3D',
  primerTrabajo: 'Animadora en un estudio pequeño',
  martes: 'Revisa con el equipo la escena del día, anima un personaje plano a plano y al final la enseña para recibir comentarios.',
  alt: 'Laia, animadora 3D, contando cómo empezó.',
};

const todos = [...losDeDentro.personas, ...masDentro, laia];
const por = (nombre: string) => {
  const p = todos.find((x) => x.nombre === nombre);
  if (!p) throw new Error(`Falta el profesional ${nombre}`);
  return p;
};

// Por el id de cada camino de resultados.ts
export const clipsPorCamino: Record<string, typeof laia[]> = {
  contenido: [por('Carla'), por('Irene'), por('Mía')],
  animacion: [por('Laia'), por('Dani'), por('Marta')],
  ciberseguridad: [por('Iván'), por('Raúl')], // solo dos de momento
};
