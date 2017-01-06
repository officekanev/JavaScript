// function countOccurences(input) {      // 40 / 100
//
//     let text = input[0].toLowerCase();
//     let target = input[1].toLowerCase();
//     let words = text.split(/[,\s\?]+/);
//     let countOccur = 0;
//     for(let word of words){
//         if(word === target){
//             countOccur++;
//         }
//     }
//     console.log(countOccur);
// }


function countOccurences([haystack, needle]) {
    needle = `\\b${needle}\\b`;
    let regEx = new RegExp(needle, 'gi');
    let res = haystack.match(regEx) || [];

    console.log(res.length);
}


countOccurences(['The waterfall was so high, that the child couldn’t see its peak.','the']);
countOccurences(['How do you plan on achieving that? How? How can you even think of that?','how']);
countOccurences(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there']);
