class Rat {
    constructor(name){
        this.name = name;
        this.array = [];
    }

    unite(otherRat) {
        if(this.constructor == otherRat.constructor){
            this.array.push(otherRat);
        }
    }

    getRats(){
        return this.array;
    }

    toString(){
        let output = this.name;
        for (var i = 0; i < this.array.length; i++) {
            output += '\n##' + this.array[i];
        }

        return output;
    }
}
