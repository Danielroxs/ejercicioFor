// Array
// Indice y valor

const cliente01 = [
    'Marcos',
    'Markinson',
    50,
    2233445566,
    'Rio Negro 427'
];

// OBJECT
// Llave y valor
const cliente02 = {
    nombre:'Juan',
    '22apellido':'Perez', // entre comillas porque empieza con numero
    edad:50,
    dni:33445566,
    domicilio:'Av. 4 1233',
    45:'cuarenta y cinco', // entre comillas porque empieza con numero
    'hola mundo': 'Hola Mundo' // entre comillas porque tiene espacio
}

console.log(cliente02['22apellido']);
console.log(cliente02['nombre']); //tambien se puede acceder a las key normales con corchetes y ''
console.log(cliente02['45']); //todas las keys o propiedades se manejan como string y en este caso que es numero se accede con corchetes y entre ''
console.log(cliente02['hola mundo']);
// tambien un objeto puede contener Arrays o funciones dentro

// Modificar alguna propiedad
console.log(cliente02.edad);
cliente02.edad = 52;
console.log(cliente02.edad);
cliente02.edad += 2;
console.log(cliente02.edad);
cliente02.edad ++;
console.log(cliente02.edad);
/* cliente02.edad =  'Texto';*/ // Tambien se puede cambiar de numero a texto
cliente02.sobreNombre = 'El paps'; // Agregar nueva propiedad al objeto cliente02
console.log(cliente02.sobreNombre);
cliente02['Le gusta'] = 'comer';  
console.log(cliente02['Le gusta']);

const opinion = {} // Generar objeto vacio para despues llenarlo
opinion.marcos = 'Ta weno';
opinion.pedro = 'Ta mal';
opinion.juan = 'Ta mas o menos';

console.log(opinion);