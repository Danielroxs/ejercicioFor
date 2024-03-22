// Las clases son moldes para la creacion de objetos, me permiten crear un monton de objetos similares apoyandome en su molde

// Crear una clase
class Persona {

    constructor(name = 'sin nombre', lastname = 'sin apellido', localidad = 'Mexico') {
        this._nombre = name;
        this._apellido = lastname;
        this._localidad = localidad;
    } // fin del constructor

    // METODO

    dameDatos () {
        return `${this._nombre}, ${this._apellido}, ${this._localidad}.`;
    }

    // Metodo get es para obtener algo
    get getNombre() {
        return this._nombre;
    }

    // Metodo set es para cambiar un valor a una propiedad
    set setNombre(name) {
        this._nombre = name;
    }

    get getApellido() {
        return this._apellido;
    }

    set setApellido(apellido) {
        this._apellido = apellido;
    }

    get getLocalidad() {
        return this._localidad;
    }

    set setLocalidad(localidad) {
        this._localidad = localidad;
    }

    get getTodo() {
        return `Nombre y apellido: ${this._nombre} ${this._apellido} y vivo en ${this._localidad}.`;
    }

} // fin de la clase Persona

class Empleado extends Persona {
    constructor(name, lastname, localidad, departamento, sueldoBasico) {
        super(name, lastname, localidad);
        this._departamento = departamento;
        this._sueldoBasico = sueldoBasico;

    }

    // METODO

    dameDatos () {
        return `${super.dameDatos()} ,${this._departamento}, ${this._sueldoBasico}.`;
    }

    set setDepartamento(departamento) {
        this._departamento = departamento;
    }

    set setSueldoBasico(sueldoBasico) {
        this._sueldoBasico = sueldoBasico;
    }

    get getDepartamento() {
        return this._departamento;
    }

    get getSueldoBasico() {
        return this._sueldoBasico;
    }

}

class Ejecutivo extends Empleado {
    constructor(name, lastname, localidad, departamento, sueldoBasico, beneficio, obraSocial) {
        super (name, lastname, localidad, departamento, sueldoBasico);
        this._beneficio = beneficio;
        this._obraSocial = obraSocial;
    }

    // METODO

    dameDatos () {
        return `${super.dameDatos()} ,${this._beneficio}, ${this._obraSocial}.`;
    }

    // GETTERS

    get getBeneficio () {
        return this._beneficio;
    }

    get getObraSocial () {
        return this._obraSocial;
    }

    // SETTERS

    set setBeneficio (beneficio){
        this._beneficio = beneficio;
    }

    set setObraSocial(obraSocial) {
        this._obraSocial = obraSocial;
    }
}

let persona01 = new Persona('Mark', 'Markinson');
let empleado01 = new Empleado('Jorge', 'Perez', 'Bs As', 'Ventas', 56000);
let empleado02 = new Empleado('Domingo', 'Sarmiento', 'Formosa', 'Administracion', 86000);
let ejecutivo01 = new Ejecutivo('Romina', 'Manguel', 'Capital Federal', 'RRHH', 19600, 'Toyota 2022', 'Galeno Oro');

console.table(empleado01);
console.table(empleado02);
console.log(empleado02.getNombre);
empleado02.setLocalidad = 'Villa Hermosa';
console.log(empleado02.getTodo);

console.table(empleado01);
console.log(ejecutivo01.getNombre);
console.log(ejecutivo01.getDepartamento);
console.log(ejecutivo01.getObraSocial);

ejecutivo01.setDepartamento = 'Ventas'
ejecutivo01.setNombre = 'Johan';
ejecutivo01.setBeneficio = 'Lexus 2021';
console.table(ejecutivo01);

console.log(persona01.dameDatos());
console.log(empleado01.dameDatos());
console.log(ejecutivo01.dameDatos());