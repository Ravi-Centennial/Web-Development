console.log("Hello world");

// let a = 1;
// console.log(a);

for (let i = 0; i < 10; i++) {
    console.log(i+1)
}

let obj = {
    "Name": "Harry",
    "Role" : "codder"
}

for (const i in obj) {
        const element = obj[i];
        console.log(i,element)
}

console.log()

for (const element of "Harry") {
    console.log(element)
    
}

console.log()

let i = 1;
while (i<= 10) {
    console.log(i);
    i++
}

console.log()

let b = 0;
do {
    console.log(b)
    b++
} while (b<1);
