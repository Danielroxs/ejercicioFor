document.write("Arranco el programa ");

const repetir = (str, times) => {
    let resultado = "";
    for (let i = 0; i < times; i++) {
        resultado += str;
    }
    return resultado;
}

const cambiaMensaje = (str) => {
    return `${str.toUpperCase()}!!!`;
}

const formaMensaje = (frase) => {
    let texto = cambiaMensaje(frase);
    let modifica = repetir(texto, 3);
    return modifica;
}

const salidaDom = (frase, elemento) => {
    const h1 = document.createElement('h1');
    h1.innerText = formaMensaje(frase);
    elemento.appendChild(h1);
}

document.write("Llamado a la primer funcion");

salidaDom("Estudiando JS", document.body);

console.log('fin')



