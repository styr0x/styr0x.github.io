import {ai, ball, player} from '../game.js';
import {gameWindow} from '../gamewindow.js';
//Element
const playerScore = document.getElementById("playerOneScoreId");
const aiScore = document.getElementById("playerTwoScoreId");
const messenger = document.getElementById("announcer");
//Variabler
let playerScoreCount = 0;
let aiScoreCount = 0;
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
    resetBall(-5);
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
    resetBall(5);

}

function resetBall(direction) {
    ball.y = 300;
    ball.x = 400;
    ball.velocityX = direction;
    ball.velocityY = 0;
    ai.y = gameWindow.height / 2 - 25;
    player.y = gameWindow.height / 2 - 25;
}