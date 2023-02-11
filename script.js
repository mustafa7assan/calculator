"use strict";
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

let firstNumber;
let operatorSign;
let secondNumber;

const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
bottomDisplay.textContent = "";

const digits = document.querySelectorAll(".digits button");
digits.forEach((button) => {
  button.addEventListener("click", () => {
    bottomDisplay.textContent += button.id;
  });
});

const operators = document.querySelectorAll(".operators button");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    firstNumber = Number(bottomDisplay.textContent);
    bottomDisplay.textContent = "";
    operatorSign = operator.id;
    topDisplay.textContent = `${firstNumber} ${operatorSign}`;
  });
});

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  secondNumber = Number(bottomDisplay.textContent);
  topDisplay.textContent += ` ${secondNumber} `;
  bottomDisplay.textContent = operate(operatorSign, firstNumber, secondNumber);
});
