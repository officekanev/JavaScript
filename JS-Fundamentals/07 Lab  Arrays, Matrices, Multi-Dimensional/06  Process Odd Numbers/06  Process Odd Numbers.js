function takeNumberInOddIndexOf(input) {

    let filteredNumber = [];
    for (let i = 1; i < input.length; i+=2) {
        filteredNumber.unshift(input[i] * 2);
    }
    console.log(filteredNumber.join(' '))
}

takeNumberInOddIndexOf(['10', '15', '20', '25']);
takeNumberInOddIndexOf(['3', '0', '10', '4', '7', '3']);
