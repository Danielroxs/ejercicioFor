// sirve para cortar usando el indice, si usas 1 argumento corta desde el indice hasta el final, si usas 2 argumentos determinas el rango, solo que hay que darle 1 indice de mas para cortar al final

// tambien cuando ponemos de 2do argumento negativo estamos sacando esa laetra en ese indice

// H o l a - M u n d o --> string
// 0 1 2 3 4 5 6 7 8 9 --> indice

let saludo = 'Hola-Mundo';
console.log(saludo.slice(5, 8));


//Ejemplo para quitar indices innecesarios como simbolo pesos y espacio
//tambien aplicamos "Number" o el simbolo de "+" para convertir de string a numero ya que normalmente se usara para operaciones aritmeticas

let ingresadoPorusuario = "$ 550.25";
let pesos = Number(ingresadoPorusuario.slice(2));
console.log(typeof pesos);
console.log(pesos)