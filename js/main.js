// Listado de productos
let productos = [
    { id: 1, nombre: "echeveria", precio: 4000 },
    { id: 2, nombre: "aloe vera", precio: 4500 },
    { id: 3, nombre: "menta", precio: 2300 },
    { id: 4, nombre: "romero", precio: 2500 },
    { id: 5, nombre: "jazmin", precio: 5000 },
];

let carrito = [];

// Mostrar productos
function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i].id + " : " + productos[i].nombre + " - " + productos[i].precio);
    }
}


// Agregar un producto al carrito
function agregarAlCarrito(productoId) {
    let encontrado = false;  
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === productoId) {
            carrito.push(productos[i]);
            console.log(productos[i].nombre + " ha sido agregado al carrito.");
            encontrado = true; 
            break;  
        }
    }
    if (!encontrado) {
        console.log("No pudimos encontrar el producto.");
    }
}


// Calcular el total de la compra
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio;  
    }
    return total; 
}


// Finalizar la compra
function procesarCompra() {
    if (carrito.length === 0) {
        console.log("Ups! Tu carrito está vacío. No se puede procesar la compra.");
        return;
    }

    console.log("Tu carrito:");
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i].nombre + "-" +carrito[i].precio);
    }

    const total = calcularTotal();
    console.log("Monto total de tu compra: " + total);

    let confirmacion = prompt("¿Deseas confirmar tu compra?: \n Presiona 1 para confirmar \n Presiona 2 para cancelar");
    if (confirmacion === "1") {
        console.log("Tu compra ha sido confirmada. ¡Muchas gracias por tu compra!");
        carrito = [];  // Vaciar el carrito después de la compra
    } else {
        console.log("Tu compra ha sido cancelada.");
    }
}


// Interacción con el carrito
function interactuarConCarrito() {

    mostrarProductos();

    let seguirComprando = true;

    while (seguirComprando) {
        let idProducto = parseInt(prompt("Por favor, ingresa el ID del producto para agregarlo al carrito, o presiona 0 para finalizar:"));

        if (idProducto === 0) {
            seguirComprando = false;
            procesarCompra();
        } else {
            agregarAlCarrito(idProducto);
        }
    }
}

interactuarConCarrito();
