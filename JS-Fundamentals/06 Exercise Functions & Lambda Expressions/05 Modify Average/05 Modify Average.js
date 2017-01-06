function modifyAverage([num]) {

    // let result = '';
    // let tempNumber = num;
    // let ready = false;
    // let newSum;
    // let count;
    // while(ready == false){
    //
    //     if(count != undefined){
    //         sumResult(newSum)
    //     }else{
    //         sumResult(tempNumber);
    //     }
    //     function sumResult(number) {
    //        let numberLength = number.length;
    //        let sum = 0;
    //        for (let i = 0; i < number.length; i++) {
    //            sum += Number(number[i]);
    //        }
    //
    //         if((sum / numberLength) > 5){
    //               result = number;
    //               ready = true;
    //         }else {
    //               newSum = number + '9';
    //              count = Number(1);
    //         }
    //
    //     }
    // }
    //
    // console.log(result);

    let sum = (a, b) => a + b;     //    var   2

    function average(arr) {
        let currentSum = 0;
        for (let n of arr) {
            currentSum = sum(currentSum, n);
        }

        return currentSum / arr.length;
    }

    let digits = num.split('').map(Number);
    while (average(digits) <= 5) {
        digits.push(9);
    }

    return digits.join('');


}

modifyAverage(['101']);
modifyAverage(['5835']);
