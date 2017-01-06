function printRectangle([number]) {

    function printStars(count) {             // var 1
        console.log("*".repeat(count));
    }

    for (let i=1; i<=number; i++){
        printStars(i);
    }

    for (let i=number-1; i>0; i--){
        printStars(i);
    }


    // if(number == 1){                    // var 2
    //     console.log('*')
    // }else {
    //     for (let i = 0; i <= number; i++) {
    //         console.log('*'.repeat(i));
    //     }
    //
    //     for (let i = number - 1; i > 0; i--) {
    //         console.log('*'.repeat(i));
    //     }
    // }
}

printRectangle(['1']);
console.log();
console.log();
printRectangle(['2']);
console.log();
console.log();
printRectangle(['5']);
