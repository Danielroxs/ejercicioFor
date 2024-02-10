/* 
Metodo Concat
Permite unir Arrays
*/

let numeros = [1,2,3,4];
let frutas = ['Banana', 'pera', 'mango'];
let verduras = ['Coliflor', 'Verdolaga', 'Calabaza'];
let bebidas = ['7up', 'Coca-cola', 'Pepsi'];

console.log(frutas)

let sumArrays = (numeros + frutas);
console.log(typeof sumArrays);

// Se pueden concatenar mas de 1 array al array principal, solo separando por comas el nombre de los array
console.log(numeros);
console.log(frutas);
let concArrays = frutas.concat(numeros, verduras, bebidas);
console.log(concArrays);