// Contenedor
const cliente01 = {

    // Propiedades del objeto
    nombre: 'Carlos',
    apellido: 'Zarate',

    // Metodos del objeto
    sumar(x, y) { // posdata estan funciones gozan de hoisting por la forma en que estan declaradas
        return x + y; // asi se puede acortar una funcion en un objeto solo ponemos la funcion sin key ni palabra function
    },
    restar: function (x, y) { // no hace falta poner el nombre de la funcion despues de function
        return x - y;
    },
    multiplicar: (x, y) => { // tambien acepta funcion flecha
        return x * y;
    },
}

// Funcion
function multiplicar2(x, y) { // tambien acepta funcion flecha
    return x * y;
}

// Invocando propiedad o en su defecto un metodo con ()
console.log(cliente01.nombre)
console.log(cliente01.multiplicar(3, 3))
console.log(cliente01.sumar(3, 3))