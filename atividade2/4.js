import rl from 'readline-sync'
const pessoa = {
    nome: 'Carlos Eduardo dos Santos',
    datanasc: '22/02/2002',
    cpf: '143567862836',
    sexo: 'M'
}
//console.log(pessoa);
//console.log('Nome: ' + pessoa.nome);
for (const key of pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
}
const cores = ['branco', 'azul','verde', 'preto', 'roxo', 'amarelo'];
for (const elemento of cores) {
    valores += elemento;
}