// Las clases son moldes para la creacion de objetos, me permiten crear un monton de objetos similares apoyandome en su molde

// Crear una clase
class Persona {
    
    constructor (name = 'sin nombre', lastname = 'sin apellido', localidad = 'Mexico') {
        this._nombre = name;
        this._apellido = lastname;
        this._localidad = localidad;
    } // fin del constructor

    // Metodo get es para obtener algo
    get getNombre () {
        return this._nombre;
    }

    // Metodo set es para cambiar un valor a una propiedad
    set setNombre (name) {
        this._nombre = name;
    }

    get getApellido () {
        return this._apellido;
    }

    set setApellido (apellido) {
        this._apellido = apellido;
    }

    get getLocalidad () {
        return this._localidad;
    }

    set setLocalidad (localidad) {
        this._localidad = localidad;
    }

    get getTodo () {
        return [this._nombre, this._apellido, this._localidad];
    }

} // fin de la clase Persona

class Empleado extends Persona {
    constructor(name, lastname, localidad, departamento, sueldoBasico) {
        super (name, lastname, localidad);
        this._departamento = departamento;
        this._sueldoBasico = sueldoBasico;

    }

    set setDepartamento (departamento) {
        this._departamento = departamento;
    }

    set setSueldoBasico (sueldoBasico) {
        this._sueldoBasico = sueldoBasico;
    }

    get getDepartamento () {
        return this._departamento;
    }

    get getSueldoBasico () {
        return this._sueldoBasico;
    }
    
}

let cliente02 = new Persona('Mark','Markinson');
cliente02.tel = 33445566

cliente02.setNombre = 'Juan'
console.log(cliente02.getTodo)

/* let cliente03 = new Persona('Juan','Perez');
console.log(cliente03)

let cliente04 = new Persona('Dan', 'Rox');
console.log(cliente04)

let cliente05 = new Persona();
console.log(cliente05) */