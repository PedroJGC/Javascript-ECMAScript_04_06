/* 
  Exercícios práticos sobre Promises e async/await

   
*/

function checkEvenNumber(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 === 0) {
        resolve('O número é par!');
      } else {
        reject('Erro: O número é ímpar!');
      }
    }, 2000);
  });
}

function calculateSquare(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberSquare = value ** 2;
      // console.log(`${value}² = ${numberSquare}`);
      resolve(numberSquare);
    }, 1000);
  });
}

async function processNumber(number) {
  try {
    const message = await checkEvenNumber(number);
    console.log(message);

    const square = await calculateSquare(number);
    console.log(`O quadrado de ${number} é: ${square}`);
  } catch (error) {
    console.log(`Erro ${error}`);
  }
}

processNumber(4);
