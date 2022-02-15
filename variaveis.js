
/* alert('Olá seja bem vindo ao meu site') */ /* Mostra uma mensagem de alerta na tela, pode ser aspas simples ou duplas, ou crases */

/* String  --> texto */
/* char --> caractere */
/* Boolean --> Verdareiro ou */



var idade = 22  /* nome de variável não pode começar com número */ 
var idade = '22' /* estamos redeclarando a variável, pegando o último valor que ela recebeu */
var idade = 202020/* estamos redeclarando a variável, pegando o último valor que ela recebeu */

console.log(idade) /* antes ela tinha o valor de 202020 */

idade = 50

console.log(idade) /* Agora ela está com o valor 50 */

// var, let ou const --> São os três tipos de variáveis

var nome = 'Gabriel' /* Não precisa declarar se é inteiro, real, etc */

console.log(nome)

nome = 'João' /* Não precisa redeclarar a variável, para dar uma nova atribuição */

console.log(nome)

/* {
    var nome = 'Gabriel'
    console.log(nome) /* Vai aparecer "Gabriel" */

/* }
console.log(nome )*/  /* Aqui também apareceu "Gabriel", quando declara uma variável do tipo VAR, ela funciona de nível global no código, sem haver restrições */


{
    let nome = 'Gabriel'
    console.log(nome) /* Vai aparecer "Gabriel" */

}
console.log(nome) /* Não aparece nada"porque quando declara uma variável do tipo LET, ela funciona com escopo de bloco */

const PI = 3.14 /* const é uma variável na qual o valor não irá mudar, tem uma convenção de usar letras maiúscular e separadas por anderline */

console.log(PI)

const IDADE_GABRIEL = 22
console.log(IDADE_GABRIEL)

let n1 = 10
let n2 = 20

console.log("A soma dos valores de n1 + n2 = " + (n1 + n2))

let texto1 = 'Bom'
let texto2 = 'dia'

console.log(texto1 + ' ' +  texto2)

let n3 = 5
let n4 = 15

console.log(`${n3} + ${n4} = ${n3 + n4 + 100}`) /* Com a crase, dá para fazer de uma forma mais "simplificada" a concatenação */

let sub = 5 - 3
console.log('O valor da subtração é de: ' + sub)

let subReal = 42.8 - 30.3
console.log('O valor da subtração quebrada é de: ' + subReal)

let multi = 5 * 5
console.log( "O valor da multiplização é de: " + multi)

let divisao = 10 / 2
console.log("O valor da divisão é de: " + divisao)
console.log(9.35 / 5 / 1.505)

let resultado = 5 + 3 * 2 - 6 / 3 /* Os operadores matemáticos têm precedência, sempre será feito primeiro a multiplicação e a divisão, depois a soma e a subtração */
console.log(resultado)

console.log(6 % 2) /*  % é para pegar o resto da divisão entre os números */

let a = 'Boa'
let b = 'noite'

console.log(a + ' ' + b)


/* let nomeDoUsuario = prompt("Qual é o seu nome ? ") */ /* Para aparecer uma mensagem ao usuário */
/* console.log(nomeDoUsuario) */

/* alert(`Olá, ${nomeDoUsuario}, prazer em te ter aqui conosco`) */ /* Para mostrar uma mensagem na tela */

let j = 5

console.log(j) // --> 5

j = j + 2 /* ou j += 2 */

console.log(j) // -->7

let n10 = 10

console.log(n10)

n10 *= 5

console.log(`n = ${n10}`) /* Ele fez 10 + 5 */

n10 /= 4 /*  n10 = n10/4 */

console.log(n10)

n10 -= 15
console.log(`n10 = ${n10}`)

