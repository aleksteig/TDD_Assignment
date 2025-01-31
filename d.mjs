import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if(guess == Infinity || guess == -Infinity || target == Infinity || target == -Infinity){
        return "Not finite";
    }
    if(!Number.isFinite(target) || !Number.isFinite(guess)){
        return null;
    }

    if(target > guess){
        return "Too low";
    } else if(target < guess){
        return "Too high";
    } else {
        return "Correct!"
    }

}


//#endregion

//#region Tests --------------------------------------------------------------------

const tests = test("Guess number function");

// Basic cases
tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Invalid inputs

tests.isEqual(guessNumber("aa", 10), null, "If target is aa and guess is 10, return null");
tests.isEqual(guessNumber(10, "aa"), null, "If target is 10 and guess is aa, return null");
tests.isEqual(guessNumber(10, []), null, "If target is 10 and guess is [], return null");
tests.isEqual(guessNumber(10, undefined), null, "If target is 10 and guess is undefined, return null");
tests.isEqual(guessNumber(10, NaN), null, "If target is 10 and guess is NaN, return null");
tests.isEqual(guessNumber(10, null), null, "If target is 10 and guess is null, return null");

// Edge cases

tests.isEqual(guessNumber(10, Infinity), "Not finite", "If target is 10 and guess is Infinity, return Not finite");
tests.isEqual(guessNumber(10, -Infinity), "Not finite", "If target is 10 and guess is Infinity, return Not finite");

//#endregion
