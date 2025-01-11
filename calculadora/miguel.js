let currentInput = "";
let currentOperation = null;
let firstOperand = null;

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = currentInput;
}

function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  currentOperation = null;
  firstOperand = null;
  updateDisplay();
}

function setOperation(operator) {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if (currentInput !== "") {
    calculate();
    firstOperand = parseFloat(currentInput);
  }

  currentOperation = operator;
  currentInput = "";
}

function calculate() {
  if (currentOperation && firstOperand !== null) {
    const secondOperand = parseFloat(currentInput);
    if (isNaN(secondOperand)) {
      currentInput = "Error"; // Handle invalid input
      updateDisplay();
      return;
    }

    switch (currentOperation) {
      case "+":
        currentInput = (firstOperand + secondOperand).toString();
        break;
      case "-":
        currentInput = (firstOperand - secondOperand).toString();
        break;
      case "*":
        currentInput = (firstOperand * secondOperand).toString();
        break;
      case "/":
        if (secondOperand !== 0) {
          currentInput = (firstOperand / secondOperand).toString();
        } else {
          currentInput = "Error"; // Division by zero
        }
        break;
      default:
        currentInput = "Error"; // Invalid operation
        break;
    }

    firstOperand = null;
    currentOperation = null;
    updateDisplay();
  }
}

// Event listeners for buttons (assuming buttons have appropriate IDs)
document.getElementById("btn-1").addEventListener("click", () => appendNumber(1));
document.getElementById("btn-2").addEventListener("click", () => appendNumber(2));
document.getElementById("btn-3").addEventListener("click", () => appendNumber(3));
document.getElementById("btn-4").addEventListener("click", () => appendNumber(4));
document.getElementById("btn-5").addEventListener("click", () => appendNumber(5));
document.getElementById("btn-6").addEventListener("click", () => appendNumber(6));
document.getElementById("btn-7").addEventListener("click", () => appendNumber(7));
document.getElementById("btn-8").addEventListener("click", () => appendNumber(8));
document.getElementById("btn-9").addEventListener("click", () => appendNumber(9));
document.getElementById("btn-0").addEventListener("click", () => appendNumber(0));
document.getElementById("btn-decimal").addEventListener("click", appendDecimal);
document.getElementById("btn-clear").addEventListener("click", clearDisplay);
document.getElementById("btn-plus").addEventListener("click", () => setOperation("+"));
document.getElementById("btn-minus").addEventListener("click", () => setOperation("-"));
document.getElementById("btn-multiply").addEventListener("click", () => setOperation("*"));
document.getElementById("btn-divide").addEventListener("click", () => setOperation("/"));
document.getElementById("btn-equal").addEventListener("click", calculate);

