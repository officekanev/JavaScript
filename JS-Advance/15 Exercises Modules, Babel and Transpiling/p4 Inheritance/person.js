let Entity = require('./entity').Entity;

class Person extends Entity {
    constructor(name, phrace, dog ) {
        super(name);
        this.phrace = phrace;
        this.dog = dog;
    }

    saySomething() {
        return `${this.name} says: ${this.phrace}${this.dog.name} barks!`;
    }
}

module.exports = { Person };