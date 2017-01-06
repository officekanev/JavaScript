function rowlSums(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));

    let firstRowSum = matrix[0].reduce((a, b) => a + b);
    for (let row = 1; row < matrix.length; row++) {
        let currentRowSum = matrix[row].reduce((a, b) => a + b);
        if(firstRowSum === currentRowSum)
            return true;

        return false
    }
}

console.log(rowlSums(
    ['4 5 6',
        '6 5 4',
        '5 5 5']
));

console.log(rowlSums(
    ['11 32 45',
        '21 0 1',
        '21 1 1']
));

console.log(rowlSums(
    ['1 0 0',
    '0 0 1',
    '0 1 0']));