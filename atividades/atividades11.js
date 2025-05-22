import rl from 'readline-sync'
let pergunta = rl.questionInt ('Informe o numero: ')
let count = 1
while (count <= 10) {
    console.log(`${pergunta} * ${count} = ${pergunta*count}`)
}
