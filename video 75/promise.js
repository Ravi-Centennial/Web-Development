console.log('this is a promise');

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("yes i am done")
        resolve("harry")
    }, 3000);
    reject("good bye")
    
})

prom1.then((a) =>{
    console.log(a);
    alert(a)
})

// function loadscript(src, callback) {
//     let script = document.createElement("script")
//     script.src= src;
//     script.onload = ()=>callback(script);
//     document.head.append(script)
// }

// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (src1)=>{
//     alert("script is loaded")
//     alert(src1.src)
// })

// function loadscript(src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;

//         script.onload = () => resolve(script); // Resolve the promise when the script is loaded
//         script.onerror = () => reject(new Error(`Script load error for ${src}`)); // Reject the promise on error

//         document.head.append(script);
//     });
// }

// // Usage example
// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
//     .then((script) => {
//         alert("Script is loaded");
//         alert(script.src); // Show the source of the loaded script
//     })
//     .catch((error) => {
//         alert(error.message); // Handle the error if the script fails to load
//     });