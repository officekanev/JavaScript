// Write a JS function that sums a variable number of prices and calculates their VAT (Value Add Tax, 20%).
// The input comes as array of string elements that need to be parsed as numbers. The number of elements will
// be different every time.
//     The output should be printed to the console on a new line for every entry.

function sumAndVat(input) {
     let sum = 0;

    for(let currentNumber of input){
        sum += Number(currentNumber);
    }

    let VAT = sum * 0.2; //Value Add Tax 20% of sum

    let total = sum + VAT;
    console.log('sum = '+ sum);
    console.log('VAT = ' + VAT);
    console.log('total = ' + total);
}

sumAndVat(['1.20', '2.60', '3.50']);
console.log();
sumAndVat(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);
