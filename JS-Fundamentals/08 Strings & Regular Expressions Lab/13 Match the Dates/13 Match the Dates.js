function matchDate(input) {

    let pattern = /\b([0-9]{1,2}\-[a-zA-Z]{3}\-[0-9]{4})\b/;
    for(let line of input){
        let matchDate = match = pattern.exec(line);
        if (matchDate){
            let date = matchDate[0].split(/[-]+/g);
            console.log(`${matchDate[0]} (Day: ${date[0]}, Month: ${date[1]}, Year: ${date[2]})`);
        }
    }
}

matchDate(['I am born on 30-Dec-1994.',
'This is not date: 512-Jan-1996.',
'My father is born on the 29-Jul-1955.']);

matchDate([
    '1-Jan-1999 is a valid date.',
        'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);
