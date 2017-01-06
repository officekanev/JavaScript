function createComputerHierarchy() {

    class Keyboard { // 3
        constructor(manufacturer,  responseTime){
           this.manufacturer = manufacturer;
           this.responseTime = Number(responseTime);
        }
    }

    class Monitor { // 2
        constructor(manufacturer,  width, height){
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery {  // 1
        constructor(manufacturer,  expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer {  // ABSTRACT CLASS
        constructor(manufacturer,  processorSpeed, ram, hardDiskSpace ){

            if(new.target === Computer) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer,  processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer,  processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = (color);
            this.battery = battery;
        }

        get battery() {
           return this.battery;
        }

        set battery(number) {
            if(!(number instanceof Battery)) {
                throw new TypeError;
            }

            this._battery = number;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer,  processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(number) {
            if(!(number instanceof Keyboard)) {
                throw new TypeError;
            }

            this._keyboard = number;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(number) {
            if(!(number instanceof Monitor)) {
                throw new TypeError;
            }

            this._monitor = number;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }

}






























































































































