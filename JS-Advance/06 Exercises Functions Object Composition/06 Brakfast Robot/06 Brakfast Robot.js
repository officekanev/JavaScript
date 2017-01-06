// let robot = (function () {
//     let resources = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
//     let recipes = {
//         apple: {carbohydrate: 1, flavour: 2},
//         coke: {carbohydrate: 10, flavour: 20},
//         burger: {carbohydrate: 5, fat: 7, flavour: 3},
//         omelet: {protein: 5, fat: 1, flavour: 1},
//         cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
//     };
//
//     function restock(element, quantity) {
//         resources[element] += Number(quantity);
//         return 'Success';
//     }
//
//     function prepare(recipe, quantity) {
//         for (let element of Object.keys(recipes[recipe])) {
//             let totalQuantity = recipes[recipe][element] * quantity;
//             if (resources[element] < totalQuantity) {
//                 return `Error: not enough ${element} in stock`;
//             }
//         }
//
//         for (let element of Object.keys(recipes[recipe])) {
//             resources[element] -= recipes[recipe][element] * Number(quantity);
//         }
//
//         return 'Success';
//     }
//
//     function report() {
//         return [...Object.keys(resources)]
//             .map(e => e + '=' + resources[e])
//             .join(' ');
//     }
//
//     return function commandProcessor(input) {
//         let tokens = input.split(/ /);
//         let commandName = tokens.shift();
//         let args = tokens;
//         switch (commandName) {
//             case 'prepare':
//                 return prepare(...args);
//                 break;
//             case 'restock':
//                 return restock(...args);
//                 break;
//             default:
//                 return report();
//                 break;
//         }
//     }
// })();
//
// console.log(robot('restock flavour 50'));



let executeOperations = (function () {

    let availableIngredients = { proteine: Number(0), carbohydrate: Number(0), fat: Number(0), flavour: Number(0)};

    function restock(ingredients, quantity) {
     availableIngredients[ingredients] += quantity;
        return 'Success';
    }

    function report() {
        return [...Object.keys(availableIngredients)]
            .map(element => `${element}=${availableIngredients[element]}`)
            .join(' ');
    }

    function apple(quantity) {
       let carbohydrate = Number(1);
       let flavour = Number(2);
        if(carbohydrate * quantity > availableIngredients.carbohydrate){
            return 'Error: not enough carbohydrate in stock';
        }else if(flavour * quantity > availableIngredients.flavour){
            return 'Error: not enough flavour in stock';
        }else{
            availableIngredients.carbohydrate -= carbohydrate * quantity;
            availableIngredients.flavour -= flavour * quantity;
            return 'Success';
        }
    }

    function coke(quantity) {
        let carbohydrate = Number(10);
        let flavour = Number(20);
        if(carbohydrate * quantity > availableIngredients.carbohydrate){
            return 'Error: not enough carbohydrate in stock';
        }else if(flavour * quantity > availableIngredients.flavour){
            return 'Error: not enough flavour in stock';
        }else{
            availableIngredients.carbohydrate -= carbohydrate * quantity;
            availableIngredients.flavour -= flavour * quantity;
            return 'Success';
        }
    }

    function burger(quantity) {
        let carbohydrate = Number(5);
        let fat = Number(7);
        let flavour = Number(3);
        if(carbohydrate * quantity > availableIngredients.carbohydrate){
            return `Error: not enough ${ingredients} in stock`;
        }else if(fat * quantity > availableIngredients.fat){
            return `Error: not enough ${ingredients} in stock`;
        }else if(flavour * quantity > availableIngredients.flavour){
            return `Error: not enough ${ingredients} in stock`;
        }else{
            availableIngredients.carbohydrate -= carbohydrate * quantity;
            availableIngredients.fat -= fat * quantity;
            availableIngredients.flavour -= flavour * quantity;
            return 'Success';
        }
    }

    function omelet(quantity) {
        let proteine = Number(5);
        let fat = Number(1);
        let flavour = Number(1);
        if(proteine * quantity > availableIngredients.proteine){
            return `Error: not enough ${ingredients} in stock`;
        }else if(fat * quantity > availableIngredients.fat){
            return `Error: not enough ${ingredients} in stock`;
        }else if(flavour * quantity > availableIngredients.flavour){
            return `Error: not enough ${ingredients} in stock`;
        }else{
            availableIngredients.proteine -= proteine * quantity;
            availableIngredients.fat -= fat * quantity;
            availableIngredients.flavour -= flavour * quantity;
            return 'Success';
        }
    }

    function cheverme(quantity) {
        let proteine = Number(10);
        let carb = Number(10);
        let fat = Number(10);
        let flavour = Number(10);
        if(proteine * quantity > availableIngredients.proteine){
            return `Error: not enough ${ingredients} in stock`;
        }else if(carb * quantity > availableIngredients.carbohydrate){
            return `Error: not enough ${ingredients} in stock`;
        }else if(fat * quantity > availableIngredients.fat){
            return `Error: not enough ${ingredients} in stock`;
        }else if(flavour * quantity > availableIngredients.flavour){
            return `Error: not enough ${ingredients} in stock`;
        }else{
            availableIngredients.proteine -= proteine * quantity;
            availableIngredients.carbohydrate -= carb * quantity;
            availableIngredients.fat -= fat * quantity;
            availableIngredients.flavour -= flavour * quantity;
            return 'Success';
        }
    }

    return function executeOperations(input) {
        for (let i = 0; i < input.length; i++) {
            let element = input[i].split(/[\s]+/g);
            let comand = '';
            if(element[0] === 'restock' || element[0] === 'report'){
                comand = element[0];
            }else  {
                comand = element[1];
            }

            let ingredients = element[1];
            let quantity = Number(element[2]);
            switch (comand) {
                case 'restock' : return restock(ingredients, quantity);
                    break;
                case 'report' : return report();
                    break;
                case 'apple' : return apple(quantity);
                    break;
                case 'coke' : return coke(quantity);
                    break;
                case 'burger' : return burger(quantity);
                    break;
                case 'omelet' : return omelet(quantity);
                    break;
                case 'cheverme' : return cheverme(quantity);
                    break;
            }

        }
    }

})();

// console.log(executeOperations('restock flavour 50'));
// console.log(executeOperations('prepare coke 4'));


console.log(executeOperations(
    [
    'restock carbohydrate 10',
    'restock flavour 10',
    'prepare apple 1',
    'restock fat 10',
    'prepare burger 1',
    'report'
    ]
));

// console.log(executeOperations('restock carbohydrate 10'));
// console.log(executeOperations('restock flavour 10'));
// console.log(executeOperations('prepare apple 1'));
// console.log(executeOperations('restock fat 10'));
// console.log(executeOperations('prepare burger 1'));
// console.log(executeOperations('report'));














































































































