/* 
> mayor que
> menor que

>= mayor o igual que
<= menor o igual que

== igual que (solo compara valor)
!= no es igual que (solo compara valor)

=== Completamente igual que (compara valor y tipo de dato)
!== No es igual que o es diferente que (compara valor y tipo de dato)
*/

console.log(11 >= 10);

// no se toma en cuenta el tipo sino el valor
console.log(10 == "10");
// aqui si se hace tambien una comparacion de tipo de dato
console.log(10 === "10");

// puedo tener "0" o "false" y dara "true", porque una cadena vacia es igual a "0"
console.log(0 == "");
console.log(false == "");
console.log(1 == true);
console.log(null == undefined);

// pero hay que tener en cuenta la triple comparacion (tipo de dato)

console.log(null === undefined);

// comparacion de string mediante su valor en unicode
console.log('abc'.toLocaleUpperCase() === 'ABC'.toLocaleUpperCase())

// funcion de comparacion

function isTrue (str1, str2) {
    return (str1.toLowerCase() === str2.toLowerCase());
}

console.log(isTrue('abc', 'ABC'));

// No es igual que:

console.log(10 != 10);
console.log(10 != 5);
console.log(10 != "10");
console.log(10 !== "10");

/* 
"1" == 1 true
0 == false true
0 == null false
0 == undefined false
null == undefined true
null == "" false
0 == "" true
*/