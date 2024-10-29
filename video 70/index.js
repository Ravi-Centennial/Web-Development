// let a = Math.floor(Math.random()*3)
// console.log(a)

// if (a ==0) {
//     //red
//     document.querySelectorAll(".box").forEach(element => {
//         element.style.backgroundColor = "red"; 
//         element.style.Color = "Blue"; 
//     });
// }
// else if(a == 1){
//     //green
//     document.querySelectorAll(".box").forEach(element => {
//         element.style.backgroundColor = "Green"; 
//         element.style.color = "brown"; 
//     });
// }
// else{
//     //yellow
//     document.querySelectorAll(".box").forEach(element => {
//         element.style.backgroundColor = "Yellow"; 
//         element.style.color = "Pink"; 
//     });
// }


    // let arr = document.getElementsByClassName("box")
    // for(let i = 0; i < arr.length; i++)
    // {
    //     arr[i].style.backgroundColor = getrandomcolor();
    //     arr[i].style.color = getrandomcolor();
    // }

let boxes = document.querySelector(".container").children;
Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
})

random1()

function getrandomcolor(){
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    
    return `rgb(${val1}, ${val2}, ${val3})`
}