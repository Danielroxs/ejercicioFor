const primerPromesa = new Promise((resolve, reject) => {
    const num = Math.random();
    console.log(num);
    if(num < 0.5) {
        return resolve()
    } return reject();
})

primerPromesa.then(() => {   
    console.log('True');
});

primerPromesa.catch(() => {
    console.log('False')
})

/* primerPromesa.then(() => { 
    console.log('True');
}).catch(() => {                 Tambien puede verse asi la promesa
    console.log('False')
}) */


// Simulamos que estamos haciendo una consulta al servidor, arrojando un mensaje si obtuvimos respuesta