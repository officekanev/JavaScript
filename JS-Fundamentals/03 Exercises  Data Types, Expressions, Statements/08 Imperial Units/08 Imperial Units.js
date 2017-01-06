function convertInchesToFeet([inches]) {

    let resultGradus = parseInt(inches / 12).toString();
    let resultMinutes = inches % 12;

    console.log(`${resultGradus}'-${resultMinutes}"`);
}

convertInchesToFeet([36]);
convertInchesToFeet([55]);
convertInchesToFeet([11]);
