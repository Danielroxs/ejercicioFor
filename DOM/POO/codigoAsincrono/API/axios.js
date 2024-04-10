const axiosUrl = (url = 'https://swapi.dev/api/people/') => { // funcion flecha para refactorizar la direccion y poderla usar en otros lugares
    return axios.get(url)
}

const listaPersonajes = ({ data }) => {
    for (let personaje of data.results) {
        console.log(personaje.name)
    }
    return axiosUrl(data.next)
}

const prom = axiosUrl()// dejamos la url por default con () vacio
.then(listaPersonajes)
.then(listaPersonajes)
.then(listaPersonajes)
.then(listaPersonajes)


.catch((error) => {
    console.log('Tenemos un error')
    console.log(error)
})