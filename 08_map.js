/* 
Map é uma função que serve para trabalhar com todos os elementos de uma coleção e retornar algum valor ou modificação dos itens.
Não pode ser parado no meio, diferente de for loops.
map() recebe 1, 2 ou 3 parametros. 
1 - elemento que ele tá iterando
2 - indice do elemento iterado
3 - O proprio array que ele vai iterar

usa se uma arrow function dentro do .map()
para trabalhar com uma coleção de html é necessario usar o spread primeiro

*/

const cursos = ['html', 'css', 'javascript', 'php', 'react'] // coleção

cursos.map((el, i) => {
    console.log('Curso: ' + el + ' - Posição do curso ' + i)
})

/*
Trabalhando com coleção de elementos html. 

let x = document.querrySelectorAll(.classe)
x = [...x]

ou

let x = [...document.querrySelectorAll(.class)]

*/

/*
Usando o metodo direto para pegar cada elemento do array, sem usar spread

const el = document.querrySelectorAll(.classe)

const val = Array.prototype.map.call()

call() precisa receber: o Array que ele vai operar e uma função ou metodo pra ele operar a coleção.
para usar uma propriedade do elemento usa se {nomeDaPropriedade} Ex: {innerHtml}
*/

/*
Convertendo numeros usando map

const converterInt = (e) => parseInt(e)
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)

caso nao queira comprometer a primeira variavel, cria-se uma nova

const converterInt = (e) => parseInt(e)
let num = ['1', '2', '3', '4', '5']
let num2 = num.map(converterInt)
console.log(num2)

ou 

let num = ['1', '2', '3', '4', '5']
num.map((e) => {
    parseInt(e)
    console.log(e)
})

*/

