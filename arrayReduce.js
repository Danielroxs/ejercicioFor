/* REDUCE
Ejecuta una funcion por cada elemento del array para que resulte en un unico valor

[2,3,4,6,2].reduce((acumulador, valorActual) => (acumulador + valorActual));

Opcionalmente se puede pasar un 3er valor al final de la funcion para que acumulador inicie con ese valor

*/
const resultadoAcumulador = [2,3,4,6,2].reduce((acumulador, valorActual) => (acumulador + valorActual)/* ,1000 */)

console.log(resultadoAcumulador);

const numeros = [13,18,12,11,10];

const numeroMayor = numeros.reduce((mayor, valorActual) => { //13 es mayor y 18 es valorActual y asi sigue, siempre guardara 18 en mayor (paso de valorActual a almacenarse en mayor) porque ese es el resultado de la condicion
    if(valorActual > mayor) return valorActual
    return mayor
})

console.log(numeroMayor);

//------------------------------------------------------------------------------------------------------------------

const numeros2 = [13,18,12,33,10,22];

const numeroMayor2 = numeros2.reduce((mayor, valorActual) => { //13 es mayor y 18 es valorActual y asi sigue, siempre guardara 18 en mayor (paso de valorActual a almacenarse en mayor) porque ese es el resultado de la condicion
    return Math.max(mayor,valorActual); // el metodo reduce va iterando en el array y ejecuta la funcion por cada 2 elementos tomando uno para mayor y el otro para valorActual
}/* ,45 */)                                      // compara 13 con 18, despues guarda a 18 por ser mayor en var mayor, compara 18 con 12 y sigue guardando hasta que halla otro numero mayor que reemplaze a 18 y se acabe el array

console.log(numeroMayor2);

//------------------------------------------------------------------------------------------------------------------

const numeros3 = [13,18,12,33,10,22];

const numeroMen = numeros2.reduce((menor, valorActual) => { //13 es menor y 18 es valorActual y asi sigue, siempre guardara 18 en menor (paso de valorActual a almacenarse en mayor) porque ese es el resultado de la condicion
    return Math.min(menor,valorActual); // el metodo reduce va iterando en el array y ejecuta la funcion por cada 2 elementos tomando uno para menor y el otro para valorActual
},1)                                      // compara 13 con 18, despues guarda a 13 por ser menor en var menor, compara 13 con 12 y guarda 12 en menor hasta que halla otro numero menor que reemplaze a 12 y se acabe el array
                                        // Tambien se puede pasar un 3er valor para inicializar el 1er argumento con ese valor por ejem 1, ahora el numero menor es 1 en vez de 10 del array
console.log(numeroMen);