let obj1 = {
    "1": "crazy",
    "2": "amazing",
    "3": "fire",
}

let obj2 = {
    
    "1": "engine",
    "2": "foods",
    "3": "garments",
}

let obj3 = {
    "1": "Bros",
    "2": "limited",
    "3": "Hub",
}



function news(a, b, c) {
    sub1 = a + " " + b + " " + c;
    console.log("Name of our business is: " + sub1);
}

let a = obj1[Math.floor(Math.random()*3+1)];
let b = obj2[Math.floor(Math.random()*3+1)];
let c = obj3[Math.floor(Math.random()*3+1)];

news(a, b , c);