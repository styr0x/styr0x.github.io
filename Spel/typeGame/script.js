//Elementvariabler
let word = document.getElementById("wordDiv");
let startButton = document.getElementById("startBtn");
let timerNumber = document.getElementById("timerNumber");
//Övriga variabler
let words = ["liu", "miu", "fiu", "xiu", "giu", "uil", "biu", "riu", "siu", "impalpable", " "];
let i = 0;
let j = 0;
let l;
let seconds;



//Starknappens eventlistener
startButton.addEventListener("click", initGame);
//Spelets saker
function initGame() {
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
    let colorLetter = document.getElementById(`letter${j}`);
    let wordLength = words[i].length;
    
    if (keyPressed === currentLetter) {
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
        clearInterval(seconds)
        timerNumber.style.visibility = "visible";
    }
}

function startTimer() {
    l = 1;
    seconds = setInterval(() => {timerNumber.innerText = `Your time is: ${++l}`}, 1000);
    timerNumber.style.visibility = "hidden"
}