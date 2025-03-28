/* 
  Exercícios sobre `setInterval`

  1. Temporizador Decrescente

  Crie um código que faça um contador decrescente 
  de 10 até 0, exibindo cada número no console a cada 1 segundo. 
  Ao atingir 0, exiba a mensagem "Tempo esgotado!" e pare o 
  intervalo usando `clearInterval`.

  Desafio: Use uma condição no intervalo para verificar quando parar.
*/

let time = 10;

const countdown = setInterval(() => {
  console.log(time);
  time--;

  if (time === 0) {
    clearInterval(countdown);

    console.log('Tempo esgotado!');
  }
}, 1000);
