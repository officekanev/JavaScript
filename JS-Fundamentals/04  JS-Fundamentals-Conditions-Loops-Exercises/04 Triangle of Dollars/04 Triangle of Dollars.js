function printTriangleOfDollars([number]) {

    let simbol = '$';
    for (let i = 1; i <= number; i++) {
        console.log(simbol.repeat(i));
    }
}

printTriangleOfDollars(['3']);
printTriangleOfDollars(['2']);
printTriangleOfDollars(['4']);
