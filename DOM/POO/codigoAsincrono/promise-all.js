console.log("PARALLEL");
async function parallel() {
    const pri = axios.get("https://swapi.dev/api/people/?page=4")
    const seg = axios.get("https://swapi.dev/api/people/?page=5")
    const ter = axios.get("https://swapi.dev/api/people/?page=6")

    const results = await Promise.all([pri, seg, ter])
    //console.log(results);
    printPersonajes(results);
}

function printPersonajes(results) {
    for (let objeto of results) {
        const arrayPersonaje = (objeto.data.results);
        for (let personaje of arrayPersonaje) {
            console.log(personaje.name)
        }
    }
}

parallel()