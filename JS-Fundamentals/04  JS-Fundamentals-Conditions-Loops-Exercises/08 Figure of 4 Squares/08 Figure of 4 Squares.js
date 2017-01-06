function printFigureOfSquare([n]) {

    let N = Number(n);
    let rows = Number(5);
    let col = (2 * rows) - 1;
    if (rows % 2 == 0){
        rows -= 1;
    }

    for (let row = 0; row < rows; row++) {
        if(row % 2 == 0){
            let line = `+${'-'.repeat(N - 2)}+${'-'.repeat(N - 2)}+`;
            console.log(line);
        }else{
            let borders = parseInt((N - 3) / 2);
            if(borders >= 1){
                for (let i = 0; i < borders; i++) {
                    let line = `|${' '.repeat(N - 2)}|${' '.repeat(N - 2)}|`;
                    console.log(line);
                }
            }
        }
    }
}

printFigureOfSquare([4]);
console.log();
console.log();
printFigureOfSquare([5]);
console.log();
console.log();
printFigureOfSquare([6]);
console.log();
console.log();
printFigureOfSquare([7]);

