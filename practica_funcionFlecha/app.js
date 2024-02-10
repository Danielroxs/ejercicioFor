let nombre = function (parametros) {
    // codigo a ejecutar
}


let funcionFlecha = () => {
    console.log('Esta es una funcion flecha');
    return 'flecha';
}

let mensaje = funcionFlecha();
console.log(funcionFlecha())

console.log(`Esto es una funcion ${mensaje}`)


// Reducir el codigo  cuando la funcion en el cuerpo solo usa una linea
const funcionSimple = () => console.log('Solo hay una linea de codigo');
funcionSimple();

// Si la funcion solo va a recibir un unico parametro no es necesario usar los ()
const funcionEsperaParametro = texto => console.log(texto);
funcionEsperaParametro('Pasamos argumento a la funcion flecha');

//funcion flecha con varios parametros, si necesitamos hacer calculos complejos  o hacer as de una linea se recomienda hacerlo entre {} y usar return
const funcionSumar = (dato1, dato2) => {
    let resultado = (dato1 + dato2)/2;
    return 'resultado'
}
console.log(funcionSumar(10,5)); 

// reducir el codigo cuando la funcion tiene una sola linea y retorna un valor
const funcionRetornaValor = () => 'Esto es posible porque solo hay una linea de codigo, no es necesario usar return';
console.log(funcionRetornaValor())

// Regresar un objeto
const regresarObjeto = () => ({nombre: "Juan", apellido: " Perez"});
console.log(regresarObjeto())