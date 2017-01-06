function checkStrings(input) {

    let text = input[0];
    let searchwodr = input[1];

    console.log(text.startsWith(searchwodr));
}

checkStrings(['How have you been?', 'how']);
checkStrings(['The quick brown fox…', 'The quick brown fox…']);
