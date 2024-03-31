console.log('Comenzo el programa');

const funcPromesa = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paginas = {
                '/users' : [
                    {id: 1, usuario:'Juan'},
                    {id: 2, usuario:'Pedro'},
                ],
                '/about' :  'Esta pagina es de ...'
            };

            const datos = paginas[url];

            if(datos) {
                return resolve({status: 200, datos});
            }
            return reject({status: 404});
        }, 5000)

    })
}




funcPromesa('/about').then((respuesta) => {
    console.log(respuesta.status);
    console.log(respuesta.datos);
    console.log('True');
}).catch((respuesta) => {    
    console.log(respuesta.status)             
    console.log('False')
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