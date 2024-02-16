/*
Ejercicio 10: Convertir un array en un objeto.

• Crea un array con elementos de diferentes tipos.
• Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto.
*/ 


const miArray = [10, "Hola", true, { nom: "Juan", ed: 30 }]; //Array con elementos de diferentes tipos

const miObj = {}; //Convertir el array en un objeto

miArray.forEach((elemento, indice) => {
  miObj[indice] = elemento;
});

console.log(miObj); //Se imprime el objeto resultante.
