// && Todo debe ser true para que la salida sea true (verdadero)
// AND 
console.log(false && true && true );

// AND dispara una accion si la primera condicion se cumple
console.log(22 && 1 && 4+4);

const dato = true && 'marcos'
console.log({dato})

function dispara() {
    return false
}

// || Con OR un solo valor verdadero hace que el resultado sea true (verdadero).

const dato02 = false || dispara() || 'hola'
console.log({dato02})