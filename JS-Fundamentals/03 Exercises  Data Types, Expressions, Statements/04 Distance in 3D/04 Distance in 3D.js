function calcDistanceBetweenTwoPointsInThreeDSpace([x, y, z, x1, y1, z1]) {

    [x, y, z, x1, y1, z1] = [x, y, z, x1, y1, z1].map(Number);

    let distanceBetwXandX1 = Math.abs(x - x1);
    let distanceBetwYandY1 = Math.abs(y - y1);
    let distanceBetwZandZ1 = Math.abs(z - z1);

    let distance = Math.sqrt((distanceBetwXandX1 * distanceBetwXandX1) +
        (distanceBetwYandY1 * distanceBetwYandY1) + (distanceBetwZandZ1 * distanceBetwZandZ1));

    console.log(distance)
}

calcDistanceBetweenTwoPointsInThreeDSpace([1, 1, 0, 5, 4, 0]);
calcDistanceBetweenTwoPointsInThreeDSpace([3.5, 0, 1, 0, 2, -1]);
