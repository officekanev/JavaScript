function restaurantBill(input) {

    let out = 'You purchased ';
    let sum = 0;
    for (let i = 1; i < input.length; i+=2) {
        out += input[i - 1] + ', ';
        sum += Number(input[i]);
    }
    let output = out.substring(0, out.length - 2);
    console.log(output += ` for a total sum of ${sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);