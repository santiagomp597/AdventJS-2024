/*
La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
*/
const tree = createXmasTree(5, '*')
console.log(tree)
// 
// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

const tree2 = createXmasTree(3, '+')
console.log(tree2)
// __+__
// _+++_
// +++++
// __#__
// __#__

const tree3 = createXmasTree(6, '@')
console.log(tree3)
// _____@_____
// ____@@@____
// ___@@@@@___
// __@@@@@@@__
// _@@@@@@@@@_
// @@@@@@@@@@@
// _____#_____
// _____#_____


function createXmasTree(height: number, ornament: string): string {
    const maxLineWidth = height * 2 - 1; // Longitud máxima de las líneas
    let tree = "";
  
    // Construir la parte superior del árbol
    for (let i = 0; i < height; i++) {
      const ornaments = ornament.repeat(2 * i + 1); // Calcular adornos por línea
      const padding = "_".repeat((maxLineWidth - ornaments.length) / 2); // Calcular los espacios
      tree += `${padding}${ornaments}${padding}\n`;
    }
  
    // Construir el tronco
    const trunk = "_".repeat((maxLineWidth - 1) / 2) + "#" + "_".repeat((maxLineWidth - 1) / 2);
    tree += `${trunk}\n${trunk}`;
  
    return tree;
  }