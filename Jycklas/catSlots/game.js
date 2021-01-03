//Variabler
let money = document.getElementById("moneyAmt");
let betAmount = document.getElementById("betAmt");

let slot1 = document.getElementById('slot1');
let slot2 = document.getElementById('slot2');
let slot3 = document.getElementById('slot3');

let playButton = document.getElementById('playBtn');
let betButton = document.getElementById('betBtn');

let timer = 5;
let imgSequence1 = generateRandomNumber1();
let imgSequence2 = generateRandomNumber2();
let imgSequence3 = generateRandomNumber3();

//Knapp Events
playButton.addEventListener('click', playGame);
betButton.addEventListener('click', increaseBet);

//Funktioner
function playGame() {
    
    if (betAmount.innerHTML > money.innerHTML) {
        alert("You don't have enough money to bet that amount!");
    }
    else {
        money.innerHTML = money.innerHTML - betAmount.innerHTML;
        scroll(timer);
    }
    
}

function increaseBet() {
    betAmount.innerHTML *= 10;

    if (betAmount.innerHTML > 1000) {
        betAmount.innerHTML = 10;
    }
    console.log("Bet button clicked");
    console.log(betAmount);
}

function scroll(timer) {
    if (timer < 500) {
        setTimeout(() => {

            slot1.className = "slotImgBlur"
            slot2.className = "slotImgBlur"
            slot3.className = "slotImgBlur"
            
            slot1.src = changePic1();
            slot2.src = changePic2();
            slot3.src = changePic3();

            scroll(timer * 1.1);

        }, timer);
    }

    else {
        draw();
    }
}

function draw() {
    slot1.className = "slotImg"
    slot2.className = "slotImg"
    slot3.className = "slotImg"


    //slot1.src = generateRandomImage();
    //slot2.src = generateRandomImage();
    //slot3.src = generateRandomImage();

    slot1.src = 'img/0.png';
    slot2.src = 'img/0.png';
    slot3.src = 'img/0.png';

    determineWinner();
}

function determineWinner() {
    
    if (slot1.src == '/img/0.png' &&
        slot2.src == '/img/0.png' &&
        slot3.src == '/img/0.png') {
            money.innerHTML += 50;
            console.log("liuwin");
    }

    else if (slot1.src == '/img/1.png' &&
            slot2.src == '/img/1.png' &&
            slot3.src == '/img/1.png') {
            money.innerHTML += 100;
    }
    
    else if (slot1.src == '/img/2.png' &&
            slot2.src == '/img/2.png' &&
            slot3.src == '/img/2.png') {
            money.innerHTML += 1000;
    }

    else {

    }

}

function changePic1() {
    imgSequence1++
    if (imgSequence1 >= 3) {
        imgSequence1 = 0
    }
    return "img/" + imgSequence1 + ".png"
    console.log(imgSequence1)
}

function changePic2() {
    imgSequence2++
    if (imgSequence2 >= 3) {
        imgSequence2 = 0
    }
    return "img/" + imgSequence2 + ".png"
    console.log(imgSequence2)
}

function changePic3() {
    imgSequence3++
    if (imgSequence3 >= 3) {
        imgSequence3 = 0
    }
    return "img/" + imgSequence3 + ".png"
    console.log(imgSequence3)
}

function generateRandomNumber1() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber;
}

function generateRandomNumber2() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber;
}

function generateRandomNumber3() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber;
}

function generateRandomImage() {
    let randomNumber = Math.floor(Math.random() * 3)
    return "img/" + randomNumber + ".png";
}