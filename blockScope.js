/* if (true) {
    var nombre = 'Marcos';  // si ponemos var esta variable va a estar disponible en cualquier scope (por eso se creo let)
    console.log(nombre);
}

console.log(nombre)
nombre = 'Luis';

var index = 10;
for (var index = 0; index < 5; index++) { // index es sobreescrito por el for y anula el valor de 10 que tenia
    console.log('Mark ' + index);
    }

console.log(index) //tambien no tiene valor 4 sino... */

// -----------------------------------------------------------------------

function dameElDoble (array) {
    const arrayResultado = []
    for (const numero of array) { // Esto es un bloque
     let parcial = numero * 2; // si fuera var en vez de let si se podria ver fuera del scope del for
     arrayResultado.push(parcial);   
    }
    //console.log(parcial)  parcial no es accesible ya que esta en el scope del for, si pongo esta linea dentro del for entonces si funcionara y me mostrara [1,2,3,4,5,6]
    return arrayResultado;
 }   

 console.log(dameElDoble([1,2,3,4,5,6]))

 // console.log(parcial) aunque fuera var parcial, no se podria ver fuera de la funcion

 // ------------------------------------------------------------------------

 function dameElDoble2 (array) {
    const arrayResultado = []
    let parcial; // puedo declara sin asignar valor a parcial para despues usarlo dentro del for y fuera del for
    for (const numero of array) { // Esto es un bloque
     parcial = numero * 2; // si fuera var en vez de let si se podria ver fuera del scope del for
     arrayResultado.push(parcial);   
    }
    console.log(parcial); // lo ves aqui se puede acceder a ella  
    return arrayResultado;
 }   

 console.log(dameElDoble2([5,6,7,8]))
