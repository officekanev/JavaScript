function sortUsernames(input) {

    // let colection = [];             //  60 / 100
    // for(let username of input){
    //     colection.push(username)
    // }
    //
    // let components = colection.sort();
    //  components = colection.sort((s1, s2) => s1.length - s2.length);
    //
    //  for(let user of components){
    //      console.log(user);
    //  }

    let userNames = new Set;
    for (let name of input) {
        userNames.add(name);
    }

    function nameComparator(nameA, nameB) {
        if (nameA.length < nameB.length) {
            return -1;
        }
        if (nameA.length > nameB.length) {
            return 1;
        }

        return nameA.localeCompare(nameB);
    }
    console.log([...userNames].sort(nameComparator).join('\n'));
}

sortUsernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);