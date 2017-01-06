function insideVolume(coordinates) {
    coordinates = coordinates.map(Number);

    for (let i = 0; i < coordinates.length; i+=3) {
        let x = coordinates[i];
        let y = coordinates[i + 1];
        let z = coordinates[i + 2];

        console.log(isInsideVolume(x, y, z) ? 'indise' : 'outside');
    }

    function isInsideVolume(x, y, z, boxX = 50, boxY = 80, boxZ = 50) {
        return x >= 0 && y >= 0 && z >= 0 && x <= boxX && y <= boxY && z <= boxZ;
    }
}

insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);













































































