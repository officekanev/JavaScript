function fibonaciii(input) {
    let result = [];
    let f0 = 0; let f1 = 1;
    for (var i = 0; i < Number(input); i++) {

        let fib = (function () {

            return function () {
                let oldf0 = f0;
                let oldf1 = f1;
                f0 = oldf1;
                f1 = oldf0 + oldf1;
                result.push(f0);
            }
        })();

        fib();
    }
    return result;
}

console.log(fibonaciii(15));
