import {gameWindow, gameWindow2} from '../game.js';
export const squareWidth = 25;
export const squareHeight = 18.75;
export class Square {
    constructor(x, y, color, type) {
        if (type == "layer1") {
            gameWindow.ctx.beginPath();
            gameWindow.ctx.rect(x, y, squareWidth, squareHeight);
            gameWindow.ctx.fillStyle = color;
            gameWindow.ctx.fill();
        }
        else if (type == "layer2") {
            gameWindow2.ctx.beginPath();
            gameWindow2.ctx.rect(x, y, squareWidth, squareHeight);
            gameWindow2.ctx.fillStyle = color;
            gameWindow2.ctx.fill();
        }

    }
}
