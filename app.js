const mathLine = document.getElementById ("calculator_panel_mathline");
const result = document.getElementById ("calculator_panel_result");
const calcButtcons = document.getElementById ("calculator_buttons");

calcButtcons.addEventListener("click", function(e) {
const button = e.target;
const buttonValue = button.textContent;

// if (buttonValue === "C") {
//     alert ("C");
// } else {
//     alert ("not C");
// }

mathLine.textContent = buttonValue;

})