function calculateDate(year, month, day){
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day-1)

    
    
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
    
}

calculateDate(2016, 10, 1);