function calculateNumberOfBoxes(data) {

    let numberOfBottles =  data[0];
    let boxCapacity =  data[1];

    console.log(Math.ceil(numberOfBottles / boxCapacity));
}

calculateNumberOfBoxes(['20', '5']);
calculateNumberOfBoxes(['15', '7']);
calculateNumberOfBoxes(['5', '10']);