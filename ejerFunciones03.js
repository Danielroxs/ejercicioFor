function isValidPassword(user, pass) {
    if (pass.length < 8 || pass.includes(' ') || pass.includes(user)) {
        return false;
    }
        return true;
}

console.log(isValidPassword('daniel', 'fdfdfdsadasddaniel'));

//-----------------------------------------

function isValidPassword01 (user, pass) {
    const pocosCaracteres = pass.length < 8;
    const espacios = pass.indexOf(' ') !== -1;
    const contieneUser = pass.indexOf(user) !== -1;
    return !pocosCaracteres && !espacios && !contieneUser;
}

console.log(isValidPassword01('daniel','correcaminosdanies'))


let variable01 = true;
variable01 = !variable01;

console.log(variable01)