function solve() {

    class Console {

        static get placeholder() {
            return /{\d+}/g;
        }

        static writeLine() {
         let message = arguments[0];
            if(arguments.length === 1) { // check whether  number of arguments is == 1
                if(typeof (message) === 'object'){
                    message = JSON.stringify(message);
                    return message;
                }else if(typeof (message) === 'string') {
                    return message;
                }
            }else {
                if(typeof (message) !== 'string') {
                    throw new TypeError("No string format given!"); // if the first argument is not string
                }else {
                    let placeholders = message.match(this.placeholder).sort(function (a, b) {
                        a = Number(a.substring(1, a.length - 1));
                        b = Number(b.substring(1, b.length - 1));
                        return a - b;
                    });
                    if(placeholders.length !== (arguments.length - 1)) {// If the number of parameters does not correspond
                        throw new RangeError("Incorrect amount of parameters given!");//to the number of placeholders in the template
                    }else {
                        for (let i = 0; i < placeholders.length; i++) {
                            let number = Number(placeholders[i].substring(1, placeholders[i].length - 1));

                            if(number !== i) {// o	If the placeholders have indexes not withing the parameters range
                                throw new RangeError("Incorrect placeholders given!");//(for instance we have a placeholder {13} and only 5 params) throw a RangeError

                            }else {// o	if multiple arguments are passed and the first is a string, find all placeholders from the string
                                message = message.replace(placeholders[i], arguments[i + 1]);//and exchange them with the supplied parameters.
                            }
                        }
                        return message;
                    }
                }
            }
        }
    }
}

























































