/* 
  Exercícios práticos sobre Promises e async/await

  1º Exercício: Criando e manipulando Promises 

  Objetivo: Desenvolver uma função que simula uma operação 
  assíncrona para verificar se um número é par ou ímpar. 
  Use Promises para resolver ou rejeitar com base no resultado.

  Descrição:

  1. Crie uma função chamada `checkEvenNumber`.
  2. Use `setTimeout` para simular uma operação assíncrona que leva 2 segundos.
  3. Se o número for par, resolva a Promise com a mensagem `"O número é par!"`.
  4. Se o número for ímpar, rejeite a Promise com a mensagem `"O número é ímpar!"`.

  Exemplo de saída:
  ```jsx
  checkEvenNumber(4)
    .then((message) => console.log(message)) // O número é par!
    .catch((message) => console.log(message)) // Se fosse ímpar.

  ```
*/

function checkEvenNumber(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 === 0) {
        resolve('O número é par!');
      } else {
        reject('O número é ímpar!');
      }
    }, 2000);
  });
}

checkEvenNumber(3)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Fim da execução!');
  });
