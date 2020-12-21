let smileyOne = document.getElementById('smiley1');
let smileyTwo = document.getElementById('smiley2');
let outputText = document.getElementById('output1');
let outputText2 = document.getElementById('output2');
let x = 0;
let playAllowed = true;

document.body.addEventListener('click', randomBgColor);


function randomBgColor() {
    x++
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    let randColor = "rgb(" + r + "," + g + "," + b + ")";
    

    setInterval(() => {
        if (x < 5) {
            document.body.style.background = randColor; 
        }
        if (x > 5) {
            x = 0;
            document.body.style.background = "rebeccapurple"
        }
    
    }, 730);
    console.log(x)
    if (playAllowed) {
        let music = new Audio('happyBd.mp3');
        music.play();
        playAllowed = false;
    }
}

outputText.addEventListener('click', function () {
    if (outputText.className == 'output') {
        outputText.className = 'outputAnim';
    }
    else if (outputText.className == 'outputAnim') {
        outputText.className = 'output';
    }
})

outputText2.addEventListener('click', function () {
    if (outputText2.className == 'output') {
        outputText2.className = 'outputAnim';
    }
    else if (outputText2.className == 'outputAnim') {
        outputText2.className = 'output';
    }
})

smileyOne.addEventListener('click', function() {
    if (smileyOne.className == "topSmiley") {
        smileyOne.className = "topSmileyAnim";
    }
    else if (smileyOne.className == "topSmileyAnim") {
        smileyOne.className = "topSmiley";
    }
});

smileyTwo.addEventListener('click', function() {
    if (smileyTwo.className == "bottomSmiley") {
        smileyTwo.className = "bottomSmileyAnim";
    }
    else if (smileyTwo.className == "bottomSmileyAnim") {
        smileyTwo.className = "bottomSmiley";
    }
});

happyBirthday();

function happyBirthday() {
    let inputDay = 21;
    let inputMonth = 12 - 1;
    let inputYear = 2005;
    let inputDate = new Date(inputYear, inputMonth, inputDay);
    let currentDate = new Date();
    let nextBirthDay = new Date(currentDate.getFullYear(), inputMonth, inputDay)
    let nextBirthDay2 = new Date(currentDate.getFullYear()+1, inputMonth, inputDay)
    let age = currentDate.getFullYear() - inputDate.getFullYear();
    let diff = inputDate.getTime() - currentDate.getTime()
    let birthDay = inputDate.getTime()
    let today = currentDate.getTime()
    let dateDiff = nextBirthDay - today;
    let dateDiff2 = nextBirthDay2 - today;
    let daysUntilBirthday = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let daysUntilBirthday2 = Math.floor(dateDiff2 / (1000 * 60 * 60 * 24));
    let m = currentDate.getMonth() - inputDate.getMonth();

    
    if (m < 0 || (m === 0 && currentDate.getDate() < inputDate.getDate()))
    {
        age--;
    }
    console.log(daysUntilBirthday < 0)

    if (daysUntilBirthday < 0) {
        output2.innerText = "It is " + daysUntilBirthday2 + " days until your next birthday"
    }
    else {
        output2.innerText = "It is " + daysUntilBirthday + " days until your next birthday"
    }
    
    output1.innerText = "You are " + age + " years old"
    
}
