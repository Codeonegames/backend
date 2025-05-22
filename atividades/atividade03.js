import rl from 'readline-sync';
let x = rl.question('informe o primeiro valor: ');
let y = rl.question('informe o segundo valor: ');
let op = rl.question('Escolha uma opção: \n[1] Soma \n[2]Subtração \n[3]Multiplicação [4]Divisão');
switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`)
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`)
        break;
    case 3:
        console.log(`${x} * ${y} = ${x * y}`)
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`)
        break;
    default:
        console.log('Tu é Burro? escreve certo ae: ')
        break;
}