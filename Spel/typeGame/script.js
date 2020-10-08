let word = document.getElementById("wordDiv");
let startButton = document.getElementById("startBtn");
let restartButton = document.getElementById("restartBtn");
let timerNumber = document.getElementById("timerNumber");
let words = ["phone ", "ashtray ", "rowboat ", "sky ", "filter ", "scotland ", "lion ", "tent ", "continent ", "llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch ", " "];
let i = 0;
let j = 0;
let l;
let seconds;
restartButton.style.visibility = ("hidden")
startButton.addEventListener("click", initGame);
function initGame() {
    restartButton.style.visibility = "hidden";
    startButton.style.visibility = "hidden";
    window.addEventListener('keydown', pressKey);
    updateWord();
    startTimer();
}
function pressKey(e) {
    let codeKey = e.keyCode;
    let keyPressed = String.fromCharCode(codeKey).toLowerCase();
    gameLoop(keyPressed);
}
function gameLoop(keyPressed) {
    let currentLetter = document.getElementById(`letter${j}`).innerText.trim();
    let nextLetter = document.getElementById(`letter${j + 1}`);
    let colorLetter = document.getElementById(`letter${j}`);
    let wordLength = words[i].length -1;
    if (keyPressed === currentLetter) {
        nextLetter.style.top = "-10px"
        colorLetter.style.top = "0px"
        colorLetter.style.color = "red";
        j++  
    }
    if (j === wordLength) {
        j = 0
        i++
        updateWord();
    }
}
function updateWord() {
    let splitLetters = words[i].split("");
    for (let i = 0; i < splitLetters.length; i++) {
        word.innerHTML = ""
    }
    for (let i = 0; i < splitLetters.length; i++) {
        word.innerHTML += `<span id="letter${i}">${splitLetters[i]} </span>`
    }
    if (i === 10){
        i = 0
        clearInterval(seconds)
        timerNumber.style.visibility = "visible";
        restartButton.style.visibility = "visible";
        restartButton.addEventListener('click', initGame)
    }
    document.getElementById("letter0").style.top = "-10px"
}
function startTimer() {
    l = 1;
    seconds = setInterval(() => {timerNumber.innerText = `Your time is: ${++l} seconds`}, 1000);
    timerNumber.style.visibility = "hidden"
}