function heroicVictory(input) {

    let allHeroes = [];
    for(let heroes of input){
        let [name, lev, item ] = heroes.split('/');
        let partitem = item.split(',');
        let arritem = [];
        for(let ite of partitem){
            arritem.push(ite.trim())
        }
         let obj = {
             name:name.trim(),
             level: Number(lev.trim()),
             items: arritem
         };
        allHeroes.push(obj);
    }

    return JSON.stringify(allHeroes);
}

console.log(
    heroicVictory([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]));

