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

const clearData = function () {
  bottomDisplay.textContent = "";
  topDisplay.textContent = "";
  firstNumber = undefined;
  secondNumber = undefined;
  operatorSign = undefined;
  decimal.classList.remove("disabled");
};

const zeroDivision = function () {
  bottomDisplay.textContent = "Error";
  topDisplay.textContent = "";
  firstNumber = undefined;
  secondNumber = undefined;
  operatorSign = undefined;
};

let firstNumber;
let operatorSign;
let secondNumber;

const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
const decimal = document.getElementById(".");
bottomDisplay.textContent = "";

const digits = document.querySelectorAll(".digits button");
digits.forEach((button) => {
  button.addEventListener("click", () => {
    if (bottomDisplay.textContent === "Error") {
      bottomDisplay.textContent = "";
    }
    bottomDisplay.textContent += button.id;
    if (button.id === ".") {
      decimal.classList.add("disabled");
    }
  });
});

const operators = document.querySelectorAll(".operators button");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (bottomDisplay.textContent !== "") {
      decimal.classList.remove("disabled");
      if (operatorSign !== undefined) {
        firstNumber = +operate(
          operatorSign,
          firstNumber,
          Number(bottomDisplay.textContent)
        ).toFixed(2);
        // Zero Division
        if (firstNumber === Infinity) {
          zeroDivision();
          return;
        }
      } else {
        firstNumber = Number(bottomDisplay.textContent);
      }
      bottomDisplay.textContent = "";
      operatorSign = operator.id;
      topDisplay.textContent = `${firstNumber} ${operatorSign}`;
    }
  });
});

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  if (firstNumber !== undefined && operatorSign !== undefined) {
    secondNumber = Number(bottomDisplay.textContent);
    topDisplay.textContent += ` ${secondNumber} `;
    bottomDisplay.textContent = +operate(
      operatorSign,
      firstNumber,
      secondNumber
    ).toFixed(2);

    if (bottomDisplay.textContent === "Infinity") {
      zeroDivision();
      return;
    }
    if (!Number.isInteger(+bottomDisplay.textContent)) {
      decimal.classList.add("disabled");
    } else {
      decimal.classList.remove("disabled");
    }
    operatorSign = undefined;
  }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearData);
