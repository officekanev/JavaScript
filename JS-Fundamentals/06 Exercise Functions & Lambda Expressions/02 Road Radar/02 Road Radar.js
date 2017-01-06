function roadRadar([speed, kindRoad]) {

    function getLimit(zone) {
        switch (zone) {
            case 'motorway' : return 130;
            case 'interstate' : return 90;
            case 'city' : return 50;
            case 'residential' : return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if(overSpeed <= 0){
            return false;
        }else if(overSpeed >= 1 && overSpeed <= 20){
            return 'speeding';
        }else if(overSpeed >= 20 && overSpeed <= 40){
            return 'excessive speeding';
        }else if(overSpeed >= 40){
            return 'reckless driving';
        }
    }

    let limit = getLimit(kindRoad);
    let infraction = getInfraction(speed, limit);

    if(infraction){
        console.log(infraction);
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
