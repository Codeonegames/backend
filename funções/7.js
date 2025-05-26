import rl from 'readline-sync';

function converterCelsiusParaFahrenheit(celsius) {
  // A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Função para obter a temperatura em Celsius e converter
function converterTemperatura() {
  const celsius = rl.questionFloat("Digite a temperatura em Celsius: ");
  const fahrenheit = converterCelsiusParaFahrenheit(celsius);
  console.log("A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2)); // Formata para duas casas decimais
}

// Chamando a função para converter a temperatura:
converterTemperatura();
