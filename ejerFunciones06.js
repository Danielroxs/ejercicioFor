/* function aleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

console.log(aleatorio(['hola', true, 55, false, 'cuatro'])) */

function nombreApellido(nombre, apellido) {
    const nombreAleatorio = Math.floor(Math.random() * nombre.length);
    const apellidoAleatorio = Math.floor(Math.random() * apellido.length);
    let nombreCompleto = `${nombre[nombreAleatorio]}  ${apellido[apellidoAleatorio]}`
    return nombreCompleto;
}

nombres = ['Juan', 'Jose', 'Daniel', 'Dania'];
apellidos = ['Tinoco', 'Rodriguez', 'Hernandez', 'Suarez'];

console.log(nombreApellido(nombres, apellidos))