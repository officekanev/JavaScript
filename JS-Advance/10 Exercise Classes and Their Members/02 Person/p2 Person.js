class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(person);
