let asteriscos = ''

console.log('--- FOR ---')
for(let i = 1; i <=10; i++){
    asteriscos += '*' 
    document.write(asteriscos + '<br>')

}

asteriscos = '' /* está retribuindo o valor a ela */
let i = 1

while(i <= 20){ /* para fazer a pirâmide diminuir */

    if(i <= 10){
        asteriscos += '*'
    } else{
        asteriscos = asteriscos.slice(0, asteriscos.length -1) /* .slice --> faz com que tire um pedaço */
    }
    document.write(asteriscos + '<br>')
    i++
}


/* Resolução FOR, encontrada na internet */

/* let tamanho = 10

for (let a = 1; a < tamanho; a++) {

    for (b = 1; b <= a; b++) {
        document.write("*")

    }

     document.write(" <br> ")
 

}
document.write(" <br> ")
 */








