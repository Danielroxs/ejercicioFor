function regresaFuncion () {
    return function () {
        console.log('Mas rebuscado no podia ser...')
    }
}

//const miFuncion = regresaFuncion()

//miFuncion();

const miFuncion = function () {
    console.log('Mas rebuscado no podia ser...')
}

miFuncion();

// Retorna una funcion anonima que debo asignar a una variable o constante

function multiplicaPor (num) {
    return function (otroNumero) {
        return otroNumero * num;
    }
}

// Aqui la asigne a esta constante con el parametro de 2 para poder usarla
const dameElDoble = multiplicaPor(2);

/* const dameElDoble = function (otroNumero) {
    return  otroNumero * 2;
} */

// Aqui la asigne a esta constante con el parametro de 3 para poder usarla
const dameElTriple = multiplicaPor(3);


// Aqui la invoco y le doy el segundo valor que necesita para trabajar
console.log(dameElDoble(3))
// Aqui la invoco y le doy el segundo valor que necesita para trabajar
console.log(dameElTriple(3))