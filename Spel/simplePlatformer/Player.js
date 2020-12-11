import { Input } from "./Input.js";
import { Square } from "./Shapes/Square.js";

export class Player {
    constructor(x,y) {
        this.width = 12;
        this.height = 16;
        this.x = x;
        this.y = y;
        this.color = "yellow";
        this.acceleration = 0.2;
        this.drag = 0.95;
        this.jumpForce = 0.5;
        this.gravity = 0.5;
        this.input = new Input();
        this.velocityX = 0;
        //this.velocityY = input.moveDirY;
        this.isColliding;
        
    }
    update(player, tileArr, tileSize) {
        this.input.update();
        this.velocityX += this.acceleration * this.input.moveDirX;
        this.x += this.velocityX;
        this.velocityX *= this.drag;
        this.sideTransfer();

    }
    sideTransfer() {
        if (this.x + this.width < 0) {
            this.x = 512;
        }
        else if (this.x > 512) {
            this.x = 0 - this.width;
        }
    }
    draw() {
        new Square(this.x, this.y, this.width, this.height, this.color);
        }
}