// Write a JS function that takes three numbers as input and outputs their sum.
//     The input comes as array of string elements that need to be parsed as numbers.
//     The output should be printed to the console.


function sumNumbers(input) {
    let result = 0;
    for (var i = 0; i < input.length; i++) {
       result += Number(input[i])
    }

    return result;
}

console.log(sumNumbers(['2', '3', '4']));
console.log(sumNumbers(['1.5', '1.5', '-1']));

