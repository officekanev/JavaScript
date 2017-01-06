function coutWordsWithMap(input) {

    let countwordsAppear = new Map();
    let words = input[0].toLowerCase().split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    for(let word of words){
        if(countwordsAppear.has(word))
            countwordsAppear.set(word, countwordsAppear.get(word) + 1);
        else

            countwordsAppear.set(word, 1);
    }

    let allwords = Array.from(countwordsAppear.keys()).sort();
    allwords.forEach(w =>
    console.log(`'${w}' -> ${countwordsAppear.get(w)} times`));
}

coutWordsWithMap(["Far too slow, you're far too slow."]);
console.log()
console.log()
console.log()
console.log()
coutWordsWithMap(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);
