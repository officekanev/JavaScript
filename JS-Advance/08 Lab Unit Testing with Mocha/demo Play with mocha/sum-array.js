function sum(arr) { // this function make someone operations
    let sum = 0;
    for(let  x of arr){
        sum += Number(x);
    }
    return sum;
}

module.exports = {sum}; // this model show same operations of the OUTSIDE world


