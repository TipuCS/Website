const navBar = document.querySelector(".topBar");

const bar1 = document.querySelector("#sec-2-TL-1");
const bar2 = document.querySelector("#sec-2-TL-2");
const bar3 = document.querySelector("#sec-2-TL-3");
const bar4 = document.querySelector("#sec-2-TL-4");
const bar5 = document.querySelector("#sec-2-TL-5");

let currentScrollY = window.scrollY

myHomeButton = document.getElementById("btn0");

myAboutButton = document.getElementById("btn1");

myProjectButton = document.getElementById("btn2");

myContactButton = document.getElementById("btn3");

function scroller() {
    window.addEventListener("scroll", () => {
        if (currentScrollY < window.scrollY) {
            navBar.classList.add("topBar--hidden");
            // console.log("going down");
        }
        else{
            console.log("going up");
            navBar.classList.remove("topBar--hidden");
        }
        console.log(scrollY)
        currentScrollY = window.scrollY;

    })

}


function activateBars(){

    window.addEventListener("scroll", () => {
            
        if (window.scrollY > 400 && window.scrollY < 1100) {
            setTimeout(function() {
                                    if (window.scrollY > 400 && window.scrollY < 1100) {
                                        bar1.setAttribute('id', 'play-animation-1');
                                        bar2.setAttribute('id', 'play-animation-2');
                                        bar3.setAttribute('id', 'play-animation-3');
                                        bar4.setAttribute('id', 'play-animation-4');
                                        bar5.setAttribute('id', 'play-animation-5');
                                    }
                                  }, 500)
            }

    })

}


function scrollToPage(num){
    height = 0
    if (num == 0){
        height = 0;
    }
    if (num == 1){
        height = window.innerHeight;
        setTimeout(function() {navBar.classList.add("topBar--hidden")}, 500);
    }
    if (num == 2){
        height = window.innerHeight * 2;
        setTimeout(function() {navBar.classList.add("topBar--hidden")}, 500);
    }
    if (num == 3){
        height = window.innerHeight * 100;
        setTimeout(function() {navBar.classList.add("topBar--hidden")}, 500);
    }
    document.documentElement.scrollTop = height; 
}

text = "Hey! I'm Tipu! Welcome to my Website.";

function slowlyShowLetters(letterNum, string){
    currentText = string.slice(0, letterNum);

    document.getElementById("sec-1-text").innerHTML = currentText;
    console.log("success");

    if (!(letterNum == string.length)){
        setTimeout(function() {slowlyShowLetters(letterNum + 1, string)}, 100);
    }
}

function PromptAboutPage() {
    if (window.scrollY == 0){
        myAboutButton.style.color = 'red';
    }

}

activateBars();

scroller();
slowlyShowLetters(1, text);


// setTimeout(PromptAboutPage, 1000)

// window.addEventListener("scroll", () =>) {

// }