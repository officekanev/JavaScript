function processCommands(commands) {

    let commandProcessor = (function () {
        let list = [];

        return {
            add: (newItem) => list.push(newItem),
            remove:  (item) => list = list.filter(x => x != item),
            print:  () => console.log(list)
        }
    })();

    for (var i = 0; i < commands.length; i++) {
        let [commandName, item] = commands[i].split(' ');
        commandProcessor[commandName](item); // commandProcessor[commandName](item) === commandProcessor.commandName(item)

    }
 }

processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processCommands(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);







































































































































