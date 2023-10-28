//1. Crie uma função que recebe 3 notas de um aluno por parâmetro e uma letra. Se a letra for A a função deve calcular a média aritmética, se for P, a média ponderada (peso: 5, 3 e 2).

const mediaAritmetica = (Math.random() > 0.5) ? true : false;
const quantidadeNotas = Math.floor(Math.random()*9+2)
const notas = [];
const pesos = [];

while(notas.length < quantidadeNotas){
    notas.push((Math.random()*8+2).toFixed(2)-0)
}

while(pesos.length < quantidadeNotas){
    pesos.push((Math.random()*0.9+0.1).toFixed(1)-0)
}

const pesoFinal = pesos.reduce((acc, num) => acc + num, 0) 

function calcularMedia (notas, mediaAritmetica, pesos, pesoFinal){
    const somaProdutos = notas.reduce((acc, nota, indice) => acc + nota * pesos[indice], 0);
    const media1 = mediaAritmetica ? (notas.reduce((acc, num) => acc + num, 0)/notas.length) : somaProdutos / pesoFinal;
    const media2 = !mediaAritmetica ? (notas.reduce((acc, num) => acc + num, 0)/notas.length) : somaProdutos / pesoFinal;
    const media = mediaAritmetica ?  [media1.toFixed(3)-0, media2.toFixed(3)-0] : [media2.toFixed(3)-0, media1.toFixed(3)-0];
    return media
}

console.log(mediaAritmetica)  
console.log(quantidadeNotas)  
console.log(notas)  
console.log(pesos)  
console.log(pesoFinal.toFixed(2))
console.log(calcularMedia(notas, mediaAritmetica, pesos, pesoFinal))  