function calculateOddAndEven(arr){
    let countEven = 0;
    let countOdd = 0;
    let zeronumb = 0;
    arr.forEach(value => {
        if(!isNaN(value) && typeof(value) === "number"){
            if(value == 0) zeronumb++;
            else if(value%2==0) countEven++;
            else countOdd++;
        }
    });
    console.log(`Четные: ${ countEven }, Нечетные: ${ countOdd }, ZeroNumbers ${zeronumb}`)
}

let arr = [1,null,3,"abs",5,6,0];
calculateOddAndEven(arr);