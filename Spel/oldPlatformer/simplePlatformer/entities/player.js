import { Square } from '../shapes/square.js';
<<<<<<< Updated upstream:Spel/oldPlatformer/simplePlatformer/entities/player.js
import { moveDirX, moveDirY } from '../utility/input.js';
import {CollisionDetection, isGrounded} from '../utility/collisions.js';
import {scene} from '../game.js'
import { gameWindow } from '../game.js';
=======
import { isGrounded } from '../utility/collisions.js';
import { Input } from '../utility/input.js';

>>>>>>> Stashed changes:Spel/simplePlatformer/simplePlatformer/entities/player.js

export class Player {
    constructor(x,y) {
        this.input = new Input();
        this.x = x;
        this.y = 400;
        this.type = "layer2";
        this.color = "yellow";
        this.acceleration = 0.8;
        this.drag = 0.9;
        this.jumpForce = 2;
        this.gravity = 0.2;
        this.velocityX = 0;
        this.velocityY = 0;
        this.collision = new CollisionDetection;

        

    }
    update() {
        //Uppdater input
        this.input.update();
        //Movement left å right + drag 
        this.velocityX += this.acceleration * this.input.moveDirX;
        this.x += this.velocityX;
        this.velocityX *= this.drag;
        
    
        //Jump
<<<<<<< Updated upstream:Spel/oldPlatformer/simplePlatformer/entities/player.js
        this.velocityY += this.jumpForce * moveDirY;
        this.y -= this.velocity
        
        this.collision.detectCollision(player, scene.groundTile);
=======
        this.velocityY += this.input.moveDirY;
        this.y += this.velocityY;
        
        //Apply gravity
        if (isGrounded) {
            this.velocityY = 0;
        }
        else if (!isGrounded) {
            this.velocityY += this.gravity;
        }
>>>>>>> Stashed changes:Spel/simplePlatformer/simplePlatformer/entities/player.js



    }
    draw() {
        new Square(this.x, this.y, this.color, this.type);
        }
}