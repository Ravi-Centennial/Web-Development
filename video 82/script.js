async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

//IIFE Immediately Invoked Function Expression
(async function main() {
    // let a = await sleep();
    // console.log(a)
    // let b = await sleep();
    // console.log(b)

    //Destructuring 
    // let [x, y, ...rest] = [7, 20, 8, 9 ,5]
    // console.log(x,y,rest)

    //     let obj ={
    //         a: 1,
    //         b: 2,
    //         c: 3
    //     }

    //     const {a, b} = obj;
    //     console.log(a, b)
    function sum(a, b, c) {
        return a + b + c
    }

    const arr = [1, 2, 3]
    console.log(sum(...arr))
    const obj = {...arr};
    console.log(obj)

})()

