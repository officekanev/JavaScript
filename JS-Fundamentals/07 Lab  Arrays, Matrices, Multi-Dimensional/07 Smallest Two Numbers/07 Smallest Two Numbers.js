function sortAndPrintFirstTwoSmallestNumber(input) {

    let orderedElement = input.map(Number)
        .sort((a, b) => a - b);
    console.log(orderedElement[0] + ' ' + orderedElement[1])
}

sortAndPrintFirstTwoSmallestNumber(['30', '15', '50', '5']);
sortAndPrintFirstTwoSmallestNumber(['3', '0', '10', '4', '7', '3']);
