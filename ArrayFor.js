const misAlumos = ['Juan', 'Pedro', 'Romina', 'Cristian', 'Luis', 'Pedro', 'Manuel', 'Adriana'];

for (let i = 0; i < misAlumos.length; i++) {
    const element = misAlumos[i];
    console.log(element);
}

const misAlumos01 = [
    {
        nombre: 'Juan',
        apellido: 'Martinez',
        nota: 9
    },
    {
        nombre: 'Maria',
        apellido: 'Suarez',
        nota: 10
    },
    {
        nombre: 'Maximo',
        apellido: 'Tinoco',
        nota: 8
    }
]

for (let i = 0; i < misAlumos01.length; i++) {
    const estudiantes = misAlumos01[i];
    console.log(`El nombre es: ${estudiantes.nombre} y su apellido es: ${estudiantes.apellido}`);
}

let total = 0;

for (let i = 0; i < misAlumos01.length; i++) {
    notas = misAlumos01[i].nota
    total += notas
}

console.log(total/misAlumos01.length)