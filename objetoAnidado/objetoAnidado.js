const alumno0054 = {
  nombre: "Marcos",
  apellido: "Markinson",
  curso: "Programacion",
  notas: {
    primerCuat: 8,
    segundoCuat: 8.75,
    tercerCuat: 7,
  },
  sobrenombre: "Oso",
  intereses: ["matematicas",
    "tecnologia",
    "computacion",
    "cine"
  ],
  horario: "matutino",
};

console.log(alumno0054.notas.segundoCuat)

function promedio(nota1, nota2, nota3) {
  const final = (nota1 + nota2 + nota3) / 3;
  return final.toFixed(1);
}

nota1 = alumno0054.notas.primerCuat;
nota2 = alumno0054.notas.segundoCuat;
nota3 = alumno0054.notas.tercerCuat;
console.log(promedio(nota1,nota2,nota3));

console.log(alumno0054.intereses[2]);

const compras = [
  {
    producto: 'avena',
    precio: 55,
    cantidad:2
  },
  {
    producto: 'jamon',
    precio: 30,
    cantidad:1
  },
  {
    producto: 'melon',
    precio: 88,
    cantidad:4
  },
]

console.log(compras[0].precio);
console.log(compras[2].producto);
console.log(compras[2].cantidad);