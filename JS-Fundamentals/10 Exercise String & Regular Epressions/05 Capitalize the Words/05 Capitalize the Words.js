// function capitalizeFirstCaharacter(input) {           // way 1
//
//     let data = input[0].split(/[\s]+/);
//     let output = '';
//     for(let word of data){
//         if(word.charAt(0) == word.charAt(0).toUpperCase()){
//             output += word.charAt(0);
//             output += word.substring(1, word.length).toLowerCase() + ' '
//         }else {
//            let startchar = word.charAt(0).toUpperCase();
//            startchar += word.substring(1, word.length).toLowerCase();
//             output += startchar + ' ';
//         }
//     }
//     console.log(output);
// }

// capitalizeFirstCaharacter(['Capitalize these words']);
// capitalizeFirstCaharacter(['Was that Easy? tRY thIs onE for SiZe!']);


let f = ([text]) => text                      // way 2
    .split(' ')
    .map(ch => ch.substr(0, 1).toUpperCase() + ch.substr(1, ch.length).toLocaleLowerCase())
    .join(' ');

console.log(f(['Was that Easy? tRY thIs onE for SiZe!']));