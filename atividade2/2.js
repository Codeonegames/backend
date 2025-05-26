import rl from 'readline-sync'
for (let i = 1; i <= 10; i++) {
    let nome = rl.question(`Informe o nome da ${1} pessoa: `)
    let salario = rl.questionFloat (`Informe o salário de ${nome}: `);


let ir = 0
if (salario <= 2800) {
    ir = salario * 0.075;

}else if (salario <= 3750){
    ir = salario * 0.15;
}else if (salario <= 4660) {
    ir = salario * 0.225;
}else{
    ir = salario * 0.275
}
console.log('\n--- Imposto de renda devido ---')
console.log(`Nome: ${nome} \nImposto de renda: R$ ${ir.toFixed(2)}\n`)
}