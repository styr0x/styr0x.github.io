import {player}  from '../game.js'
import {gameOver} from '../game.js'
import {enemySpawnHeight} from '../game.js'
export class Enemy {
    constructor() {
        this.enemySpeed = 1;
        this.x = 760;
        this.y = enemySpawnHeight;
        this.speed = this.enemySpeed;
        this.width = 30;
        this.height = 30;
    }

    //Följ spelaren
    update() {
        let directionX = player.x - this.x;
        let directionY = player.y - this.y;
        let hyp = Math.sqrt(Math.pow(directionX, 2) + Math.pow(directionY, 2));
        directionX /= hyp;
        directionY /= hyp;
        this.x += directionX * this.speed;
        this.y += directionY * this.speed;
        
        if (this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.height + this.y > player.y) {
                gameOver();
            }
    }
    
    draw() {
        const ctx = gameWindow.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
         
    } 
};

