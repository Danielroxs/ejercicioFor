let cadena = 'texto';
console.log(typeof cadena);

// Objeto String
let cadena2 = new String ('TEXTO 2');
console.log(typeof cadena2);


//Este metodo (funcion) me sirve para ver el caracter del indice en el objeto cadena
console.log(cadena.charAt(0));
let textoAMinusculas = (cadena2.toLocaleLowerCase());
console.log(cadena.toLocaleUpperCase());

console.log(textoAMinusculas);

// el valor de cadena sigue siendo inmutable

console.log(cadena);

//como cadena2 es un objeto se muestra por key y valor
console.log(cadena2);
