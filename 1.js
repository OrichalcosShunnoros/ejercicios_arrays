/**
Ejercicio 1: Crear un array de nombres y recorrerlo.

• Crea un array con al menos 5 nombres de personas.
• Recorre el array e imprime cada nombre en la consola.
• Imprime la longitud del array.
*/

let nombres = ['Angelica', 'Esteban', 'Ingrid', 'Orlando', 'Uriel'];

console.log('Nombres contenidos: ');
nombres.forEach(nombre => {
    console.log(nombre);
});

console.log(nombres.length);