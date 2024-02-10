const miArray = [
    [1,2,3], // indice 0 --> recupero objeto123 --> itero con el segundo for en cada indice del objeto y finaliza ambos for
    [4,5,6], // indice 1
    [7,8,9] // indice 2
]

console.log(miArray[0]) // lo que recuperamos es un objeto (array)

for (let i = 0; i < miArray.length; i++) {
    const fila = miArray[i];
    console.log(fila)
    for (let j = 0; j < fila.length; j++){
        const subElementos = fila[j];
        console.log(subElementos)
    }
}