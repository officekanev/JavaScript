function calculateConeVolumAndArea(data) {

    let coneRadius = data[0];
    let coneHeight = data[1];

    let areaBace = (Math.PI * coneRadius * coneRadius);
    let volumeOfCone = (areaBace * coneHeight) / 3;
    let S = Math.sqrt((coneRadius * coneRadius) + (coneHeight * coneHeight));
    let TotalConeArea = areaBace + (Math.PI * coneRadius * S);
    console.log('volume = ' + volumeOfCone.toFixed(4));
    console.log('area = ' + TotalConeArea.toFixed(4));
}

calculateConeVolumAndArea(['3', '5']);
calculateConeVolumAndArea(['3.3', '7.8']);