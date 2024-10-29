// let a = prompt("Enter first number")

// let b = prompt("Enter Second number")

// if(isNaN(a)  || isNaN(b)){
//     throw SyntaxError("ye galat h bhai, sahi kro isse")
// }

// let sum = parseInt(a) +parseInt(b)

// function main(){

//     try {
//         console.log("The sum is: " + sum) 
//         return true

//     } catch (error) {
//         console.log("Yo ka h bhai hme to na pta");
//         return false
//     }
//     finally{
//         console.log("Samaj me agya bhai kya error h")
//     }
// }

// let c = main()

//Question: Write a program to load a javaScript file in a browser using promises.Use .then() to display an alert when the load is complete.

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = () => resolve(`Script loaded: ${src}`);
//         script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
//         document.head.append(script);
//     });
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js')

//     .then((message) => {
//         alert(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

//Question: Write the same program from previous question and use async / await syntax.


// async function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = () => resolve(`Script loaded: ${src}`);
//         script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
//         document.head.append(script);
//     });
// }
// async function main(){
//     let a= prompt("Enter the src of your script")
//     console.log("Loading your script");
//     try{
//     let ac = await loadScript(a)
//         alert(ac)
//     }
//     catch(error){
//         console.error(error);
//     }

//     console.log("Process data")

//     console.log("Task 2")

// }

// main()

//Question: create a promise which rejects after 3 seconds. use an async/await to get its value. use a try catcch to handle its eror.

// async function hello() {
//     return a = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Promise rejected after 3 seconds"));
//         }, 3000);
//     })
// }

// async function handlepromise() {
//     try {
//         const result = await hello();
//         console.log(result)
//     } catch (error) {
//         console.error("Mil gya bhailogo: ", error.message)
//     }
// }

// handlepromise();

//Question: write a program using promise.all() inside an async/ await 3 promises. compare its results with the case where we await these promises one by one.

function promise1() {
    return new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 1000));  // 1 second
}

function promise2() {
    return new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 2000));  // 2 seconds
}

function promise3() {
    return new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), 3000));  // 3 seconds
}

// Async function using Promise.all to run promises concurrently
async function runConcurrently() {
    const startTime = Date.now();  // Track start time
    try {
        const results = await Promise.all([promise1(), promise2(), promise3()]);
        console.log(results);
    } catch (error) {
        console.error("An error occurred:", error);
    }
    const endTime = Date.now();
    console.log(`Concurrent execution time: ${(endTime - startTime)/1000} s`);
}

// Call the function
runConcurrently(); 