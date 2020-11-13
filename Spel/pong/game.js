//Imports
import {clearGameWindow} from './gamewindow.js'
import {Player} from './Entities/player.js';
import {Ai} from './Entities/ai.js';
import {Ball} from './Entities/ball.js'; 
import {drawGameField} from './gamewindow.js';



////Skapa 2 players
//Playern
const player = new Player();
//Ai'n
const ai = new Ai();
////Skapa bollen
const ball = new Ball();
////Gamerunning

////Start screen


////Gameloop
gameLoop();
function gameLoop() {
    requestAnimationFrame(gameLoop);
    player.update();
    ai.update();
    ball.update();
    
    clearGameWindow();
    
    drawGameField();
    player.draw();
    ai.draw();
    ball.draw();
}

function startScreen(parentDiv, welcomeDisplay) {
    parentDiv = document.getElementById("prntDiv");
    welcomeDisplay = document.createElement('span');
    welcomeDisplay.className = 'anyKey';
    welcomeDisplay.innerText = 'PRESS ANY KEY TO PLAY';
    parentDiv.appendChild(welcomeDisplay);
}

//Exports
export {player};
export {ball};
export {ai};
