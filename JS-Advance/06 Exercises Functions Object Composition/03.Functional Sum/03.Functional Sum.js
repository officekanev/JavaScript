function solve() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }
    add.valueOf = () => sum;
    return add()
}

let add = solve();
console.log(add(10)(1)(-3));



// let add =(function () {
//     let total = 0;
//     return function sum(a) {
//         total += a;
//         sum.toString = () => total;
//         return sum;
//     }
// })();
//
// // console.log(add(1));
// console.log(add(1)(6)(-3));