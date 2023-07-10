/*
Operadores que se utilizam de calculos bit a bit dos valores numericos. 
Funcionam similares aos operadores ternarios (&&, ||, !, porém para o valor em bits).
& ('e') = retorna 1 se a combinação dos valores em bits for ambos 1.
| ('pipe') = se ao menos 1 dos bits for 1, ele me retorna um bit 1.
^ (XOR) = só retorna 1 se tiver um valor diferente e um deles for 1 ex: 1 1 = 0 \ 0 0 = 0 \ 0 1 = 1.
<< ou >> (descolamento de bits para esquerda ou direita) = desloca uma quantidade de bits para direita ou esquerda. Os bits retirados são substituidos por 0's. Pra esquerda ele dobra uma quantidade de vezes, pra fica pela metade. 
*/


let n1 = 11
let n2 = 14

let res = n1 & n2

console.log(res)