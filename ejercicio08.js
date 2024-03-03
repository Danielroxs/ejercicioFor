const objeto = {
    tipos: ['espada', 'oro', 'copa', 'palo'],
    numeros: '1,2,3,4,5,6,7,10,11,12',
    mazo: [],
    cartaRepartidas: [],

    crearMazo() {
        const { tipos, numeros, mazo } = this;
        for (let numero of numeros.split(',')) {
            for (let tipo of tipos) {
                mazo.push({ numero, tipo })
            }
        }
    },
    repartirUnaCarta() {
        const carta = this.mazo.pop()
        this.cartaRepartidas.push(carta)
        return carta;
    },
    repartirVariasCartas(numCartas) {
        const cartas = [];
        for (let i = 0; i < numCartas; i++) {
            cartas.push(this.repartirUnaCarta())
        }
        return cartas;
    }
}

console.log(objeto);
objeto.crearMazo();
console.log(objeto.mazo)
carta1 = objeto.repartirUnaCarta();
carta2 = objeto.repartirUnaCarta();
carta3 = objeto.repartirUnaCarta();
console.log(objeto.cartaRepartidas)
console.log(carta1);
console.log(objeto.mazo)
console.log(objeto.repartirVariasCartas(5))
console.log(objeto.mazo)
//----------------------------------------------------------------------------------------------------

function crearMazo() {
    const tipos = ['espada', 'oro', 'copa', 'palo'];
    const numeros = '1,2,3,4,5,6,7,10,11,12'
    const mazo = []

    for (let numero of numeros.split(',')) {
        for (let tipo of tipos) {
            mazo.push({ numero, tipo })
        }
    }
    return mazo;
}

function repartirUnaCarta(mazo) {
    return mazo.pop()
}

const nuevoMazo = crearMazo();

//console.log(nuevoMazo)
//console.log(repartirUnaCarta(nuevoMazo));
//console.log(nuevoMazo)
