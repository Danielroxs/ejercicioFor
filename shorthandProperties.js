/* Shorthand Properties
creado en 2015 no es soportado por IE, es una forma sencilla de crear objetos de una forma
literal asignandole variables
 */

const miArray = [4, 8, 32, 31, 13, 17, 24];

const dameResultados = (array) => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const suma = array.reduce((acumulador, valorActual) => acumulador + valorActual);
    const promedio = suma / array.length;
    return { // solo referenciando a la variable, por si mismo shorthand properties crea la key del objeto
        max,
        min,
        suma,
        promedio
    }
}

const resultados = dameResultados(miArray);
console.log(resultados)