function wordsToUpperCase([input]) {

    let matchElement = input.match(/\w+/g)
    console.log(matchElement.join(', ').toUpperCase());
}

wordsToUpperCase(['Hi, how are you?']);
wordsToUpperCase(['hello']);
