function calculateIncomeOfTowns(input) {

        let sumsTown = {};

    for (let i = 0; i < input.length; i+=2) {

        let [town, income] = [input[i], Number(input[i + 1])];
        if(sumsTown[town] == undefined){
                sumsTown[town] = income;
        }else {
            sumsTown[town] += income;
        }
    }
    return JSON.stringify(sumsTown);
}

let g = calculateIncomeOfTowns(
    [
        'Sofia',
        '20',
        'Varna',
        '3',
        'Sofia',
        '5',
        'Varna',
        '4'
    ]);

console.log(g);
