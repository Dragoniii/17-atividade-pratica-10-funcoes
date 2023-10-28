//Crie uma função que recebe um valor inteiro e retorne verdadeiro se for ímpar ou falso se for par.

const numero = (Math.random() < 0.5) ? (Math.random()*10): Math.floor((Math.random()*10))

function par (num){
    let resposta = null;
    if (num - Math.floor(num) > 0){
        resposta = "Número inválido, não é inteiro!"
    } else if (num === 0) {
        resposta = "Número inválido, o valor é zero!"
    } else if (num % 2 === 0) {
        resposta = true
    } else if (num % 2 !== 0) {
        resposta = false
    } 

    return resposta
}

console.log(numero)
console.log(par(numero))