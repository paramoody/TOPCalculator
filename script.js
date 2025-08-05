let num1 = '';
let num2 = '';
let operator = '';
let answer = '';
let textBox = document.querySelector('#text_box');
let numBtns = document.querySelectorAll('.numBtn');
let opBtns = document.querySelectorAll('.opBtn');
let equalBtn = document.querySelector('#equalBtn');
let clearOnNext = false;
let lastClickOp = false;

numBtns = Array.from(numBtns);
opBtns = Array.from(opBtns);
console.log(numBtns);

numBtns.forEach((button) =>
  button.addEventListener('click', () => {
    lastClickOp = false;
    let inputValue = button.textContent;
    if (inputValue == 'clear') {
      textBox.value = '';
      answer = '';
      num1 = '';
      num2 = '';
      operator = '';
      return;
    }
    if (answer) {
      textBox.value = '';
    }
    if(clearOnNext){
        textBox.value = '';
        clearOnNext = false;
    }
    textBox.value += inputValue;
  })
);
opBtns.forEach((button) =>
  button.addEventListener('click', () => {
    
    if (operator){
        if(lastClickOp){
            operator = button.textContent;
            return;
        }else{
            num2 = Number(textBox.value);
            answer = operate(num1, num2, operator);
            operator = button.textContent;
            textBox.value = answer;
            prepareNextOperation();
            clearOnNext = true;
            lastClickOp = true;
            return;

        }
    }
    operator = button.textContent;
    if(answer){
        answer = '';
        //textBox.value = '';
        clearOnNext = true;
        lastClickOp = true
        return;
    }
    if (num1 == '') {
      num1 = Number(textBox.value);
      //textBox.value = '';
      clearOnNext = true;
      lastClickOp = true;
    } else {
      num2 = Number(textBox.value);
      answer = operate(num1, num2, operator);
      textBox.value = answer;
      prepareNextOperation();
      lastClickOp = true;
    }
  })
);

equalBtn.addEventListener('click', () => {
    if (!operator) return;
  num2 = Number(textBox.value);
  answer = operate(num1, num2, operator);
  textBox.value = answer;
  prepareNextOperation();
  operator = '';
  clearOnNext = true;
});

function prepareNextOperation() {
  num1 = answer;
  num2 = '';
  //answer = '';
}
function operate(num1, num2, operator) {
  if (operator == '+') {
    return add(num1, num2);
  } else if (operator == '-') {
    return subtract(num1, num2);
  } else if (operator == 'X') {
    return multiply(num1, num2);
  } else if (operator == '/') {
    return divide(num1, num2);
  }
}
function add(a, b) {
  let result = a + b;
  console.log(result);
  return result;
}
function subtract(a, b) {
  let result = a - b;
  console.log(result);
  return result;
}
function multiply(a, b) {
  let result = a * b;
  console.log(result);
  return result;
}
function divide(a, b) {
    if (b == 0){
         alert("You cannot divide by zero you buffoon")
        return 0;
        }
  let result = a / b;
  console.log(result);
  return Math.round(result * 100) / 100;
}
