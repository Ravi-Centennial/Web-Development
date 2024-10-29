//  create a faulty calculator using JavaScript

console.log("let's create a faulty calculator by the probability of 10 times");

function sum(a, b) {
    return a+b;
}

function multiply(a, b) {
    return a*b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a/b ;
}

function expo(a,b) {
    return a ** b;
}

console.log();
console.log("What do you want to do:");
console.log("1. sum");
console.log("2. multiply");
console.log("3. subtract");
console.log("4. divide");


let x = prompt("What is your choice");

let a = Number(prompt("Enter your first number:"));
let b = Number(prompt("Enter your Second number:"));

if (Math.random < 0.1) {
    if (x == "sum") {
        sub1 = subtract(a, b);
        console.log("Your answer from faulty calculator is: ", sub1);
    }
    else if (x == "multiply") {
        sub1 = sum(a, b);
        console.log("Your answer from faulty calculator is: ", sub1);
    }
    else if (x == "subtract") {
        sub1 = divide(a, b);
        console.log("Your answer from faulty calculator is: ", sub1);
    }
    else {
        sub1 = expo(a, b);
        console.log("Your answer from faulty calculator is: ", sub1);
    }
}
else {
    if (x == "sum") {
        sub1 = sum(a, b);
        console.log("Your Correct answer from calculator is: ", sub1);
    }
    else if (x == "multiply") {
        sub1 = multiply(a, b);
        console.log("Your correct answer from calculator is: ", sub1);
    }
    else if (x == "subtract") {
        sub1 = subtract(a, b);
        console.log("Your correct answer from calculator is: ", sub1);
    }
    else {
        sub1 = divide(a, b);
        console.log("Your correct answer faulty calculator is: ", sub1);
    }

}

console.log();
console.log("Hope you enjoyed our service");