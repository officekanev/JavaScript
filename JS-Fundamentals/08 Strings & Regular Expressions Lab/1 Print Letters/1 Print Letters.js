function printLetter(input) {
    for (let i = 0; i < input[0].length; i++) {
        console.log(`str[${i}] -> ${input[0].charAt(i)}`);
    }
}

printLetter(['Hello, World!']);
printLetter(['SoftUni']);