const vetor = [];

let n = Number.parseInt(prompt("Digite o número total de palavras:"));

for (let i = 0; i < n; i++) {
    vetor.push(prompt(`Digite a palavra ${i+1}:`));
}

for (let i = n - 1; i >= 0; i--) {
    console.log(vetor[i]);
}