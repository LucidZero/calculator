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



keypad.addEventListener('click', (event) => {
    if (event.target.matches("#buttonsClear")){
            currentInput = "";
            previousInput = "";
            operator = "+";
            previousOperator = "+";
            displayCurrent();
            previousInputDisplay.textContent = "";
    } 
});



/* Keyboard support */
window.addEventListener("keydown", event => {
    if (currentInput.includes(".")===true && (currentInput.length)-3 === currentInput.indexOf(".")){

    } else if (eligibleNumbers.includes(Number(event.key)) === true) {
        currentInput += (event.key);
        displayOutputWindow();
    }
    if (currentInput === empty && eligibleOperators.includes(event.key) === true){
        previousOperator = event.key;
        displayOutputWindow();
    } else if (eligibleOperators.includes(event.key) === true) { 
        /*based on previous operator calculate and set event.key as previous operator*/
        calculate(previousOperator);
        previousOperator=event.key;
        displayOutputWindow();
    }

    switch(event.key) {
        case "Backspace":
            console.log(12)
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
            if (event.key === "."){
                if (currentInput.includes(".")===false){
                    currentInput += (event.key);
                    displayOutputWindow();
            }
        }
        break;
        case "/":
            testDivision();
        break;
      }
}
)      
let addition = () => previousInput = Number(previousInput) + Number(currentInput);
let subtraction = () => previousInput = Number(previousInput) - Number(currentInput);
let multiplication = () => previousInput = Number(previousInput) * Number(currentInput);
let division = () => previousInput = Number(previousInput) / Number(currentInput);

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
let displayOutputWindow = () => {displayCurrent(); 
displayPrevious();}

let clearFields = () => {currentInput = ""; 
previousInput = ""; 
previousOperator = "+";}


let testDivision = () =>  { if(currentInput === empty){
    previousOperator = "/";
    displayOutputWindow();
} else if (currentInput === "0" && previousInput === empty){
    calculate(previousOperator);
    previousOperator = "/";
    displayOutputWindow();
} else if (currentInput === "0"){
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