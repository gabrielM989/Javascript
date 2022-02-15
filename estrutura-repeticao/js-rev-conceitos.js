let a = parseInt(prompt('Digite um número'))  /* Você não pode declarar outra variável com o mesmo nome */
/* parseInt --> Vai pegar o valor e transformar em número inteiro */

let b = parseInt(prompt('Digite outro número'))

if (a > b){
    console.log(`%c O valor de a (${a}) é maior que o valor de b (${b})`, 'color: red') /* dá para aplicar propriedades do CSS dentro do JS, usando o %c */

}else if (a == b){ /* == para comparar se um valor é igual ao outro. === é pra ver se é idêntico */
    console.log(`%c O valor de a (${a}) é igual ao valor de b (${b})`, 'color:blue')

}else {
    console.log(`O valor de a(${a}) é menor que o valor de b (${b})`) 
}
