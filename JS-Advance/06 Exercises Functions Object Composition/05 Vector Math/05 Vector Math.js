let calculateVector = (function () {

    function add(vectA, vectB) {
        return [vectA[0] + vectB[0], vectA[1] + vectB[1]];
    }

    function multiply(vectA, num) {
        return[vectA[0] * num, vectA[1] * num];
    }

    function length(vect) {
        
    }
    return {add, multiply}
})();


console.log(calculateVector.add([1, 1], [1, 0]));
console.log(calculateVector.multiply([3.5, -2], 2));