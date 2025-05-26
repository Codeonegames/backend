import rl from 'readline-sync';

function transformarParaMaiusculas() {
  const texto = rl.question("Digite uma string: ");
  return texto.toUpperCase();
}

// Chamando a função e exibindo o resultado:
const resultado = transformarParaMaiusculas();
console.log(resultado);
