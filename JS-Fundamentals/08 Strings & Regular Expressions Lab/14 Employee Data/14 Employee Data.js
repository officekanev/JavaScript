function parseEmploye(input) {

    // let pattern = /\b(([a-zA-Z]+) - ([0-9]+) - ([a-zA-Z]+\ ?[a-zA-Z]+))\b/;    // 0 / 100
    //
    // for(let line of input){
    //     if(match = pattern.exec(line)){
    //         let findMatch = match = pattern.exec(line);
    //         console.log(`Name: ${findMatch[2]}\nPosition: ${findMatch[4]}\nSalary: ${findMatch[3]}`);
    //     }
    // }

    let regex =
        /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let element of input) {
        let match = regex.exec(element);
        if (match)
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
    }

}

parseEmploye([
    'Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]);

parseEmploye([
    'Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader'
]);
