function printOrderedNumbers(input) {

    // let partOfCollection = Number(input[0]);
    // let collection = input.slice(1);
    // let lineOne = '';
    // let lineTwo = '';
    // for (let i = 0; i < partOfCollection; i++) {
    //     lineOne += collection[i] + ' ';
    //     lineTwo += collection[i + 1] + ' ';
    // }
    // console.log(lineOne);
    // console.log(lineTwo);


    input = input.map(Number);                  //  var 2
    let count = input[0];
    input.shift();

    console.log(input.slice(0, count));
    console.log(input.slice(Math.max(0, input.length - count), count + 1));
}

printOrderedNumbers(['2', '7', '8', '9']);
printOrderedNumbers(['3', '6', '7', '8', '9']);
