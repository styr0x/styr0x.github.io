//Imports
import {gameWindow} from '../gamewindow.js';
import {player} from '../game.js';
import {ball}  from '../game.js';
//Ai class
export class Ai {
    constructor(y) {
        this.acceleration = 0.1;
        this.drag = 0.95;
        this.velocity = 0;
        this.width = 10;
        this.height = 80;
        this.x = 780;
        this.y = gameWindow.height / 2 - this.height / 2;
        this.moveDirection = 0;
    }
    //Functions
    update() {

        this.velocity += this.acceleration * this.moveDirection;
        this.y += this.velocity;
        this.velocity *= this.drag;

        //Ändra movedirection
        if (ball.y < this.y + this.height / 2) {
            this.moveDirection = -1;
        }
        else if (ball.y > this.y / 2) {
            this.moveDirection = 1;
        }
        //Stoppar paddlan från att gå över rutan
        if (this.y + this.height > gameWindow.height) {
            this.y = gameWindow.height - this.height;
        }
        else if (this.y < 0) {
            this.y = 0;
        }
    }
    //Rita ut ai'n
    draw() {
        const ctx = gameWindow.getContext('2d');
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "green";
        ctx.fill();
    }    
};
