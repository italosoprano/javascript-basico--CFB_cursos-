// quebra um array e devolve elemento a elemento. Pega os elementos de um array e retorna um a um. 

let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2]

console.log("n3 : " + n3)

// usando objetos que não são indexaveis. 
const player1 = {Nome: 'italo', energia: 100, vidas: 3, magia: 150}
const player2 = {Nome: 'Mochi', energia: 100, vidas: 5, Velocidade: 80}
const player3 = {...player1, ...player2}

console.log(player3)

// usando em uma soma de valores.
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 4, 5]

console.log(soma(...valores)) // ele somas os valores, porque ele considerou o valor dos numeros e não eles como um conjunto. Se não fosse o spread ('...') ele passaria todos os valores para o primeiro parametro da função.