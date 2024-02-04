// continue - saltar el ciclo actual y no lee las instrucciones que seguian abajo, directamente sigue con el ciclo siguiente

for (let i = 0; i <= 5; i++) {
        if (i === 3) continue;
        console.log(`Esta es la vuelta ${i}`);
}