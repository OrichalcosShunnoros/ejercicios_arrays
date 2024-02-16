/*
Ejercicio 11:
Un pequeño negocio necesita un sistema para gestionar su inventario de productos. 

El sistema debe permitir al usuario:
• Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de 
objetos)
• Listar todos los productos: mostrar información completa de cada producto.
• Buscar un producto por nombre: mostrar información del producto si existe.
• Eliminar un producto: eliminar producto del inventario.
• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto
*/


let inv = []; //Array para almacenar los productos


function addProd(nombre, descripcion, precio, cantidad, categoria) { //Agregar un nuevo producto
    const nvProd = {
        nom: nombre,
        desc: descripcion,
        prec: precio,
        cant: cantidad,
        catg: categoria
    };
    inv.push(nvProd);
    console.log("Producto agregado correctamente.");
}

// Función para listar todos los productos
function liProd() {
    console.log("Inventario de productos:");
    inv.forEach(prod => {
        console.log(prod);
    });
}

// Función para buscar un producto por nombre
function buscProdNom(nom) {
    const prodEncon = inv.find(prod => prod.nom === nom);
    if (prodEncon) {
        console.log("Información del producto encontrado:");
        console.log(prodEncon);
    } else {
        console.log("El producto no se encuentra en el inventario.");
    }
}

// Función para eliminar un producto
function delProd(nom) {
    inv = inv.filter(prod => prod.nom !== nom);
    console.log("Producto eliminado correctamente.");
}

// Función para actualizar la cantidad en stock de un producto
function updCant(nom, nvCant) {
    const prod = inv.find(prod => prod.nom === nom);
    if (prod) {
        prod.cant = nvCant;
        console.log("Cantidad actualizada correctamente.");
    } else {
        console.log("El producto no se encuentra en el inventario.");
    }
}

// Ejemplo de uso del sistema de gestión de inventario
addProd("Camisa", "Camisa de algodón", 20, 50, "Ropa");
addProd("Zapatos", "Zapatos de cuero", 50, 30, "Calzado");
liProd();
buscProdNom("Camisa");
delProd("Camisa");
liProd();
updCant("Zapatos", 40);
liProd();
