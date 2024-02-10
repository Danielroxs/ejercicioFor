function saludar() {
    console.log('Hola amigos');
}

function callback(funcion) {
    funcion();
}

callback(saludar);

// Le estoy pasando directamente la funcion anonima al callback
callback(function () {
    console.log('Hola a todos');
});

// Existen funciones que necesitan otra funcion para funcionar por ejemplo setTimeout(funcion, tiempo en milisegundos)
setTimeout(saludar, 5000);

// Tambien se puede ver de esta forma, pasando directamente la funcion
setTimeout(function () {
    console.log('Esto se demora 5 segundos')
}, 5000);


// Esto va en un HTML pero lo pongo aqui,
// 

{/* <button>No hagas clic aqui</button>  // creamos un elemnto boton
<script>  // usamos la etiqueta script para usar js en hmtl
    const btn = document.querySelector('button');  // seleccionamos el elemento button y lo almacenamos en btn
    btn.addEventListener('click', function () {  // al elemento btn le agregamos un metodo que usa 2 parametros (el evento, la funcion anonima que se detonara cuando el evento sea iniciado)
        console.log('La bomba fue activada')  // la funcion lanza un letrero alert con el texto "La bomba fue activada"
    })
</script> */}