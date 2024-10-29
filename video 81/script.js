
const additem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div);
}
const randomDelay = ()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 + 6*Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main(){
    
    let t = setInterval(()=>{
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        last.innerHTML = last.innerHTML + "."
    }, 200)
    
    let text = ["Intializined Hacking now reading your data",
        "Reading your Files",
        "Password files detected",
        "Sending all password and personal files to server",
        "cleaning up"
    ]
    
    for (const item of text){
        await additem(item)
    }

    await randomDelay();
    clearInterval(t)
}
    
main()