/* 
if (eres un nino?) {

}
else if (eres un joven?) {

}
else if (eres un adulto?) {

}
else if (){
    console.log('Eres un anciano')
} else {
    ('La edad que ingresaste no es correcta')
}

console.log('seguimos aqui')

------------------------------------------

nino de 1 a 12 (edad >= 1 && edad <= 12)
joven de 13 a 18 (edad >= 13 && edad <= 18)
adulto de 9 a 60 (edad >= 19 && edad <= 60)
anciano > 61 (edad >= 61 && edad <= 120)
*/

/* let edad = 200;

if(edad > 1 && edad <= 12) {
    console.log('Eres un niño')
} else if (edad >= 13 && edad <= 18) {
    console.log('Eres un joven');
} else if (edad >= 19 && edad <= 60) {
    console.log('Eres un adulto');
} else if (edad >= 61 && edad <= 120) {
    console.log('Eres un anciano');
} else {
    console.log('La edad ingresada es incorrecta')
}

console.log('Gracias por usar nuestro registro.'); */

let calificacion = 9;

if (calificacion >= 0 && calificacion <= 3) {
    console.log('Aplazado')
} else if (calificacion >= 4 && calificacion <= 6) {
    console.log('Estudia mas para la proxima')
} else if (calificacion >= 7 && calificacion <= 9) {
    console.log('Muy bien, continua asi')
} else if (calificacion === 10) {
    console.log('Excelente')
} else {
    console.log('La calificacion es incorrecta')
}