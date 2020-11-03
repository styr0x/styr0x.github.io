import {score} from '../game.js'
import {powerup} from '../game.js'
import {player} from '../game.js'
export class Coin {
    constructor (x, y) {
        this.randomX = 30;
        this.randomY = 30;
        this.x = this.randomX;
        this.y= this.randomY;
        this.width= 30;
        this.height= 30;
    }
    //Lägger coinen på ett random ställe
    randomizePos() {
        this.randomX = Math.floor(Math.random() * (gameWindow.width - this.width - 20) + this.width);
        this.randomY = Math.floor(Math.random() * (gameWindow.height - this.height - 20) + this.height);
        this.x = this.randomX;
        this.y = this.randomY;
    }
    //Ser ifall man kolliderat men coinen
    update() {
        if (this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.height + this.y > player.y) {
            this.randomizePos();
            score.currentScore++;
            powerup.powerupCounter++;
            player.width+= 3;
            player.height+= 3;
            player.speed -= 0.1;
            score.scoreDisplay.innerText = score.currentScore;
        }    
    }
    draw() {
        const ctx = gameWindow.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, 12, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }        
};