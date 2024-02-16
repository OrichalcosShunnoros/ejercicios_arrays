/* 
Ejercicio 8: Encontrar el máximo y el mínimo de un array.

• Crea un array con números.
• Encuentra el valor máximo y mínimo del array.
• Imprime el valor máximo y mínimo.

*/

const arrayNum = [10, 5, 20, 8, 15]; //Array con números

const max = Math.max(...arrayNum); //Encontrar el valor máximo del array.

const min = Math.min(...arrayNum); //Encontrar el valor mínimo del array.

//Imprimir el valor máximo y mínimo del array.
console.log("Valor máximo:", max);
console.log("Valor mínimo:", min);
