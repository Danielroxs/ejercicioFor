/* 
slice - crea un nuevo Array tomando una porcion del array que usamos o pasamos
debemos indicar el indice donde comenzar y el indice donde terminar +1;
*/
// indice            0       1         2         3        4          5       6       7
const animales = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'Cobra', 'Boa', 'Mamba'];

const felinos = animales.slice(0, 3);
console.log(felinos);

console.log(animales);

// puedes no usar el segundo argumento para asi recuperar todo el array hasta el final
// tambien puedes recuperar de manera negativa desde el final hacia atras
// const serpientes = animales.slice(-3);   // 'Cobra', 'Boa', 'Mamba'
const serpientes = animales.slice(5);
console.log(serpientes);

// solo copia el array, no modifica el orginal