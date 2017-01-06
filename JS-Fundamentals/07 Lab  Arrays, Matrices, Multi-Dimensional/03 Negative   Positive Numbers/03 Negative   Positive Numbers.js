function arrangeNegativePositiveNumbers(input) {

    let tempColection = input.map(Number);
    let arrangeCollection = [];

    for(let currentNum of tempColection){
        if(currentNum < 0){
            arrangeCollection.unshift(currentNum);
        }else {
            arrangeCollection.push(currentNum);
        }
    }

   console.log(arrangeCollection.join('\n'));
}

arrangeNegativePositiveNumbers(['7', '-2', '8', '9']);
arrangeNegativePositiveNumbers(['3', '-2', '0', '-1']);
