function calcAggregates(arr) {
    let allOperations = [];
    let reduceSum = (a,b) => Number(a) + Number(b);
    let reduceMin = (a,b) => Math.min(a, b);
    let reduceMax = (a,b) => Math.max(a, b);
    let reduceProduct = (a,b) => Number(a) * Number(b);
    let reduceJoin = (a,b) => '' + a + b;

    allOperations.push(reduceSum,reduceMin,reduceMax,reduceProduct,reduceJoin);

    let out = [];
    for(let orerat of allOperations){

        let result = arr[0];
        for(nextElem of arr.slice(1)){
            result = orerat(result, nextElem)
        }
        out.push(result);
    }

    console.log("Sum = " + out[0]);
    console.log("Min = " + out[1]);
    console.log("Max = " + out[2]);
    console.log("Product = " + out[3]);
    console.log("Join = " + out[4]);
}

calcAggregates(['2', '3', '10', '5']);
calcAggregates(['5', '-3', '20', '7','0.5']);


// function calcAggregates(arr, reduce) {
//     let result = arr[0];
//     for(nextElem of arr.slice(1)){
//         result = reduce(result, nextElem)
//     }
//     return result;
// }
//
// console.log("Sum = " + calcAggregates(['2', '3', '10', '5'],(a,b) => Number(a) + Number(b)));
// console.log("Min = " + calcAggregates(['2', '3', '10', '5'],(a,b) => Math.min(a, b)));
// console.log("Max = " + calcAggregates(['2', '3', '10', '5'],(a,b) => Math.max(a, b)));
// console.log("Product = " + calcAggregates(['2', '3', '10', '5'],(a,b) => Number(a) * Number(b)));
// console.log("Join = " + calcAggregates(['2', '3', '10', '5'],(a,b) => '' + a + b));


