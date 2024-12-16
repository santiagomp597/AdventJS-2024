/* 
 Escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
 */

const gifts1: number[] = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1)
// [1, 2, 3, 4, 5]

const gifts2: number[] = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2)
// [5, 6]

const gifts3: number[] = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3)
// []


// Solucion:

function prepareGifts(gifts: number[]): number[] {
    // Utilizamos un Set para eliminar duplicados y luego lo convertimos a un array ordenado en orden ascendente
    return Array.from(new Set(gifts)).sort((a, b) => a - b);
}