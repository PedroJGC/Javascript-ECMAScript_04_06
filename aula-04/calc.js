/* 
  Renomeando as exportações
*/

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export { sum as sumTwoNumbers, multiply };
