import rl from 'readline-sync';

function somar() {
  const numero1 = rl.questionInt("Digite o primeiro número: ");
  const numero2 = rl.questionInt("Digite o segundo número: ");
  return numero1 + numero2;
}

// Chamando a função e exibindo o resultado:
const resultado = somar();
console.log("A soma é: " + resultado);
