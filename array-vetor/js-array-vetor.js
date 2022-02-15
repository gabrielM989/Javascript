/* Array é um conjunto de valores/posições ordenados, guarda os dados na memória, com as funções, você consegue solicitar os itens */
/* Pode ser uma lista de vetores */

/* var arr = new Array(5) */
/* var arr = [] --> Declaramos um Array vazio */

/* var valores = ['Gabriel', 'Almeida', 5, 6.9, 'Marques', 'Lucas', 'Pereira'] */ /* Pode colocar qualquer tipo de valor, dentro do Array */

/* console.log(valores.length) */ /* A propriedade .length mostra a quantidade de elementos que há dentro da Array */

/* console.log(valores[5]) */ /* com a propriedade [], é possível chamar o elemento que quiser, lembrando que começa com 0 */

let quantidadeDeNumeros = parseInt(prompt('Quantos números você deseja informar ? ')) /* vai guardar os números que o usuário informar */
/* o parseInt --> transforma o valor digitado em numérico */

const numeros = [] /* criação da variável "numeros" que é um Array vazio */

let i = 0 /* variável auxiliar, que terá o seu valor alterado no loop, para que em algum momento ele seja falso, para parar de executar */

while(i < quantidadeDeNumeros){
    let n = prompt('Digite o '+ (i + 1) + '- número')
    
    numeros.push(parseInt(n))  /* O push faz com que você inclua valores na Array */
    i++ /* incrementando a variável */
}

let soma = 0 /* São os contadores do laço de repetição */

for (let j = 0; j < numeros.length; j++) { /* numeros.length --> Para pegar as informações que estão dentro do Array*/
    soma += numeros[j] /* na primeira execução, o J valerá 0, na segunda, valerá 1, etc */
}
alert('A soma total é ' + soma)