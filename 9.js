/* 
Ejercicio 9: Agrupar elementos de un array por una propiedad
• Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
• Agrupa los elementos del array por el valor de la propiedad común.
*/


const prod = [ //Array con objetos que tengan una propiedad en común.
    { id: 1, nom: "Camiseta", col: "Rojo" },
    { id: 2, nom: "Pantalón", col: "Azul" },
    { id: 3, nom: "Zapatos", col: "Negro" },
    { id: 4, nom: "Bufanda", col: "Rojo" },
    { id: 5, nom: "Gorra", col: "Azul" },
    { id: 6, nom: "Cinturón", col: "Negro" }
  ];
  

const agrupCol = {}; //Agrupar los elementos del array por el valor de la propiedad común.
prod.forEach(prod => {
    const col = prod.col;
    if (!agrupCol[col]) {
      agrupCol[col] = [];
    }
    agrupCol[col].push(prod);
});
  
//Imprimir los grupos
console.log("Productos agrupados por color:");
for (const col in agrupCol) {
    console.log(`Color: ${col}`);
    console.log(agrupCol[col]);
}
  