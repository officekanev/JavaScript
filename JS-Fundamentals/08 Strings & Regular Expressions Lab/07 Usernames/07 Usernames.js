function cultivateUsernames(input) {

    let usernames = '';

    for(let users of input){
        let data = users.split(/[@.]+/);
        usernames += data[0] + '.';
        for (let i = 1; i < data.length; i++) {
            usernames += data[i].charAt(0);
        }
        usernames += `, `;
    }
    console.log(usernames.substring(0, usernames.length - 2));
}

cultivateUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
