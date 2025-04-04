/* 
  Promises
*/

function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona.
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve('A operação foi concluída!');
      } else {
        reject('Algo deu errado!');
      }
    }, 3000); // Simula uma operação que leva 3 segundos.
  });
}

// Visualizando que o retorno é uma promise.
// console.log(asyncFunction());

asyncFunction()
  .then((response) => {
    console.log('Sucesso:', response);
  })
  .catch((error) => {
    console.log('Erro:', error);
  })
  .finally(() => {
    console.log('Fim da execução.');
  });
