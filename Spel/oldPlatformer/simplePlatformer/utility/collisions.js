import {squareHeight, squareWidth} from '../shapes/square.js';
export let isGrounded = false;
export class CollisionDetection {
    constructor (a, b) {
        
        this.objectOne = a;
        this.objectTwo = b;
    }
    detectCollision() {
        if (this.objectOne.y + squareHeight >= this.objectTwo.y
            
            //&& this.objectOne.x > this.objectTwo.x
            //&& this.objectOne.x < this.objectTwo.x + squareWidth
            ) {
                isGrounded = true;
            }
        else {
            isGrounded = false;
        }
    }
}