
let random = Math.random();

let a = prompt("enter your first number");
let c = prompt("Enter your operation");
let b = prompt("enter second first number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}

if (random< 0.1) {
    //faulty calculator
    c= obj[c]
    alert(`The faulty anwer is ${eval(`${a} ${c} ${b}`)}`);
    
} else {
    
    alert(`The correct anwer is ${eval(`${a} ${c} ${b}`)}`);
}