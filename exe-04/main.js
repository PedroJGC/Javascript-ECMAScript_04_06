/* 
  Exercícios sobre `setTimeout`

  1. Criação de uma Mensagem com Atraso

  Escreva um código que exiba três mensagens no console, 
  cada uma com um intervalo diferente:

  - Após 1 segundo, exibir: "Preparar..."
  - Após 2 segundos, exibir: "Apontar..."
  - Após 3 segundos, exibir: "Fogo!"

  Desafio: Use apenas três chamadas de `setTimeout` para 
  resolver este problema.
*/

setTimeout(() => {
  console.log('Preparar...');
}, 1000);

setTimeout(() => {
  console.log('Apontar...');
}, 2000);

setTimeout(() => {
  console.log('Fogo!');
}, 3000);
