function subtract() {
    let firstNum = $('#firstNumber').val();
    let secondtNum = $('#secondNumber').val();

    // let result = Number(firstNum) - Number(secondtNum);
    // console.dir(result);
    $('#result').text(firstNum - secondtNum);
}
