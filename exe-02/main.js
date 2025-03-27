/*
    2. Exportação Padrão

    Crie um módulo chamado `greeting.js` que contenha:

    - Uma função `greet(name)` que retorna a mensagem: `"Hello, {name}!"`.

    Depois, em outro módulo chamado `main.js`:

    1. Importe a função `greet` usando **exportação padrão**.
    2. Chame a função `greet` passando um nome e exiba a mensagem no console.

    Desafio: Tente renomear a função `greet` para outro nome ao importá-la.
*/

import greet from './greeting.js';

console.log(greet('Pedro'));
