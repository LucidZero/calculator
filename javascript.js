



let input = "11 + 12";
let inputNoSpaces = input.replace(/ /g,'');

let inputArray = inputNoSpaces.split(""); /* inputArray has no spaces in it  */

console.log(inputArray);

/*we will need to find lenght of first number
by looking at where the first operator is at */
let firstNumber;
let secondNumber;

/* We gotta find which spot in inputArray is operator, using that we can get other numbers */
let operatorPosition = -1;
let operator;

const operatorsArray = ["+", "-", "*" ,"/"]; /*Don't think theres a need to use this */

/* This function will determine where is operator in inputArray, and based on that we will be able to get 
first and second number */

calculator() /* This will run on = or enter */
function calculator(){
    i=0;
    operatorIndex = 0;
    while(operatorPosition <= -1){
    operatorPosition = inputArray.indexOf(operatorsArray[i]);
    
    if (operatorPosition > -1){
        operator = operatorsArray[i]; 
        
        operatorIndex = i; /* Based on operator index we can choose case as as to calculate */
        }
    i++;
    }
    firstNumber = inputNoSpaces.slice(0 ,operatorPosition); /* from start to operatorPosition */
    secondNumber = inputNoSpaces.slice(operatorPosition+1); /* from 1 position after operatorPosition */

    switch(operatorIndex) {
        case 0:
            addition(firstNumber, secondNumber)
          break;
        case 1:
            subtraction(firstNumber, secondNumber)
          break;
        case 2:
            multiplication(firstNumber, secondNumber)
         break;
        case 3:
            divison(firstNumber, secondNumber)
         break;
        default:
          // code block
      }
}




/* on input we will have to check number of operators if number is more than 1, pop last operator
by grabbing index of last operator */


/*
Rules

First place can only be a number nothing else.
There can only be one operator.
If there is one operator only numbers, + and backspace/erasing would be possible.
Erasing can only be done from rightmost place, so no just changing operators
*/






/* Operations */
function addition(firstNumber, secondNumber){
    sum = Number(firstNumber) + Number(secondNumber);
    console.log(sum);
    return sum;
}
function subtraction(firstNumber, secondNumber){
    sum = Number(firstNumber) - Number(secondNumber);
    console.log(sum);
    return sum;    
}
function multiplication(firstNumber, secondNumber){
    sum = Number(firstNumber) * Number(secondNumber);
    console.log(sum);
    return sum;   
}
function divison(firstNumber, secondNumber){
    sum = Number(firstNumber) / Number(secondNumber);
    console.log(sum);
    return sum;   
}