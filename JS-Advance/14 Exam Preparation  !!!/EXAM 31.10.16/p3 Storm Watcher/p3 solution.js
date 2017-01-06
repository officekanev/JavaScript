
// (function () {  // SOLUTION WITH IIFE
//
// let nextId = 0;
//
// class Record {
//     constructor(temperature, humidity, pressure, windSpeed){
//         this.temperature = Number(temperature);
//         this.humidity = Number(humidity);
//         this.pressure = Number(pressure);
//         this.windSpeed = Number(windSpeed);
//         this.id = nextId++;
//     }
//
//     checkToStorm() {
//         if(this.temperature < Number(20) &&
//             (this.pressure < Number(700) || this.pressure > Number(900))
//             && this.windSpeed > Number(25)){
//             return 'Stormy'
//         }else {
//             return 'Not stormy'
//         }
//     }
//
//     toString(){
//         let output = `Reading ID: ${this.id}
// Temperature: ${this.temperature}*C
// Relative Humidity: ${this.humidity}%
// Pressure: ${this.pressure}hpa
// Wind Speed: ${this.windSpeed}m/s
// Weather: ${this.checkToStorm()}`;
//
//         return output;
//     }
// }
//
//  })();


//======================================================
         //  solution undo IIFE
//======================================================



class Record {
    constructor(temperature, humidity, pressure, windSpeed){
        this.temperature = Number(temperature);
        this.humidity = Number(humidity);
        this.pressure = Number(pressure);
        this.windSpeed = Number(windSpeed);
        this.id = Record.getId();
    }

    checkToStorm() {
        if(this.temperature < Number(20) &&
            (this.pressure < Number(700) || this.pressure > Number(900))
            && this.windSpeed > Number(25)){
            return 'Stormy'
        }else {
            return 'Not stormy'
        }
    }

    toString(){
        let output = `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${this.checkToStorm()}`;

        return output;
    }

    static getId() {
        if(!Record.nextId){
            Record.nextId = 0;
        }

        return Record.nextId++;
    }
}

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());

console.log();

let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
