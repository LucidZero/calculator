let currentInput = "";
let previousInput = "";
let previousOperator = "+";
let savePreviousInput = "";
let empty = "";

let eligibleOperators = ["+", "-", "*"];
let eligibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let keypad = document.querySelector("#pad");
let buttons = document.querySelector(".buttons");
let operators = document.querySelector(".operators");

let currentInputDisplay = document.querySelector("#currentInput");
let previousInputDisplay = document.querySelector("#previousInput");

let displayCurrent = () => currentInputDisplay.textContent = currentInput;
let displayPrevious = () => previousInputDisplay.textContent = previousInput + " " + previousOperator;

/* Mouse support*/
keypad.addEventListener('click', (event) => {
    if (event.target.matches("#buttonsClear")){
            currentInput = "";
            previousInput = "";
            previousOperator = "+";
            displayCurrent();
            previousInputDisplay.textContent = "";
    } 
});
window.onclick = event => {
    numbersAndOperators(event.target.textContent);
}
/* Keyboard support */
window.addEventListener("keydown", event => {
    numbersAndOperators(event.key);
}
)
/* this here does actual math of the calculator */
let addition = () => previousInput = Number(previousInput) + Number(currentInput);
let subtraction = () => previousInput = Number(previousInput) - Number(currentInput);
let multiplication = () => previousInput = Number(previousInput) * Number(currentInput);
let division = () => previousInput = Number(previousInput) / Number(currentInput);
/* This here is used to calculate based on operator */
function calculate(x){
    switch(x) {
    case "+":
        addition();
        previousInputShown();
    break;
    case "-":
        subtraction();
        previousInputShown();
    break;
    case "*":
        multiplication();
        previousInputShown();
    break;
    case "/":
        division();
        previousInputShown();
    break;
  }
}

function previousInputShown() {
    previousInput = previousInput.toFixed(2).replace(/[.,]00$/, ""); /* makes it display decimals only if it has decimals */
    console.log(typeof(previouInput));
    previousInput = String(previousInput); /* turns it from numbers to string */
    currentInput = "";
    displayOutputWindow();
}
/* keeps whats displayed up to date */
let displayOutputWindow = () => {displayCurrent(); 
displayPrevious();}
/*this here is responsible for testing if its divisible due to zeros */
let testDivision = () =>  { if(currentInput === empty){
    previousOperator = "/";
    displayOutputWindow();
} else if (currentInput === "0" && previousInput === empty){
    calculate(previousOperator);
    previousOperator = "/";
    displayOutputWindow();
} else if (currentInput === "0" || currentInput === "0.0" || currentInput === "0." || currentInput === ".00" || currentInput === ".0"){
    savePreviousInput = previousInput;
    previousInput = "Cannot divide with a 0";
    currentInput = "";
    displayOutputWindow();
    previousInput = savePreviousInput;
} else {
    calculate(previousOperator);
    previousOperator = "/";
    displayOutputWindow();
}
}
/* This here is used to for calculating based on enter, =, undoing numbers, placing a dot as well as
making sure to divide properly*/
function testOperations (keyEvent){
switch(keyEvent) {
    case "Backspace":
        currentInput = currentInput.slice(0, -1);
        displayOutputWindow();
    break;
    case "DEL":
        currentInput = currentInput.slice(0, -1);
        displayOutputWindow();
    break;
    case "Enter":
        if (previousOperator === "/"){
            testDivision();
        } else {
        calculate(previousOperator);}
    break;
    case "=":
        if (previousOperator === "/"){
            testDivision();
        } else {
        calculate(previousOperator);}
    break;
    case ".":
        if (keyEvent === "."){
            if (currentInput.includes(".")===false){
                currentInput += (keyEvent);
                displayOutputWindow();
        }
    }
    break;
    case "/":
        testDivision();
    break;
  }
}
/* this here makes sure numbers and operators are typed in and displayed correctly */
let numbersAndOperators = (event) => {    if (currentInput.includes(".")===true && (currentInput.length)-3 === currentInput.indexOf(".")){

} else if (eligibleNumbers.includes(Number(event)) === true) {
    currentInput += (event);
    displayOutputWindow();
}
if (currentInput === empty && eligibleOperators.includes(event) === true){
    previousOperator = event;
    displayOutputWindow();
} else if (eligibleOperators.includes(event) === true) { 
    calculate(previousOperator);
    previousOperator=event;
    displayOutputWindow();
}
testOperations(event);
}