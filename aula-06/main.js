/* 
  Usando classes nos módulos
*/

import { Calc } from '../aula-06/calc.js';

const calc = new Calc();

console.log(calc.name);
console.log(`A soma de 4 + 6 = ${calc.sum(4, 6)}`);
console.log(`A multiplicação de 4 * 6 = ${calc.multiply(4, 6)}`);
