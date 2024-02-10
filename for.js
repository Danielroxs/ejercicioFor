// bucles determinados e ideterminados

for(let i = 1; i <= 10; i++){ // Bucle determinado
    console.log('Esta es la vuelta ' + i)
}

for(let i = 100; i >= 80; i-=1){ // Bucle determinado
    console.log('Esta es la vuelta ' + i)
}

const misAlumnos = ['Juan', 'Pedro', 'Romina', 'Cristia', 'Luis', 'Pedro', 'Manuel', 'Adriana'];

for (let i = 0; i < misAlumnos.length; i++) {
    const alumno = misAlumnos[i];
    console.log(alumno)
}
