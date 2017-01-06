function agregateInformation(name, age, weight, height) {

    let output = {};
    function calculateBMI(weig, heig) {
       let  height = heig / 100;
        let BMI = Math.round(Number(weig) / (Number(height) * Number(height)));
        return BMI;
    }

    output.name = name;
    output.personalInfo = {
        age: age,
        weight: Number(weight),
        height:height
    };

    output.BMI = calculateBMI(weight, height);
    output.status = giveStatus(output.BMI);

    function giveStatus() {

        if(output.BMI < Number(18.5)){
            return "underweight"
        }else if(output.BMI > Number(18.5) && output.BMI < Number(25)){
            return "normal";
        }else if(output.BMI > Number(25) && output.BMI < Number(30)){
            return "overweight";
        }else{
            return "obese";
        }
    }

    if(output.BMI >= Number(30)) {
        output.recommendation = 'admission required';
    }

    return output;
}

console.log(agregateInformation('Peter', 29, 75, 182));
console.log(agregateInformation('Honey Boo Boo', 9, 57, 137));