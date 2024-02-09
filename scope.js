// SCOPE
// El lugar donde defina una variable determinara si podre o no acceder a ella
// Scope local y scope global

let saludo = 'Hola amigos'

function saludar () {
    let saludo = 'Hola amigos'; // si le quito el let estaria sobreescribiendo la variable saludo global
    console.log(saludo)
}

/* function saludar2 () {
    let saludo = 'Hola amigos';
    console.log(saludo)
} */



console.log(saludo)
saludar();
//saludar2();