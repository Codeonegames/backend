import rl from 'readline-sync';

function calcularValorComDesconto(valorOriginal, percentualDesconto) {
  const valorDesconto = valorOriginal * (percentualDesconto / 100);
  const valorFinal = valorOriginal - valorDesconto;
  return valorFinal;
}

// Função para obter dados do usuário e calcular o desconto para um produto
function calcularDescontoProduto() {
  const valorOriginal = rl.questionFloat("Digite o valor original do produto: ");
  const percentualDesconto = rl.questionFloat("Digite o percentual de desconto (ex: 10 para 10%): ");
  const valorFinal = calcularValorComDesconto(valorOriginal, percentualDesconto);
  console.log("O valor final do produto com desconto é: " + valorFinal.toFixed(2)); // toFixed(2) formata para duas casas decimais
}