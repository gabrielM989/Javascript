/* Métodos é uma sequência de códigos, que nós organizamos, para agilizar a resolução de algum problema */
/* Método --> Junta linhas de códigos, para não deixar o código muito extenso */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr)

arr.push(60) /* push --> adiciona o valor no final do Array */
console.log(arr)

arr.unshift(30) /* unshift --> adiciona o valor no início do Array */
console.log(arr)

arr[arr.length - 1] = undefined /* Pegou o último item do Array e tirou o valor do mesmo, o undefined faz com que a posição não exista */
console.log(arr)

/* maneira menos verbosa */

arr.pop() /* Elimina o último valor, de vez */
console.log(arr)

arr[0] = undefined /* Para eliminar o primeiro elemento */
console.log(arr)

arr.shift() /* Elimina o último valor, de vez */
console.log(arr)

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let valor of arr2) { /* Não precisa da incrementação e nem da expressão lógica */
    /* para cada valor do Arrey, irá executar os códigos abaixo */
    /* o primeiro "valor" será o número 1 --> primeiro elemento da Array */

    console.log(valor ** 2) /* elevou os números ao quadrado */

}
 

for (let i = 0; i < arr2.length; i++){ /* Dá o mesmo efeito do for of */
    console.log(i)

}