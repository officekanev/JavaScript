function sumFirstLastElement(input) {

    let arr = input.map(Number);
    return input[0] +  input[input.length - 1];
}

console.log(sumFirstLastElement(['20', '30', '40']));
console.log(sumFirstLastElement(['5', '10']));
