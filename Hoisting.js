// HOISTING = Llamar algo antes de haber sido declarado

// Basicamente eleva a la memoria ciertas partes de nuestro codigo para que cuando usemos ese codigo no tengamos error
// En programacion las lineas de codigo son leidas de arriba hacia abajo y de izquierda a derecha

// Voy a LLAMAR algo por consola que aun NO EXISTE con VAR

var animal; // 2 es lo mismo que si se hubiera creado la variable sin valor
console.log(animal); // sale indefinida porque la posicion en memoria si se reservo pero el valor no
animal = 'Perro' // 1 crea la variable pero el valor no tiene hoisting

// Voy a LLAMAR algo por consola que aun NO EXISTE con LET

// console.log(animal1); // no puede siquiera acceder antes de ser inicializada
let animal1 = 'Perro' // aqui no hay hoisting de ningun tipo

// Voy a LLAMAR algo por consola que aun NO EXISTE con CONST

//console.log(animal2); // no puede siquiera acceder antes de ser inicializada
const animal2 = 'Tucan' // aqui no hay hoisting de ningun tipo

// Veamos con funciones, var solo guarda la variable pero no la reconoce como una funcion, 
// almacena la posicion en memoria pero no el valor como funcion, const y let nisiquiera pueden acceder

// miFuncion(); // no se puede ver el valor y no se puede acceder
var miFuncion = function () {
    console.log('hola mundo');
}

miFuncion();

// ____________________________________________________________________________________________________

miOtraFuncion(); // SI PUEDE SER LLAMADA CON HOISTING (antes de ser declarada)

function miOtraFuncion () {
    console.log('Esta funcion si funciona con hoisting')
}

// cuando no ponemos que tipo de variable es, automaticamente se crea como "var"
serpiente = 'Cobra'; // incluso si borro esta linea abajo seguira dando el valor cobra
console.log(serpiente) // ya que la posicion en memoria sigue, solo habiamos borrado la direccion

// Esto hasta que reasigne su valor y este sea sobreescribido tipo un archivo en un HDD
// serpiente = 'real'; aqui ya cambiaria su valor 

// incluso puedo solo inicializar sin dar valor y me dice "indefinido" porque si existe en memoria esa variable serpiente, dentro no tiene nada
pez;
console.log(pez);