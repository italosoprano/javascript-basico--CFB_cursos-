// funções que retornem um valor.
// Usando return dentro da função ela nos retorna uma valor requisitado, porem ela não imprimi na tela, a menos que o comando de impressão seja passado na chamada.
// só um return pode ser retornado por vez. Ele enterrompe o codigo e retorna o que foi passado.

let a = 2
let b = 3

function soma01() {
    return a + b;
}

console.log(soma01())
