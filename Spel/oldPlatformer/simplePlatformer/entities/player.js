import { Square } from '../shapes/square.js';
import { moveDirX, moveDirY } from '../utility/input.js';
import {CollisionDetection, isGrounded} from '../utility/collisions.js';
import {scene} from '../game.js'
import { gameWindow } from '../game.js';

export class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.type = "layer2";
        this.color = "yellow";
        this.acceleration = 0.2;
        this.drag = 0.9;
        this.jumpForce = 0.5;
        this.gravity = 0.5;
        this.velocityX = 0;
        this.velocityY = 0;
        this.collision = new CollisionDetection;

    }
    update() {
        //Movement left å right + drag 
        this.velocityX += this.acceleration * moveDirX;
        this.x += this.velocityX;
        this.velocityX *= this.drag;
        //Jump
        this.velocityY += this.jumpForce * moveDirY;
        this.y -= this.velocity
        
        this.collision.detectCollision(player, scene.groundTile);



    }
    draw() {
        new Square(this.x, this.y, this.color, this.type);
        }
}