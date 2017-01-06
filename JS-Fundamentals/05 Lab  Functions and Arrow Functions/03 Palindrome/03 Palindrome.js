function checkInputIsPalindrome([input]) {

    for (let i = 0; i < input.length / 2; i++) {

        if(input.charAt(i) != input.charAt(input.length - i - 1)){
            return false;
        }
    }

    return true;
}

console.log(checkInputIsPalindrome(['haha']));
console.log(checkInputIsPalindrome(['racecar']));
console.log(checkInputIsPalindrome(['unitinu']));
