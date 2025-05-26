import rl from 'readline-sync';

function transMaiusculas() {
  const texto = rl.question("Digite uma string: ");
  return texto.toUpperCase();
}

// Chamando a função e exibindo o resultado:
const resultado = transMaiusculas();
console.log(resultado);
