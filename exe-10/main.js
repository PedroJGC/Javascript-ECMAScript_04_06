/* 
  Exercícios práticos sobre Promises e async/await

  2º Exercício: Encadeando Promises

  Objetivo: Criar uma série de operações assíncronas encadeadas com `.then`.

  Descrição**:

  1. Desenvolva uma função `calculateSquare` que recebe um número e retorna a 
  Promise que resolve com o quadrado do número após 1 segundo.

  2. Crie outra função `addTen`, que recebe o resultado anterior e retorna 
  uma Promise que adiciona 10 ao número, levando mais 1 segundo.

  3. Encadeie essas funções usando `.then`.

  Exemplo de saída:
  ```jsx
  calculateSquare(3) // (3² = 9)
    .then((square) => addTen(square)) // (9 + 10 = 19)
    .then((result) => console.log(`Resultado final: ${result}`)); // Resultado final: 19

  ```
*/

function calculateSquare(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberSquare = value ** 2;
      console.log(`${value}² = ${numberSquare}`);
      resolve(numberSquare);
    }, 1000);
  });
}

function addTen(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberAdd = value + 10;
      console.log(`${value} + 10 = ${numberAdd}`);
      resolve(numberAdd);
    }, 1000);
  });
}

calculateSquare(3)
  .then((square) => addTen(square))
  .then((result) =>
    setTimeout(() => {
      console.log(`Resultado final: ${result}`);
    }, 1000)
  );
