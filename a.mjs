import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply (...a) {
    
    let minusCounter = 0;
    let multipliedNumbers = 1;
    let includesZero = 0;
    let includesInfinity = 0;
    
    for(let i = 0; i < arguments.length; i++){
        if(Number.isNaN(parseFloat(arguments[i]))){
            return NaN;
        }
        if(arguments[i][0] == "-"){
            minusCounter += 1;
        }
        if(arguments[i] == 0){
            includesZero += 1;
        }
    }

    if(includesZero > 0){
        return 0;
    } else if(includesInfinity > 0){
        if(Number.isInteger(minusCounter/2)){
            return Infinity;
        } else {
            return -Infinity;
        }
    }

    for(let i = 0; i < arguments.length; i++){
        multipliedNumbers *= arguments[i];
    }

    return multipliedNumbers;
}

console.log(multiply("Infinity", 1, -5, -3));


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.



//#endregion