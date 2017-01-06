// Write a JS function that calculates the area of the figure on the right by given values for w, h, W and H.
//     The lower right corner is always common for the two rectangles.
//     The input comes as array of string elements that need to be parsed as numbers.
//     The output should be returned as a result of your function.

function calculateNestedRectangleArea([widthOfSmallRectangle, heightOfSmallRectangle,
    WidthOfBigestRectangle, heightOfBigestRectangle ]) {

    let s1 = widthOfSmallRectangle * heightOfSmallRectangle;
    let s2 = WidthOfBigestRectangle * heightOfBigestRectangle;
    let s3 = Math.min(widthOfSmallRectangle, WidthOfBigestRectangle) * Math.min(heightOfSmallRectangle, heightOfBigestRectangle);

    let result = (s1 + s2) - s3;

    return result;
}

console.log(calculateNestedRectangleArea(['2', '4', '5', '3']));