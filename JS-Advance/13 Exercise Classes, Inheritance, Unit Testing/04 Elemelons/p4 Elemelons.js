function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if(new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = Number(weight);
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water';// Number(weight) * Number(melonSort.toString().length)
            this._elementIndex = Number(this.weight) * Number(this.melonSort.length);
        }

        getElementIndex() {
           return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}\n
                    Sort: ${this.melonSort}\n
                    Element Index: ${this._elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Fire';
            this._elementIndex = Number(this.weight) * Number(this.melonSort.length);
        }

        getElementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}\n
                    Sort: ${this.melonSort}\n
                    Element Index: ${this._elementIndex}`;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Earth';
            this._elementIndex = Number(this.weight) * (this.melonSort.length);
        }

        getElementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}\n
                    Sort: ${this.melonSort}\n
                    Element Index: ${this._elementIndex}`;
        }
    }

    class  Airmelon extends Melon {
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Air';
            this._elementIndex = Number(this.weight) * (this.melonSort.length);
        }

        getElementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this.element}\n
                    Sort: ${this.melonSort}\n
                    Element Index: ${this._elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.type = this.element;
            this.counter = 0;
        }

        morph() {
           this.counter++;
            if(this.counter % 4 == 0) {
                this.element = 'Water';
            }else if(this.counter % 4 == 1) {
                this.element = 'Fire';
            }else if(this.counter % 4 == 2) {
                this.element = 'Earth';
            }else if(this.counter % 4 == 3) {
                this.element = 'Air'
            }
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}


//solve(let test = new Melon(100, "Test"));
//Throws error

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());


































































