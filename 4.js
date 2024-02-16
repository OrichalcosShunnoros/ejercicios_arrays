/*
Ejercicio 4: Ordenar un array.

• Crea un array con números aleatorios.
• Ordena el array de forma ascendente.
• Ordena el array de forma descendente.
• Imprime el array antes y después de ordenarlo.
*/


const num = [5, 9, 2, 7, 3, 8, 1, 6, 4]; //Array con números "aleatorios".

console.log("Array antes de ordenar:"); //Array antes de ordenarlo.
console.log(num);

num.sort((a, b) => a - b); //Array ordenado de forma ascendente.

console.log("Array ordenado de forma ascendente:"); //Array después de ordenarlo de forma ascendente.
console.log(num);

num.sort((a, b) => b - a);  //Array ordenado de forma descendente

console.log("Array ordenado de forma descendente:"); //Array después de ordenarlo de forma descendente.
console.log(num);


