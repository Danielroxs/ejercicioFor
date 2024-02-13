/* 
Bucle While (mientras true) {}
*/

/* for (let i = 0; i <= 5; i++) {
    console.log(i)
}

let j = 0;

while (j <= 5) {
    console.log(j);
    j++;
} */

const numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto)

let numeroMaquina = Math.floor(Math.random() * 10);
console.log(numeroMaquina)

let intentos = 1;

while (numeroSecreto !== numeroMaquina) {
   console.log(`${numeroSecreto} contra ${numeroMaquina}`)
   numeroMaquina = Math.floor(Math.random() * 10);
   intentos++
}

console.log(`${numeroSecreto} contra ${numeroMaquina}`)
console.log(`Haz acertado el numero correcto en el intento ${intentos}`)

function saludar(nombre = 'null', apellido = 'null', numero = '999 - 999 - 999') {
    console.log(`${nombre} ${apellido} - ${numero}`)
}

console.log(saludar())