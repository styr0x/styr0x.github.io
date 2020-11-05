//Imports
import {gameWindow} from '../game.js';
//Player class
class Player {
    constructor(y) {
        this.acceleration = 1000;
        this.drag = 5;
        this.velocity = 3;
        this.y = 250;
        this.width = 10;
        this.height = 100;
        this.moveUp = false;
        this.moveDown = false;
        //Handlar keypress
        document.onkeydown = (function(e) {
            if (e.code == "ArrowUp") this.moveUp = true;
            if (e.code == "ArrowDown") this.moveDown = true;
        }).bind(this);
        document.onkeyup = (function(e) {
            if (e.code == "ArrowUp") this.moveUp = false;
            if (e.code == "ArrowDown") this.moveDown = false;
        }).bind(this);
    }
    //Functions
    update() {
        if (this.moveUp && this.y > gameWindow.height - 700 + this.height) {
            this.y -= this.velocity;
            console.log(this.y);
        }
        if (this.moveDown && this.y < gameWindow.height - this.height) {
            this.y += this.velocity;
            console.log(this.y);
        }  
    }
    draw() {
        const ctx = gameWindow.getContext('2d');
        ctx.beginPath();
        ctx.rect(20, this.y, this.width, this.height);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
};
//Exports
export {Player};