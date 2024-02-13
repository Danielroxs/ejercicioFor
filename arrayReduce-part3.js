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

const grupoPeliculas = peliculas.reduce((grupos, cadaPeliculas) => {
    const puntos = Math.floor(cadaPeliculas.puntos);
    if(!grupos[puntos]) {
        grupos[puntos] = [];
    }
    grupos[puntos].push(cadaPeliculas);
    return grupos;
},{});

console.log(grupoPeliculas);