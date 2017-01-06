function increase(input) {
    let musaka = input.split(/[^0-9-+]+/g);
    let sum = Number(0);
    let fuckingFunction = function (laina) {
       return sum+= Number(laina)
    };

    for (var i = 1; i < musaka.length - 1; i++) {
        fuckingFunction(musaka[i]);
    }
    console.log(sum);
}


increase('console.log(add(1));');
increase('console.log(add(1)(6)(-3));');