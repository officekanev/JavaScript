function reverseInput(input) {

    let allword = input.join('');
    let charArray = Array.from(allword).reverse().join('');
    console.log(charArray);
}

reverseInput(['I', 'am', 'student']);
reverseInput(['race', 'car']);
