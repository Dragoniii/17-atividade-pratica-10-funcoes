const notas = [];
const mediaAritmetica = Math.random() > 0.5;
const pesos = [];
const quantidadeNotas = Math.floor(Math.random() * 9 + 2);

for(let i = 0; i < quantidadeNotas; i++) {
    notas.push(Math.random() * 8 + 2);
    pesos.push(Math.random() * 0.9 + 0.1);
}

let pesoFinal = 0;
for(let i = 0; i < pesos.length; i++) {
    pesoFinal += pesos[i];
}

function calcularMedia(notas, mediaAritmetica, pesos, pesoFinal) {
    let somaNotas = 0;
    let somaProdutos = 0;

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
        somaProdutos += notas[i] * pesos[i];
    }

    let media1 = mediaAritmetica ? somaNotas / notas.length : somaProdutos / pesoFinal;
    let media2 = !mediaAritmetica ? somaNotas / notas.length : somaProdutos / pesoFinal;

    return mediaAritmetica ? [media1.toFixed(2), media2.toFixed(2)] : [media2.toFixed(2), media1.toFixed(2)];
}

console.log(mediaAritmetica);
console.log(quantidadeNotas);
console.log(notas);
console.log(pesos);
console.log(pesoFinal.toFixed(2));
console.log(calcularMedia(notas, mediaAritmetica, pesos, pesoFinal));
