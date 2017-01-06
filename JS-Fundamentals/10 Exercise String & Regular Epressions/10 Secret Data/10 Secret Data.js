// function hideDataOfTheDocument(data) {          //   0 / 100
//
//     let [name, id, phone, nameSecretBase] =
//         [/\*[A-Z]{1}[a-z]+/g, /\![a-zA-Z0-9]+/g, /\+[0-9]{3}\-[0-9]{2}\-[0-9]{3}/g, /\_[a-zA-Z0-9]+/g];
//
//     for(let line of data){
//         let match1 = name.exec(line);
//         if(match1){
//             line = line.replace(match1[0], '|'.repeat(match1[0].length));
//         }
//
//         let match2 = id.exec(line);
//         if(match2){
//             line = line.replace(match2[0], '|'.repeat(match2[0].length));
//         }
//
//         let match3 = phone.exec(line);
//         if(match3){
//             line = line.replace(match3[0], '|'.repeat(match3[0].length));
//         }
//
//         let match4 = nameSecretBase.exec(line);
//         if(match4){
//             line = line.replace(match4[0], '|'.repeat(match4[0].length));
//         }
//
//         console.log(line);
//     }
// }


let f = input => input                       //   100 / 100
    .forEach(l => console.log(l
        .replace(
            /(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
            (m) => '|'.repeat(m.length))));

f([
    'Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    "I can't really remember...'",
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    "I really don't know what happened there.",
    'This is all I saw, that night.',
    'I cannot explain it myself...'
]);
