class Stringer {

    constructor (innerWord, innerLength) {
       this.innerWord = innerWord;
       this.innerLength = innerLength;
    }

    increase(innerLength) {
        this.innerLength += innerLength;
    }

    decrease(innerLength) {
        this.innerLength -= innerLength;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString() {
        if(this.innerLength == 0) {
            return '...'
        }else {
            return this.innerWord.substri(0, this.innerWord) + '...';
        }
    }
}















































































































