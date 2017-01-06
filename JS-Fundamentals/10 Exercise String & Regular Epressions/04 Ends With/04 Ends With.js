function checkStrings(input) {

    let text = input[0];
    let searchwodr = input[1];

    console.log(text.endsWith(searchwodr));
}

checkStrings(['This sentence ends with fun?', 'fun?']);
checkStrings(['This is Houston, we have…', 'We have…']);
