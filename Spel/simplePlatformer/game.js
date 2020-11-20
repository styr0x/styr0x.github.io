import {Gamewindow} from './utility/gamewindow.js';
import {Ui} from './utility/ui.js';
import {Level0} from './maps/level0.js';
const width = 800;
const height = 600;


const ui = new Ui();
export let gameWindow = new Gamewindow(width, height);
const scene = new Level0();

window.onload = requestAnimationFrame(gameLoop);
function gameLoop() {
    requestAnimationFrame(gameLoop);

    scene.ground.draw();

    gameWindow.clear

    console.log("kellogs")
}