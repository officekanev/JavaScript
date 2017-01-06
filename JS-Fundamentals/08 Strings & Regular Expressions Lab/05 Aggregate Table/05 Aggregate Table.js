function agregateTable(input) {

    let sum = 0;
    let towns = '';
    for(let line of input){
        let data = line.split('|');
        towns += data[1].trim() + ', ';
        sum += Number(data[2].trim());
    }

    console.log(towns.substring(0, towns.length - 2));
    console.log(sum);
}

agregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);
