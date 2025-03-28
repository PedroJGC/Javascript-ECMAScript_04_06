/* 
  Exercícios sobre `setTimeout`

  3. Exibição de Mensagem com Argumentos

  Escreva uma função chamada `welcomeMessage` 
  que receba um nome como argumento e exiba `"Bem-vindo, 
  [nome]!"` após 2 segundos. Teste a função passando 
  diferentes nomes como argumento.

  Exemplo de chamada:
  ```jsx
  welcomeMessage('Pedro'); // Após 2 segundos: "Bem-vindo, Pedro!"
  welcomeMessage('Ana'); // Após 2 segundos: "Bem-vindo, Ana!"
  ```
*/

function welcomeMessage(userName) {
  console.log(`Bem-vindo, ${userName}!`);
}

setTimeout(welcomeMessage, 2000, 'Pedro');
setTimeout(welcomeMessage, 2000, 'Ana');
