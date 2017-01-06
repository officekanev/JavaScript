function calcDistanceBetweenTwoObjects([speedOne, speedTwo, time]) {

    [speedOne, speedTwo, timeinSeconds] = [speedOne, speedTwo, time].map(Number);

    let distanceBetweenObjects = Math.abs((speedOne * 1000) - (speedTwo * 1000));
    let resultdistanceOfTwoObjects = distanceBetweenObjects * (timeinSeconds / 3600);
    console.log(resultdistanceOfTwoObjects)
}

calcDistanceBetweenTwoObjects([0, 60, 3600]);
calcDistanceBetweenTwoObjects([11, 10, 120]);
calcDistanceBetweenTwoObjects([5, -5, 40]);