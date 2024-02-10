/* Filter permite generar en un nuevo array en base a la funcion y su condicion, evalua true or false
cuando el resultado a la condicion sea true ese dato pasara a formar el nuevo array filtrado. */

const numeros = [10, 13, 31, 17, 107, 40];

const numeroPar = numeros.filter((elemento) => { // elemento es la variable que itera en el array
    return elemento % 2 === 0; // retorna los elementos que su division entre dos de un residuo de 0, osea numeros pares
})

console.log(numeroPar);

//_____________________________________________________________________________________________


const numeroImpar = numeros.filter((elemento) => { // elemento es la variable que itera en el array
    return elemento % 2 === 1; // retorna los elementos que su division entre dos de un residuo de 0, osea numeros pares
})

console.log(numeroImpar);

//_____________________________________________________________________________________________


const numeroMayor = numeros.filter((elemento) => { // elemento es la variable que itera en el array
    return elemento > 30; // retorna los elementos que su division entre dos de un residuo de 0, osea numeros pares
})

console.log(numeroMayor);

//_____________________________________________________________________________________________

const peliculas = [
    {
        titulo: 'Rambo 2',
        anho: 1982,
        puntos: 6.6,
        genero: ['accion']
    },
    {
        titulo: 'Rambo 3',
        anho: 1983,
        puntos: 7.0,
        genero: ['accion']
    },
    {
        titulo: 'Rambo 4',
        anho: 1984,
        puntos: 6.0,
        genero: ['accion']
    },
    {
        titulo: 'Rambo 5',
        anho: 1985,
        puntos: 5.6,
        genero: ['thriller']
    },
    {
        titulo: 'Top Gun',
        anho: 1986,
        puntos: 6.9,
        genero: ['fantastico']
    }
]

//_____________________________________________________________________________________________________
const search = 'top Gun';

const resultado = peliculas.filter((obj) => {
    const titulo = obj.titulo.toLocaleLowerCase();
    return titulo.includes(search.toLocaleLowerCase())
})

console.log(resultado)
//_____________________________________________________________________________________________________
const fantastico = peliculas.filter((obj) => {
    return obj.genero.includes('fantastico') || obj.genero.includes('thriller')
})

console.log(fantastico)

const peliculaFiltrada = peliculas.filter((pelisRecientes) => { // aqui itera pelisRecientes en cada elemento del array (es la variable temporal)
    return pelisRecientes.anho > 1984;
})



// filter nos devuelve un nuevo array (no modifica el array original) en base a lo que buscamos y dieron true a la condicion evaluada
console.log(peliculaFiltrada)
console.log(numeros)
//_____________________________________________________________________________________________

