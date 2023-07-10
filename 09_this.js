/*
uso de .this dentro de funções
o .this é uma variavel que indica que um elemento recebe um nome em decorrencia de outro elemento
no caso aabaixo o this indica que o this.macaco dentro da função está recebendo o macaco (do parametro) como valor. 

 */

const animal = (macaco) => {
    this.macaco = macaco

    console.log(macaco)
}

animal("babuino") // --> "Babuino"
