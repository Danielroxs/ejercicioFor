// Find retorna  el valor del primer elemento del array que satisface el pedido de la funcion, osea
// funciona regresando el primer valor que sea true y se detiene
// find solo devuelve la primer coincidencia por eso es usado para datos unicos como key/dni/clave

const animales = ['loro', 'gato', 'grulla', 'camaleon', ' zorro'];

const estaIncluido = animales.find(function (animal) {
    return animal.includes('zorro')
});

console.log(estaIncluido);

// tambien se puede usar con funcion flecha
const estaIncluido2 = animales.find((animal) => {
    //return animal.includes('camaleon')
    return animal.indexOf(' ') === 0; // si, si hay un " " que arranca en el indice 0, osea " zorro"
});

console.log(estaIncluido2);

// metodo map, nos devuelve un nuevo array

const nuevoArray = animales.map((animal) => {
    return animal.toUpperCase();
})

console.log(animales);
console.log(nuevoArray);

// Obtener datos de un array de objetos 

const peliculas = [
    {
        titulo: 'Rambo 2',
        anho: 1982
    },
    {
        titulo: 'Rambo 3',
        anho: 1983
    },
    {
        titulo: 'Rambo 4',
        anho: 1984
    },
    {
        titulo: 'Rambo 5',
        anho: 1985
    },
    {
        titulo: 'Rambo 6',
        anho: 1986
    }
]

const peliculaFiltrada = peliculas.filter((elemnto) => {
    return elemnto.anho > 1984;
})

console.log(peliculaFiltrada)

/* const anhio = peliculas.find((tiempo) => {
    if (tiempo.anho >= 1982 && tiempo.anho <= 1986) {
       return (`'No es tan vieja la peli ' ${tiempo.anho}`)
    }
})

console.log(anhio) */

const anhio = peliculas.find((objeto) => {
    return objeto.anho >= 1985;
})

console.log(anhio)