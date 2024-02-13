const cliente01 = {
    nombre : 'Marcos',
    apellido : 'Castelli',
    tel : 2255456336,
    key : {propiedad : 33} // si tienes objetos anidados spread no funciona y no los copiara, solo trabaja en primer nivel
}

const cliente02 = {
    nombre : 'Juan',
    apellido : 'Perez',
    notas : [10,8,9]
}

//console.log([...cliente02]) //spread no es iterable
console.log({...cliente02.notas}) //lo que si es iterable es un array anidado

const xxx = {
    ...cliente02, 
    ...cliente01,
    vip : true,
    dni : 22333456,
    tel : 2214255636
}

console.log(xxx);

//---------------------------------------------------------------------------------------------

// console.log(Math.min([2,4,66,88,99])) NaN

// si tenemos que encontrar el numero menor en un array no podemos ya que nos da NaN, tendremos que
// usar spread
console.log(Math.min(...[2,4,66,88,99]))
// asi lo estamos separando en datos y entonces los reconoce como numeros