import rl from 'readline-sync';

function calcularValorComPorcentagem() {
  const valor = rl.questionFloat("Digite o valor: "); // Usa questionFloat para aceitar números com casas decimais
  const porcentagem = rl.questionFloat("Digite a porcentagem (ex: 10 para 10%): ");

  const valorAcrescimo = valor * (porcentagem / 100);
  const valorFinal = valor + valorAcrescimo;

  return valorFinal;
}

// Chamando a função e exibindo o resultado:
const resultado = calcularValorComPorcentagem();
console.log("O valor com acréscimo é: " + resultado);
