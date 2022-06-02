function calorieObject(array) { 
    let products = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (index % 2 == 0){
            products[element] = 0
        }else {
            products[array[index-1]] = Number.parseInt(element)
        }
    }
    console.log(products);
}

calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52']);