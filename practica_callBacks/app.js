function comprar (articulo1, articulo2, funcion) {
    let gastado = articulo1 + articulo2;
    funcion(gastado)
}

function imprimir(mensaje) {
    console.log(`Compramos leche y pan, gastamos: ${mensaje}`);
}

comprar(50, 50, imprimir)

/* function comprar(articulo1, articulo2, funcion) {
    let precioArticulo1 = 50;
    let precioArticulo2 = 50;
    let gastado = precioArticulo1 + precioArticulo2;
    funcion(gastado);
}

function imprimir(mensaje) {
    console.log(`Compramos leche y pan, gastamos: ${mensaje}`);
}

comprar('leche', 'pan', imprimir);
 */