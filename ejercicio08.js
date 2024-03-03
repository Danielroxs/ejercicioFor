const crearMazoCartas = () => {
    return {
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
    },

    mezclar() {
        const {mazo} = this;
        for (let i = mazo.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [mazo[i], mazo[j]] = [mazo[j], mazo[i]]
        }
        console.log(mazo)
    }
}} // Termina la funcion


const mazo1 = crearMazoCartas();
const mazo2 = crearMazoCartas();

console.log(mazo1);
mazo1.crearMazo();
mazo1.mezclar();
console.log(mazo1.mazo)

/* console.log(objeto.mazo)
console.log(objeto);
objeto.crearMazo();
objeto.mezclar();
console.log(objeto.mazo);
carta1 = objeto.repartirUnaCarta();
carta2 = objeto.repartirUnaCarta();
carta3 = objeto.repartirUnaCarta();
console.log(objeto.cartaRepartidas)
console.log(carta1);
console.log(objeto.mazo)
console.log(objeto.repartirVariasCartas(5))
console.log(objeto.mazo) */
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
