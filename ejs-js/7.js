/*
Ejercicio 7: Eliminar elementos duplicados de un array.

• Crea un array con elementos duplicados.
• Elimina los elementos duplicados del array.
*/

const arrayConDup = [1, 2, 3, 4, 2, 3, 5, 6, 1]; //Array con elementos duplicados.
console.log("Array con duplicados:", arrayConDup);

const arraySinDup = Array.from(new Set(arrayConDup)); //Eliminar los duplicados de un array.
console.log("Array sin duplicados:", arraySinDup); //Array sin duplicados.
