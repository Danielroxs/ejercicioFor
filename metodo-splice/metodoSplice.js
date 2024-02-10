/* 
splice se suele utilizar para trabajar con datos que estan en medio de un array, podemos:
quitarlos o removerlos, reemplazarlos o incluso agregar nuevos elementos.

splice (index, borrar, agregar);
Modifica el array original
*/

//
const animales = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'cobra', 'boa', 'mamba'];
const serpientes= animales.splice(1,2,'camaleon', 'gacela');
console.log(animales);
console.log(serpientes);
animales.splice(5,0,serpientes);
console.log(animales);
