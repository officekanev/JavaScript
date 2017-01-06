// function scoreToHTMLTable(scoreJSON) {   // 0 / 100
//
//     let html = "<table>\n";
//     //html += " <tr><th>name</th><th>score</th></tr>\n";
//     let arr = JSON.parse(scoreJSON);
//     for(let obj of arr){
//         html += `  <tr>\n`;
//         html +=`    <td>${htmlEscape(obj['name'])}</td>\n`;
//         html +=`    <td>${obj['position']}</td>\n`;
//         html +=`    <td>${obj['salary']}</td>\n`;
//         html +=`   </tr>\n`;
//
//
//         function htmlEscape(text) {
//             let map = { '"': '&quot;', '&': '&amp;',
//                 "'": '&#39;', '<': '&lt;', '>': '&gt;' };
//             return text.replace(/[\"&'<>]/g, ch => map[ch]);
//         }
//     }
//     return html + "</table>";
// }

function generateJSONTable(data) {
    function htmlEscape(text) {
        text = '' + text;
        let tokensToReplace = {'<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;'};
        return text.replace(/[<>&'"]/g, m => tokensToReplace[m]);
    }

    let html = '<table>\n';
    for (let line of data) {
        html += '\t<tr>\n';
        let item = JSON.parse(line);
        for (let key in item) {
            if (item.hasOwnProperty(key)) {
                html += `\t\t<td>${htmlEscape(item[key])}</td>\n`
            }
        }
        html += '\t<tr>\n';
    }

    html += '</table>';

    return html;
}

console.log(generateJSONTable(["{\"name\":\"Pesho\",\"position\":\"Promenliva\",\"salary\":100000}","{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}","{\"name\":\"Georgi\",\"position\":\"Lecturer\",\"salary\":1000}"]));

// console.log(scoreToHTMLTable([{"name":"Pesho","position":"Promenliva","salary":100000}, +
// {"name":"Teo","position":"Lecturer","salary":1000},{"name":"Georgi","position":"Lecturer","salary":1000}]));
