function check(cadena) {
    const letras = ('abcdefghijklmnopqrstuvwxyz')
    for (let caracter of letras) {
        console.log(caracter)
        if (cadena.indexOf(caracter) === -1) {
            return false
        } 
    }
    return true
}



console.log(check('acdefghijklmnopqrstuvwxyz'))