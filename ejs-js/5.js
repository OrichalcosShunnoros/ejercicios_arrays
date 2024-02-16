/*
Ejercicio 5: Filtrar elementos de un array

• Crea un array con nombres de personas y sus edades.
• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
• Imprime los nombres de las personas que cumplen con el criterio.
• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un 
mensaje).
*/



const pers = [ //Array con nombres y edades de personas.
    { nom: "Juan", ed: 25 },
    { nom: "María", ed: 18 },
    { nom: "Pedro", ed: 30 },
    { nom: "Ana", ed: 15 }
];

const persMay = pers.filter(pers => pers.ed >= 18);   // Filtrar el array para obtener solo los nombres de las personas mayores de edad.
  
console.log("Personas mayores de edad:");   // Imprimir los nombres de las personas que cumplen con el criterio.
persMay.forEach(pers => console.log(pers.nom));

console.log("Acciones con todas las personas:");   // Usar un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento.
pers.forEach(pers => {
    if (pers.ed >= 18) {
      console.log(`${pers.nom} es mayor de edad.`);
    } else {
      console.log(`${pers.nom} es menor de edad.`);
    }
});
  