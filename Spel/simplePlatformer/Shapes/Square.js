import {canvas} from '../game.js';
//Width & Height for ground should be 25 and 18.175
export class Square {
    constructor(x, y, width, height, color) {
            canvas.ctx.beginPath();
            canvas.ctx.rect(x, y, width, height);
            canvas.ctx.fillStyle = color;
            canvas.ctx.fill();
    }
}
