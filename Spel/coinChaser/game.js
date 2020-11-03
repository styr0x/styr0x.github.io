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
const enemy = new Enemy();

//Enemy
let enemyArray = [];
let enemyAmount = 1;
let loopStopper = true;





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
    
    
    player.move();
    enemy.follow();
    
    coin.isColliding();
    if (loopStopper) {
        for (let i = 0; i < enemyAmount; i++) {
            enemy.make();
            
        }
        loopStopper = false;   
    }
    
    
    checkEnemyCollisions();
    clearCanvas();
    if (powerup.powerupCounter >= 10) {
        drawPowerupCircle();
        checkPowerupCollisions();
    }
    player.draw();
    coin.draw();
    drawEnemyCircles();
}

//////////////////////////////////////////////////////////////////Alla andra funktioner

//Töm canvasen
function clearCanvas () {
    const ctx = gameWindow.getContext("2d");
    ctx.clearRect(0,0,gameWindow.width,gameWindow.height);
}

////////Coinens funktioner

//Skapar coinen




////////Enemyns funktioner


function drawEnemyCircles() {
    const ctx = gameWindow.getContext("2d");
    enemy.enemyArray.forEach(function(enemy, i){
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, 25, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    });
}



//Checkar ifall man kolliderat med enemyn och stoppar gameloopen.
function checkEnemyCollisions() {
    enemy.enemyArray.forEach(function(enemy,i){
        if (enemy.x < player.x + player.width &&
            enemy.x + enemy.width > player.x &&
            enemy.y < player.y + player.height &&
            enemy.height + enemy.y > player.y) {
                gameOver();
            }
    });
     
}

////////Powerup

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
export {enemy};
export {enemyArray};