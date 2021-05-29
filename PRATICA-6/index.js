const calcularGorjeta = valor => {
    if (valor < 50) return 0.2 * valor;
    else if (valor >= 50 && valor <= 200) return 0.15 * valor;
    else return 0.1 * valor;
};

const mostrarDetalhes = (restaurante, valor, gorjeta) => {
    console.log(`${restaurante} - [Valor: R$ ${valor.toFixed(2)} | Gorjeta: R$ ${gorjeta.toFixed(2)} | Total: R$ ${(valor+gorjeta).toFixed(2)}]`);
}

const mostrarRestaurantes = (restaurantes, valores, gorjetas) => {
    for (let i = 0; i < restaurantes.length; i++) {
        mostrarDetalhes(restaurantes[i], Number.parseFloat(valores[i]), Number.parseFloat(gorjetas[i]));
    }
}

const restaurantes = [], valores = [], gorjetas = [];

for (let i = 0; i < 1; i++) {
    restaurantes.push(prompt("Digite o NOME do RESTAURANTE:"));
    valores.push(prompt("Digite o VALOR da conta:"));
    gorjetas.push(calcularGorjeta(valores[i]));
}

mostrarRestaurantes(restaurantes, valores, gorjetas);