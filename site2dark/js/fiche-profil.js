/* let mon_test = document.getElementsByTagName("h2");
//mon_test.classList.toggle("glow");



for (h2 of mon_test) {
    h2.classList.toggle("glow");
}

/* document.querySelector("h2").onmouseenter = function(){
    this.style.color = "#f20505";
}; */

/* document.querySelector("h2").onmouseout = function(){
    this.style.color = "white";
} */
/*
document.querySelector("h2").onclick = function(){
    this.style.color = "white";
    mon_h2.classList.toggle("glow");
} */

/*
function mon_clic() {
    let mon_test = document.getElementsByTagName("h2");
    for (h2 of mon_test) {
        h2.classList.toggle("glow");
    }
}

mon_test.addEventListener("click", mon_clic); */


let the_button = document.querySelector(".light");
let col1 = document.querySelector(".mpart1");
let col2 = document.querySelector(".mpart2");
let col3 = document.querySelector(".mpart3");
let col4 = document.querySelector(".mfooter");
let btns = document.querySelector(".btns");



function darker() {
    col1.style.backgroundColor = "black";
    col2.style.backgroundColor = "black";
    col3.style.backgroundColor = "black";
    col4.style.backgroundColor = "black";
    btns.style.color = "white";
}



the_button.addEventListener("click", darker);