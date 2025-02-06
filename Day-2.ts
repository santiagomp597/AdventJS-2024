/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:
*/
const frame1 = createFrame(['midu', 'madeval', 'educalvolpz']);
console.log(frame1)
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

const frame2 = createFrame(['midu']);
console.log(frame2)
// ********
// * midu *
// ********

const frame3 = createFrame(['a', 'bb', 'ccc']);
console.log(frame3)
// *******
// * a   *
// * bb  *
// * ccc *
// *******

// Solucion:

function createFrame(names: string[]) {
    // Manejo de array vacío
    if (names.length === 0) return "";
    // Longitud del marco
    const longestLength = Math.max(...names.map((name) => name.length));
    const frameWidth = longestLength + 4;
    // Borde superior e inferior
    const topBottomBorder = "*".repeat(frameWidth);
    // Alinea a la izquierda
    const framedNames = names
        .map((name) => `* ${name.padEnd(longestLength)} *`)
        // Combina los nombres con saltos de línea
        .join("\n");
    return `${topBottomBorder}\n${framedNames}\n${topBottomBorder}`;
}