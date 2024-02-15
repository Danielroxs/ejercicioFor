const clientes01 = {
    nombre: 'Juan',
    apellido: 'Perez',
    domicilio: 'Av 3 1500',
    localidad: 'Villa Gesel',
    telefono: '(2255)45-0358',
};

const {nombre : name,apellido,tel,...otrosDatos} = clientes01; // nombre:name es para renombrar la variable

console.log(otrosDatos)
console.log(name)