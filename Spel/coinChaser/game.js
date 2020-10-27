//Variabler

//Canvasen
let gameWindow = document.getElementById("gameWindow");
let ctx = gameWindow.getContext("2d");
//Player
let player = {
    x:gameWindow.width/2,
    y:gameWindow.height/2,
    speed: 4,
    width: 30,
    height: 30
    
};

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

//Coin
let randomX = 30
let randomY = 30
let coin = {
    x: randomX,
    y: randomY, 
    width: 30,
    height: 30
}
//Score
let scoreDisplay = document.getElementById("scoreNum");
let score = 0;



//Gameloopen
setInterval (gameLoop, 10);
function gameLoop() {
    clearCanvas();
    drawPlayerCircle();
    movePlayer();
    drawCoinCircle();
    checkCollisions();
}




//Alla andra funktioner

//Töm canvasen
function clearCanvas () {
    ctx.clearRect(0,0,gameWindow.width,gameWindow.height);
}

//Rita spelaren
function drawPlayerCircle() {
    let x = player.x;
    let y = player.y;
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

//Flytta Spelaren
function movePlayer() {
    //Keypress
    document.onkeydown = function(e) {
        if (e.code == "ArrowLeft") moveLeft = true;
        if (e.code == "ArrowRight") moveRight = true;
        if (e.code == "ArrowUp") moveUp = true;
        if (e.code == "ArrowDown") moveDown = true;
    }
    document.onkeyup = function(e) {
        if (e.code == "ArrowLeft") moveLeft = false;
        if (e.code == "ArrowRight") moveRight = false;
        if (e.code == "ArrowUp") moveUp = false;
        if (e.code == "ArrowDown") moveDown = false;
    }
    //Själva rörelsen
    if (moveLeft && player.x > gameWindow.width - 770) {
        player.x -= player.speed;
    }

    if (moveRight && player.x < gameWindow.width - 30) {
        player.x += player.speed;
    }

    if (moveUp && player.y > gameWindow.height - 570) {
        player.y -= player.speed;
    }

    if (moveDown && player.y < gameWindow.height - 30) {
        player.y += player.speed;
    }

}

function drawCoinCircle() {
    let x = coin.x;
    let y = coin.y;
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
}

function checkCollisions() {
    if (coin.x < player.x + player.width &&
        coin.x + coin.width > player.x &&
        coin.y < player.y + player.height &&
        coin.height + coin.y > player.y) {
            randomizeCoin();
            score++;
            scoreDisplay.innerText = score;
            console.log('COIN COLISSION!');
        }    
}

function randomizeCoin() {
    randomX = Math.floor((Math.random() * 770) + 30);
    randomY = Math.floor((Math.random() * 570) + 30);
    coin.x = randomX;
    coin.y = randomY;
}