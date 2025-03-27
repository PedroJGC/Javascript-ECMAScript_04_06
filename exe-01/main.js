/*
    1. Exportação Nomeada

    Crie um módulo chamado `math.js` com as seguintes funções:

    - `add(a, b)` que retorna a soma de `a` e `b`.
    - `subtract(a, b)` que retorna a subtração de `b` de `a`.
    - `multiply(a, b)` que retorna a multiplicação de `a` e `b`.

    Depois, em outro módulo chamado `main.js`:

    1. Importe apenas as funções `add` e `multiply` usando **exportação nomeada**.
    2. Calcule e exiba os resultados da soma e multiplicação com valores de sua escolha no console.

    Desafio: Teste o comportamento quando tentar usar a função `subtract` sem importá-la.
*/

import { add, multiply } from './math.js';

console.log(`4 + 2 = ${add(4, 2)}`);
console.log(`4 x 2 = ${multiply(4, 2)}`);

// Quando não é feita a exportação gera o seguinte erro: "Uncaught ReferenceError: subtract is not defined"
// console.log(`4 - 2 = ${subtract(4, 2)}`);
