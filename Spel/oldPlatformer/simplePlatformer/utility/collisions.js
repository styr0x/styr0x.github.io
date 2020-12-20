import {squareHeight, squareWidth} from '../shapes/square.js';
export let isGrounded = false;
export class CollisionDetection {
    constructor (a, b) {
        this.a = a;
        this.b = b;

    }
    detectGround() {
        this.playerTop = this.a.y;
        this.playerBottom = this.a.y + squareHeight;
        this.playerLeft = this.a.x;
        this.playerRight = this.a.x + squareWidth;
        
        this.objectTop = this.b.y;
        this.objectBottom = this.b.y + squareHeight;
        this.objectLeft = this.b.x;
        this.objectRight = this.b.x + squareWidth;

        if (this.playerBottom > this.objectTop) {
            isGrounded = true;
        }
        else {
            isGrounded = false;
        }
     console.log(isGrounded);
    }
}