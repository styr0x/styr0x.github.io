//Parent elementet
const parent = document.getElementById('parentId');

//Gör en announcer
const announcer = document.createElement("span");
announcer.classList.add("announcerClass");
announcer.innerHTML = "Guess a number between 1 and 9";
parent.appendChild(announcer);

//Variabler för spelet
let yourNumber;
let randomNumber = Math.floor(Math.random() * 10);

//Skapa en input
document.addEventListener("keydown", function(e) {
    console.log(e.code)

    for (let i = 0; i < 10; i++) {
        if (e.code == `Digit${i}`) {
            yourNumber = i;
        }
    }

    console.log(yourNumber);
    drawWinner();
})

function drawWinner() {
    if (yourNumber != randomNumber) {
        announcer.innerHTML = "Sorry you lose press r to retry";
        document.addEventListener("keydown" , function(e) {
            if (e.code == "KeyR") {
                location.reload();
            }
        });
    }
    else if (yourNumber == randomNumber) {
        announcer.innerHTML = `You guessed right the number was ${yourNumber}`;
    }
}