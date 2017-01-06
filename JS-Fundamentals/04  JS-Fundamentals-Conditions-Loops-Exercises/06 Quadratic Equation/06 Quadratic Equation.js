function solveQuadraticEquation([a, b, c]) {

    [a, b, c] = [a, b, c].map(Number);

    let discriminant = (b * b) - (4 * a * c);

    // if(discriminant > 0){
    //     // b = -b;
    //     // console.log('b' + b);
    //     // console.log('Math.sqrt(discriminant)' + Math.sqrt(discriminant));
    //     // console.log('(b + Math.sqrt(discriminant)' + b + Math.sqrt(discriminant));
    //     // console.log('(2 * a)' + (2 * a));
    //     x1 = (b + Math.sqrt(discriminant)) / (2 * a);
    //     x2 = (b - Math.sqrt(discriminant)) / (2 * a);
    //     console.log(x1);
    //     console.log(x2);
    // }else if(discriminant == 0){
    //     b = -b;
    //     x = b / (2 * a);
    //     console.log(x)
    // }else {
    //     console.log('No')
    // }

    if (discriminant < 0) {
         console.log('No');
    } else if (discriminant > 0) {
        let rootA = (-b + Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
        let rootB = (-b - Math.sqrt((b * b) - 4 * a * c)) / (2 * a);

        if (rootA < rootB) {
            console.log(`${rootA}\n${rootB}`) ;
        }

        console.log(`${rootB}\n${rootA}`);
    } else {
        console.log((-b + Math.sqrt((b * b) - 4 * a * c)) / (2 * a));
    }
}

solveQuadraticEquation(['6', '11', '-35']);
solveQuadraticEquation(['1', '-12', '36']);
solveQuadraticEquation(['5', '2', '1']);
