//Imports
import {player} from '../game.js';
import {gameWindow} from '../game.js';
//Player class
class Ball {
    constructor(y) {
        this.velocityX = -3;
        this.velocityY = -1;
        this.y = 300;
        this.x = 400;
        this.size = 8;
        this.moveX = 0;
        this.moveY = 0;
    }
    //Functions
    update() {
        console.log(this.velocityY)
        this.x += this.velocityX;
        this.y += this.velocityY;

        //Studsa väggar
        if (this.y + this.size > gameWindow.height) {
            this.velocityY = this.velocityY *= -1;
        }
        if (this.y < 0) {
            this.velocityY = this.velocityY *= -1;
        }
        //Studsa player paddle
        if (this.x < player.x + player.width &&
            this.y <= player.y + player.height) {
                this.velocityX = this.velocityX *= -1;
                this.velocityY = this.velocityY *= -1;
        }
        if (this.x + this.size > gameWindow.width) {
            this.velocityX = this.velocityX * -1;
        }
    }

    draw() {
        const ctx = gameWindow.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
    }
};
//Exports
export {Ball};