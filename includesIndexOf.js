/* Se utilizan para BUSCAR dentro de un array
includes - retorna un boolean dependiendo si encuentra el valor o no. (no funciona en IE)
indexOf - retorna la posicion del indice si lo encuentra, si no existe retorna -1 
*/

const nombres = [
    'marcos',
    'jorge',
    'luis',
    'rodrigo',
    'gaston',
    'marcos',
    'felipe',
]

// como segundo argumento se le puede pedir que corrobore si hay otra una coincidencia despues del indice X y retornara true o false caso sea.

console.log(nombres.includes('marco'.toLocaleLowerCase(), 3));

if (nombres.includes('Marcos'.toLocaleLowerCase())) {
    console.log('OK, si esta incluido')
} else {
    console.log('No esta incluido')
}

// indexOf, devuelve el indice donde se encuentra la posicion
console.log(nombres.indexOf('marcos', 3));

if (nombres.indexOf('marcos', 3) !== -1) {
    console.log(nombres.indexOf('marcos', 3));
} else {
    console.log('No esta incluido')
}