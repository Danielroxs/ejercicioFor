const peliculas = [
    {
        titulo: 'Rambo 1',
        anio: 1982,
        puntos: 6.6,
        genero: ['accion']
    },
    {
        titulo: 'Rambo 2',
        anio: 1983,
        puntos: 7.0,
        genero: ['accion']
    },
    {
        titulo: 'Rambo 3',
        anio: 1984,
        puntos: 6.0,
        genero: ['accion']
    },
    {
        titulo: 'Rambo 4',
        anio: 1985,
        puntos: 5.6,
        genero: ['thriller']
    },
    {
        titulo: 'Top Gun',
        anio: 1986,
        puntos: 6.9,
        genero: ['fantastico']
    },{
        titulo: 'Hallowen',
        anio: 1988,
        puntos: 7.2,
        genero: ['Terror']
    }
]

console.log(peliculas[0].anio) //forma de acceder

const [, { titulo: pelicula2, anio }, , { titulo, anio: year }] = peliculas // accedi al indice 1 y cree la constante titulo despues la renombre con pelicula2, esto del array con objetos anidados llamado "peliculas"
console.log(pelicula2 + ' ' + anio)
console.log(titulo + ' ' + year)

const [,,,,,objetoCinco] = peliculas //puedo tambien sacar todo el objeto directamente
console.log(objetoCinco)
const {titulo : nombrePeli5, puntos} = objetoCinco
console.log(titulo + puntos)
