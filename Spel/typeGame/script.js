//Elementvariabler
let word = document.getElementById("wordDiv");
let startButton = document.getElementById("startBtn");
//Övriga variabler
let words = ["liu", "miu", "fiu", "xiu", "giu", "uil", "biu", "riu", "siu", "impalpable"];
let i = 0;
let j = 0;

let splitLetters = words[i].split("");


//Starknappens eventlistener
startButton.addEventListener("click", initGame);
//Spelets saker
function initGame() {
    startButton.style.visibility = "hidden";
    window.addEventListener('keydown', pressKey);
    updateWord();
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
    for (let i = 0; i < splitLetters.length; i++) {
        word.innerHTML += ""
    }
    for (let i = 0; i < splitLetters.length; i++) {
        word.innerHTML += `<span id="letter${i}">${splitLetters[i]} </span>`
    }
}