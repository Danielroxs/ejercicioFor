// Determina si todos los elementos  en el array satisfacen una condicion. Retorna un boolean

const edades =[1,15,17,13,8]; // todos son menores a 18
const sonMenoresEdad = (edad) => edad <= 18; // edad menor o igual a 18?

let resultado = (edades.every(sonMenoresEdad));

console.log(resultado);

// son mayores a 18?
let a = [20,33,21,31].every (valor => valor >= 18); // true
let b = [20,15,21,31].every (valor => valor >= 18); // false 15 no es mayor

console.log(a);
console.log(b);

//___________________________________________________________________________________________________

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

const mejorPeli = peliculas.some((pelis) => {
    return pelis.puntos >= 7.0;
})

console.log(mejorPeli)