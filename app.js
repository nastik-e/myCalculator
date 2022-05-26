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
// Хуита какая-то с этой кнопкой
        if (button.classList.contains("delete")) {
                                        console.log('до: ' + mathLine.textContent)
                                        console.log ('length ' + mathLine.textContent.length);
            //let lastNumber = mathLine.textContent [mathLine.textContent.length - 3];
            //                            console.log ('last ' + lastNumber);
            let newLine = mathLine.textContent.slice (0, mathLine.textContent.length - 3);
                                        console.log ('обрезанная ' + newLine);
            mathLine.textContent = newLine;
            console.log('new mathLine= ' + mathLine.textContent);

        }
})