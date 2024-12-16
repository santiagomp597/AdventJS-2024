/*
Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

name: el nombre del juguete (string).
quantity: la cantidad disponible de ese juguete (entero).
category: la categoría a la que pertenece el juguete (string).
Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}.
*/

type Inventory = Array<{ name: string; quantity: number; category: string }>;

const inventory: Inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]
const organizedInventory = organizeInventory(inventory)
console.log(organizedInventory);
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]
const organizedInventory2 = organizeInventory(inventory2)
console.log(organizedInventory2);
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }


// Solucion:

function organizeInventory(inventory: Inventory): object {
    return inventory.reduce((result: any, item) => {
        const { category, name, quantity } = item;
        // Si la categoría no existe, inicialízala
        if (!result[category]) {
            result[category] = {};
        }
        // Suma las cantidades del juguete
        result[category][name] = (result[category][name] || 0) + quantity;
        return result;
    }, {});
}