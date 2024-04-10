async function saluda () {
    return 'Hola mundo'
}

console.log(saluda())

saluda().then((res) => {
    console.log(res)
})

// Forma mas eficaz

async function mayor (num) {
    if (num >= 18) {
        return ('Eres mayor de edad')
    }
    throw 'Eres menor de edad'
}

mayor(19).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})

// Forma tradicional

function mayor2 (num){
    return new Promise((resolve, reject) => {
        if (num >= 18) {
            resolve ('Eres mayor de edad')
        }
        reject ('Eres menor de edad')
    })
}

mayor2(11).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})