/*
Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:
*/
console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

/* 
Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

console.log(createFrame(['midu']))

/* 
Resultado esperado:
********
* midu *
********
*/

console.log(createFrame(['a', 'bb', 'ccc']))

/* 
Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******
*/

// Solucion:

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
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