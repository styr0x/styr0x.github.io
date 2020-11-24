import {GameWindow} from './utility/gamewindow.js';
import {Ui} from './utility/ui.js';
import {Level0} from './maps/level0.js';
import { Player } from './entities/player.js';
const width = 800;
const height = 600;


const ui = new Ui();
export const gameWindow = new GameWindow(width, height);
const scene = new Level0();
export const player = new Player(scene.playerSpawnX, scene.playerSpawnY);





requestAnimationFrame(gameLoop);

function gameLoop() {
    requestAnimationFrame(gameLoop);

    player.update();

    gameWindow.clear();

    scene.draw();
    player.draw();

}

