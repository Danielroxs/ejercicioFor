class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    simplesValores() { // Refactorizamos creando este metodo para utilizarlo en otros metodos mediante template strings ${}
        const { r, g, b } = this; // Basicamente lo que dice return ya solo lo pasamos como ${simplesValores()}
        return `${r},${g},${b}`;
    }

    rgb() {
        return `rgb(${this.simplesValores()})`;
    }

    
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    
    rgba(v = 1.0) {
        return `rgba(${this.simplesValores()},${v})`;
    }
}

const colorBlanco = new Color(255, 255, 255, 'blanco');
const colorAmarillo = new Color(255, 200, 2, 'amarillo');
const colorVerde = new Color(20, 200, 2, 'verde');

console.log(colorBlanco.rgb())
console.log(colorAmarillo.rgb())
console.log(colorAmarillo.hex())
console.log(colorAmarillo.rgb(0.3))

document.body.style.backgroundColor = colorVerde.rgba(0.6)