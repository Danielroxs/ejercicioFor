console.log('Comenzo el programa');

const funcPromesa = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paginas = {
                '/users': [
                    { id: 1, usuario: 'Juan' },
                    { id: 2, usuario: 'Pedro' },
                ],

                '/users/1': {
                    id: 1,
                    usuario: 'Juan',
                    apellido: 'Perez',
                    edad: 34,
                    ultimaNota: 1234,
                },

                '/users/2': {
                    id: 2,
                    usuario: 'Pedro',
                    apellido: 'Ramirez',
                    edad: 51,
                    ultimaNota: 2334,
                },

                '/notas/1234': {
                    id: 1234,
                    titulo: 'Como emigrar a otro pais',
                },

                '/notas/2334': {
                    id: 2334,
                    titulo: 'Argentina podria tener una inflacion del 70% en 2022',
                },

                '/about': 'Esta pagina es de ...'
            };

            const datos = paginas[url];

            if (datos) {
                return resolve({ status: 200, datos });
            }
            return reject({ status: 404 });
        }, 5000)

    })
}




funcPromesa('/users').then((res) => {
        const id = res.datos[0].id;
        return funcPromesa(`/users/${id}`)
    })
    .then((res) => {
        const ultimaNota = res.datos.ultimaNota;
        return funcPromesa(`/notas/${ultimaNota}`)
    })    
    .then((res) => {
        console.log(res.datos.titulo)
    })
   
    .catch((res) => {
    console.log(res.status)
})

/* primerPromesa().then(() => {
    console.log('True');
});

primerPromesa().catch(() => {
    console.log('False')
}) */

// Simulamos que estamos haciendo una consulta al servidor, arrojando un mensaje si obtuvimos respuesta

console.log('Continua el programa');
console.log('Continua el programa');
console.log('Continua el programa');
console.log('Continua el programa');