let arr = 7;

var element = 1;



function fact(number){
    let arr2 = Array.from(Array(arr+1).keys())
    let c = arr2.slice(1,).reduce((a,b) => a*b)
    return c;
}

console.log(fact(arr));

let a =1;
for (let i = 1; i <= arr; i++) {
   a = a * i
}

console.log(a);