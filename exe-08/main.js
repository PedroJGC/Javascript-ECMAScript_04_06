/* 
  Exercícios sobre `setInterval`

  2. Atualização de Interface

  Escreva um código que altere o texto de um 
  elemento HTML com id `"timer"` a cada segundo 
  para exibir o tempo decorrido. Após 10 segundos, 
  pare o intervalo e exiba "Finalizado!" no elemento.

  Exemplo de saída no elemento:
  ```
  Tempo: 1 segundo
  Tempo: 2 segundos
  ...
  Finalizado!
  ```
*/

const timerElement = document.getElementById('timer');
let count = 0;

const elapsedTime = setInterval(() => {
  count++;
  // formatando a string de acordo com contador
  const timeFormatted = count === 1 ? 'Tempo: 1 segundo' : `Tempo: ${count} segundos`;
  timerElement.textContent = timeFormatted;

  if (count >= 10) {
    clearInterval(elapsedTime);

    timerElement.textContent = 'Finalizado!';
  }
}, 1000);

// console.log((timerElement.textContent = count));
