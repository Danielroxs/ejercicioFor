

function promArray (array) {
    promedio = 0;    // acumulador
    for (const dato of array) {
        promedio += dato;
    }
    return promedio/array.length;
}

console.log(promArray([1,2,3,4,5,6,7]))