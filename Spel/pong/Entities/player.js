//Imports
import {gameWindow} from '../gamewindow.js';
//Player class
export class Player {
    constructor(y) {
        this.acceleration = 0.8;
        this.drag = 0.9;
        this.velocity = 0;
        this.x = 10;
        this.y = 80;
        this.width = 10;
        this.height = 50;
        this.moveDirection = 0;
        //Handlar keypress
        document.onkeydown = (function(e) {
            if (e.code == "ArrowUp") this.moveDirection = -1;
            if (e.code == "ArrowDown") this.moveDirection = 1;
        }).bind(this);
        document.onkeyup = (function(e) {
            if (e.code == "ArrowUp") this.moveDirection = 0;
            if (e.code == "ArrowDown") this.moveDirection = 0; 
        }).bind(this);
    }
    //Functions
    update() {
        this.velocity += this.acceleration * this.moveDirection;
        this.y += this.velocity;
        this.velocity *= this.drag;
        //Flyttar paddlan
        //Stoppar paddlan från att gå över rutan
        if (this.y + this.height > gameWindow.height) {
            this.y = gameWindow.height - this.height;
        }
        else if (this.y < 0) {
            this.y = 0;
        }
    }

    draw() {
        const ctx = gameWindow.getContext('2d');
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
};