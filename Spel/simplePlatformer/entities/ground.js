import { Square } from '../shapes/square.js';
export class Ground {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.color = "green";
        this.type = "ground";
    }
    draw() {
    
    new Square(this.x, this.y, this.type, this.color);
    }
}