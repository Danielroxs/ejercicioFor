/* 
SINTAXIS
for (let key in objeto) {
    console.log(objeto[key]);
}
*/

const ticket01 = {
    sal : 33,
    fosforos : 12,
    hierba : 45,
    azucar : 55,
    pan : 15,
}

for (let llave in ticket01) {
    console.log(ticket01[llave])
}


// Esto no es recomendado
const miArray = ['hierba', 'azucar', 'sal'];

for (let indice in miArray) {
    console.log(miArray[indice])
}