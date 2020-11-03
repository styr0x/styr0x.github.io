import {Player} from './Entities/player.js';
import {Coin} from './Entities/coin.js';
import {Enemy} from './Entities/enemy.js';
//////////////////////////////////////////////////////////////Variabler
const parentDiv = document.getElementById("parentDiv");
//Canvasen
const gameWindow = document.getElementById("gameWindow");
let isGameRunning = 1;


const player = new Player(gameWindow.width/2, gameWindow.height/2);
const coin = new Coin();


//Enemy
let enemyArray = [];
let enemySpawnHeight = 500;
let enemyAmount = 2;
for (let i = 0; i < enemyAmount; i++){
    enemyArray.push(new Enemy(760, enemySpawnHeight, player));
    enemySpawnHeight -= 200;
    }
console.log(enemyArray)




//Powerup
const powerup = {
    x: coin.randomX,
    y: coin.randomY, 
    width: 30,
    height: 30,
    powerupCounter: 0
}
//Score
let score = {
    scoreDisplay: document.getElementById("scoreNum"),
    currentScore: 0
}




////////////////////////////////////////////////////////////////////Gameloopen
window.requestAnimationFrame(gameLoop);
function gameLoop() {
    if (isGameRunning === 1) {
    requestAnimationFrame(gameLoop);
    }
    player.update();
    coin.update();
    for (let i = 0; i < enemyArray.length; i ++) {
    enemyArray[i].update();
    }
    clearCanvas();
    if (powerup.powerupCounter >= 10) {
        drawPowerupCircle();
        checkPowerupCollisions();
    }
    player.draw();
    coin.draw();
    for (let i = 0; i < enemyArray.length; i ++) {
    enemyArray[i].draw();
    }
}

//////////////////////////////////////////////////////////////////Alla andra funktioner

//Töm canvasen
function clearCanvas () {
    const ctx = gameWindow.getContext("2d");
    ctx.clearRect(0,0,gameWindow.width,gameWindow.height);
}


//Ritar powerupen
function drawPowerupCircle() {
    const ctx = gameWindow.getContext("2d");
    ctx.beginPath();
    ctx.arc(powerup.x, powerup.y, 12, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}
//Checkar ifall man kolliderat med powerupen
function checkPowerupCollisions() {
    if (powerup.x < player.x + player.width &&
        powerup.x + powerup.width > player.x &&
        powerup.y < player.y + player.height &&
        powerup.height + powerup.y > player.y) {
            player.width = 30;
            player.height = 30;
            player.speed = 4;
            powerup.powerupCounter = 0;
        }    
}


////////Gameover och reset

//Gameover screen
function gameOver() {
    isGameRunning = 0;
    const gameOverText = document.createElement("span");
    gameOverText.innerText = "GAME OVER";
    gameOverText.className = "gameOverClass";
    gameOverText.id = "gameOverTextId";
    parentDiv.appendChild(gameOverText);
    clearCanvas();
    createResetButton();
}

//Resetknapp
function createResetButton() {
    const resetButton = document.createElement("button");
    resetButton.innerText = "RESET";
    resetButton.className = "resetButtonClass";
    resetButton.id = "resetBtnId"
    resetButton.addEventListener('click', restartGame);
    parentDiv.appendChild(resetButton);
}

//Starta om spelet och göm gameover rutan
function restartGame() {
    document.location.reload();  
}

////////////////////////////////////////////////////////////Exports
export {player};
export {score};
export {powerup};
export {gameOver};
export {enemySpawnHeight};