const clientes01 = ['Juan', 'Perez', 'Av 3 1500', 'Villa Gesel', '(2255)45-0358', 'masculino'];
const nombre1 = clientes01[0];
const apellido1 = clientes01[1];

console.log(`${nombre1} ${apellido1}`)

const [nombre, apellido, , localidad, ...otrosDatos] = clientes01 // puedo saltarme domicilio solo poniendo las comas , ,
// usamos rest en otrosDatos para almacenar los demas datos que querramos en esa variable
console.log(`${nombre} ${apellido} ${localidad} ${otrosDatos} `)

console.log(otrosDatos) // esto seria un array de cosas