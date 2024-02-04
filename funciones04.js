function numeroSecreto () {
    console.log(Math.floor(Math.random() * 10))
}

function repetir (numRep, i) { // si llegara a tener dos parametros (de los cuales la funcion solo necesita uno de ellos para trabajar correctamente) y solo le pasamos uno, el programa funcionara igualmente bien, y si retornamos el segundo valor para ver por consola fuera de la funcion que tiene, resultara undefined ya que nunca se le asigno un valor
    for (i; i < numRep; i++) {
        numeroSecreto();
    }
}

/* repetir(5,0);

let edad; // la declare pero no la inicialize

console.log(edad);

console.log(repetir(2, 'valor'))  */// aqui con 'valor' habria inicializado a x, ya que apenas le di un valor

// ------------------------------------------------------

function contieneNumero (array) {
    for (let i of array) {
        console.log(i)  // el for solo evalua hasta que se cumpla una de las 2 condiciones ||
        if (i === 5 || i === 10) {
            return true;
        }
    }
    return false;
}

console.log(contieneNumero([1,2,3,4,5,6,7,8,9,10]))