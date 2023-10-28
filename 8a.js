//8. Crie uma função chamada mostrarDobro(num), que recebe um parâmetro sendo um número inteiro. Esta função será chamada ao abrir a página e mostrará um alerta com o resultado. Exemplo: “O dobro do número 5 é 10.”

const numero = Math.floor(Math.random() * 100);

function dobro(num) {
    const dobro = num * 2
    return dobro
}

console.log(numero);
console.log(dobro(numero));

console.log(`O dobro de ${numero} é ${dobro(numero)}.`)