function crearMazo() {

    const tipos = ['espada', 'oro', 'coba', 'palo'];
    const numeros = "1,2,3,4,5,6,7,10,11,12"
    const mazo = []
    for(let numero of numeros.split(',')){
        console.log(mazo)
        for (let tipo of tipos){
            mazo.push({numero, tipo}) // {numero : numero, tipos : tipos} crea propiedad y valor
        }
    }
    return mazo;
}

console.log(crearMazo());