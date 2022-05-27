const mathLine = document.getElementById ("calculator_panel_mathline");
const result = document.getElementById ("calculator_panel_result");
const calcButtcons = document.getElementById ("calculator_buttons");

let firstNumber = "";
let secondNumber = "";
let operator = "";




calcButtcons.addEventListener ("click", function(e)  {
    const button = e.target;
    const buttonValue = button.textContent;

    if (buttonValue === "C") {
            resetVar() 
        result.textContent = "";
    
   } else if (button.classList.contains("delete")) {
        if (secondNumber.length > 0) {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        } else if (operator.length > 0) {
        operator = "";
        } else {
        firstNumber = firstNumber.slice(0, secondNumber.length - 1);
        }    
    showMathLine()
  
    }  else if (button.classList.contains("number")) {
        if (operator.length > 0) {
            secondNumber = secondNumber + buttonValue;
            showMathLine()
        } else {
    firstNumber = firstNumber + buttonValue
    showMathLine()
    }

    } else if (button.classList.contains("operator")) {
    if (firstNumber.length === 0 || secondNumber.length !== 0) {
            return;
        }
        operator = buttonValue;
        showMathLine()

    } else if (buttonValue === ".") {
        let number
            if (operator.length > 0) {
                number = secondNumber;
            } else {
                number = firstNumber;
            }

        if (number.length = 0 || number.includes(".")) {
            return;
        }
        if (operator.length > 0) {
            secondNumber = secondNumber + buttonValue;
        } else {
    firstNumber = firstNumber + buttonValue
    showMathLine()
        }


    } else if (buttonValue === "=") {
        if (secondNumber.length === 0) {
            return; 
        }

        firstNumber = +firstNumber;
        secondNumber = +secondNumber;
 
        if (operator === "/") {
            result.textContent = firstNumber / secondNumber;
        } else if (operator === "*") {
            result.textContent = firstNumber * secondNumber;
        } else if (operator === "-") {
            result.textContent = firstNumber - secondNumber;
        } else if (operator === "+") {
            result.textContent = firstNumber + secondNumber;
        } else if (operator === "%") {
            result.textContent = firstNumber / 100 * secondNumber;
        }

     resetVar()
        }
        
    function resetVar() {
        firstNumber = "";
         secondNumber = "";
         operator = ""; 
         mathLine.textContent = "";
    }

    function showMathLine() {
        mathLine.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
    
})

