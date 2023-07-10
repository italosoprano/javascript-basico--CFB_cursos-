// break = quebra o loop dentro do bloco assim que ele encontra esse comando. Geralmente vem dentro de um if(). 
// continue = pula a execução de um codigo, mas continua o proximo da fila. 

let n = 0

let max = 10
let pares = 0

/*while(n < max) {
    console.log(n)
    n++
}*/

for(let i=n; i < max; i++) {
    if(i%2!=0){
        continue
    }
    pares++
}

console.log(pares) // ele resulta em 5 porque toda vez que ele der um numero impar, ele vai pular a execução do codigo para aquele numero e seguir para o proximo. 
