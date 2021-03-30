import {ai, ball, player} from '../game.js';
import {gameWindow} from '../gamewindow.js';
//Element
const playerScore = document.getElementById("playerOneScoreId");
const aiScore = document.getElementById("playerTwoScoreId");
const messenger = document.getElementById("announcer");
//Variabler
export let playerScoreCount = 0;
export let aiScoreCount = 0;
let damageAmount = 20;
let normalHeight = 80;
//Funktioner
export function scoreUpPlayer() {
    messenger.innerHTML = "YOU SCORE!";
    messenger.className = "titleClassAnimated";
    playerScoreCount++;
    playerScore.innerText = playerScoreCount;
    playerScore.className = "titleClassAnimated";
    
    setTimeout(function (){
        messenger.innerHTML = "PONG";
        messenger.className = "titleClass";
        playerScore.className = "scoreClassPlayer";
    
    } ,2000)
    resetBall(-ball.speed);
    
    player.height += 10;
    ai.height -= damageAmount;
    ai.acceleration += 0.005
    
    player.r -= 100;
    player.g += 100;

    ai.r += 100;
    ai.g -= 100;

    
}

export function scoreUpAi() {
    messenger.innerHTML = "AI SCORES!"
    messenger.className = "titleClassAnimated";
    aiScoreCount++
    aiScore.innerText = aiScoreCount;
    aiScore.className = "titleClassAnimated";
    
    setTimeout(function (){
        messenger.innerHTML = "PONG"
        messenger.className = "titleClass";
        aiScore.className = "scoreClassPlayer";
    }, 2000)
    resetBall(ball.speed);
    
    player.height -= damageAmount;
    ai.height += damageAmount;
    ai.acceleration -= 0.005
    
    player.r += 100;
    player.g -= 100;

    ai.r -= 100;
    ai.g += 100;
}


function resetBall(direction) {
    ball.y = 300;
    ball.x = 400;
    ball.velocityX = direction;
    ball.velocityY = 0;
    ai.y = gameWindow.height / 2 - ai.height / 2;
    player.y = gameWindow.height / 2 - player.height / 2;
}

export function resetScore() {
    aiScoreCount = 0;
    playerScoreCount = 0;

    aiScore.innerText = aiScoreCount;
    playerScore.innerText = playerScoreCount;

    player.height = normalHeight;
    ai.height = normalHeight;

    player.r = 0;
    player.g = 255;

    ai.r = 0;
    ai.g = 255;
}