let password = 'Holamundo@';

if (password.length >= 8) {
    console.log('Primer if superado tienes mas de 8 caracteres');
    if (password.indexOf(' ') === -1) {
        console.log('Segundo if (anidado), la cadena no tiene espacios.')
        if (password.indexOf('@') === -1) {
            console.log('Tercer if (anidado) no contiene @')
        } else {
            console.log('Perfecto, contiene un @')
        }
    } else {
        console.log('Password no valido, no se permiten espacios')
    }
} else {
    console.log('El password necesita tener al menos 8 caracteres,');
}