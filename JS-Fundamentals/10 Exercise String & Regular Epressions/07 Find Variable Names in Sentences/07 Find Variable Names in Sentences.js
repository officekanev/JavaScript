function variableNameInSentence(input) {

    let regex = /\b(\_[a-zA-Z0-9]+)\b/g;
    let text = input;
    let matching = [];
    for(let line of text){
        match = regex.exec(line);
        while(match){
            matching.push(match[1].substring(1, match[1].length));
            match = regex.exec(line);
        }
    }

    console.log(matching.join(','));
}

variableNameInSentence(['The _id and _age variables are both integers.']);
variableNameInSentence(['Calculate the _area of the _perfectRectangle object.']);
variableNameInSentence(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']);
