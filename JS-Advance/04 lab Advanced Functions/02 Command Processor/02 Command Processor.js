function commandProcessor(comands) {

     let commandProcessor = (function () {
         let output = '';
         return {
              append :  (text) => output = output + text,
           removeStart :  function(num) { output = output.slice(num)},
            removeEnd : function(number) { output =  output.slice(0, output.length - number)},
            print : function() {console.log(output)}
       }
     })();

     for(let comand of comands) {
        let [comandName, arg] = comand.split(' ');
         commandProcessor[comandName](arg);
    }
};

commandProcessor(
    ['append hello',
        'append again',
        'removeStart 3',
        'removeEnd 4',
        'print']
);


// let commandProcessor = (function () {
//     let output = '';
//     return {
//          append :  (text) => output = output + text,
//         removeStart :  function(num) { output = output.slice(num)},
//         removeEnd : function(number) { output =  output.slice(0, output.length - number)},
//         print : function() {console.log(output)}
//     }
// })();
//
// commandProcessor.append("hello");
// commandProcessor.append("again");
// commandProcessor.removeStart(3);
// commandProcessor.removeEnd(4);
// console.log(commandProcessor.print());

