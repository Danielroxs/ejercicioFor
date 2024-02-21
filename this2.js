const objeto = {
    titulo : 'Mi nombre es: ',
    nombres : ['Marcos', 'Pedro', 'Raul'],
    muestrameNombres (nombre) {
        this.nombres.forEach((nombre) => console.log(this.titulo, nombre))
    }   
}

objeto.muestrameNombres()


/* let cadena = new String('Marcos');

function Texto (nombre, apellido) {
    this.nombre = nombre,
    this.apellido = apellido,
    console.log(this)
}

const nueva = new Texto('Marcos', 'Martinez') */


/* const miObjeto = {
    apellido : 'Castelli',
    dameNombre() {
        return 'Marcos';
    },
    imprimir() {
        console.log(this)
        //let otro = this; antes se usaba para pasar el contexto a un function y referencie al objeto y no a window
        document.addEventListener('click', evento => { // como es un solo parametro puede no usarse la palabra function ni los ()
            console.log(this.dameNombre());
            console.log(this.apellido);
        })
    }
}

miObjeto.imprimir() */