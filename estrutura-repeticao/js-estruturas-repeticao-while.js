const quantidadeDeNumeros = Number(prompt('Quantos números você quer somar?'))

let soma = 0
let i = 1

while(i <= quantidadeDeNumeros) { /* while --> Enquanto */

    soma += Number(prompt("Digite um número"))  /* += vai receber o valor dela, mais o número que foi digitado  */
    
    i++ /* A cada repetição, vai adicionar um 1 a variável "i" */
   
    console.log('O valor da soma é: ' + soma) /* Para vermos o que está sendo executado a cada repetição */
    console.log('O valor da variável i: ' + i) /* Para vermos o que está sendo executado a cada repetição */

}

alert('A soma dos números é: ' + soma)