//alert('Hola mundo');

/* var nombre = 'Marcos'
console.log(nombre);
console.log(this);

function dameNombre() {
    console.log('Raul')
    console.log(this)
}

dameNombre();
const dameApellido = function () {
    console.log('Martinez')
    console.log(this)
}


dameApellido();
 */

const normal = function normal () {
    console.log(this)
}

//normal()

const nombre = 'Luis'

const objeto = { // Estamos usando el objeto como un molde para que a lo largo del codigo podamos obtener diferentes resultados
    nombre: 'Marcos',
    apellido: ' Martinez',
    nombreCompleto() {
        //const nombre = this.nombre // lo de abajo es lo mismo que hacer esto, crear una constante e invocarla deespues en consola
        //const apellido = this.apellido // lo de abajo es lo mismo que hacer esto, crear una constante e invocarla deespues en consola
        const {nombre, apellido} = this;  // aqui se crea constantes con el mismo nombre de su key, por eso no es necesario ponerles nombre a esas constantes, de hecho se puede renombrar con :
        return (nombre + apellido);
    },
    imprimir() {
        console.log('Imprimiendo')
        console.log(this.devicePixelRatio)
    },
    funcionFlecha : () => {
        console.log(this)
    }, 
    start() {
        console.log(this)
        setInterval(() => {
            console.log(this)
        }, 3000)
    }

}

const ban = () => {
    console.log(this)
}

ban() // ya que esta funcion flecha esta en el scope global, referencia a window, ya que por si sola no tiene this

objeto.funcionFlecha()

//objeto.start()

//objeto.imprimir() 
//objeto.nombreCompleto()
objeto.miNuevaFuncion = function () {
    console.log('Nueva funcion');
    console.log(this)
}
//objeto.miNuevaFuncion()

// otraConstante ----> miNuevaFuncion
const otraConstante = objeto.imprimir;
//otraConstante();

objeto.nombre = 'Cristian';
objeto.apodo = 'Chiquito';
//objeto.nombreCompleto();

//objeto.imprimir();