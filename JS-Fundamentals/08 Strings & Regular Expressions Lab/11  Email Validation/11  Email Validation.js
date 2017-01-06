// function emailValidator(input) {
//
//     let pattern = /\b([a-z0-9]+\@[a-z]+\.[a-z]+)\b/;
//     if (match = pattern.exec(input)){
//         console.log('Valid');
//     }else {
//         console.log('Invalid');
//     }
// }
//
// emailValidator(['valid@email.bg']);
// emailValidator(['invalid@emai1.bg']);

function validateEmail([email]) {
    let pattern =
        /^[a-zA-Z0-9\._]+\@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(email);
    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

validateEmail(['bai.ivan@mail.sf.net']);

