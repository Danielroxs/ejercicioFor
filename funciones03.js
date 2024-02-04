function suma (x,y) {
    if (5 === 6) {
        return true;
    }
    console.log([x,y]);
    return false;
    
    
}

console.log(suma(5,6));

//-------------------------------

a = 4;
b = 3;

function suma (x,y) {
    return (a > b) /* {  no necesito el if, ya que return me devuelve si es true o false "REFACTORIZAMOS EL CODIGO"
        return true;
    }
    console.log([x,y]);
    return false;
    
    */
} 

console.log(suma(5,6));