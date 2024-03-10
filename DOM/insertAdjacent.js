// Los metodos inserAdjacent son mucho mas versatiles que appendChild, nos ofrecen muchas mas posibilidades. Existen 3 versiones

/* 
1) insertAdjacentElement() para insertar un objeto
2) insertAdjacentHTML() para insertar codigo HTML
1) insertAdjacentText() para insertar texto plano o un nodo con texto.

En todos los metodos debemos aplicar como primer argumento un string que indica la posicion donde vamos a insertar el contenido.

1) beforebegin - se inserta antes de la etiqueta HTML de apertura
2) afterbegin - se inserta dentro de la etiqueta como su primer hijo.
3) beforeend - se inserta dentro de la etiqueta como ultimo hijo, igual que appendChild
4) afterend - se inserta despues de la etiqueta HTML de cierre
*/

var miDiv = document.getElementById('miDiv');
const aInsertar = document.createElement('div')

//beforebegin antes de comenzar la etiqueta
/* <div>
    //afterbegin como primer hijo
    <h2>Hola mundo</h2>
    //beforeend como ultimo hijo
</div> */
//afterend como primer hermano

//miDiv.insertAdjacentHMTL('afterend', '<div>primer HTML</div>');
//miDiv.insertAdjacentHMTL("beforeend", '<div>Nuevo HTML</div>');
//miDiv.insertAdjacentHMTL('afterbegin', '<div>Nuevo HTML</div>');
//miDiv.insertAdjacentHMTL('afterend', '<div>Nuevo HTML</div>');
miDiv.insertAdjacentElement('beforebegin', aInsertar)
//miDiv.insertAdjacentElement('afterbegin', aInsertar);
//miDiv.insertAdjacentElement('beforeend', aInsertar);
//miDiv.insertAdjacentElement('afterend', aInsertar);

miDiv.insertAdjacentHTML('beforebegin', '<p>Hola mundo</p>'); // inserta este bloque de codigo en la posicion deseada
//existente.insertAdjacentHTML('afterbegin', '<p>Hola mundo</p>');
//existente.insertAdjacentHTML('beforeend', '<p>Hola mundo</p>');
//existente.insertAdjacentHTML('afterend', '<p>Hola mundo</p>');

miDiv.insertAdjacentText('beforeend', 'Hola a todos');
//existente.insertAdjacentText('afterbegin', 'Hola mundo');
//existente.insertAdjacentText('beforeend', 'Hola mundo');
//existente.insertAdjacentText('afterend', 'Hola mundo');