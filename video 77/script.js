function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    //finish this function

    let viewstr; 
    if (views<1000){
        viewstr = views
    }

    else if(views > 1000000){
        viewstr = views/1000000 + "M"
    }

    else{
        viewstr = views/1000 +"K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="Hello World">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views . ${monthsOld} months ago </p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")
