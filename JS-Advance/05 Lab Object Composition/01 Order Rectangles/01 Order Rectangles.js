function orderRects(data) {
    let rects = [];  // cretae output arr

    for(let [width, height] of data){  // iterate all input
        let rect = createRect(width, height); //  create new rectangle for every new couples using
        // function createRect(width, height)

        rects.push(rect); // & returned result push of the  rects[]
    }

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height, // who calculate & return otherArea.area() & rect.area()for every   02
            compareTo: function (otherArea) {  //  ( compareTo: )  ; she invoke function  area: ()                    01

                let result = otherArea.area() - rect.area();
                //      |- if result == 0; thats mean => otherArea.area() == rect.area();
                return result || (otherArea.width - rect.width); //<-------------------|
            }// if result == 0;  sort couples by their width in descending order---|
        };
        return rect;
    }

    rects.sort((a,b) => a.compareTo(b)); // finaly after fill all data we invoke function ( compareTo: )              00
    return rects;
}

console.log(orderRects([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]));


















































































