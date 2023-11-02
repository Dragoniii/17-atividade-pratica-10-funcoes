function calcularMedia(nota1, nota2, nota3, nome){
    const media = (nota1+nota2+nota3)/3
    alert(`Olá ${nome}, sua média final é ${media}.`)
    console.log(nota1);
    console.log(nota2);
    console.log(nota3);
}

calcularMedia(parseInt(prompt('Digite sua nota 1.')), parseInt(prompt('Digite sua nota 2.')), parseInt(prompt('Digite sua nota 3.')), prompt('Digite seu nome.')) 