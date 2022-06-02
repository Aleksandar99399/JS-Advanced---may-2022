// @ts-check
function gcd(num1, num2){

    while (num1 != num2){
        if(num1>num2)  {
            num1=num1-num2;  
        }else { 
            num2=num2-num1;  
        }
    }
    console.log(num2);
}

gcd(2154, 458)

