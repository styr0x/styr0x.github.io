import {gameLoop} from './game.js';
export function startScreen() {
    let parentDiv = document.getElementById("prntDiv");
    let welcomeDisplay = document.createElement('span');
    let fired = false;

        welcomeDisplay.className = 'anyKey';
        welcomeDisplay.innerText = 'PRESS ANY KEY TO PLAY';
        parentDiv.appendChild(welcomeDisplay);
        document.onkeydown = (function() {
            if (!fired) {
            console.log("hejsan")
            parentDiv.removeChild(welcomeDisplay);
            gameLoop();
            fired = true;
            }
            else if (fired) {

            }
        });
    }


