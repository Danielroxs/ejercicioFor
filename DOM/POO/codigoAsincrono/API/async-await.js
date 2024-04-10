/* function getPersonajes () {
    return axios.get('https://swapi.dev/api/people/');
}

getPersonajes().then((res) => {
    for (let personaje of res.data.results){
        console.log(personaje.name)
    }
}).catch((error) => {
    console.log(error)
}) */

async function getPersonajes2() {
    try {
        const res = await axios.get('https://swapi.dev/api/people/')
        const url = (res.data.next)

        for (let personaje of res.data.results) {
            console.log(personaje.name)
    }
    console.log(url)
    const page2 = await axios.get(url)
    for (let personaje of page2.data.results){
        console.log(personaje.name)
    }
    } catch (error) {
        console.log('Hay un error: ', error)
    }

}

getPersonajes2()


/* getPersonajes2().catch((e) => {
    console.log('Hay un error',e)
}) */