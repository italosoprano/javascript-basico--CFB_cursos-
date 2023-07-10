// arrow functions ou funções lambdas são um mecanismo para representar uma função anonima.

// const soma = function (v1, v2) {return v1 + v2}
// pode ser let, mas em geral const
// nome = (parametros) => {comandos}. 

const soma = (v1, v2) => v1 + v2 // só uma linha de codigo não precisa de {}
console.log(soma(1, 2))

const nome = n => {return n} // se só tiver um parametro não precisa de ()
console.log(nome('italo'))

const add = n => n+10
console.log(add(5))

const soma2 = (...valores) => { // mais de uma linha de codigo precisa de {}
    let res = 0
    for (v of valores) {
        res += v
    }
    return res
} 
console.log(soma2(1, 2, 4, 3, 6, 7, 5))