/* Some es muy parecido a every pero every requiere que TODO sea true para regresar true, some
por otro lado con que un solo valor cumpla la condicion entonces regresa true */

const palabras = ['tomate', 'año', 'remo', 'tentaculo', 'perro', 'liebre'];

// Alguna de estas palabras contiene mas de 6 caracteres?

resultado = palabras.some(function (palabras) {
    return palabras.length > 3;
})

console.log(resultado)

// Alguna de estas palabras comienza con la letra b?

resultado2 = palabras.some(function (palabras) {
    //return palabras.includes('b')
    return palabras[0] === 'b'
})

console.log(resultado2)

/* 
Se está utilizando el método some en el array palabras. El método some verifica si al menos un elemento del array cumple con la condición especificada por la función de retorno.

La línea en cuestión es:

return palabras[0] === 'b';

Esta línea está dentro de una función que se pasa como argumento al método some. La función de retorno se ejecuta para cada elemento del array palabras. La expresión palabras[0] === 'b' verifica si el primer carácter de la palabra actual es igual a 'b'.

Por lo tanto, resultado2 será true si al menos una palabra en el array palabras comienza con la letra 'b', y false si ninguna palabra comienza con 'b'.

Si deseas verificar si al menos una palabra contiene la letra 'b', la línea debería ser:

return palabras.includes('b');

Esta línea devuelve true si la palabra actual contiene la letra 'b', y false si no la contiene. Entonces, resultado2 será true si al menos una palabra en el array palabras contiene la letra 'b', y false si ninguna palabra la contiene.
*/

// Alguna de las palabras contiene mate?

resultado2 = palabras.some(function (palabras) {
    return palabras.includes('mate')
})

console.log(resultado2)