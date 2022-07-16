let input = 123 + 123;

let inputArray = text.split("");


/*we will need to find lenght of first number
by looking at where the first operator is at */
let firstNumber;
let secondNumber;

/* We gotta find which spot in inputArray is operator, using that we can get other numbers */
let operator;

const operatorsArray = ["+", "-", "*" ,"/"]; /*Don't think theres a need to use this */


function getValues{

}




/*
Rules

First place can only be a number nothing else.
There can only be one operator.
If there is one operator only numbers, + and backspace/erasing would be possible.
Erasing can only be done from rightmost place, so no just changing operators
*/






/* Operations */
function addition(firstNumber, secondNumber){
    sum = firstNumber + secondNumber;
    return sum;
}
function subtraction(firstNumber, secondNumber){
    sum = firstNumber - secondNumber;
    return sum;    
}
function multiplication(firstNumber, secondNumber){
    sum = firstNumber * secondNumber;
    return sum;   
}
function divison(firstNumber, secondNumber){
    sum = firstNumber / secondNumber;
    return sum;   
}