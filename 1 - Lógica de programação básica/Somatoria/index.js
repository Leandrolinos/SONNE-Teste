function somarPares(listaNumeros) {
    let somatoria = 0;

    for (const numeros of listaNumeros) {
        if (numeros % 2 === 0) {
            somatoria += numeros;
        }
    }

    return somatoria;
}

console.log(somarPares([1, 2]));