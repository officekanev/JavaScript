let Person = require('./person').Person;

class Student extends Person {
    constructor(name, phrace, dog, id ) {
        super(name, phrace, dog);
        this.id = id;
    }

    saySomething() {
        return `Id: ${this.id} says: ${this.phrace}${this.dog.name} barks!`;
    }
}

module.exports = { Student };