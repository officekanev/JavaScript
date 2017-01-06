function sortArray(input) {

    let result = input.sort()//sort array of strings, by length of element in ascending
        .sort((a, b) => a.length - b.length);// sort alphabetical value in ascending order

    console.log(result.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma']);
console.log();
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log()
sortArray(['test', 'Deny', 'omen', 'Default']);
