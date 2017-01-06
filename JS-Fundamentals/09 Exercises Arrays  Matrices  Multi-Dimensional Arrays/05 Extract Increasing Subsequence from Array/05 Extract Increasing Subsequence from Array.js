function extractIncreaseSequence(input) {

    let array = input.map(Number);
    let currentMaxNumber = array[0];
    console.log(currentMaxNumber);

    for (let i = 1; i < array.length; i++) {
        if( array[i] >= currentMaxNumber ){
            console.log(array[i]);
            currentMaxNumber = array[i];
        }
    }
}

extractIncreaseSequence(['1', '3', '8', '4', '10', '12', '3', '2', '24']);
extractIncreaseSequence(['1', '2', '3', '4']);
extractIncreaseSequence(['20', '3', '2', '15', '6', '1']);
