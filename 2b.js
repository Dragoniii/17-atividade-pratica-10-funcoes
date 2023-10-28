//Crie uma função que recebe um valor inteiro e retorne verdadeiro se for ímpar ou falso se for par.

const numero = (Math.random() < 0.5) ? (Math.random()*10): Math.floor((Math.random()*10))

function par(num) {
    if (num - Math.floor(num) > 0) {
        return "Número inválido, não é inteiro!";
    } else if (num === 0) {
        return "Número inválido, o valor é zero!";
    } else {
        return num % 2 === 0;
    }
}

console.log(numero);
console.log(par(numero));