/* 
condicion ? siEsVerdadero : siEsFalso;
*/

let edad = 18;

if (edad >= 18) {
    console.log('Es mayor')
} else {
    console.log('Es menor')
}

edad >= 18 ? console.log('Es mayor') : console.log('Es menor');

let resultado = edad >= 18 ? 'Es mayor' : 'Es menor';

console.log(resultado);

console.log(edad >= 18 ? 'Es mayor' : 'Es menor')