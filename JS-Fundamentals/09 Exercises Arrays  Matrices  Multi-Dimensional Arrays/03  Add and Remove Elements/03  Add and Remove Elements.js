function addRemove(commands) {
    let res = [];
    let index = 1;
    commands.forEach(c => c == 'add' ? res.push(index++) :  index++ && res.pop());

    return res.join('\n') || 'Empty';
}
console.log(addRemove(['add', 'add', 'add', 'add', 'add']));  // 1 2 3 4
console.log(addRemove(['add', 'add', 'remove', 'add', 'add']));  // 1 4 5
console.log(addRemove(['remove', 'remove', 'remove']));          // empty
