function countWordsOfText(input) {

    let countwordsAppear = {};
    let words = input[0].split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    for(let word of words){
        if(countwordsAppear[word] == undefined)
            countwordsAppear[word] = 1;
        else
            countwordsAppear[word] += 1;
    }

    console.log(JSON.stringify(countwordsAppear));
}

countWordsOfText(["Far too slow, you're far too slow."]);
countWordsOfText(["JS devs use Node.js for server-side JS.-- JS for devs"]);
