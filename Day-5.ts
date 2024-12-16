/*
type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.
*/

type Shoe = { type: 'I' | 'R'; size: number };

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]
const organizedShoes = organizeShoes(shoes);
console.log(organizedShoes)
// [38, 42]

const shoes2: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
const organizedShoes2 = organizeShoes(shoes2);
console.log(organizedShoes2)
// [38, 38]

const shoes3: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]
const organizedShoes3 = organizeShoes(shoes3);
console.log(organizedShoes3)
// []



function organizeShoes(shoes: Shoe[]): number[] {
  const sizeCount: Record<number, { I: number; R: number }> = {};
  const organizedShoes: number[] = [];

  // Contar cuántos zapatos de tipo I y R hay por talla
  for (const shoe of shoes) {
    if (!sizeCount[shoe.size]) {
      sizeCount[shoe.size] = { I: 0, R: 0 };
    }
    sizeCount[shoe.size][shoe.type]++;
  }

  // Calcular pares completos (mínimo entre I y R) para cada talla
  for (const [size, counts] of Object.entries(sizeCount)) {
    const pairs = Math.min(counts.I, counts.R); // Un par requiere un I y un R
    organizedShoes.push(...Array(pairs).fill(Number(size)));
  }

  return organizedShoes;
}