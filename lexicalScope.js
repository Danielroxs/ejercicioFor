function afuera() {
    console.log('Se ejecuto afuera');
    const pelicula = 'Aliens';

    function adentro() {
        console.log('Se ejecuto adentro');
        const pelicula = 'Rambo';

        function masAdentro() {
            const pelicula = 'Top Gun';
            console.log(pelicula);
        }
        
    }
    masAdentro()
    adentro()

    console.log(pelicula);
}

afuera()