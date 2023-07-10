// são funções parametrizadas, mas com parametros do tipo rest.
// forma de passagem de parametro no qual você não precisa especificar a quantidade de parametros que serão passados para dentro da função.
// a seguir um exemplo de uma função que soma valores, mas ao invés de somar 2 ou 3 valores, ela soma quantos valores forem passados pra ela.
// os parametros são passados, iniciando por um spread ('...') e uma variavel.
// como trata se de uma variavel, é necessario o uso de um laço de repetição para realizar a soma desses itens. 
// sempre usar o nome do array passado no parametro para referenciar o array com os valores que estamos utilizando.
// dar preferencias para laço for of. 
/* EX: soma(...valores) / for (let v of valores) {
    res = 0
    for (let v of valores) {
        res += valores[i]
    }

}*/

function soma(...valores) { //o parametro que eu passei é um array. 
    let res = 0

    for (let v of valores) {
        res += v
    }
    return res // me retorna o comprimento do meu parametro. 
}

console.log(soma(10, 2, 3, 5, 675, 837, 92, 27, 673, 6))