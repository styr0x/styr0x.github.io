//Variabler
let parentDiv = document.getElementById("parentDiv");
//Canvasen
let gameWindow = document.getElementById("gameWindow");
let ctx = gameWindow.getContext("2d");

//Player
let player = {
    x:gameWindow.width/2,
    y:gameWindow.height/2,
    speed: 4,
    width: 30,
    height: 30,
    health: 1
    
};

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

//Enemy
let enemyArray = [];
let enemyAmount = 3;
let loopStopper = true;
let enemySpawnHeight = 500;
let enemySpeed = 1;

//Coin
let powerupCounter = 0;
let randomX = 30
let randomY = 30
let coin = {
    x: randomX,
    y: randomY, 
    width: 30,
    height: 30
}
//Powerup
let powerup = {
    x: randomX,
    y: randomY, 
    width: 30,
    height: 30
}
//Score
let scoreDisplay = document.getElementById("scoreNum");
let score = 0;



//Gameloopen
let gameInterval = setInterval (gameLoop, 10);
function gameLoop() {
    clearCanvas();
    drawPlayerCircle();
    movePlayer();
    drawCoinCircle();
    checkCoinCollisions();
    if (loopStopper) {
        for (let i = 0; i < enemyAmount; i++) {
            makeEnemy();
            
        }
        loopStopper = false;   
    }
    drawEnemyCircles();
    enemyFollowPlayer();
    checkEnemyCollisions();
    if (powerupCounter >= 10) {
        drawPowerupCircle();
        checkPowerupCollisions();
    }
}

//////////////////////////////////////Alla andra funktioner

//Töm canvasen
function clearCanvas () {
    ctx.clearRect(0,0,gameWindow.width,gameWindow.height);
}


////////Spelarens funktioner

//Rita spelaren
function drawPlayerCircle() {
    let x = player.x;
    let y = player.y;
    ctx.beginPath();
    ctx.arc(x, y, player.height - 5, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
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
    if (moveLeft && player.x > gameWindow.width - 800  + player.width) {
        player.x -= player.speed;
    }

    if (moveRight && player.x < gameWindow.width - 0 - player.width) {
        player.x += player.speed;
    }

    if (moveUp && player.y > gameWindow.height - 600 + player.height) {
        player.y -= player.speed;
    }

    if (moveDown && player.y < gameWindow.height - 0 - player.height) {
        player.y += player.speed;
    }

}

////////Coinens funktioner

//Skapar coinen
function drawCoinCircle() {
    ctx.beginPath();
    ctx.arc(coin.x, coin.y, 12, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
}
//Ser ifall man kolliderat men coinen
function checkCoinCollisions() {
    if (coin.x < player.x + player.width &&
        coin.x + coin.width > player.x &&
        coin.y < player.y + player.height &&
        coin.height + coin.y > player.y) {
            randomizeCoin();
            score++;
            powerupCounter++;
            player.width+= 3;
            player.height+= 3;
            player.speed -= 0.1;
            scoreDisplay.innerText = score;
        }    
}

//Lägger coinen på ett random ställe
function randomizeCoin() {
    randomX = Math.floor(Math.random() * (gameWindow.width - coin.width - 20) + coin.width);
    randomY = Math.floor(Math.random() * (gameWindow.height - coin.height - 20) + coin.height);
    coin.x = randomX;
    coin.y = randomY;
}

////////Enemyns funktioner

//Skapa enemies
function makeEnemy() {
    let enemy = {
        x: 760,
        y: enemySpawnHeight,
        speed: enemySpeed,
        width: 30,
        height: 30,
        damage: 1,
        amount: 2
    }
    enemyArray.push(enemy);
    enemySpawnHeight -= 200;
    enemySpeed++;
}
function drawEnemyCircles() {
    enemyArray.forEach(function(enemy, i){
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, 25, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    });
}

//Följ spelaren
function enemyFollowPlayer() {
    enemyArray.forEach(function(enemy,i){
        let directionX = player.x - enemy.x;
        let directionY = player.y - enemy.y;
    
        let hyp = Math.sqrt(Math.pow(directionX, 2) + Math.pow(directionY, 2));
        directionX /= hyp;
        directionY /= hyp;
    
        enemy.x += directionX * enemy.speed;
        enemy.y += directionY * enemy.speed;
    });
}

//Checkar ifall man kolliderat med enemyn och stoppar gameloopen.
function checkEnemyCollisions() {
    enemyArray.forEach(function(enemy,i){
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
            powerupCounter = 0;
        }    
}


////////Gameover och reset

//Gameover screen
function gameOver() {
    let gameOverText = document.createElement("span");
    gameOverText.innerText = "GAME OVER";
    gameOverText.className = "gameOverClass";
    gameOverText.id = "gameOverTextId";
    parentDiv.appendChild(gameOverText);
    clearInterval(gameInterval);
    clearCanvas();
    createResetButton();
}

//Resetknapp
function createResetButton() {
    let resetButton = document.createElement("button");
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