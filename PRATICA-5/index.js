function calcularIdade(idade) {
    let restante = 65 - idade;
    if (restante <= 0) {
        console.log("Você ja está aposentado!");
    } else {
        console.log(`Restam ${restante} ano(s) para sua aposentadoria!`);
    }
}

let nome = prompt("Digite seu NOME:");
let idade = prompt("Digite sua IDADE:");

calcularIdade(idade);