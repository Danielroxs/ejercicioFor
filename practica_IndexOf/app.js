// indeOf me dice en que posicion del indice empieza la palabra a buscar, me devuelve solo la primer coincidencia

// H o l a - M u n d o --> STRING o CADENA
// 0 1 2 3 4 5 6 7 8 9 --> INDICE

let saludo = 'Hola-Mundo';
console.log(saludo.indexOf('Mundo'));


// Hola-mundo compliquemos el asunto
console.log((saludo + " compliquemos el asunto").indexOf('el'))

// buscar por indice con segundo argumento

console.log(saludo.indexOf('o',2));

//encontro otra coincidencia de la letra "o" despues del indice 2