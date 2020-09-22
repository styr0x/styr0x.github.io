const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const restartButton = document.getElementById("restartbtn");
const display = document.getElementById("announcer");
const score = document.getElementById("score");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const avatar = document.getElementById("avatar");
const opponent = document.getElementById("opponent");
const opponentCats = ["Liu", "Tara", "Pikku"];
const imageArray = ["img/1.png", "img/2.png", "img/3.png"];
const scrollSoundArray = ["snd/scroll1.wav", "snd/scroll2.wav"];

let input;
let randomNumber;
let randomCat;
let rightImage;
let i = 0;
let j = 0;
let scrollSound;

score.value = Number(0);


button.addEventListener("click", chooseLiu);
button2.addEventListener("click", chooseTara);
button3.addEventListener("click", choosePikku);
restartButton.addEventListener("click", restartGame);

init();

function init() {   
screen1.style.display = "block"
screen2.style.display = "none"
}

function restartGame() {
    if (screen2.style.display === "block") {
        screen2.style.display = "none"
        screen1.style.display = "block"
        display.textContent = "Choose a cat!"
        display.className = ""
        restartButton.style.visibility = "hidden"
    }
    
}

function hideScreenOne() {
    if (screen1.style.display === "block") {
        screen1.style.display = "none"
    }
}

function showScreenTwo() {
    if (screen2.style.display === "none") {
        screen2.style.display = "block"
    }

}

function chooseLiu() {
    input = "Liu"
    hideScreenOne();
    avatar.src = "img/1.png"
    showScreenTwo();
    play();
}

function chooseTara() {
    input = "Tara"
    hideScreenOne();
    avatar.src = "img/2.png"
    showScreenTwo();
    play();
}

function choosePikku() {
    input = "Pikku"
    hideScreenOne();
    avatar.src = "img/3.png"
    showScreenTwo();
    play();
}
    

function play() {
    scroll(20);
    





}

function scorePlus() {
        score.textContent = score.value++ +1
}

function scoreReset() {
        score.value = 0
        score.textContent = 0
}

function displayCorrectCat() {
    if (randomCat === "Liu") {
        return chooseRightImage();
    }

    else if (randomCat === "Tara") {
        return chooseRightImage();
    }

    else if (randomCat === "Pikku") {
        return chooseRightImage();
    }

}

function chooseOpponent() {
    randomNumber = Math.floor(Math.random() * opponentCats.length)
    randomCat = opponentCats[randomNumber]
    return randomCat
}

function chooseRightImage() {
    rightImage = imageArray[randomNumber]
    return rightImage

}

function scroll(msUntilNextTick) {
    display.style.visibility = "hidden"
    opponent.src = imageArray[i++]
    scrollsound = new Audio(scrollSoundArray[j++])
    scrollsound.play();

    if (i === 3) {
        i = 0
    }

    if (j === 2) {
        j = 0
    }

    if (msUntilNextTick < 500) {
        setTimeout(() => { scroll(msUntilNextTick * 1.1) }, msUntilNextTick);
        console.log(i)
    }
    else {
        endGame();

    }
    

}

function endGame() {
    restartButton.style.visibility = "visible"  
    display.style.visibility = "visible"
    display.className = "reveal"
    chooseOpponent();

    if (input === "Liu" && randomCat === "Tara") {
        opponent.src = displayCorrectCat();
        scorePlus();
        display.textContent = input + " beats " + randomCat + ", you score 1 point!"
    }
    
    else if (input === "Tara" && randomCat === "Pikku") {
        opponent.src = displayCorrectCat();
        scorePlus();
        display.textContent = input + " beats " + randomCat + ", you score 1 point!"
    }
    
    else if (input === "Pikku" && randomCat === "Liu") {
        opponent.src = displayCorrectCat();
        scorePlus();
        display.textContent = input + " beats " + randomCat + ", you score 1 point!"
    }
    
    else if (input === "Tara" && randomCat === "Liu") {
        opponent.src = displayCorrectCat();
        scoreReset();
        display.textContent = input + " gets beat up by " + randomCat + ", you lose!"
    }
    
    else if (input === "Pikku" && randomCat === "Tara") {
        opponent.src = displayCorrectCat();
        scoreReset();
        display.textContent = input + " gets beat up by " + randomCat + ", you lose!"
    }
    
    else if (input === "Liu" && randomCat === "Pikku") {
        opponent.src = displayCorrectCat();
        scoreReset();
        display.textContent = input + " gets beat up by " + randomCat + ", you lose!"
    }
    
    else if (input === "Liu" && randomCat === "Liu") {
        opponent.src = displayCorrectCat();
        display.textContent = "Draw, there cannot be two " + input +"s"
    }
    
    else if (input === "Tara" && randomCat === "Tara") {
        opponent.src = displayCorrectCat();
        display.textContent = "Draw, there cannot be two " + input +"s"
    }
    
    else if (input === "Pikku" && randomCat === "Pikku") {
        opponent.src = displayCorrectCat();
        display.textContent = "Draw, there cannot be two " + input +"s"
    }
}

