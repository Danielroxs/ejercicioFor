const div = document.querySelector('div');

const mover = (el, cant, tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const anchoPantalla = document.body.clientWidth;
            const medidaObjeto = el.getBoundingClientRect().right;
            const izquierda = el.getBoundingClientRect().left;

            console.log(anchoPantalla, medidaObjeto, izquierda);

            if (medidaObjeto + cant > anchoPantalla) {
                reject();
            } else {
                el.style.transform = `translateX(${izquierda + cant}px)`;
                resolve();
            }
        }, tiempo);
    })
};

async function animar(el, cant) {
    try {
        await mover(el, cant, 1000)
        await mover(el, cant, 1000)
        await mover(el, cant, 1000)
        await mover(el, cant, 1000)
        await mover(el, cant, 1000)
        await mover(el, cant, 1000)
    } catch (error) {
        console.log('No puedo moverme mas')
        await mover(div, -50, 1000)
        await mover(div, -50, 1000)
        await mover(div, -50, 1000)
    }
}

animar(div, 50)
/* mover (div,50,1000)

    .then(() => mover (div,50,1000))
    .then(() => mover (div,900,1000))
    .catch(() => console.log('No hay espacio')) */