// @ts-check
function checkSameDigits(num){
    let same = true;
    let str = num.toString()
    let sumOfDigits = 0;
    for (let i = 0; i < str.length; i++) {
    
        let element = str[i]
        sumOfDigits += parseInt(str[i]) ;

        if(i == str.length - 1){   
            break;
        }

        if (element != str[i + 1])  {
           same = false; 
        }
    }
    console.log(same);
    console.log(sumOfDigits);
}

checkSameDigits(222)