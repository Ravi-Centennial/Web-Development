
let currentsong = new Audio();

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60); // Remove decimals

    // Add leading zeros if minutes or seconds are less than 10
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
}

//get all the songs
async function getsongs() { 
    let a = await fetch("http://10.0.0.69:3000/video%2083/songs/");
    let response = await a.text();
    // console.log(response)

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            let parts = element.href.split("/songs/");
            songs.push(parts[1]);
        }
    }
    return songs;
}

const playmusic = (track, pause=false)=>{
    currentsong.src = "/video%2083/songs/" + track
    if(!pause){
        currentsong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function main(){


    let songs = await getsongs()
    playmusic(songs[0], true)

    let songul =document.querySelector(".songlist").getElementsByTagName("ul")[0]

    for (const song of songs){ 
        songul.innerHTML += ` <li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <Div>${song.replaceAll("%20", " ")}</Div>
                                <Div>Cheena Y</Div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="play-1.svg" alt="">
                            </div>
                         </li>`;
    }

    //Attach an event eventlistner
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML); 
            playmusic(e.querySelector(".info").firstElementChild.innerHTML);
        })
    });

    //Attach an eventlistner
    play.addEventListener("click", ()=>{
        if(currentsong.paused){
            currentsong.play()
            play.src = "pause.svg"
        }
        else{
            currentsong.pause()
            play.src = "play-1.svg"
        }
    })

    //Time update function
    currentsong.addEventListener("timeupdate", ()=>{
        document.querySelector(".songtime").innerHTML = `${
            formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)
            }`
            document.querySelector(".circle").style.left = (currentsong.currentTime/ currentsong.duration)*100 + "%"
    })

    //Add an eventlistner to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";

        currentsong.currentTime = (currentsong.duration)*percent / 100
    })

    //Add eventlistner on hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0";
    })

    //Add eventlistner for close
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-120%";
    })
}

main()