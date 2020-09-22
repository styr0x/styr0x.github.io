//Variabler
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const result = document.getElementById("result")
const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract") 
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")
const clrButton = document.getElementById("clr")

addButton.addEventListener("click", add)
subtractButton.addEventListener("click", subtract)
multiplyButton.addEventListener("click", multiply)
divideButton.addEventListener("click", divide)
clrButton.addEventListener("click", clr)



function add() {
    result.value = parseFloat(number1.value) + parseFloat (number2.value)

    if (isNaN(result.value)) {
        alert("Please enter a number, not a letter")
        clr();
    }
}

function subtract() {
    result.value = parseFloat(number1.value) - parseFloat (number2.value)

    if (isNaN(result.value)) {
        alert("Please enter a number, not a letter")
        clr();
    }
}

function multiply() {
    result.value = parseFloat(number1.value) * parseFloat (number2.value)

    if (isNaN(result.value)) {
        alert("Please enter a number, not a letter")
        clr();
    }
}

function divide() {
    result.value = parseFloat(number1.value) / parseFloat (number2.value)

    if (isNaN(result.value)) {
        alert("Please enter a number, not a letter")
        clr();
    }
}

 function clr() {
    result.value = ""
    number1.value = ""
    number2.value = ""
}

