function printNthElementOfArray(input) {

    let collections = input;
    let NthIndex = Number(collections.pop());
    for (let i = 0; i < collections.length; i+= NthIndex) {
       console.log(collections[i]);
    }
}

printNthElementOfArray(
    ['5',
        '20',
        '31',
        '4',
        '20',
        '2'
    ]);

printNthElementOfArray(
    ['dsa',
        'asd',
        'test',
        'tset',
        '2'
    ]);

printNthElementOfArray(
    ['1',
        '2',
        '3',
        '4',
        '5',
        '6'
    ]);
