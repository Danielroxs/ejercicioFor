/* let cadena = 'Hola';
let cadena2 = new String ('Hola amigos');

let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
let miArray2 = new Array (1,2,true,null,'hola',8.56)

console.log(diasSemana);
console.log(miArray2);

diasSemana[1] = 'Sabado';
console.log(diasSemana);
console.log(diasSemana.length);
diasSemana[diasSemana.length] = 'Domingo';
console.log(diasSemana)
console.log(diasSemana[diasSemana.length - 1])


--------------------------------------------------------------- */
// mediante indices se puede acceder a dimensiones en un array cada vez mas profundas

/* let otroArray = [1, 2, 3, 'estoy mareado']
let miArray = ['gato', 'liebre', ' puma', 'loro', otroArray];

let miColeccion = [1, true, 'Hola mundo', miArray, 'gato', 3, undefined];
console.log(miColeccion);

console.log(miColeccion[3]);
console.log(miColeccion[3][4]);
console.log(miColeccion[3][4][3][4]);

------------------------------------------------------------ */

// Metodos para AGREGAR O QUITAR elementos a un Array

/* 

Push - Agrega al final
Pop - Elimina desde el final
Unshift - Agrega al principio del Array
Shift - Elimina desde el principio

*/

// METODO PUSH & POP

let frutas = ['Pera', 'Banana'];

let largo = frutas.push('Manzana', 'Uva', 'Ciruela', 'Coco');
console.log(frutas);
console.log(largo);
let respPop = frutas.pop();
console.log(respPop);
console.log(frutas.length);
frutas.pop();
frutas.pop();
frutas.pop();
console.log(frutas);

// METODO UNSHIFT & SHIFT

let dato = frutas.unshift('Higo', 'Melon');
console.log(dato);
console.log(frutas);
let dato1 = frutas.shift()
console.log(frutas);
console.log(dato1);
frutas.shift()
frutas.shift()
frutas.shift()
console.log(frutas)