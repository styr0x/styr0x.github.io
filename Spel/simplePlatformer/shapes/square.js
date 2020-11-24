import {gameWindow} from '../game.js';
export const squareWidth = 25;
export const squareHeight = 18.75;
export class Square {
    constructor(x, y, color) {
        gameWindow.ctx.beginPath();
        gameWindow.ctx.rect(x, y, squareWidth, squareHeight);
        gameWindow.ctx.fillStyle = color;
        gameWindow.ctx.fill();
    }
}
