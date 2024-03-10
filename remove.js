const ul = document.querySelector('ul');
const li = document.querySelector('li');

//Remover o desconectar del DOM
const liAEliminar = document.querySelector('.eliminar'); // seleccionamos por clase
console.log(liAEliminar);

console.log(liAEliminar.isConnected);
liAEliminar.remove();
//ul.remove(); que queremos eliminar "ul" y el metodo remove sin parametros
console.log(liAEliminar.isConnected);

//Remover o eliminar hijo
ul.removeChild(li); // a quien le queremos eliminar (ul) y que queremos eliminar (li)

// Reemplazar
const h3 = document.querySelector('h3');

const nuevo = document.createElement('h3');
nuevo.textContent = 'H3 fue reemplazado';
console.log(nuevo)

document.body.replaceChild(nuevo, h3) // direccion y reemplaza hijo, nuevo dato y viejo dato en parametros