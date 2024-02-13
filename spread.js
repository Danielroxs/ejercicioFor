/* SPREAD
En un array - Crea un nuevo array usando existentes
*/

const nombres = ['Jose', 'Cristian', 'Luis', 'Pedro'];
const apellidos = ['Perez', 'Solis', 'Castell', 'Zarate'];
const apodos = ['chui', 'oso', 'tito', 'tano'];

// copiaApodos = apodos;
const copiaApodos = [...apodos]
console.log(apodos);
console.log(apodos === copiaApodos);

const nuevoArray = ['Markinson', ...nombres, ...apellidos, ...apodos];
console.log(nuevoArray);

const nuevoArrayConcat = nombres.concat(apellidos);
console.log(nuevoArrayConcat)

// Separar caracteres de un string con metodo split

let cadena = 'Marcos';
const caracter = cadena.split('');
console.log(caracter);

const caracter2 = [...cadena, ...'rox', 'Rodriguez']; // se puede separar con spread igual que con split solo pon ...antes del string
console.log(caracter2)