//01
import rl from 'readline-sync';
let dia = Number(rl.question('informe o dia: '))
switch (dia) {
    case 1:
        console.log('domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    case 7:
        console.log('Sábado')
        break
    default:
        console.log('inválido')
        break
}