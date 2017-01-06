function extractText(input) {

    if(Array.isArray(input))
        input = input[0];

    let result = [];
    let startIndex = input.indexOf('(');
    while (startIndex > -1) {
        let endIndex = input.indexOf(')', startIndex);
        if (endIndex == -1)
            break;
        let snippet = input.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = input.indexOf('(', endIndex);
    }

    console.log(result.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);
