function firstCalculate(a){
    return getSum(a);
}
function getSum(a){
    return a+a;
}

let a = +prompt("Input number");
const SUM = firstCalculate(a);
console.log(SUM);