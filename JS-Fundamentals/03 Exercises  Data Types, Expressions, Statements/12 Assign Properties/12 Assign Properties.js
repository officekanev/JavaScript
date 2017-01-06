function createObject([textname, name, textage, age, textGender, gender]) {

        let obj = {};
        obj[textname] = name;
        obj[textage] = age;
        obj[textGender] = gender;

        return obj;
}

console.log(createObject(['name', 'Pesho', 'age', '23', 'gender', 'male']));
