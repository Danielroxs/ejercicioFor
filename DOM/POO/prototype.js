const cadena = '';
const cadena02 = new String();
console.log(cadena02);

const numero = 0;
const numero02 = new Number();
console.log(numero02);

const bool = false;
const bool02 = new Boolean();
console.log(bool02);

const array = [];
const array02 = new Array(1,2,3);
console.log(array02);
array02.pop();
console.log(array02)
Array.prototype.pop = () => console.log('No elimino nada');
array02.pop();
console.log(array02)



const objeto = {};
const objeto02 = new Object();
console.log(objeto02);