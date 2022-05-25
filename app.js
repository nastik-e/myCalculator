const mathLine = document.getElementById ("calculator_panel_mathline");
const result = document.getElementById ("calculator_panel_result");
const calcButtcons = document.getElementById ("calculator_buttons");

let firstNumber = "";
let secondNumber = "";
let operator = "";

function resetVar() {
    firstNumber = "";
     secondNumber = "";
     operator = ""; 
}


calcButtcons.addEventListener ("click", function(e)  {
    const button = e.target;
    const buttonValue = button.textContent;

    if (buttonValue === "C") {
            resetVar() 
        mathLine.textContent = "";
        result.textContent = "";
    
    // } else if (button.classList.contains("delete")) {
    //     buttonValue = buttonValue.slice(0,1);
    
    } else if (button.classList.contains("number")) {
        if (operator.length > 0) {
            secondNumber = secondNumber + buttonValue;
        } else {
    firstNumber = firstNumber + buttonValue
    };

    } else if (button.classList.contains("operator")) {
    if (firstNumber.length === 0 || secondNumber.length !== 0) {
            return;
        }
        operator = buttonValue;

        //  точка
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

    mathLine.textContent = `${firstNumber} ${operator} ${secondNumber}`;

})