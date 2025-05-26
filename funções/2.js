import rl from 'readline-sync';

function verificarParImpar() {
  const numero = rl.questionInt("Digite um número: ");

  if (numero % 2 === 0) {
    return "O número é par.";
  } else {
    return "O número é ímpar.";
  }
}

// Chamando a função e exibindo o resultado:
const resultado = verificarParImpar();
console.log(resultado);
