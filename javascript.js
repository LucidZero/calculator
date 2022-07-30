let currentInput;
let previousInput = 0;
let operator;
let numbers = document.querySelector(".buttons");

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
let eligibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let eligibleKeys = ["=", "+", "-", "*", "/", "Backspace"]


numbers.addEventListener("keydown")

/* Operations */
function addition(currentInput, previousInput){
    sum = Number(currentInput) + Number(previousInput);
    console.log(sum);
    return sum;
}
function subtraction(currentInput, previousInput){
    sum = Number(currentInput) - Number(previousInput);
    console.log(sum);
    return sum;    
}
function multiplication(currentInput, previousInput){
    sum = Number(currentInput) * Number(previousInput);
    console.log(sum);
    return sum;   
}
function divison(currentInput, previousInput){
    sum = Number(currentInput) / Number(previousInput);
    console.log(sum);
    return sum;   
}



