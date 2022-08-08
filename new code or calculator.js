let currentInput = "";
let previousInput = "";
let operator = 0;
let previousOperator = 0;
let empty = "";

let eligibleOperators = ["+", "-", "*", "/"];
let eligibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let keypad = document.querySelector("#pad");
let buttons = document.querySelector(".buttons");
let operators = document.querySelector(".operators");

let currentInputDisplay = document.querySelector("#currentInput");
let previousInputDisplay = document.querySelector("#previousInput");

let displayCurrent = () => currentInputDisplay.textContent = currentInput;
let displayPrevious = () => previousInputDisplay.textContent = previousInput + " " + eligibleOperators[operator];



/* Keyboard support */
window.addEventListener("keypress", event => {
    if (currentInput.includes(".")===true && (currentInput.length)-3 === currentInput.indexOf(".")){
    return;
    } 
    else if (eligibleNumbers.includes(Number(event.key)) === true) {
        currentInput += (event.key);
        displayCurrent();
    }
    if (currentInput === empty){
        

    } 
    else{
        if (event.key ===  "Enter" || event.key === "="){
            /* calculate based on previousOperator and attach now attach operator to be previous operator
            if current input is 0 and user selects an operator just change previous operator */
        }
    }

}
)
        
        
        
        ;