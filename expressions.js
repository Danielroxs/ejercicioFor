function suma (x,y) { // las funciones tambien son objetos
    return x + y;
}

function resta (x,y) {
    return x - y;
}

function multiplicacion (x,y) {
    return x * y;
}

function divide (x,y) {
    return x / y;
}

const misOperaciones = [suma,resta, multiplicacion, divide]

for (const funcion of misOperaciones) {
    console.log(funcion(10,2))
}

const objetosFunciones = { // accedo al objeto y con . a su key y le paso los argumentos necesarios para la funcion
    sum: suma, // el valor es la referencia a una funcion
    res: resta, // paso el objeto, no mando a llamar la funcion con ()
    mult: multiplicacion,
    div: divide
}

console.log(objetosFunciones.sum(5,50))