// Write a JS function that calculates the distance between two points by given x and y coordinates. Use objects to store the two points.
//     The input comes as array of four string elements in the format [x1, y1, x2, y2] that need to be parsed as numbers. Each pair of
// elements are the coordinates of a point in 2D space.
//     The output should be returned as a result of your function.

function calculateDistanceBetweenPoints([x1, y1, x2, y2]) {

    let poit1Coord = {x1:x1, y1:y1};
    let poit2Coord = {x2:x2, y2:y2};

    return Math.sqrt(Math.pow((poit2Coord.x2 - poit1Coord.x1), 2) + Math.pow((poit2Coord.y2 - poit1Coord.y1), 2));
}

console.log(calculateDistanceBetweenPoints(['2', '4', '5', '0']));
console.log(calculateDistanceBetweenPoints(['2.34', '15.66', '-13.55', '-2.9985']));