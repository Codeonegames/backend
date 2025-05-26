import rl from 'readline-sync';

function validarSenha(senha) {
  // Critérios:
  // - Mínimo 8 caracteres
  // - Pelo menos uma letra maiúscula
  // - Pelo menos uma letra minúscula
  // - Pelo menos um caractere especial

  if (senha.length < 8) return false;

  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temEspecial = /[^a-zA-Z0-9\s]/.test(senha);

  return temMaiuscula && temMinuscula && temEspecial;
}

function validarSenhaUsuario() {
  const senha = rl.question("Digite a senha: ");
  const isValid = validarSenha(senha);

  if (isValid) {
    console.log("Senha válida!");
  } else {
    console.log("Senha inválida. A senha deve atender aos seguintes critérios:");
    console.log("- Mínimo 8 caracteres");
    console.log("- Pelo menos uma letra maiúscula");
    console.log("- Pelo menos uma letra minúscula");
    console.log("- Pelo menos um caractere especial");
  }
}

validarSenhaUsuario();
