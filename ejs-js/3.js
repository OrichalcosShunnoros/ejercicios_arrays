/*
Ejercicio 3: Buscar un elemento en un array.

• Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
• Busca un elemento específico en el array por su valor.
• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
• Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).
*/


const miArray = [10, "Hola", true, false, "Mundo", 5, 3.14, "JavaScript", 20, "Array"]; //Array con al menos 10 elementos de diferentes tipos.

const aBusc = "JavaScript"; //lo que que queremos buscar.

const indiceIndexOf = miArray.indexOf(aBusc); //Usando "indexOf" para buscar.
if (indiceIndexOf !== -1) {
  console.log(`El elemento "${aBusc}" se encuentra en el índice ${indiceIndexOf}.`);
} else {
  console.log(`El elemento "${aBusc}" no se encuentra en el array.`);
}

const encontrado = miArray.find(elemento => elemento === aBusc); //Usando find para buscar.
if (encontrado !== undefined) {
  console.log(`El elemento "${aBusc}" se encuentra en el índice ${miArray.indexOf(encontrado)}.`);
} else {
  console.log(`El elemento "${aBusc}" no se encuentra en el array.`);
}
