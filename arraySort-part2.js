/* SORT  
si funcion (a,b) retorna menos que 0 -> ordena a y luego b;
si funcion (a,b) retorna 0 -> retorna todo como esta;
si funcion (a,b) retorna mas que 0 ->ordena b y luego a;
*/

const numeros = [100, 2, 8, 10, 11, 1200, 200];

numeros.sort();
console.log(numeros)

const ordenAscendente = numeros.sort((a,b) => a - b);
console.log(ordenAscendente)

const ordenDescendente = numeros.sort((a,b) => b - a)
console.log(numeros)

//______________________________________________________________________________________________

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

const caliAsc = peliculas.sort((a,b) => a.puntos - b.puntos) // para reducir funciones flecha ve el video 15
console.log(caliAsc)