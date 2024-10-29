// Object Oriented programming

// let obj = {
//     a : 1,
//     b: "Harry"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class Animal {
    constructor(name) {
        this.Name = name;
        console.log("Object is created...");
    }

    eats() {
        console.log("I am eating the food")
    }

    jumps() {
        console.log("I am jumping over");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...");
    }
}

let a = new Animal("Honey");

console.log(a)

let l = new Lion("shera");

console.log(l)