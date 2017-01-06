function aggregateElements(input) {

    let elements = input.map(Number);         // THIS IS NOT MY DECISION !!!

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++)
            val = func(val, arr[i]);
        console.log(val);
    }
}

aggregateElements([10, 20, 30]); // 60 1.833 102030
aggregateElements(['2', '4', '8', '16']); // 60 1.833 102030
aggregateElements(['2', '4', '8', '16']); // 60 1.833 102030

