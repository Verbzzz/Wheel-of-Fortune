
container = document.querySelector(".container");
let spinBtn = document.getElementById("spin");
let resBtn = document.getElementById("reset");
let link = document.getElementById("link");


var deg = Math.ceil(Math.random() * 1000);


spinBtn.onclick = function () {
    
	container.style.transform = "rotate(" + deg + "deg)";
    
    spinBtn.setAttribute("class","Invisible");


    let delayInMilliseconds = 5000; //5 second
    setTimeout(function() {
        winAttraction();
      }, delayInMilliseconds);
}


function winAttraction(){

    let position = deg%360;

    if(position < 22.5){
        link.setAttribute("href","https://letmegooglethat.com/?q=bars");
    }

    if(position > 22.5 && position < 67.5){
        link.setAttribute("href","https://letmegooglethat.com/?q=new+video+games");
    }

    if(position > 67.5 && position < 112.5){
        link.setAttribute("href","https://letmegooglethat.com/?q=Restaurant");
    }

    if(position > 112.5 && position < 157.5){
        link.setAttribute("href","https://letmegooglethat.com/?q=Coffee+shop");
    }

    if(position > 157.5 && position < 202.5){
        link.setAttribute("href","https://letmegooglethat.com/?q=Skydiving");
    }

    if(position > 202.5 && position < 247.5){
        link.setAttribute("href","https://letmegooglethat.com/?q=new+movies");
    }

    if(position > 247.5 && position < 292.5){
        link.setAttribute("href","https://letmegooglethat.com/?q=escape+rooms");
    }

    if(position > 292.5 && position < 337.5){
        link.setAttribute("href","https://www.netflix.com/il-en/");
    }

    link.setAttribute("class", "visible");
    resBtn.setAttribute("Class", "visible");
}




