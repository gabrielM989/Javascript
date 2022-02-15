let n1 = parseInt(prompt("Informe o primeiro número: "))
let n2 = parseInt(prompt('Informe o segundo número: '))
 let auxiliar = n1

alert("O valor do primeiro número é: " + n1)
alert(`O valor do segundo número é ${n2}`)

n1 = n2
alert("Agora o valor do primeiro número é o: " + n1)

n2 = auxiliar
alert("Agora o valor do segundo número é o: " + n2)