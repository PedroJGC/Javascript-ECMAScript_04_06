/* 
  Exercícios sobre `setTimeout`

  2. Temporizador com Ação Cancelada

  Crie um temporizador usando `setTimeout` que exiba 
  "Iniciando processo..." após 5 segundos. Porém, cancele 
  esse temporizador antes que a mensagem seja exibida, 
  utilizando `clearTimeout`.

  Desafio: Faça o cancelamento acontecer após 3 segundos.
*/

const processing = setTimeout(() => {
  console.log('Iniciando processo...');
}, 5000);

setTimeout(() => {
  clearInterval(processing);

  console.log('Processo cancelado...');
}, 3000);
