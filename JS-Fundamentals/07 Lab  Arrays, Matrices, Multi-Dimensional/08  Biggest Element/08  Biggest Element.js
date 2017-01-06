function biggestElemnt(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}

biggestElemnt(['20 50 10', '8 33 145']); // 145
biggestElemnt(['3 5 7 12', '-1 4 33 2', '8 3 0 4']); // 33
