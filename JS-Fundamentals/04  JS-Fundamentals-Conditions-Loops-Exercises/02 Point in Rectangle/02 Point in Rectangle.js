function pointInRectangle([x, y, xMin, xMax, yMin, yMax]) {

    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number);

    if((x >= xMin & x <= xMax) && (y >= yMin & y <= yMax)){
        return 'inside'
    }

    return 'outside'
}

console.log(pointInRectangle(['8', '-1', '2', '12', '-3', '3']));
console.log(pointInRectangle(['12.5', '-1', '2', '12', '-3', '3']));
