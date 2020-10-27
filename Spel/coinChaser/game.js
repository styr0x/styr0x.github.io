//Variabler

//Canvasen
let gameWindow = document.getElementById("gameWindow");
let ctx = gameWindow.getContext("2d");
//Player
let player = {
    x:gameWindow.width/2,
    y:gameWindow.height-100,
    speed: 20
};

let left = false;
let right = false;

//Coin

//Score
let score = 0;



//Gameloopen
setInterval (gameLoop, 10);
function gameLoop() {
    clearCanvas();
    drawPlayerCircle();
    movePlayer();
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
    if (left) {
        player.x -= player.speed;
        console.log("moving left");
    }

    if (right) {
        player.x += player.speed;
        console.log("moving right");
    }
}

document.onkeydown = function(e) {
    if (e.keycode == 37) left = true;
    if (e.keycode == 39) right = true;
    console.log("keypress");
}

document.onkeyup = function(e) {
    if (e.keycode == 37) left = false;
    if (e.keycode == 39) right = false;
    console.log("keyrelease");
}