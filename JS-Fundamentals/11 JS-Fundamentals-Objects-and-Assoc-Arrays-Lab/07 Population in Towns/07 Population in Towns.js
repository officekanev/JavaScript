function populationCount(input) {

    let countwordsAppear = new Map();
    for(let data of input){

        let [sity, population] = data.split('<->').filter(w => w != '');

            if(countwordsAppear.has(sity))
                countwordsAppear.set(sity, countwordsAppear.get(sity) + Number(population));
            else
                countwordsAppear.set(sity, Number(population));
    }

    let allwords = Array.from(countwordsAppear.keys());
    allwords.forEach(w =>
        console.log(`${w}: ${countwordsAppear.get(w)}`));
}

populationCount([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

populationCount([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
