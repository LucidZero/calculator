let currentInput = "";
let previousInput = "";
let operator = "+";

let keypad = document.querySelector("#pad");
let buttons = document.querySelector(".buttons");
let operators = document.querySelector(".operators");




let currentInputDisplay = document.querySelector("#currentInput");
let previousInputDisplay = document.querySelector("#previousInput");



let displayCurrent = () => currentInputDisplay.textContent = currentInput;
let displayPrevious = () => currentInputDisplay.textContent = previousInput;



/* for numbers on keypress or click we write that number
into current input

on operator +-* or / we sum up current input with previous input

and write that operator in front of previous input number
will have to consider how to change it if they change their mind

on = we just sum current and previous with last operator

*/ 

/*calculator()  This will run on = or enter as well as operators*/
function calculator(){

}

/*object.addEventListener("keydown", myScript); */

/* eligible keys that can be pressed */

/*when we press one of the above buttons
add them into currentInput array */

/* Operations */


keypad.addEventListener('click', (event) => {
    if (event.target.matches("div")){
console.log("hi")

    } 

  })

window.addEventListener("keypress", event => {

    for (step = 0; step < 10; step++) {
if (event.key == step) {
    currentInput += (event.key);
    displayCurrent();
    }}
});


window.addEventListener("keydown", event => {
    console.log(event.key)
if (event.key === "Backspace"){
    currentInput = currentInput.slice(0, -1);
    displayCurrent();
}
if (event.key === "Enter"){
    /*make a switch statement where based on operator you*/
    displayCurrent();
    displayPrevious();
}
if (event.key === "."){
if (currentInput.includes(".")===false){
    currentInput += (event.key);
    currentInput.substring(currentInput.indexOf(".")+2,-1);
    displayCurrent();
}
}
});





let addition = () => Number(currentInput) + Number(previousInput);
let addsubtractionition = () => Number(currentInput) - Number(previousInput);
let multiplication = () => Number(currentInput) * Number(previousInput);
let divison = () => Number(currentInput) / Number(previousInput);



