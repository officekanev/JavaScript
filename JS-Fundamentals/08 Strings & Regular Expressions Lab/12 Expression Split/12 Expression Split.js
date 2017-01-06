function splitExpression(input) {

    let splitedData = input[0].split(/[,)(;.\s]+/);
    for(let element of splitedData){
        console.log(element);
    }
}

splitExpression(['let sum = 4 * 4,b = "wow";']);
splitExpression(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']);