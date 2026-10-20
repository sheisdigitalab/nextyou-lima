// Envuelve una parte de un texto en un <span> (por ejemplo, para el subrayado a mano).
// El texto viene de src/data, pero se escapa igualmente.
const escapar = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function resaltar(texto: string, parte?: string, clase = 'subrayado'): string {
  if (!parte || !texto.includes(parte)) return escapar(texto);
  const i = texto.indexOf(parte);
  return (
    escapar(texto.slice(0, i)) +
    `<span class="${clase}">${escapar(parte)}</span>` +
    escapar(texto.slice(i + parte.length))
  );
}
