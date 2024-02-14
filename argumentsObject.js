function sumar () {
    console.log(arguments);
    const valores = [...arguments];
    return valores.reduce ((acumudalor, valorActual) => {
        return (acumudalor + valorActual);
    })
}

function clientes (nombre, apellido) {
    console.log(arguments);
}

clientes('Juan', 'Perez', '2333333', 'Av 4 1500');

console.log(sumar(10,20,30,40,80));

console.log(Math.max(10,20,33,45,80,51));

const xxx = () => {
    console.log(arguments)
}

xxx(44,55,66,77);