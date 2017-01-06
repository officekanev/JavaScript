function sortdata(input) {

    let map = new Map;
    for(let line of input){
        let split = line.split(':');
        let productname = split[0].trim();
        let price = Number(split[1].trim());
        map.set(productname, price);
    }

    let startchar = '';
    let sortedproducts = Array.from(map.keys());
    sortedproducts.sort();
    for (let i = 0; i < sortedproducts.length; i++) {
        if(i != 0){
            if(sortedproducts[i].charAt(0) === startchar){
                console.log(`  ${sortedproducts[i]}: ${map.get(sortedproducts[i])}`);
            }else{
                startchar = sortedproducts[i].charAt(0);
                console.log(startchar);
                console.log(`  ${sortedproducts[i]}: ${map.get(sortedproducts[i])}`);
            }
        }else{
            startchar = sortedproducts[i].charAt(0);
            console.log(startchar);
            console.log(`  ${sortedproducts[i]}: ${map.get(sortedproducts[i])}`);
        }
    }
}

sortdata([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
