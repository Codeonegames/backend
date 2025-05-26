import rl from 'readline-sync';

function validarCPF(cpf) {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]+/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (CPF inválido)
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = soma % 11;
  let digito1 = (resto < 2) ? 0 : 11 - resto;

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  let digito2 = (resto < 2) ? 0 : 11 - resto;

  // Verifica se os dígitos verificadores calculados são iguais aos dígitos do CPF
  if (parseInt(cpf.charAt(9)) !== digito1 || parseInt(cpf.charAt(10)) !== digito2) {
    return false;
  }

  return true; // CPF válido
}

// Função para obter o CPF do usuário e validar
function validarCPFUsuario() {
  const cpf = rl.question("Digite o CPF: ");
  const isValid = validarCPF(cpf);

  if (isValid) {
    console.log("CPF válido!");
  } else {
    console.log("CPF inválido.");
  }
}

// Chamando a função para validar o CPF:
validarCPFUsuario();
