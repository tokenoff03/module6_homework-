function checkPrimeOrNonPrime(a){
    let b = 2;
    while(b<a){
        if(a%b==0){
            return 1;
        }
        b++;
    }
    return 0; 
}
let a = +prompt("Input number(1000>a): ");
if(a>1000){
    console.log("Данные неверны");
}
else {
    if(checkPrimeOrNonPrime(a)==1) console.log("Non-Prime number")
    else console.log("Prime")
}