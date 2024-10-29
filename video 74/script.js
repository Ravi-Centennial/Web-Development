let btn = document.getElementById("btn");

btn.addEventListener("dblclick", ()=>{
    alert("I was clicked")
})

btn.addEventListener("click", ()=>{
    alert("Right click only")
})


setInterval(() =>{
    document.querySelector(".box").style.background = getrandomcolor();
}, 1000);


function getrandomcolor(){
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    
    return `rgb(${val1}, ${val2}, ${val3})`
}