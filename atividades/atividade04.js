import rl from 'readline-sync'
let salario = rl.questionFloat('Informe seu salário:');
let cat = rl.question('Informe a categoria da bonificação: ').toUpperCase();
let bonus = 0;

switch (cat) {
    case 'a':
        bonus = salario * 0.05;
        console.log(`Novo salário: ${(salario+bonus).toLocaleString ("pt-BR",{style: "currency", currency: "BRL"})}.`)
};