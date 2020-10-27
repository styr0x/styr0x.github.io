//Variabler

//Canvasen
let gameWindow = document.getElementById("gameWindow");
let ctx = gameWindow.getContext("2d");
//Player
let player = {
    x:gameWindow.width/2,
    y:gameWindow.height-100,
    speed: 5
};

let moveLeft = false;
let moveRight = false;

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
    if (moveLeft) {
        player.x -= player.speed;
        console.log("moving moveLeft");
    }

    if (moveRight) {
        player.x += player.speed;
        console.log("moving moveRight");
    }

}

document.onkeydown = function(e) {
    if (e.code == "ArrowLeft") {moveLeft = true;}
    if (e.code == "ArrowRight") {moveRight = true;}
    console.log("keypress");
    console.log (moveLeft,moveRight);
    console.log(e.code);
}

document.onkeyup = function(e) {
    if (e.code == "ArrowLeft") {moveLeft = false;}
    if (e.code == "ArrowRight") {moveRight = false;}
    console.log("keyrelease");
    console.log (moveLeft,moveRight);
    console.log(e.code);
}