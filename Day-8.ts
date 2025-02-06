/*
¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
Ejemplos:
*/

const race1 = drawRace([0, 5, -3], 10)
console.log(race1);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

const race2 = drawRace([2, -1, 0, 5], 8)
console.log(race2);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

const race3 = drawRace([3, 7, -2], 12)
console.log(race3);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/

function drawRace(indices: number[], length: number): string {
  return indices
    .map((index, i) => {
      const offset = indices.length - 1 - i; // Desplazamiento isométrico
      const line = "~".repeat(length).split("");
      if (index !== 0) {
        const position = index > 0 ? index : length + index;
        line[position] = "r"; // Coloca el reno en la posición correcta
      }
      return `${" ".repeat(offset)}${line.join("")} /${i + 1}`;
    })
    .join("\n");
}