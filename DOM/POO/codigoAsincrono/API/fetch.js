// Fetch no funciona con IE
// 'https://swapi.dev/api/people/'

const unaPromesa = fetch ('https://swapi.dev/api/peopl/')
.then((response) => {
    if (response.status !== 200) {
        console.log('Problema, no funciona', response.status);  // ó throw new Error (`Error codigo: ${response.status} `)
        return;                                                 // Directamente manda hacia el catch y salta el response.json
    }
    response.json().then((data) => {
        for ( let nombre of data.results){
            console.log(nombre.name)
        }
        //console.log(data.results[0].name)
})
})
.catch((error) => {
    console.log('Error al intentar acceder a la API', error)
})



console.log(unaPromesa);
