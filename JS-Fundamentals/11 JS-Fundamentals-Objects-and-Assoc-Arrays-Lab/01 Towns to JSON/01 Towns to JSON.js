function parseObjectToJSON(input) {

    let data = input.slice(1);
    let outputArray = [];
    for(let line of data){
        let [empty, townName, latitude, longitude] = line.split(/\s*\|\s*/);
        let obj = {
            Town: townName,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };
        outputArray.push(obj)
    }
    console.log(JSON.stringify(outputArray));
}

parseObjectToJSON([
    'Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);

parseObjectToJSON([
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]);

parseObjectToJSON([
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ]);