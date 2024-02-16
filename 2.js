/**
Ejercicio 2: Agregar y eliminar elementos de un array.

• Crea un array vacío.
• Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
• Elimina el último elemento del array.
• Elimina un elemento específico del array por su índice.
• Imprime el array final después de las modificaciones. 
 */


let prod = []; //Array vacío.

prod.push('Oro'); //Agregar elementos al array.
prod.unshift('Plata');
prod.splice(1, 0, 'Bronce');

console.log(prod); //Array antes de la eliminación de elementos.

prod.pop(); //Elimina el ultimo elemento del array.

const indexToClear = 1;  //Elimina elementos por indice.
prod.splice(indexToClear, 1);

console.log(prod); //Array después de la modificación.