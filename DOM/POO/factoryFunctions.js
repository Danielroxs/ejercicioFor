function calculadora(a, b) {
    const objeto = {}

    objeto.a = a;
    objeto.b = b;

    objeto.sumar = function () {
        const { a, b } = this; // Destructuring
        return a + b;
    }
    objeto.restar = () => a - b;
    objeto.multi = () => a * b;
    objeto.divide = () => a / b;

    return objeto
}

function Calculador(a, b) { // Constructor
    this.a = a;
    this.b = b;
}

Calculador.prototype.sumar = function () { // Agregando funcion o metodo al prototype para no duplicar metodos cuando se instancie un nuevo objeto
    const { a, b } = this;
    return a + b;
}

Calculador.prototype.restar = function () {
    const { a, b } = this;
    return a - b;
}

const operacion01 = new Calculador(10, 5);
const operacion02 = new Calculador(35, 7);
console.log(operacion02)

console.log(operacion01.sumar === operacion02.sumar) // Da true ya que es el mismo metodo en memoria
