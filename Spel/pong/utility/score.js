import {ai, ball, player} from '../game.js';
//Element
const playerScore = document.getElementById("playerOneScoreId");
const aiScore = document.getElementById("playerOneScoreId");
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
    ai.y = 80;
    player.y = 80;
}