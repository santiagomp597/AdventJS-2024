/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:
*/

const package1 = fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis
console.log(package1);

const package2 = fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"
console.log(package2);

const package3 = fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"
console.log(package3);

const package4 = fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
console.log(package4);

function fixPackages(packages: string): string {
  // Regex para encontrar el contenido más interno entre paréntesis
  const innerParentheses = /\(([^()]+)\)/;

  // Mientras haya paréntesis en el string, seguimos procesando
  while (innerParentheses.test(packages)) {
    packages = packages.replace(innerParentheses, (_, innerContent) => {
      // Volteamos el contenido más interno
      return innerContent.split("").reverse().join("");
    });
  }

  return packages;
}