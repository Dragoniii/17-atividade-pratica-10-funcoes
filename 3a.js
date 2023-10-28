//3. Crie uma função que recebe por parâmetro um valor inteiro e positivo e retorne verdadeiro se o número for primo ou falso se não for.

const numero =
  Math.random() < 0.1 ? Math.random() * 10 : Math.floor(Math.random() * 10);

function primo(num) {
  let resposta = null;
  if (num - Math.floor(num) > 0) {
    resposta = "Número inválido, não é inteiro!";
  } else if (num === 0) {
    resposta = "Número inválido, o valor é zero!";
  } else if (num === 1) {
    resposta = "Número inválido, o valor é um!";
  } else if (num === 2) {
    resposta = true;
  } else {
    resposta = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        resposta = false; 
        break; 
      }
    }
  }

  return resposta;
}

console.log(numero);
console.log(primo(numero));
