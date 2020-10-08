//Elementvariabler
let word = document.getElementById("wordDiv");
let startButton = document.getElementById("startBtn");
let restartButton = document.getElementById("restartBtn");
let timerNumber = document.getElementById("timerNumber");
//Övriga variabler
let words = ["liu ", "miu ", "fiu ", "xiu ", "giu ", "uil ", "biu ", "riu ", "siu ", "impalpable ", " "];
let i = 0;
let j = 0;
let l;
let seconds;


restartButton.style.visibility = ("hidden")
//Starknappens eventlistener
startButton.addEventListener("click", initGame);
//Spelets saker
function initGame() {
    restartButton.style.visibility = "hidden";
    startButton.style.visibility = "hidden";
    window.addEventListener('keydown', pressKey);
    updateWord();
    startTimer();
}
//Registrerar vilken knapp man tryckt
function pressKey(e) {
    let codeKey = e.keyCode;
    let keyPressed = String.fromCharCode(codeKey).toLowerCase();
    gameLoop(keyPressed);
}
//Main magic
function gameLoop(keyPressed) {
    let currentLetter = document.getElementById(`letter${j}`).innerText.trim();
    let nextLetter = document.getElementById(`letter${j + 1}`);
    let colorLetter = document.getElementById(`letter${j}`);
    let wordLength = words[i].length -1;
    
    

    if (keyPressed === currentLetter) {
        nextLetter.style.top = "-10px"
        colorLetter.style.top = "0px"
        colorLetter.style.color = "red";
        console.log("true dis");
        j++
        
    }

    if (j === wordLength) {
        j = 0
        i++
        updateWord();
    }

    

    //debuggins
    console.log(keyPressed, currentLetter);
    console.log(wordLength);
    console.log(i);
    console.log(nextLetter);
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
}

function startTimer() {
    l = 1;
    seconds = setInterval(() => {timerNumber.innerText = `Your time is: ${++l} seconds`}, 1000);
    timerNumber.style.visibility = "hidden"
}