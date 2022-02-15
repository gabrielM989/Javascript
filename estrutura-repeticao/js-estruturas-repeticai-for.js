const quantidadeDeNumeros = Number(prompt('Quantos números você quer somar?'))

let soma = 0

for(let a = 0; a < quantidadeDeNumeros; a++){

    console.log('Valor de a = ' + a)

    soma += parseFloat(prompt(`Digite o ${a + 1}) número`))

    console.log('Valor de soma = ' + soma)

}

alert('A soma dos números é: ' + soma)