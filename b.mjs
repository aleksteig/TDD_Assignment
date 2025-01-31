import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name){
    let currentName;
    if(typeof name == "string"){
        currentName = name.trim();
    } else {
        return null;
    }
    if(!/^[a-zA-Z0-9 ]*$/.test(name)){
        return null;
    }
    if(currentName == ''){
        return '';
    }
    let finalName = [];
    if(currentName[0].toUpperCase() != currentName[0]){
        finalName.push(currentName[0].toUpperCase())
    }
    for(let i = 1; i < currentName.length; i++){
        
        if(currentName[i-1] == ' '){
            finalName.push(currentName[i].toUpperCase())
        } else {
            finalName.push(currentName[i]);
        }

    }

    return finalName.join("");
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Name function");

// Valid inputs
tests.isEqual(formatName("apple bottom jeans"), "Apple Bottom Jeans", "Should return as Apple Bottom Jeans");
tests.isEqual(formatName("boots with the fur"), "Boots With The Fur", "Should return as Boots With The Fur");
tests.isEqual(formatName("with the fur"), "With The Fur", "Should return as With The Fur");

// Invalid inputs
tests.isEqual(formatName(0), null, 'Should return as null');
tests.isEqual(formatName("$¤o p aaaa s"), null, 'Should return as null');
tests.isEqual(formatName(' '), '', 'Should return as an empty string');

// Edge cases
tests.isEqual(formatName("  abc def ghi "), "Abc Def Ghi", "Should return as Abc Def Ghi");
tests.isEqual(formatName(Infinity), null, "Should return as null");
tests.isEqual(formatName(undefined), null, "Should return as null");
tests.isEqual(formatName(NaN), null, "Should return as null");
tests.isEqual(formatName(null), null, "Should return as null");

//#endregion