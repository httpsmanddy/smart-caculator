alert("digite dois numeros") 

firstNumber =  prompt("digite o primeiro numero")
secondNumber = prompt ("digite o segundo numero")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restdiv = firstNumber % secondNumber

alert(`a soma dos dois numeros e: ${sum}`)
alert(`a subtracao dos dois numeros e : ${sub}`)
alert(`a multiplicacao dos dois numeros e : ${mult}`)
alert(`a divisao dos dois numeros e : ${div}`)
alert(`o resto da divisao dos dois numeros e: ${restdiv}`)

if (sum % 2 === 0) {
  alert("a soma dos dois numeros e PAR: " + sum)
  
} else {
  alert("a soma dos dois numeros e IMPAR: " + sum)
}

if (firstNumber === secondNumber) {
  alert("os numeros inseridos sao iguais.")
  
} else {
  alert("os numeros inseridos sao diferentes.")
}

