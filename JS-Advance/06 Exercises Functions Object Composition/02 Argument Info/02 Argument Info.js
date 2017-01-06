function extractData() {
     let countElements = {};
    for (var i = 0; i < arguments.length; i++) {
        var type = typeof arguments[i];

        countElements[type] != undefined ? countElements[type]++ : countElements[type] = 1;
        console.log(type + ': ' + arguments[i]);
    }

    let sorted = [...Object.keys(countElements)]
        .sort((a,b) => countElements[b] - countElements[a])
        .forEach(element => console.log(element + " = " + countElements[element]));
}

extractData('cat', 42, function () { console.log('Hello world!'); });

console.log(typeof {test: 'asd'});





// function argumentInfo() {
//     let passedArgs = {};
//
//     for (let i = 0; i < arguments.length; i++) {
//         let argType = typeof arguments[i];
//         passedArgs[argType] != undefined ? passedArgs[argType]++ : passedArgs[argType] = 1;
//         console.log(`${argType}: ${arguments[i]}`);
//     }
//
//     let sorted = [...Object.keys(passedArgs)]
//         .sort((a, b) => passedArgs[b] - passedArgs[a])
//         //.forEach(item => console.log(`${item} = ${passedArgs[item]}`)); // tova ne minava
//
//      .forEach(item => console.log(item + ' = ' + passedArgs[item])); // tova minava
// }
//
// argumentInfo('cat', 42, function () { console.log('Hello world!'); });
//
// console.log(typeof {test: 'asd'});
//  console.log(`${typeof {test: 'asd'}}`);










// function agregateLine(input) {
//   let data = new Map();
//     myFunc(input);
//   function myFunc() {
//       for (var i = 0; i < input.length; i++) {
//           let obj = arguments[i];
//           let type = typeof obj
//           console.log(type + ': ' + obj);
//           if(!data.has(type)){
//               data.set(obj, Number(1));
//           }else {
//              let oldValue = Number(data.get(obj));
//               ++oldValue;
//               data.set(obj, oldValue);
//           }
//       }
//   }
// }
//
// agregateLine("result('cat', 42, function () { console.log('Hello world!'); })");