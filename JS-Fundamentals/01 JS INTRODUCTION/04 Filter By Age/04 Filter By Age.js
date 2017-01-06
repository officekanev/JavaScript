// Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.
//     The input comes as array of string elements. The first element is the minimum age. The second and third
// elements are the name and age of the first person and the fourth and fifth elements – the name and age
// of the second person. The three age parameters need to be parsed as numbers.
//     The output should be printed to the console.

function filterByAge([minAgeValue, nameA, ageA, nameB, ageB]) {

    let minimumAge = Number(minAgeValue);

    let person1 = {name:nameA, age:Number(ageA)};
    let person2 = {name:nameB, age:Number(ageB)};

    if(person1.age >= minimumAge){
        console.log(person1)
    }

    if(person2.age >= minimumAge){
        console.log(person2)
    }
}

filterByAge(['12', 'Ivan', '15', 'Asen', '9']);
filterByAge(['12', 'Ivan', '9', 'Asen', '15']);