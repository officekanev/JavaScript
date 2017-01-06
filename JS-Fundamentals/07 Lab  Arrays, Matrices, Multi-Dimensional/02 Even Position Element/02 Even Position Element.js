function collectElementOfEvenIndex(input) {

    let filterElement = input.filter((num, i) => i % 2 == 0).join(" ");  // var 1

    // let filterElement = arr => arr                                                   // var 2
    //     .filter((e, i) => i % 2 == 0)
    //     .join(' ');

    return filterElement;
}

console.log(collectElementOfEvenIndex(['20', '30', '40']));
console.log(collectElementOfEvenIndex(['5', '10']));


