//4. Crie uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna esse tempo em horas minutos e segundos.

const numero = Math.floor(Math.random() * 10000) + 3600;
//const numero = 3691;

function tempo(num) {
    const horas = Math.floor(num / 3600);
    const minutos = Math.floor((num % 3600) / 60);
    const segundos = num % 60;

    return [horas, minutos, segundos];
}

console.log(numero)
console.log(tempo(numero))