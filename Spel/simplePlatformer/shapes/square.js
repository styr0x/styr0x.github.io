export const squareWidth = 25;
export const squareHeight = 18.75;
export class Square {
    constructor(x, y, type, color) {
        type.ctx.beginPath();
        type.ctx.rect(x, y, squareWidth, squareHeight);
        type.ctx.fillStyle = color;
        type.ctx.fill();
    }
}
