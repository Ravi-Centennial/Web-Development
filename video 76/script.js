// async function getData() {
//     //stimulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3000)
//     })
// }

async function getData() {
    //stimulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    return data
}

async function main() {
    console.log("loading modules")

    console.log("Do something else")

    console.log("load data")

    let data = await getData()

    console.log(data)

    console.log("Process data")

    console.log("Task 2")
}

main()

// data.then((v) => {
//     console.log(data)

//     console.log("Process data")

//     console.log("Task 2")
// })

