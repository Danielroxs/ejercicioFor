const profesion = 'electricista';
const nombre = 'Ivan';

const profesion2 = 'tecnico mecanico';
const nombre2 = 'Jose';

const profesion3 = 'tecnico ';
const nombre3 = 'Juan'

const objeto = {
    profesion : nombre // profesion : Ivan
}
console.log(objeto);

const objeto2 = {};
objeto2[profesion] = nombre;
objeto2[profesion2 + ' novato']  = nombre2;
console.log(objeto2);

// COMPUTED PROPERTIES

const objeto3 = {
    [profesion] : nombre, // si esta entre corchetes se va resolver, dando como resultado el valor de esa variable como key
    [profesion2] : nombre2,
    [profesion3 + 3 + ' en computo'] : nombre3
}

console.log(objeto3);

const agregarDatos = (objeto, key, valor) => {
    return {...objeto, [key] : valor}
}

const resultado = agregarDatos(objeto3, 'medico', 'raul');
console.log(resultado);
console.log(objeto3);
// se creo el objeto resultado con la key y valor que dimos como parametros

