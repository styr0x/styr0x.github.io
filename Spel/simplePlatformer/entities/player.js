import { Square } from '../shapes/square.js';
import { moveDirX, moveDirY } from '../utility/input.js';

export class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.type = "player";
        this.color = "blue";
        this.acceleration = 0.8;
        this.drag = 0.9;
        this.velocityX = 0;
        this.velocityY = 0;

    }
    update() {
        this.velocityX += this.acceleration * moveDirX;
        this.x += this.velocityX;
        this.velocityX *= this.drag;

    }
    draw() {
        new Square(this.x, this.y, this.type, this.color);
        }
}