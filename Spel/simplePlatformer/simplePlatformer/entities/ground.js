import { Square } from '../shapes/square.js';
export class Ground {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.type = "layer1";
        this.color = "green";
    }
    draw() {
    new Square(this.x, this.y, this.color, this.type);
    }
}