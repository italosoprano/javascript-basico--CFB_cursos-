// funções que nao tem um nome propriamente dita. Logo elas não podem ser chamada posteriormente. 
// elas funcionam exatamente como qualquer função, podem ter parametros (tanto definidos, quanto rest). 
// ela tem um tempo de execução imediata, logo que é escrita já executa seu codigo. 

//normalmente function soma(){}

// pode ser var ou let também, mas geralmente usa-se const para nao se alterar as definições. 

/*const s = function(...valores) {
    let res = 0

    for (v of valores){
        res += v
    }

    return res
}

console.log(s(2, 3)) */

// construtores dentro da função anônima. Ele serve para funções mais simples e precisa ser um pouco mais detalhado 

const f = new Function("v1", "v2", "v3", "return v1 + v2") //função construtor anônima

// deve se declarar new e Function com F maiusculo, dentro do parenteses, passar os parametros e retorno da função dentro de "aspas" com tudo todos os valores separados por ',', sendo que a string é um valor só.