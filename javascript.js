let currentInput = "";
let previousInput = "";
let operator = 0;

let eligibleOperators = ["+", "-", "*", "/"];
let eligibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let keypad = document.querySelector("#pad");
let buttons = document.querySelector(".buttons");
let operators = document.querySelector(".operators");

let currentInputDisplay = document.querySelector("#currentInput");
let previousInputDisplay = document.querySelector("#previousInput");

let displayCurrent = () => currentInputDisplay.textContent = currentInput+" "+eligibleOperators[operator];
let displayPrevious = () => previousInputDisplay.textContent = previousInput;


/* Mouse support */
keypad.addEventListener('click', (event) => {
    if (event.target.matches("#buttonsClear")){
        currentInput = "";
        previousInput = "";
        operator = 0;
        displayCurrent();
        displayPrevious();
    } 
});
keypad.addEventListener('click', (event) => {
    if (event.target.matches("#backspaceButton")){
        currentInput = currentInput.slice(0, -1);
        displayCurrent();
    } 
});
keypad.addEventListener('click', (event) => {
    if (event.target.matches("#buttonsEquals")){
        calculate();
    } 
});
keypad.addEventListener('click', (event) => {
    if (event.target.matches("#dot")){
        if (currentInput.includes(".")===false){
            currentInput += (".");
            displayCurrent();
    }
    } 
});

window.onclick = event => {
if (currentInput.includes(".")===true && (currentInput.length)-3 === currentInput.indexOf(".")){
    return;
    } else if (eligibleNumbers.includes(Number(event.target.innerText)) === true) {
        currentInput += (event.target.innerText);
        displayCurrent();
    }
} 


/*if (currentInput.includes(".")===true && (currentInput.length)-3 === currentInput.indexOf(".")){
    return;
    } else if (eligibleNumbers.includes(Number(text)) === true) {
        currentInput += (text);
        displayCurrent();
    }*/


/* Keyboard support */
window.addEventListener("keypress", event => {
    if (currentInput.includes(".")===true && (currentInput.length)-3 === currentInput.indexOf(".")){
    return;
    } else if (eligibleNumbers.includes(Number(event.key)) === true) {
        currentInput += (event.key);
        displayCurrent();
        }});
window.addEventListener("keydown", event => {
        console.log(event.key)
    if (event.key === "Backspace"){
        currentInput = currentInput.slice(0, -1);
        displayCurrent();
}
if (event.key === "."){
    if (currentInput.includes(".")===false){
        currentInput += (event.key);
        displayCurrent();
}
}
if (eligibleOperators.includes(event.key)===true){
    if (event.key === "/"){
        if (previousInput == 0 || currentInput == 0){
            previousInput = "Cannot divide with a 0";
            operator = eligibleOperators.indexOf(event.key);
            displayPrevious();
            displayCurrent();
            previousInput = "";
            currentInput = "";
        }
        else {
            operator = eligibleOperators.indexOf(event.key);
            calculate(operator);
            }
    } else {
    operator = eligibleOperators.indexOf(event.key);
    calculate(operator);
    }
}
if (event.key === "Enter" || event.key === "=") {  
    calculate();
}
});

let addition = () => previousInput = Number(currentInput) + Number(previousInput);
let subtraction = () => previousInput = Number(currentInput) - Number(previousInput);
let multiplication = () => previousInput =Number(currentInput) * Number(previousInput);
let divison = () => previousInput = Number(previousInput) / Number(currentInput);




function previousInputShown() {
    previousInput = previousInput.toFixed(2).replace(/[.,]00$/, ""); 
    previousInput = previousInput.replace(/-/g, "");
    /*Shows two decimal places only if there are decimals */

    previousInput = String(previousInput);
    currentInput = "";

    if (previousInput === "NaN"){
        previousInput = "Something went wrong..";
        displayPrevious();
        previousInput = "";
    } else {
        displayCurrent();
        displayPrevious();
    }
}




function calculate(){
    switch(operator) {
    case 0:
        addition();
        previousInputShown();
    break;
    case 1:
        subtraction();
        previousInputShown();
    break;
    case 2:
        multiplication();
        previousInputShown();
    break;
    case 3:
        divison();
        previousInputShown();
    break;
  }
}