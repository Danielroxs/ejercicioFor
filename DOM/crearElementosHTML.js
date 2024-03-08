const ul = document.querySelector("ul");

// Create element
const nuevoLi = document.createElement('li');


// Asignarle Clase o Id
nuevoLi.className = 'especial';
nuevoLi.id = 'li-especial';

// Asignarle atributos
nuevoLi.setAttribute ('title', 'createElement');

// createTextNode
const propCreateElement = document.createTextNode('createElement');

// Asignar nodo de texto al li
nuevoLi.appendChild(propCreateElement);

// Asignar al ul un nuevo li
ul.appendChild(nuevoLi);

console.log(nuevoLi);

//----------------------------------------------HomeWork

segundoNuevoLi = document.createElement('li');

segundoNuevoLi.className = 'especial'
segundoNuevoLi.id = 'li-text';

segundoNuevoLi.setAttribute ('title', 'createTextNode');

const propCreateTextNode = document.createTextNode('createTextNode')

segundoNuevoLi.appendChild(propCreateTextNode);

ul.appendChild(segundoNuevoLi);

console.log(segundoNuevoLi)

const div = document.querySelector('div');

div.className = ('container')

let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');

let nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Nuevo contenido del nuevo div';

div1.after(nuevoDiv)

