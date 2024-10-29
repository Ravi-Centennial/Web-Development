function createCard(title, cName, views, monthsOld, duration, thumbnail){
    
    let cardTemplate = document.querySelector("#card-template");
    let newCard = cardTemplate.content.cloneNode(true);


    newCard.querySelector(".sec2-1").innerHTML = title;

    newCard.querySelector(".name").innerHTML = cName;

    let videoviews = newCard.querySelector(".views");
    if (views<9999) {
        views = (views/1000).toFixed(0);
        videoviews.innerHTML = views + "K views";
    }
    else if(views<99999){
        views = (views/1000).toFixed(0);
        videoviews.innerHTML = views + "K views";
    }
    else if(views<999999){
        views = (views/1000).toFixed(0);
        videoviews.innerHTML = views + "K views";
    }
    else {
        if (views%1000000 == 0) {
            views = (views/1000000).toFixed(0);
        } else {
            views = (views/1000000).toFixed(1);
        }
        videoviews.innerHTML = views + "M views";
    }

    let videotime = newCard.querySelector(".time");
    
    if (monthsOld < 12) {
        videotime.innerHTML = monthsOld + " months ago";
    } else {
        if (monthsOld%12 == 0) {
            monthsOld = (monthsOld/12).toFixed(0)
        } else { 
            monthsOld = (monthsOld/12).toFixed(1) 
        } 
        videotime.innerHTML = monthsOld + " years ago";
    }
    
    newCard.querySelector(".duration").innerHTML = duration;

    let videothumbnail = newCard.querySelector(".thumbnail");
    videothumbnail.style.backgroundImage = `url('${thumbnail}')`;

    document.querySelector(".card-container").appendChild(newCard);
}    

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")


createCard("Mastering Microsoft Teams | Essential Tips & Tricks", "Make Way", 350000, 7, "31:22", "https://images.unsplash.com/photo-1633410189542-36d96e3762b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGpwZ3xlbnwwfHwwfHx8MA%3D%3D");

createCard("Your Day | A Visual Journey Through Nature's Beauty", "Traversy Media", 1200000, 15, "45:10", "https://images.unsplash.com/photo-1666389785207-79fd9a364761?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpwZ3xlbnwwfHwwfHx8MA%3D%3Dg");

createCard("History Behind the Canadian Flag | Symbol of Unity", "FreeCodeCamp", 10000000, 36, "2:10:30", "https://images.unsplash.com/photo-1635194969502-2c654769afa3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGpwZ3xlbnwwfHwwfHx8MA%3D%3D");

