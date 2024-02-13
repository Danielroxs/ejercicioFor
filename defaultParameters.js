//---------------------------------------- Metodos en desuso
/* function multi (x,y) {
    if(typeof y === 'undefined') y = 5;
    if(typeof x === 'undefined') x = 10;
    console.log(y);
    console.log(x);
    return x * y;
}

console.log(multi()) */
function multi(x, y) {
    y = typeof y === 'undefined' ? 5 : y; // y es igual a si el tipo de y es triplemente igual a 'undefined' (no declarado) entonces que y valga 5, de lo contrario que siga valiendo y
    x = typeof x === 'undefined' ? 10 : x;
    return x * y;
}

console.log(multi())
//--------------------------------------- RECOMENDABLE:
function multi2(x = 10, y = 5) { // Puedes asignarle por default cualquier valor, numero, array, objeto, etc...
    return x * y;
}

console.log(multi2())

//--------------------------------------

function saludar(nombre = 'null', apellido = 'null', numero = '999 - 999 - 999', notas = [9,7,8]) {
    console.log(`${nombre} ${apellido} - ${numero} ${notas}`)
}

console.log(saludar('Mark', 'rodriguez','null')) // para no escribir un argumento puedo escribir null en su lugar