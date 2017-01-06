function biggestNumbers([a, b, c]) {

    [a, b, c] = [a, b, c].map(Number);

    if(a > b){
        if(a > c){
            return a
        }

        return c

    }else if(a < b){
        if(b > c){
            return b
        }

        return c
    }else {
        if(b > c){
            return b
        }

        return c
    }
}

console.log(biggestNumbers(['5', '-2', '7']));
console.log(biggestNumbers(['130', '5', '99']));
console.log(biggestNumbers(['43', '43.2', '43.1']));
console.log(biggestNumbers(['5', '-5', '5']));
console.log(biggestNumbers(['-10', '-20', '-30']));