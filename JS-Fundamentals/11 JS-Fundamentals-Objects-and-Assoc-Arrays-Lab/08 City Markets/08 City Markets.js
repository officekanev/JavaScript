function cityMarkets(input) {

    let regex = /(([a-zA-Z\ ?]+)\ \->\ ([a-zA-Z\s?0-9]+)\->\ ([0-9]+)\ \:\ ([0-9.]+))/;

    let allData = new Map();

    for(let lines of input){
        match = regex.exec(lines);
        if(match){
            let [town, products, amount, price] = [match[2].trim(), match[3].trim(), Number(match[4].trim()), Number(match[5].trim())];

            if(allData.has(town)){
                let temp = allData.get(town);
                let obj = {
                    product : products,
                    totalMoney : amount * price
                };
                temp.push(obj);
                allData.set(town, temp);
            }else{
                let container = [];
                let obj = {
                    product : products,
                    totalMoney : amount * price
                };
                container.push(obj);
                allData.set(town, container);
            }
        }
    }

    let sities = Array.from(allData.keys());
    for (let i = 0; i < sities.length; i++) {

        console.log(`Town - ${sities[i]}`);
        let array = allData.get(sities[i]);
        for(let productss of array){
            console.log(`$$$${productss["product"]} : ${productss["totalMoney"]}`);
        }

    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);
