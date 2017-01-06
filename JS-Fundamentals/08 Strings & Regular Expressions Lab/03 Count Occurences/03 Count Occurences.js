function countOccurences(input) {

    let targetText = input[0];
    let Text = input[1];
    let coutnAppear = 0;
    let index = 0;
    while (true){
        if(Text.indexOf(targetText, index + 1) != -1){
            index = Text.indexOf(targetText, index + 1);
            coutnAppear++;
        }else {
            return coutnAppear;
        }
    }
}

//console.log(countOccurences(['the', 'The quick brown fox jumps over the lay dog.']));
console.log(countOccurences(['ma', 'Marine mammal training is the training and caring for marine' +
' life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It' +
' is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']));