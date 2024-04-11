console.log("parallel vs sequential request");

async function sequential() {
    const pri = await axios.get("https://swapi.dev/api/people/")
    const seg = await axios.get("https://swapi.dev/api/people/?page=2")
    const ter = await axios.get("https://swapi.dev/api/people/?page=3")

    console.log("SEQUENTIAL");
    console.log(pri);
    console.log(seg);
    console.log(ter);
}

sequential();

console.log("PARALLEL");
async function parallel() {
    const pri = axios.get("https://swapi.dev/api/people/?page=4")
    const seg = axios.get("https://swapi.dev/api/people/?page=5")
    const ter = axios.get("https://swapi.dev/api/people/?page=6")

    const personajes01 = await pri;
    const personajes02 = await seg;
    const personajes03 = await ter;
    
    console.log(personajes01)
    console.log(personajes02)
    console.log(personajes03)
}

parallel()
