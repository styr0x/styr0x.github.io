import {GameWindow} from './utility/gamewindow.js';
import {Ui} from './utility/ui.js';
import {Level0} from './maps/level0.js';
import { Player } from './entities/player.js';
import {CollisionDetection, isGrounded} from './utility/collisions.js'
import {groundTileArr} from './maps/level0.js'
const width = 800;
const height = 600;


const ui = new Ui();
export const gameWindow = new GameWindow(width, height, "blue");
export const gameWindow2 = new GameWindow(width, height, "transparent");
export const scene = new Level0();
scene.draw();
export const player = new Player(scene.playerSpawnX, scene.playerSpawnY);


console.log(groundTileArr)


requestAnimationFrame(gameLoop);

function gameLoop() {
    requestAnimationFrame(gameLoop);

    player.update();
<<<<<<< Updated upstream:Spel/oldPlatformer/simplePlatformer/game.js
    //Om man kommenterar bort dehär syns bana, högst troligen na i level0.js
    gameWindow2.clear();

    scene.draw();
=======
    
    for (let i = 0; i < groundTileArr.length; i++) {
        playerGroundCollision.detectGround(player, groundTileArr[i]);
        if (isGrounded) {
            //console.log("now colliding with" + groundTileArr[i])
        }
    }
    //Om man kommenterar bort dehär syns bana, högst troligen na i level0.js
    gameWindow2.clear();

    //scene.draw();
>>>>>>> Stashed changes:Spel/simplePlatformer/simplePlatformer/game.js
    player.draw();
}
