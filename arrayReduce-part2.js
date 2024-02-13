/* 
SINTAXIS 
[2,4,8].reduce ((acumulador, valorActual) => {},0)
[y,n,y].reduce ((total, porCadaVoto) => {},{})
*/

// RESULTADO DE ENCUESTA
const votos = ['yes','yes','no','yes','no','blanco','no','yes'];

const resultados = votos.reduce((total, porCadaVoto) => {
    if(total[porCadaVoto]){
        total[porCadaVoto]++
    } else {
        total[porCadaVoto] = 1
    } return total;
},{});

console.log(resultados);
// total = {yes : 4, no : 3}

// -------------------------------------------------------------------------------------------------------

const votos2 = ['yes','yes','no','yes','no','blanco','no','yes'];

const resultados2 = votos.reduce((total, porCadaVoto) => {
    total[porCadaVoto] = (total[porCadaVoto] || 0) + 1; // si existe suma 1, sino existe ponle 1
    return total;
},{});

console.log(resultados);