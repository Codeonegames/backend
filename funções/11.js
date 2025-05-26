import rl from 'readline-sync';

function calcularRetornoInvestimento(capitalInicial, taxaJurosMensal, tempoMeses) {
  // Fórmula: M = C * (1 + i)^t
  // Onde:
  // M = Montante
  // C = Capital inicial
  // i = Taxa de juros (em decimal)
  // t = Tempo (em meses)

  const taxaDecimal = taxaJurosMensal / 100; // Converte a taxa para decimal
  const montante = capitalInicial * Math.pow((1 + taxaDecimal), tempoMeses);
  return montante;
}

// Função para obter os dados do usuário e calcular o retorno
function obterDadosInvestimento() {
  const capitalInicial = rl.questionFloat("Digite o capital inicial investido: ");
  const taxaJurosMensal = rl.questionFloat("Digite a taxa de juros mensal (%): ");
  const tempoMeses = rl.questionInt("Digite o tempo do investimento em meses: ");

  const montante = calcularRetornoInvestimento(capitalInicial, taxaJurosMensal, tempoMeses);
  console.log("O montante final do investimento é: R$ " + montante.toFixed(2)); // Exibe com duas casas decimais
}

// Chamando a função para obter os dados e calcular o retorno:
obterDadosInvestimento();
