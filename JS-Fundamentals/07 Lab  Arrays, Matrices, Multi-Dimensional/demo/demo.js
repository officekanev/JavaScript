var matrix = [
    [4, -6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, -9, 12]
];

for (let row = 0; row < matrix.length; row++) {
    let str = '';
    for (let col = 0; col < matrix[row].length; col++) {
        str = str + ' ' + matrix[row][col];

    }
    console.log(str)
}

