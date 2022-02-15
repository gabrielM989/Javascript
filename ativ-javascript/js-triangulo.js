let n1 = parseFloat(prompt('Informe o primeiro comprimento do triângulo: '))
let n2 = parseFloat(prompt('Informe o segundo comprimento do triângulo: '))
let n3 = parseFloat(prompt('Informe o terceiro comprimento do triângulo:'))

if (n1 == n2 && n2 == n3){
    alert('O triângulo é Equilátero, possuindo todos os lados iguais')
}else if(n1 == n2 || n1 == n3){
    alert('O triângulo é Isóceles, possuindo pelo menos dois lados iguais')
}else if(n1 != n2 || n1 != n3){
    alert('O triângulo é Escaleno, possuindo cada lado uma medida')
}