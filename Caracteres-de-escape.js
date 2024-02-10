// H o l a - M u n d o --> string
// 0 1 2 3 4 5 6 7 8 9 --> indice

// metodo slice, puede tener mas de una palabra con la cual reemplazar la palabra original
let saludo = 'El perro fue a morder a otro perro';
console.log(saludo.replace("perro", "leon y lo que yo quiera"));
console.log(saludo);


// -------CARACTERES DE ESCAPE-------//

/* 
\n: Salto de linea.
\r: Retorno de carro.
\t: Tabulación horizontal.
\’: Comilla simple o apostrofe.
\”: Comilla doble.
\\: Barra invertida.
\u00F1: la ñ
\u00D1: la Ñ
 */

let mensaje = "El \"perro\" fue \na morder a otro \tperro"
console.log(mensaje);

// si no pongo doble barra invertida en un directorio no aparecera ninguna barra para separar direcciones
let mensaje2 = "c:\\windows\\carpeta\\archivo.html"
console.log(mensaje2);