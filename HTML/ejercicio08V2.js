
function crearMazo() {
    tipos = ['espada', 'oro', 'copa', 'palo'];
    numeros = '1,2,3,4,5,6,7,10,11,12';
    mazo = [];
    for (let numero of numeros.split(',')) {
        for (let tipo of tipos) {
            mazo.push({ numero, tipo })
        }
    }
    return mazo;
}

function repartirUnaCarta(mazo, cartaRepartidas) {
    const carta = mazo.pop()
    cartaRepartidas.push(carta)
    return carta;
}

function repartirVariasCartas(numCartas, mazo, cartaRepartidas) {
    const cartas = [];
    for (let i = 0; i < numCartas; i++) {
        cartas.push(repartirUnaCarta(mazo, cartaRepartidas))
    }
    return cartas;
}

function mezclar(mazo) {
    for (let i = mazo.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]]
    }
    console.log(mazo);
}

const cartaRepartidas = [];

//Crear un mazo nuevo
const nuevoMazo = crearMazo();

//Mezclo cartas
mezclar(nuevoMazo);

//Muestro el mazo mezclado
console.log(nuevoMazo);

//Reparto cartas
console.log(repartirUnaCarta(nuevoMazo, cartaRepartidas));
const primero = repartirVariasCartas(5,nuevoMazo,cartaRepartidas);
const segundo = repartirVariasCartas(5,nuevoMazo,cartaRepartidas);

//Muestro cartas repartidas
console.log(segundo);

//Muestro el estado actual del mazo
console.log(nuevoMazo);