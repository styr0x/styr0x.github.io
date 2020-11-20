import {gameWindow} from '../game.js'
export class Ground {
    constructor() {
        this.width = 21.875;
        this.height = 21.875;
        this.x = 400;
        this.y = 300;
    }
    draw() {
        gameWindow.ctx.beginPath();
        gameWindow.ctx.rect(this.x, this.y, this.width, this.height);
        gameWindow.ctx.fillStyle = "green";
        gameWindow.ctx.fill();
    }
}