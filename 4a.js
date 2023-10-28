//4. Crie uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna esse tempo em horas minutos e segundos.

const numero = Math.floor(Math.random() * 100000) + 3600;
//const numero = 3691;

function tempo (num){
    const horas = (num > 3600) ? Math.floor(num/3600) : 0 ; 
    const minutos = Math.floor((num - (horas * 3600)) / 60);
    const segundos = num - (horas* 3600) - (minutos*60)

    valor = [horas, minutos, segundos]
    return valor
}



console.log(numero)
console.log(tempo(numero))
