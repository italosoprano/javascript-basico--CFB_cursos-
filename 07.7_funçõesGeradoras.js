// uma função geradora, tem seu retorno adiado até o momento em que nós precisamos desse retorno. Pilar da programação assincrona, gerando uma promisse que pode ou não ser executada. 
// quando a função geradora e chamada primeiro momento ela gera um iterador, quando ela e chamada novamente ela gera um IELD. Ela só vai retornar os demais resultados quando ela for chamada novamente. 
// precisamos usar a palavra function* (com esse asterisco)

/*

MODELO BÁSICO DE FUNÇÃO GERADORA

function* cores() { // declaração da função geradora
    yield 'Vermelho' // yields que serão retornados quando chamados
    yield 'verde'
    yield 'azul'

}

const itc=cores() //iterador da função. 

//console.log(itc) --> Object [Generator] {} é uma função geradora que vai me retornar um yield. 
// para retornar os valores contidos na função cores() eu preciso chamar o iterador (itc), passar para ele qual o yield desejamos (next()), e especificar que queremos seu valor. Logo: 

console.log(itc.next().value) //vermelho
console.log(itc.next().value) // verde
console.log(itc.next().value) // azul
console.log(itc.next().value) // undefined

*/

/*

function* perguntas() {
    const nome = yield "Qual seu nome?"
    const idade = yield "Qual sua idade?"

    return "seu nome é " + nome + " você tem " + idade
}

const itp = perguntas()

console.log(itp.next().value) --> qual seu nome?
console.log(itp.next('italo').value) --> qual sua idade?
console.log(itp.next('28 anos').value) --> seu nome é italo você tem 28 anos

*/

// utilizando iteradores com loops

function* contador() {
    let i = 0
    while (true) {
        yield i++
        //if (i > n) break no caso. 
    }
}

const itc = contador()
for (i=0; i < 10 ; i++) {
    console.log(itc.next().value)
}

// caso usar laço for of é recomendado adicionar um break a função 