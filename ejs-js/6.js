/*
Ejercicio 6: Combinar dos arrays.

• Crea dos arrays con diferentes elementos.
• Combina los dos arrays en un solo array nuevo.
• Mantén el orden original de los elementos en el array combinado.

*/

const array1 = [1, 2, 3]; //Array con elementos numéricos.
const array2 = ["a", "b", "c"]; //Array con elementos string.

const arrayComb = [...array1, ...array2]; //Combinar los dos arrays en uno solo

console.log("Array combinado:", arrayComb); //Imprimir el array combinado
