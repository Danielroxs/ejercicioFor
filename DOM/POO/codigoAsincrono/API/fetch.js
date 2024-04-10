// Fetch no funciona con IE
// 'https://swapi.dev/api/people/'

const checkResponse = (response) => {
    if (response.status !== 200) {
        console.log('Problema, no funciona', response.status);  // ó throw new Error (`Error codigo: ${response.status} `)
        return;                                                 // Directamente manda hacia el catch y salta el response.json
    }
    return response.json()
}

const unaPromesa = fetch ('https://swapi.dev/api/people/')
.then(checkResponse)

.then((data) => {
    const personajes = data.results;
    for (let personaje of personajes) {
        console.log(personaje.name)
    }
    return Promise.resolve(data.results[0].films[0])
})

.then((url) => {
    //const filmUrl = (data.results[0].films[0])
    //return fetch(filmUrl)
    console.log(url);
    return fetch(url)
})

.then(checkResponse)

.then((data) => {
    console.log(data)
    return data;
})

.then((data) => {
    const characters = (data.characters[0])
    return fetch(characters)
})

.then(checkResponse)

.then((data) => {
    console.log(data)
    return data;
})

.catch((error) => {
    console.log('Error al intentar acceder a la API', error)
})



console.log(unaPromesa);
