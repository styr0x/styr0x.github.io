//Imports
import {clearGameWindow} from './gamewindow.js'
import {Player} from './Entities/player.js';
import {Ai} from './Entities/ai.js';
import {Ball} from './Entities/ball.js'; 
import {drawGameField} from './gamewindow.js';
import {playerScoreCount, aiScoreCount, resetScore} from './utility/score.js';

let parentDiv, welcomeDisplay;

////Skapa 2 players
//Playern
const player = new Player();
//Ai'n
const ai = new Ai();
////Skapa bollen
const ball = new Ball();
////Gamerunning
let gameRunning = false;
////Start screen

////Gameloop
messageScreen('PRESS ANY KEY TO PLAY!');

function gameLoop() {
    if (gameRunning) {
        requestAnimationFrame(gameLoop);
        checkWin();
        player.update();
        ai.update();
        ball.update();
        
        clearGameWindow();
        
        drawGameField();
        player.draw();
        ai.draw();
        ball.draw();
    }
    else {
        clearGameWindow();
        if (playerScoreCount > aiScoreCount) {
            messageScreen("YOU WIN! :) \n PRESS ANY KEY TO RETRY");
        }
        else {
            messageScreen("GAME OVER! :( \n PRESS ANY KEY TO RETRY");
        }

    }
    
}

function messageScreen(message) {
    
    parentDiv = document.getElementById("prntDiv");
    welcomeDisplay = document.createElement('span');
    welcomeDisplay.className = 'anyKey';
    welcomeDisplay.innerText = message;
    parentDiv.appendChild(welcomeDisplay);
    document.addEventListener('keydown', startGame, true);

}
function startGame() {
    resetScore();
    gameRunning = true;
    document.removeEventListener('keydown', startGame, true);
    parentDiv.removeChild(welcomeDisplay);
    gameLoop();
}

function checkWin() {
    if (player.height < 1 ||
        ai.height < 1) {
            gameRunning = false;
            console.log("gameOver");
        }
}
//Exports
export {player};
export {ball};
export {ai};
