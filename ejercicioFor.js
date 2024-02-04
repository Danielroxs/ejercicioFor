/* const miArray = [
    [1,2,3],
    [4,5,6],
    [7,8],
    [10,22,33,44]
]

let total = 0;

for (let i = 0; i < miArray.length; i++) {
    const fila = miArray[i];
    console.log(fila)
    for (let j = 0; j < fila.length; j++) {
        total += fila[j];
        console.log(total);
    }
}

console.log(total); */

const miArray = [
    [1,2,3],
    [4,5,6],
    [7,8],
    [10,22,33,44]
]

let parcial = 0;
let total = 0;

for (let i = 0; i < miArray.length; i++) {
    const fila = miArray[i];
    for (let j = 0; j < fila.length; j++) {
        parcial += fila[j];
    }
    console.log(parcial);
    total = total + parcial;
    parcial = 0;
}

console.log(total);