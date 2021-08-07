let globalCounter = 0;

function increase() {
    let display = document.getElementById("counter");
    display.innerText = ++globalCounter;
    updateColor(globalCounter);
}

function decrease() {
    let display = document.getElementById("counter");
    display.innerText = --globalCounter;
    updateColor(globalCounter);
}

function reset() {
    let display = document.getElementById("counter");
    globalCounter = 0;
    display.innerText = globalCounter;
    updateColor(globalCounter);
}

function updateColor(x) {
    let display = document.getElementById("counter");
    if(x < 0){
        display.style.color = "rgb(93, 5, 5)"
    }else if(x == 0){
        display.style.color = "";
    }else if(x > 0){
        display.style.color = "teal";
    }
}