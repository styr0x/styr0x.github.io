//Imports
import {gameWindow} from './gamewindow.js';
import {clearGameWindow} from './gamewindow.js'
import {playerOneScore} from './gamewindow.js';
import {playerTwoScore} from './gamewindow.js';
import {Player} from './Entities/player.js';
import {Ai} from './Entities/ai.js';
import {Ball} from './Entities/ball.js'; 

////Skapa 2 players
//Playern
const player = new Player();
//Ai'n
const ai = new Ai();
////Skapa bollen
const ball = new Ball();
////Gameloop
let gameRunning = true;
if (gameRunning) {
    gameLoop();
function gameLoop() {
    requestAnimationFrame(gameLoop);
    player.update();
    ai.update();
    ball.update();
    
    clearGameWindow();
    
    player.draw();
    ai.draw();
    ball.draw();
}
};
//Exports
export {gameWindow};
export {playerOneScore};
export {playerTwoScore};
export {player};
export {ball};
export {ai};
