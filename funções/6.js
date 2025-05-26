import rl from 'readline-sync';

function calcularAreaCirculo(raio) {
  // A fórmula da área do círculo é π * raio^2
  const area = Math.PI * raio * raio;
  return area;
}

// Função para obter o raio do usuário e calcular a área
function calcularArea() {
  const raio = rl.questionFloat("Digite o raio do círculo: ");
  const area = calcularAreaCirculo(raio);
  console.log("A área do círculo é: " + area.toFixed(2)); // Formata para duas casas decimais
}

// Chamando a função para calcular a área:
calcularArea();
