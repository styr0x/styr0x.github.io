import {GameLayer} from './utility/gamewindow.js';
import {Ui} from './utility/ui.js';
import {Level0} from './maps/level0.js';
import { Player } from './entities/player.js';
import {squareWidth, squareHeight} from './shapes/square.js';
const width = 800;
const height = 600;


const ui = new Ui();
export const groundLayer = new GameLayer(width, height);
const scene = new Level0();
export const player = new Player(scene.playerSpawnX, scene.playerSpawnY);





requestAnimationFrame(gameLoop);

function gameLoop() {
    requestAnimationFrame(gameLoop);

    player.update();



    player.draw();

}

