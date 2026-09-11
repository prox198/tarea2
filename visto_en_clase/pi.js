function calcularPi(n) {
    let signo = 1;
    let numerador = 1;
    let denominador = 1;
    let pi = 0;

    // El bucle se repite 'n' veces
    for (let i = 0; i < n; i++) {
        // 1. Suma o resta el término actual según el signo
        pi = pi + signo * (numerador / denominador);

        // 2. Alterna el signo (de 1 pasa a -1, luego a 1, etc.)
        signo = signo * -1;

        // 3. Prepara el denominador para el siguiente término (+2)
        denominador = denominador + 2;
    }

    // Al final multiplica por 4 para obtener pi
    return pi * 4;
}


const resultado = calcularPi(1000);
console.log("El valor aproximado de Pi es:", resultado);
