let currentInput = "";
let previousInput = "";
let operator = 0;
let eligibleOperators = ["+", "-", "*", "/"];

let keypad = document.querySelector("#pad");
let buttons = document.querySelector(".buttons");
let operators = document.querySelector(".operators");




let currentInputDisplay = document.querySelector("#currentInput");
let previousInputDisplay = document.querySelector("#previousInput");



let displayCurrent = () => currentInputDisplay.textContent = currentInput;
let displayPrevious = () => previousInputDisplay.textContent = previousInput;



/* for numbers on keypress or click we write that number
into current input

on operator +-* or / we sum up current input with previous input

and write that operator in front of previous input number
will have to consider how to change it if they change their mind

on = we just sum current and previous with last operator

*/ 


/*object.addEventListener("keydown", myScript); */

/* eligible keys that can be pressed */

/*when we press one of the above buttons
add them into currentInput array */

/* Operations */


keypad.addEventListener('click', (event) => {
    if (event.target.matches("#buttonsClear")){
        currentInput = "";
        previousInput = "";
        operator = "+";
        displayCurrent();
        displayPrevious();
    } 

  })




window.addEventListener("keypress", event => {
    if (currentInput.includes(".")===true && (currentInput.length)-3 === currentInput.indexOf(".")){
    return;
    } else{
    for (step = 0; step < 10; step++) {

    if (event.key == step) {
        currentInput += (event.key);
        displayCurrent();
        }}}
    });


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
    operator = eligibleOperators.indexOf(event.key);
    switch(operator) {
        case 0:
            addition();
            calculate();
        break;
        case 1:
            subtraction();
            calculate();
        break;
        case 2:
            multiplication();
            calculate();
        break;
        case 3:
            divison();
            calculate();
        break;
          
      }
}

if (event.key === "Enter"){
    
    previousInput = Number(previousInput) + Number(currentInput); /*here we calculate */
    calculate();
}


});





let addition = () => previousInput = Number(currentInput) + Number(previousInput);
let subtraction = () => previousInput = Number(currentInput) - Number(previousInput);
let multiplication = () => previousInput =Number(currentInput) * Number(previousInput);
let divison = () => previousInput = Number(currentInput) / Number(previousInput);



function calculate() {
previousInput = previousInput.toFixed(2).replace(/[.,]00$/, ""); 
/*Shows two decimal places only if there are decimals */

previousInput = String(previousInput);

currentInput = "";

displayCurrent();
displayPrevious();}