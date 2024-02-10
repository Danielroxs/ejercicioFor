let cadena = '    esto es    una cadena    con problemas de espacios    ';
console.log(cadena.trim());
console.log(cadena);
//Este mensaje por consola se uso y desaparecio, para usarlo tendrias que guardarlo en una variable

//trim quita espacios al principio y al final

//para guardar el resultado de la cadena debo sobreescribir la variable
cadena = (cadena.trim().toUpperCase());
console.log(cadena)

//los metodos se pueden poner uno sobre otro