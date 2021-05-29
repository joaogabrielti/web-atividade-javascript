let p1 = {}, p2 = {};

p1.nome = prompt("Digite o NOME da pessoa:");
p1.peso = prompt("Digite o PESO da pessoa:");
p1.altura = prompt("Digite a ALTURA da pessoa:");
p1.imc = p1.peso / (p1.altura * p1.altura);

p2.nome = prompt("Digite o NOME da pessoa:");
p2.peso = prompt("Digite o PESO da pessoa:");
p2.altura = prompt("Digite a ALTURA da pessoa:");
p2.imc = p2.peso / (p2.altura * p2.altura);

if (p1.imc > p2.imc) {
    alert(`O IMC de ${p1.nome} (${p1.imc.toFixed(2)}) é maior que o de ${p2.nome} (${p2.imc.toFixed(2)}).`);
} else {
    alert(`O IMC de ${p2.nome} (${p2.imc.toFixed(2)}) é maior que o de ${p1.nome} (${p1.imc.toFixed(2)}).`);
}