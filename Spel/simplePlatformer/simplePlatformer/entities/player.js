import { Square } from '../shapes/square.js';
import { moveDirX, moveDirY } from '../utility/input.js';
import {isGrounded} from '../utility/collisions.js';

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

    }
    update() {
        //Movement left å right + drag 
        this.velocityX += this.acceleration * moveDirX;
        this.x += this.velocityX;
        this.velocityX *= this.drag;
        //Jump
        this.velocityY += this.jumpForce * moveDirY;
        this.y -= this.velocityY;
        
        if (isGrounded) {
            this.velocityY = 0;
        }
        else if (!isGrounded) {
            this.velocityY -= this.gravity;
        }
        



    }
    draw() {
        new Square(this.x, this.y, this.color, this.type);
        }
}