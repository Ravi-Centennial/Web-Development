// let arr = [1,2,3,4,5];

// console.log(arr);
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr.join(" + "));

// console.log(arr.pop());
// console.log(arr.push(100));
// console.log(arr.shift());
// console.log(arr.unshift("jack"));

// console.log(arr.splice(1,2));
// console.log(arr.slice(1,3));


// console.log(arr);

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }

// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr);
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (const key1 of obj) {
//     // if(Object.hasOwnProperty.call(obj, key1)){
//     //     const element = obj[key1];
//         console.log(key1)
//     // }
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }

let arr = [1,2,3,4,7,9];

let newarr = arr.map((e) =>{
    return e**2
})

const greaterthanseven = (e) =>{
    if(e > 7){
        return true;
    }
    return false;
}


console.log(newarr.filter(greaterthanseven));

