// funções aninhadas são o uso de funções dentro de outras funções. 
// nesse caso vamos criar uma arrow function dentro de outra arrow function
// a função somar me retorna o valor de res. 
// e a função soma me retorna o valor da operação realizada pela função soma.
// ou seja, uma função (soma), quando chamada, chama outra função (somar), que realiza um calculo matematico e retorna um valor após finalizar. 

const soma = (...valores) => {
    const somar =  val => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(4, 5, 3, 6, 3, 7))