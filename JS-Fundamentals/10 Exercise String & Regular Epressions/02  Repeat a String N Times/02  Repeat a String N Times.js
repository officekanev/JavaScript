function repeatString(input) {

    let repeatword = input[0];
    let repeatTimes = Number(input[1]);

    console.log(repeatword.repeat(repeatTimes));
}

repeatString(['repeat', '5']);
repeatString(['magic is real', '3']);