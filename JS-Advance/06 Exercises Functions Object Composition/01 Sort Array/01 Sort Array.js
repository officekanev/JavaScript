function sort(arays, comands) {

    if(comands === "asc"){
        asc : (arays).sort(function (a,b) {return a - b});
    }else {
        desc : (arays).sort(function (a,b) {return b - a});
    }
    return arays;
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
console.log(sort([14, 7, 17, 6, 8], 'desc'));