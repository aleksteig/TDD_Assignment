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
    let currentName = name.trim();
    let finalName = [];
    if(name.toString() != name){
        console.log("a");
        return null;
    }
    if(!/^[a-zA-Z0-9 ]*$/.test(name)){
        return null;
    }
    if(currentName[0].toUpperCase() != currentName[0]){
        finalName.push(currentName[0].toUpperCase())
    }
    for(let i = 1; i < currentName.length; i++){
        
        if(currentName[i-1] == ' '){
            finalName.push(currentName[i].toUpperCase())
        } else {
            finalName.push(currentName[i]);
        }

        if(arguments == ''){
            return '';
        }
    }
    if(arguments == ''){
        return '';
    } else {
        return finalName.join("");
    }

}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.



//#endregion