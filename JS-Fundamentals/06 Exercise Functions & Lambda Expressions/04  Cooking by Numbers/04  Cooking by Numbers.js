function cookingByNumbers(input) {

    // let startNumber = Number(input[0]);
    //
    // for (let i = 1; i < input.length; i++) {
    //     startNumber = executeComands(startNumber, input[i]);
    //     console.log(startNumber);
    // }
    //
    // function executeComands(number, comand) {
    //     switch (comand) {
    //         case 'chop' : return number / 2;
    //             break;
    //         case 'dice' : return Math.sqrt(number);
    //             break;
    //         case 'spice' : return ++number;
    //             break;
    //         case 'bake' : return number * 3;
    //             break;
    //         case 'fillet' : return number - ((number * 20) / 100);
    //             break;
    //         default: break;
    //     }
    // }


    let cook = (num, func) => func(num);  // var 2
    let chop = n => n / 2;
    let dice = n => Math.sqrt(n);
    let spice = n => ++n;
    let bake = n => n * 3;
    let fillet = n => n * 0.80;

    let num = Number(input[0]);
    input = input.splice(1, input.length - 1);

    for (let operation of input) {
        switch (operation) {
            case 'chop':
                num = cook(num, chop);
                break;
            case 'dice':
                num = cook(num, dice);
                break;
            case 'spice':
                num = cook(num, spice);
                break;
            case 'bake':
                num = cook(num, bake);
                break;
            default:
                num = cook(num, fillet);
                break;
        }
        console.log(num);
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
