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

////////Coinens funktioner

//Skapar coinen
function drawCoinCircle() {
    ctx.beginPath();
    ctx.arc(coin.x, coin.y, 25, 0, 2 * Math.PI);
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
            player.width+= 2
            player.height+= 2
            scoreDisplay.innerText = score;
        }    
}

//Lägger coinen på ett random ställe
function randomizeCoin() {
    randomX = Math.floor(Math.random() * (gameWindow.width - coin.width));
    randomY = Math.floor(Math.random() * (gameWindow.height - coin.height));
    coin.x = randomX;
    coin.y = randomY;
}

////////Enemyns funktioner

//Skapa enemies
function makeEnemy() {
    let enemy = {
        x: Math.floor(Math.random() * gameWindow.width) - 30,
        y: Math.floor(Math.random() * gameWindow.height) -30,
        speed: Math.floor(Math.random() * 4) + 1,
        width: 30,
        height: 30,
        damage: 1,
        amount: 2
    }
    enemyArray.push(enemy);

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