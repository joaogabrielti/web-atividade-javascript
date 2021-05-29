let pessoa = {};

pessoa.nome = prompt("Digite seu NOME:");
pessoa.peso = prompt("Digite seu PESO:");
pessoa.altura = prompt("Digite sua ALTURA:");
pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);

if (pessoa.imc < 17) {
    alert("Muito abaixo do peso");
} else if (pessoa.imc >= 17 && pessoa.imc <= 18.49) {
    alert("Abaixo do peso");
} else if (pessoa.imc >= 18.5 && pessoa.imc <= 24.99) {
    alert("Peso normal");
} else if (pessoa.imc >= 25 && pessoa.imc <= 29.99) {
    alert("Acima do peso");
} else if (pessoa.imc >= 30 && pessoa.imc <= 34.99) {
    alert("Obesidade I");
} else if (pessoa.imc >= 35 && pessoa.imc <= 39.99) {
    alert("Obesidade II (severa)");
} else {
    alert("Obesidade III (mórbida)");
}