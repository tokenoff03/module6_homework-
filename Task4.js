function counter(a,b){
    const intervalId = setInterval(function(){
      console.log(a);
      if(a==b) {
        clearInterval(intervalId);
      }
      a++;
    },1000);
}

let a = +prompt("Input first number: ");
let b = +prompt("Input second number: ");
counter(a,b);


