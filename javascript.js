let currentInput = "";
let previousInput = "";
let operator = 0;
let previousOperator = 0;
let empty = "";

let eligibleOperators = ["+", "-", "*"];
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
    } else if (eligibleNumbers.includes(Number(event.key)) === true) {
        currentInput += (event.key);
        displayOutputWindow();
    }

    if (currentInput === empty && eligibleOperators.includes(event.key) === true){
        previousOperator = event.key ;
        displayOutputWindow();
    } else if (eligibleOperators.includes(event.key) === true) { 
        /*based on previous operator calculate and set event.key as previous operator*/
        calculate(previousOperator);
        previousOperator = event.key;
    }

    if (event.key){}

    switch(event.key) {
        case "Enter" || "=":
            calculate(previousOperator);
        break;
        case ".":
            currentInput += (event.key);
            displayOutputWindow();
        break;
        case "/":
            if (currentInput === empty || currentInput == 0 || previousInput === empty || previousInput == 0){
                previousInput = "Cannot divide with a 0";
                displayOutputWindow();
            } else (
                calculate(previousOperator);
            )

        break;
        case 3:

        break;
      }
    

}
)
        
        
        
let addition = () => previousInput = Number(currentInput) + Number(previousInput);
let subtraction = () => previousInput = Number(currentInput) - Number(previousInput);
let multiplication = () => previousInput =Number(currentInput) * Number(previousInput);
let divison = () => previousInput = Number(previousInput) / Number(currentInput);

function calculate(x){
    switch(x) {
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

function previousInputShown() {
    previousInput = previousInput.toFixed(2).replace(/[.,]00$/, ""); /* makes it display decimals only if it has decimals */
    console.log(typeof(previouInput));
    previousInput = String(previousInput); /* turns it from numbers to string */
    currentInput = "";
}
let displayOutputWindow = () => displayCurrent; displayPrevious;