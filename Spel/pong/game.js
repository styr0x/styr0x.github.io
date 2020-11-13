//Imports
import {clearGameWindow} from './gamewindow.js'
import {Player} from './Entities/player.js';
import {Ai} from './Entities/ai.js';
import {Ball} from './Entities/ball.js'; 
import {drawGameField} from './gamewindow.js';
import {startScreen} from './startscreen.js';

////Skapa 2 players
//Playern
const player = new Player();
//Ai'n
const ai = new Ai();
////Skapa bollen
const ball = new Ball();
////Start screen
//startScreen();
gameLoop();

////Gameloop
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
//Exports
export {player};
export {ball};
export {ai};
export {gameLoop};
