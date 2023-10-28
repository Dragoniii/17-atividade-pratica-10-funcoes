//5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se é um valor perfeito ou falso se não for. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio.



//const numero = Math.floor(Math.random() * 1000) + 1;
const numero = 6;

function valorPerfeito(n) {
    let soma = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            soma += i;
        }
    }
    return soma === n;
}
console.log(numero)
console.log(valorPerfeito(numero))

//Não sei como calcular número perfeito.