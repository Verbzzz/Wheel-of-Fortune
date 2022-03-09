container = document.querySelector(".container");
let spinBtn = document.getElementById("spin");
let resBtn = document.getElementById("reset");

var deg = Math.ceil(Math.random() * 1000);



let link = document.getElementById("link");

let one = document.querySelector(".one");




spinBtn.onclick = function () { //add reset botton
    
	container.style.transform = "rotate(" + deg + "deg)";
    
    spinBtn.setAttribute("class","Invisible");


    let delayInMilliseconds = 5000; //5 second
    setTimeout(function() {
        winAttraction();
      }, delayInMilliseconds);
}


function winAttraction(){

    alert("Your prize is: ");
    
    let position = deg%360;

    if(position < 22.5){
        console.log("one wins");
        link.setAttribute("href","#1");
    }

    if(position > 22.5 && position < 67.5){
        console.log("eight wins");
        link.setAttribute("href","#8");
    }

    if(position > 67.5 && position < 112.5){
        console.log("seven wins");
        link.setAttribute("href","#7");
    }

    if(position > 112.5 && position < 157.5){
        console.log("six wins");
        link.setAttribute("href","#6");
    }

    if(position > 157.5 && position < 202.5){
        console.log("five wins");
        link.setAttribute("href","#5");
    }

    if(position > 202.5 && position < 247.5){
        console.log("four wins");
        link.setAttribute("href","#4");
    }

    if(position > 247.5 && position < 292.5){
        console.log("three wins");
        link.setAttribute("href","#3");
    }

    if(position > 292.5 && position < 337.5){
        console.log("two wins");
        link.setAttribute("href","#2");
    }


    link.setAttribute("class", "visible");
    resBtn.setAttribute("Class", "visible");

}

// resBtn.onclick = function () { //add reset botton
     
//     spinBtn.setAttribute("class","");
//     link.setAttribute("class", "");
//     resBtn.setAttribute("class","");

//     link.setAttribute("href","#");

// }



