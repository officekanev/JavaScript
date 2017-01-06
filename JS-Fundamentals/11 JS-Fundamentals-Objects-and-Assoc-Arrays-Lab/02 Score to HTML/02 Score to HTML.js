function scoreToHTMLTable(scoreJSON) {

    let html = "<table>\n";
    html += " <tr><th>name</th><th>score</th></tr>\n";
    let arr = JSON.parse(scoreJSON);
    for(let obj of arr){
        html += ` <tr><td>${htmlEscape(obj['name'])}</td><td>${obj['score']}</td></tr>\n`;


        function htmlEscape(text) {
            let map = { '"': '&quot;', '&': '&amp;',
                "'": '&#39;', '<': '&lt;', '>': '&gt;' };
            return text.replace(/[\"&'<>]/g, ch => map[ch]);
        }
    }
    return html + "</table>";
}

console.log(scoreToHTMLTable(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']));

console.log(scoreToHTMLTable(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));