/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.
*/

const giftInBox1 = inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true
console.log(giftInBox1);

const giftInBox2 = inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true
console.log(giftInBox2);

const giftInBox3 = inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false
console.log(giftInBox3);

const giftInBox4 = inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
console.log(giftInBox4);

function inBox(box: string[]): boolean {
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i];
    const giftIndex = row.indexOf("*");
    if (giftIndex > 0 && giftIndex < row.length - 1) {
      return true;
    }
  }
  return false;
}