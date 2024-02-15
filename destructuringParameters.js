const clientes01 = {
    nombre: 'Juan',
    apellido: 'Perez',
    domicilio: 'Av 3 1500',
    localidad: 'Villa Gesel',
    telefono: '(2255)45-0358',
    estadoCivil: 'soltero',
    edad: 50,
    deportes: ['natacion', 'basketball', 'yudo'],
    cajaAhorro: '1255-4545454-333',
    cajaDolares: '1255-4545454-333',
    banco: 'ICBC',
};

/* function print (objeto) {
    const {nombre, apellido, telefono} = objeto;
    console.log(`${nombre} ${apellido} ${telefono}`);
} */

function print ({nombre, apellido, telefono}) { // puedo poner directamente las propiedades que quiero de clientes01
    console.log(`${nombre} ${apellido} ${telefono}`);
}
print(clientes01);

const clientes02 = ['Juan', 'Perez', 'Av 3 1500', 'Villa Gesel', '(2255)45-0358'];

function print2 ([nombre, apellido, , ,telefono]) { // se reciben por indice, hay que respetar el orden para recibir el valor en el indice adecuado
    console.log(`${nombre} ${apellido} ${telefono}`);
}
print2(clientes02);