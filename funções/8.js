import rl from 'readline-sync';

function calcularIMC(peso, altura) {
  // A fórmula do IMC é: peso / (altura * altura)
  const imc = peso / (altura * altura);
  return imc;
}

// Função para obter peso e altura e calcular o IMC
function calcularImcUsuario() {
  const peso = rl.questionFloat("Digite o seu peso em kg: ");
  const altura = rl.questionFloat("Digite a sua altura em metros: ");
  const imc = calcularIMC(peso, altura);
  console.log("Seu IMC é: " + imc.toFixed(2)); // Formata para duas casas decimais
}

// Chamando a função para calcular o IMC:
calcularImcUsuario();
