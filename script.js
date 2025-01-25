

let plus = document.getElementById("plus");
let divde = document.getElementById("divde");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let resultOutput = document.getElementById("result");


plus.addEventListener('click', () => {

    let result = +number1.value + +number2.value;
    resultOutput.innerText = "result= " + result;
})

divde.addEventListener('click', () => {
    let result = +number1.value / +number2.value;
    resultOutput.innerText = "result= " + result;
})


minus.addEventListener('click', () => {

    let result = +number1.value - +number2.value;
    resultOutput.innerText = "result= " + result;
})


multiply.addEventListener('click', () => {

    let result = +number1.value * +number2.value;
    resultOutput.innerText = "result= " + result;
})
















