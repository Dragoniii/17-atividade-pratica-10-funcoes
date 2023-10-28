//Crie uma função que recebe um valor inteiro e retorne verdadeiro se for ímpar ou falso se for par.

const numero = (Math.random() < 0.5) ? (Math.random()*10): Math.floor((Math.random()*10))

function par(num) {
    return !Number.isInteger(num) ? "Número inválido, não é inteiro!" :
           num === 0 ? "Número inválido, o valor é zero!" :
           num % 2 === 0;
}

console.log(numero);
console.log(par(numero));