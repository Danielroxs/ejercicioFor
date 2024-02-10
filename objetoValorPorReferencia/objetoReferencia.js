const cliente01 = {
    nombre:'Marcos',
    edad:33,
    notas: []
};

// if (cliente01.notas === []) {
    if (cliente01.notas.length === 0) {
    console.log('Son iguales');
} else {
    console.log('No son iguales')
}
console.log(cliente01.notas.length)
// cliente02 ---> 88888
const cliente02 = cliente01; // si son iguales en comparacion porque comparten la misma direccion de memoria
if (cliente01 === cliente02) {
    console.log('Son iguales');
}

cliente02.edad = 50;

console.log(cliente02.edad);

// cuando se quieren comparar dos arrays independientemente de que esten vacios su direccion en memoria es diferente

const miArray = []; // 22222
const miSegundoA = []; // 33333

if (miArray === miSegundoA) {
    console.log('Son iguales');
} else {
    console.log('No son iguales')
}

console.log(miArray === miSegundoA);

// Los arrays y los objetos hacen referencia a una posicion en memoria y no podemos usarlos para comparacion,
// ya que dependen de la posicion en memoria/punteros y no del contenido