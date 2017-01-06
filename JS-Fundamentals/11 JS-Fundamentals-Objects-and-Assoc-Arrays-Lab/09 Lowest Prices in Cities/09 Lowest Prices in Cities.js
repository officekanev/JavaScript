function lowestPriceInCities(input) {


    let regex = /(([a-zA-Z\ ?]+)\ \|\ ([a-zA-Z\s?]+)\|\ ([0-9.]+))/;    // 20 / 100

    let allData = new Map();

    for(let lines of input){
        match = regex.exec(lines);
        if(match){
            let [town, products, price] = [match[2].trim(), match[3].trim(), Number(match[4].trim())];

            if(allData.has(products)){

                let tempPrice = allData.get(products);
                price = Number(price);

                if(price < tempPrice["productprice"]){
                    tempPrice["productprice"] = price;
                    allData.set(products, tempPrice);
                }
            }else{
                let obj = {
                    townname : town,
                    productprice : Number(price)
                };
                allData.set(products, obj);
            }
        }
    }

    let article = Array.from(allData.keys());
    for (let i = 0; i < article.length; i++) {

        let object = allData.get(article[i]);
        console.log(`${article[i]} -> ${object["productprice"]} (${object["townname"]})`);
    }


    let products = new Map;
    for (let priceList of input) {
        let [town, product, price] = priceList.split(/\s+\|\s+/g);
        if (!products.has(product))
            products.set(product, new Map);
        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';
        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

lowestPriceInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);