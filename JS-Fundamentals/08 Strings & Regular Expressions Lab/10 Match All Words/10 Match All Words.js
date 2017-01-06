function matchword(input) {

    let pattern = /[\w]+/g;
    let out = '';
    while (match = pattern.exec(input)){
        out += match[0] + '|';
    }

    console.log(out.substring(0, out.length - 1));
}

matchword(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);
matchword(['_(Underscores) are also word characters']);
