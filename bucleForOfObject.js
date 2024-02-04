const cliente01 = {
    nombre : 33,
    apellido : 44,
    edad : 45,
    domicilio : 55,
    localidad : 66
}

const llaves = Object.keys(cliente01);
const valores = Object.values(cliente01);

console.log(llaves);
console.log(valores);

let total = 0;
for (let parciales of valores) {
    total += parciales;
}

console.log(total);

for (const elemento of Object.keys(cliente01)) {
 console.log(`${elemento} : ${cliente01[elemento]}`)  
}