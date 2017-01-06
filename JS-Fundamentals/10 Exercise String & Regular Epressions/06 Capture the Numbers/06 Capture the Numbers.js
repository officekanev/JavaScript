function captureNumbers(input) {

    let numbers = [];                          // way 1
    let regex = /\d+/g;
    let text = input;
    let match = '';
    for(let line of text){
        match = regex.exec(line);
        while(match){
            numbers.push(match[0]);
            match = regex.exec(line);
        }
    }

    console.log(numbers.join(' '));
}


// function captureNumbers(input) {
//     let nums = [];                                             // way 2
//     for (let line of input) {
//         let res = line.match(/\d+/g);
//         if(res) {
//             nums = nums.concat(res);
//         }
//     }
//
//     console.log(nums.join(' '));
// }



captureNumbers([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);

captureNumbers([
    '123a456',
    '789b987',
    '654c321',
    '0'
]);

captureNumbers([
    'Let’s go11!!!11!',
    'Okey!1!'
]);
