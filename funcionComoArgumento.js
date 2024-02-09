// Recibe como argumento otra funcion

function repetir (funcion,numero) {
    for (let i = 0; i < numero; i++) {
        funcion()
    }
}

function hola () {
    console.log('Hola a todos');
}

function chau () {
    console.log('Chau, hasta la proxima')
}

// Paso como argumento una funcion

//repetir(hola,5);

// Paso como argumento 2 funciones

function aleatoria (fun1,fun2) {
    let secreta = Math.random()
    console.log(secreta);
    if (secreta < 0.5) {
        fun1()
    } else {
        fun2()
    }
}

aleatoria(hola,chau);
