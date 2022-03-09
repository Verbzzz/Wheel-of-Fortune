let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
// let winning = container.getIndicatedSegment();




let link = document.getElementById("link");



btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
    link.setAttribute("href","#");

    btn.className ="invisible";

    //add reset botton
    // console.alert(winning);
    //setTimeout("", 300);
    let delayInMilliseconds = 7000; //7 second
    setTimeout(function() {
        win();
      }, delayInMilliseconds);
      
    
    
}

function win(){
    alert("Your prize is: ");
    link.className = "visible";

}




