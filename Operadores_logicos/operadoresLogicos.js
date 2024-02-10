/* 
&& AND (y)
------------------
true && true = true
false && true = false
true && false = false
false && false = false
------------------
|| OR (o)
------------------
true || true = true
false || true = true
true || false = true
false || false = false
------------------
! NOT (invertir la logica)

*/
/* 
let misterio = !(!true && !true) 
    console.log(misterio) */

/* ------------------------------------------------------------
let pass = 'Holamundo';

let edadLargoMayor8 = (pass.length >= 8);
console.log(edadLargoMayor8);

let noContieneEspacio = (pass.indexOf(' ') === -1) 
    console.log(noContieneEspacio);

let contieneArroba = (pass.indexOf('@') === -1)
console.log(contieneArroba);

let misterio = (edadLargoMayor8 && noContieneEspacio && contieneArroba);
console.log(misterio);

if (misterio) {
    console.log('Password es valido');
} else {
    console.log('Password INCORRECTO');
}

------------------------------------------------------------ */

let pass = 'Hola mundo';

let misterio = ((pass.length >= 8) && (pass.indexOf(' ') === -1) && (pass.indexOf('@') === -1));

if (misterio) {
    console.log('Password es valido');
} else {
    console.log('Password Incorrecto');
}