// forma padrão de se utilizar

let num = [10, 20, 30, 40, 50]

for (i=0; i < num.length; i++) {
    console.log('i: ' + i) //imprime a posição do item no array
    console.log('num[i]: ' + num[i]) // imprime o valor daquela posição do array
}

// for in cria uma variavel que recebe os elementos retornados do array que vamos trabalhar. 

for (n in num) {
    console.log('n: ' + n) //imprime a posição do item no array
    console.log('num[n]: ' + num[n]) // imprime o valor daquela posição do array
}

for (n of num) {
    console.log('n of num: ' + n) //imprime o valor do array de cada index
}

// for of = retorna o valor dos elementos
// for in = retorna o index dos elementos