function rotateArrayNthTimes(input) {

    let array = input;
    let numberOfRotation = array.pop();
    for (let i = 0; i < numberOfRotation; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotateArrayNthTimes(['1', '2', '3', '4', '2']);
rotateArrayNthTimes(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
