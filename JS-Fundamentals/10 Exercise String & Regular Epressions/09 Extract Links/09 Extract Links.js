// function extractLink(input) {     // 75 / 100
//
//     let regex = /(www\.[a-zA-Z0-9-]+\.[a-z]+\.?[a-z]+)/;
//     for(let sentence of input){
//         let match = regex.exec(sentence);
//         if(match)
//             console.log(match[1]);
//     }
// }


function extractLink(input) {                    // 100 / 100
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let links = [], match;
    for (let line of input) {
        while (match = regex.exec(line)) {
            links.push(match[0]);
        }
    }

    console.log(links.join('\n'));
}

extractLink([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]);

extractLink([
    'Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc'
]);
