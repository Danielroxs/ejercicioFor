// Break - rompe el bucle

/* for (let i = 0; i <= 5; i++) {
    console.log(`Esta es la vuelta ${i}`);
    if (i === 3) {
        break;
    }
} */

const numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto)

let numeroMaquina = Math.floor(Math.random() * 10);
console.log(numeroMaquina)

let intentos = 1;

while (true) {
    if (numeroSecreto === numeroMaquina) break;
   console.log(`${numeroSecreto} contra ${numeroMaquina}`)
   numeroMaquina = Math.floor(Math.random() * 10);
   intentos++
}

console.log(`${numeroSecreto} contra ${numeroMaquina}`)
console.log(`Haz acertado el numero correcto en el intento ${intentos}`)