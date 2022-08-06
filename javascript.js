let currentInput = [];
let previousInput = [];
let operator;

let keypad = document.querySelector("#pad");
let buttons = document.querySelector(".buttons");
let operators = document.querySelector(".operators");

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
let eligibleKeys = ["=", "+", "-", "*", "/", "Backspace", "."]

/*when we press one of the above buttons
add them into currentInput array */

/* Operations */


let test;

keypad.addEventListener('click', (event) => {
    if (event.target.matches("div")){
console.log("hi")

    } 

  })

window.addEventListener("keypress", event => {

    for (step = 0; step < 10; step++) {
if (event.key == step) {
    console.log(event.key);
    }}



});


let addition = () => (currentInput) + (previousInput);
let addsubtractionition = () => (currentInput) - (previousInput);
let multiplication = () => (currentInput) * (previousInput);
let divison = () => (currentInput) / (previousInput);



