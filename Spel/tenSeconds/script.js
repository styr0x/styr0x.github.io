let gameArea = document.getElementById("buttonDiv");
let number = document.getElementById("number");
let messageDiv = document.getElementById("messageDiv")
let timerNumber = document.getElementById("timerNumber");
let seconds;
let i;
let stopBtn;
let restartBtn;

//Skapar en startknapp
let btn = document.createElement("BUTTON");
btn.innerText = "START"
btn.id = "btn"
gameArea.appendChild(btn);

btn.addEventListener("click", startTimer)

function startTimer() {
    gameArea.removeChild(btn)
    i = 1;
    seconds = setInterval(() => {timerNumber.innerText = ++i}, 1000);
    timerNumber.style.visibility = "hidden"
    timerNumber.innerText = i

    //Skapar en stopknapp
    stopBtn = document.createElement("BUTTON");
    stopBtn.innerText = "STOP"
    stopBtn.id = "stop"
    gameArea.appendChild(stopBtn);

    
    document.getElementById("stop").addEventListener("click", stopTimer)

}

function stopTimer() {
    clearInterval(seconds)
    timerNumber.style.visibility = "visible"
    gameArea.removeChild(stopBtn);

    //skapar en restartknapp
    restartBtn = document.createElement("BUTTON");
    restartBtn.innerText = "RESTART"
    restartBtn.id = "restart"
    gameArea.appendChild(restartBtn);

    if (i === 10) {
        messageDiv.innerText = "Congratulations, right on time!"  
    }
    else if (i != 10) {
        messageDiv.innerText+= "You suck, and lose!"
    }
    
    document.getElementById("restart").addEventListener("click", restartTimer)
}

function restartTimer() {
    messageDiv.innerText = ""
    timerNumber.style.visibility = "hidden"
    i = 1;
    gameArea.removeChild(restartBtn);
    gameArea.appendChild(btn);
}