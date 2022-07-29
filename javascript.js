



let input = "12 * 12";
let inputNoSpaces = input.replace(/ /g,'');

let inputArray = inputNoSpaces.split(""); /* inputArray has no spaces in it  */

console.log(inputArray);

let firstNumber;
let secondNumber;

let operatorPosition = -1; /* If operator is not found with indexOf its value is -1 */
let operator;

const operatorsArray = ["+", "-", "*" ,"/"];



/* On enter or = we need to check whether input is valid
in case input is valid we run calculator() function otherwise 
print out input is not valid try again*/





calculator() /* This will run on = or enter */
function calculator(){
    i=0;
    spinFourTimes = 0;
    operatorIndex = 0;
    while(spinFourTimes < 4){
    operatorPosition = inputArray.indexOf(operatorsArray[i]);
    
        if (operatorPosition > -1){
            operator = operatorsArray[i]; 
            operatorIndex = i; /* Based on operator index we can choose case as as to calculate */
            spinFourTimes = 4;
            }
    i++;
    spinFourTimes++;
    }
    firstNumber = inputNoSpaces.slice(0 ,operatorPosition); /* from start to operatorPosition */
    secondNumber = inputNoSpaces.slice(operatorPosition+1); /* from 1 position after operatorPosition */

    if (operatorPosition === -1){ /* In case there is no operator */
        console.log("No operator")
    } else {
    switch(operatorIndex) { /* in case of valid operator present it will do a calculation of two numbers based on operator */
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
          console.log("Error")
      }
    }
}




/* on input we will have to check number of operators if number is more than 1, pop last operator
by grabbing index of last operator */


/*
Rules

First place can only be a number nothing else.
There can only be one operator.
If there is one operator only numbers, = and backspace/erasing would be possible.
Backspace/erasing can only be done from rightmost place
*/


function checkSumIsValid(sum){
    if (sum === NaN)
    {
        /* Make it so it gives Sum is not a valid number */
    } else {
        /* return sum as input */
    }
}



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