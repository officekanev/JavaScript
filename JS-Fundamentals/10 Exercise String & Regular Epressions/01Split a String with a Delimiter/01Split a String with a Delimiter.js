function splitString(input) {

    let data = input[0];
    let delimiter = input[1];
    let spliteddata = data.split(delimiter);
    for(let word of spliteddata){
        console.log(word);
    }
}

splitString(['One-Two-Three-Four-Five', '-']);
splitString(['http://platform.softuni.bg', '.']);
