import {GameWindow} from './utility/gamewindow.js';
import {Ui} from './utility/ui.js';
import {Level0} from './maps/level0.js';
import { Player } from './entities/player.js';
import {CollisionDetection} from './utility/collisions.js'
import {isGrounded} from './utility/collisions.js';
import {groundTileArr} from './maps/level0.js'
import { moveDirY } from './utility/input.js';
const width = 800;
const height = 600;


const ui = new Ui();
export const gameWindow = new GameWindow(width, height, "blue");
export const gameWindow2 = new GameWindow(width, height, "transparent");
const scene = new Level0();
scene.draw();
export const player = new Player(scene.playerSpawnX, scene.playerSpawnY);
const playerGroundCollision = new CollisionDetection(player, scene.groundTile)

console.log(groundTileArr);


requestAnimationFrame(gameLoop);

function gameLoop() {


    player.update();
<<<<<<< HEAD
    for (let i = 0; i < groundTileArr.length; i++) {
        playerGroundCollision.detectCollision(player, groundTileArr[i]);
    }
    //Om man kommenterar bort dehär syns bana, högst troligen na i level0.js
    gameWindow2.clear();

    scene.draw();
    player.draw();

    console.log(isGrounded)
    console.log(moveDirY)

=======

    //Om man kommenterar bort dehär syns bana, högst troligen na i leve0.js
    gameWindow.clear();

    scene.draw();
    player.draw();
    
    requestAnimationFrame(gameLoop);
>>>>>>> abe173b570c9fcb2fe8ba77448c0666a01f322c5
}

