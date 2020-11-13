import {ai, ball, player} from '../game.js';
//Element
const playerScore = document.getElementById("playerOneScoreId");
const aiScore = document.getElementById("playerTwoScoreId");
const messager = document.getElementById("announcer");
//Variabler
let playerScoreCount = 0;
let aiScoreCount = 0;
//Funktioner
export function scoreUpPlayer() {
    playerScoreCount++
    playerScore.innerText = playerScoreCount;
    resetBall(-4);
}

export function scoreUpAi() {
    aiScoreCount++
    aiScore.innerText = aiScoreCount;
    resetBall(4);
}

function resetBall(direction) {
    ball.y = 300;
    ball.x = 400;
    ball.velocityX = direction;
    ball.velocityY = 0;
    ai.y = gameWindow.height / 2 - 25;
    player.y = gameWindow.height / 2 - 25;
}