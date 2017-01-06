function templateFormat(input) {

    let output = '';
    output += `<?xml version="1.0" encoding="UTF-8"?>
<quiz>\n`;

    function fillData(question, answer) {
        output += `  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>\n`;
    }

    for (let i = 0; i < input.length; i+= 2) {
        fillData(input[i], input[i + 1]);
    }

    output += `</quiz>`;

    console.log(output);



    //return stringsToXml(input); // var 2

    // function stringsToXml(strings) {
    //     let xmlOutput = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    //     for (let i = 0; i < strings.length; i += 2) {
    //         let question = strings[i];
    //         let answer = strings[i + 1];
    //
    //         xmlOutput += `\t<question>\n\t\t${question}\n\t</question>\n`;
    //         xmlOutput += `\t<answer>\n\t\t${answer}\n\t</answer>\n`;
    //     }
    //
    //     xmlOutput += '</quiz>';
    //
    //     return xmlOutput;
    // }

}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
console.log()
console.log()
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);
