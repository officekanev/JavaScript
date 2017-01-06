// Write a JS function that counts how many times a specific letter occurs in a given string.
//     The input comes as array of string elements. The first element is the string to check
// and the second element is the letter to count.
//     The output should be returned as a result of your function.

function letterOccurences(input) {

    let countOccurence = 0;
    let targetCharacter = input[1];

    for (var i = 0; i < input[0].length; i++) {
        if(input[0].charAt(i) === targetCharacter){
            countOccurence++;
        }
    }

    return countOccurence;
}

console.log(letterOccurences(['hello', 'l']));
console.log();
console.log(letterOccurences(['panther', 'n']));