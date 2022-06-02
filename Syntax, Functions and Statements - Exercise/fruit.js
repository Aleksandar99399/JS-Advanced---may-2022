function buyProduct(fruit, weightG, pricePerKg){
    let money = ((weightG / 1000) * pricePerKg).toFixed(2);
    weightG = (weightG/1000).toFixed(2);
    console.log(`I need $${money} to buy ${weightG} kilograms ${fruit}.`);
}

buyProduct('orange', 2500, 1.80)