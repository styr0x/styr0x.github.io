//Imports
import {gameWindow} from '../gamewindow.js';
import {Collider} from '../utility/collider.js'
//Player class
export class Player {
    constructor() {
        this.name = 'player';
        this.acceleration = 0.8;
        this.drag = 0.9;
        this.velocity = 0;
        this.width = 10;
        this.height = 80;
        this.x = 10;
        this.y = gameWindow.height / 2 - this.height / 2;
        this.moveDirection = 0;
        
        this.r = 0;
        this.g = 255;
        this.b = 0;
        this.color = `rgb(${this.r},${this.g},${this.b})`;

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
        //Flyttar paddlan
        this.velocity += this.acceleration * this.moveDirection;
        this.y += this.velocity;
        this.velocity *= this.drag;
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
        ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`;
        ctx.fill();
    }
};