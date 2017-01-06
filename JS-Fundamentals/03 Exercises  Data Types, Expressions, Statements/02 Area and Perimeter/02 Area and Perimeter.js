function calculateAreaPerimeter([a, b]) {

    [a,b] = [a, b].map(Number);

    let area = a * b;
    let perimeter = (2 * a) + (2 * b);

    if(area % 1 != 0){
        console.log(area.toFixed(2));
    }else{
        console.log(area);
    }

    if(perimeter % 1 != 0){
        console.log(perimeter.toFixed(2));
    }else {
        console.log(perimeter);
    }

}

calculateAreaPerimeter([2, 2]);
calculateAreaPerimeter([1, 3]);
calculateAreaPerimeter([2.5, 3.14]);