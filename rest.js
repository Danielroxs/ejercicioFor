// almacena en un array n valores

function sumar(...valores) {
    console.log(valores);
    return valores.reduce((acumudalor, valorActual) => {
        return (acumudalor + valorActual);
    })
}

console.log(sumar(10, 20, 30, 50));

function clientes(nombre, apellido, ...otrosDatos) { // los parametros rest van siempre al final, respetar el orden
    console.log(nombre);
    console.log(apellido);
    console.log(otrosDatos);
}

clientes('Mia', 'Marin', 'hola', true, false, 33, 'Direccion', 'email')

const sumar2 = (...valores) => {
    return valores.reduce((acumudalor, valorActual) => {
        return acumudalor + valorActual;
    })
}

console.log(sumar2(44,66,88))

// const sumar2 = (...valores) => (valores.reduce((acumudalor, valorActual) => acumudalor + valorActual))

const multiplicar = (...valores) => (valores.reduce((acumudalor, valorActual) => acumudalor * valorActual))


console.log(multiplicar(5,5,10))