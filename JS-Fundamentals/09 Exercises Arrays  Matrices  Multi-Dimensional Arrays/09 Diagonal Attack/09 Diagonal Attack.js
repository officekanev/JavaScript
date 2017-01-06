function diagonalAttack(matrixInput) {
    let matrix = matrixInput.map(r => r.split(' ').map(Number));
    let sumA = 0;
    for (let row = 0; row < matrix.length; row++) { // sum value of the elements of the left diagonal
        sumA += matrix[row][row];
    }

    let sumB = 0;
    for (let row = 0; row < matrix.length; row++) { // sum right diagonal
        sumB += matrix[row][matrix[0].length - 1 - row];
    }

    if (sumA == sumB) { // if sum diagonal == replace every digit of the cells who is not part of the
        for (let row = 0; row < matrix.length; row++) { // numbers who content of the diagonals
            for (let col = 0; col < matrix[0].length; col++) {
                if (row != col && col != matrix[0].length - 1 - row)
                    matrix[row][col] = sumA;
            }
        }
    }

    return matrix.map(r => r.join(' ')).join('\n');
}

console.log(diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
));

console.log(diagonalAttack(
    ['1 1 1',
        '1 1 1',
        '1 1 0']

));
