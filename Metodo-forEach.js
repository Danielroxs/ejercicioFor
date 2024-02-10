/* 
forEach se podria traducir por cada elemento. Por cada elemento muestrame o trae el elemento o su indice
*/


const animales = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'cobra', 'boa', 'mamba'];

animales.forEach(valor => console.log(valor));

function retornaValor (valor, indice) {
    console.log(`${indice} = ${valor}`);
}

animales.forEach(retornaValor);