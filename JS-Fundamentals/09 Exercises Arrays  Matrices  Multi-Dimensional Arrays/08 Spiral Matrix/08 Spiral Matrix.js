function generateSpiralMatrix([input]) {

    [rows, cols] = input.split(' ').map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }

    let top = 0; //           top  represent current row
    let bottom = rows - 1; // las row of the dimension
    let left = 0; //          left = col 0
    let right = cols - 1; //  right = col.length - 1

    let index = 1;  //        this digit is paste in every cell
    let direction = 0;  //    define on who switch direction is enter fo fill digit
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) { // fill of left to right all cells of one ROW
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) { // fill digit  of all ROW
                    matrix[row][right] = index++;          //  start of last Cow &  topRow to bottomRow
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {// fil number start of last Row last Col to first Col
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) { // start of last Row  & Col[0]  & fill digit in direction
                    matrix[row][left] = index++;         //  top Rol & Col[0]
                }
                left++;
                direction++;
                break;
        }
    }

    let printMatrix = matrx => console.log(matrx.map(r => r.join(" ")).join('\n')); // print MATRIX
    printMatrix(matrix);
}

generateSpiralMatrix(['5 5']);
