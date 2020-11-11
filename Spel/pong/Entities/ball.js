//Imports
import {scoreUpPlayer} from '../utility/score.js';
import {scoreUpAi} from '../utility/score.js';
import {ball, player} from '../game.js';
import {ai} from '../game.js';
import {gameWindow} from '../game.js';
//Player class
class Ball {
    constructor(y) {
        this.velocityX = -4;
        this.velocityY = -2;
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
        if(this.x > player.x && this.x < player.x + player.width) {
            if (this.y > player.y && this.y < player.y + player.height) {
                this.velocityX = this.velocityX * -1;
            }
        }

        //Studsa ai paddle
        if(this.x > ai.x && this.x > ai.x - ai.width) {
            if (this.y > ai.y && this.y < ai.y + ai.height) {
                this.velocityX = this.velocityX * -1;
            }
        }

        //Player score
        if (ball.x > gameWindow.width) {
            scoreUpPlayer();
        }
        //Ai score
        if (ball.x < 0) {
            scoreUpAi();
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