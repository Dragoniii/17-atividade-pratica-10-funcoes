//3. Crie uma função que recebe por parâmetro um valor inteiro e positivo e retorne verdadeiro se o número for primo ou falso se não for.

const numero =
  Math.random() < 0.2 ? Math.random() * 100 : Math.floor(Math.random() * 100);

  function primo(num) {
    if (num - Math.floor(num) > 0) return "Número inválido, não é inteiro!";
    if (num === 0) return "Número inválido, o valor é zero!";
    if (num === 1) return "Número inválido, o valor é um!";
    if (num === 2) return true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
console.log(numero);
console.log(primo(numero));
