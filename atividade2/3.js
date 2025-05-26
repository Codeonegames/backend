import rl from 'readline-sync'
const numaleatorio = Math.floor(Math.random()*100)+1;
let tentativa;
do{
    tentativa = rl.questionInt ('tente adivinhar o numero (entre 1 e 100): ');
    if (tentativa === numaleatorio) {
        console.log('Parabéns! Você acertou.');
    }else if (tentativa < numaleatorio) {
        console.log('Tente um numero maior');
    }else{
        console.log('Tente um numero menor');
    }
}while (tentativa !== numaleatorio);