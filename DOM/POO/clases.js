// Las clases son moldes para la creacion de objetos, me permiten crear un monton de objetos similares apoyandome en su molde

// Crear una clase
class Persona {
    
    constructor (name = 'sin nombre', lastname = 'sin apellido') {
        this.nombre = name;
        this.apellido = lastname;
    } // fin del constructor

} // fin de la clase Persona

let cliente02 = new Persona('Mark','Markinson');
cliente02.tel = 33445566
console.log(cliente02)

let cliente03 = new Persona('Juan','Perez');
console.log(cliente03)

let cliente04 = new Persona('Dan', 'Rox');
console.log(cliente04)

let cliente05 = new Persona();
console.log(cliente05)