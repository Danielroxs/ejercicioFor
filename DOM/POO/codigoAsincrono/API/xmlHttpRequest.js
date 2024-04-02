const primerReq = new XMLHttpRequest();

primerReq.addEventListener('load', (datos) => {
    console.log('Datos recibidos');
    const objeto = JSON.parse(datos.target.response);
    const filmUrl = objeto.results[0].films[1]
    console.log(objeto.results[0].films[1]);

    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', (datos) => {
        const objeto = JSON.parse(datos.target.response)
        console.log(objeto)
        const title = objeto.title;
        console.log(title);

        const primerLink = objeto.characters[0]
        console.log(primerLink)

        const charactersReq = new XMLHttpRequest();
        charactersReq.addEventListener('load', (datos) => {
        const objeto = JSON.parse(datos.target.response)
        console.log(objeto)
        })


    })

    filmReq.addEventListener('error', () => {
        console.log('Error, imposible acceder al film');
    });

    filmReq.open('GET', filmUrl);

    filmReq.send();
});

primerReq.addEventListener('error', () => {
    console.log('Error, imposible acceder a los datos');
});

primerReq.open('GET', 'https://swapi.dev/api/people/');

primerReq.send();

console.log('Primer request enviado');

/* TAMBIEN SE PUEDE VER ASI:

primerReq.addEventListener('load', function () {
    console.log('Datos recibidos');
    const objeto = JSON.parse(this.response);   ó responseText
    console.log(objeto);
});

primerReq.addEventListener('load', () => {
    console.log('Datos recibidos');
    const objeto = JSON.parse(primerRequest.response);  this. no funciona con funcion flecha
    console.log(objeto);
});
*/