//Imports
import {scoreUpPlayer} from '../utility/score.js';
import {scoreUpAi} from '../utility/score.js';
import {ball, player} from '../game.js';
import {ai} from '../game.js';
import {gameWindow} from '../gamewindow.js';
import {playPop, playScoreAi, playScorePlayer} from '../Sound/sound.js';
//Player class
export class Ball {
    constructor(y) {
        this.velocityX = -5;
        this.velocityY = 0;
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

        //Studsa väggar upp & ner
        if (this.y + this.size > gameWindow.height) {
            this.velocityY = this.velocityY *= -1;
            playPop();
        }
        if (this.y < 0) {
            this.velocityY = this.velocityY *= -1;
            playPop();
        }
        //Studsa player paddle
        //Översta tredjedelen
        if(this.x < player.x + player.width &&
            this.y > player.y &&
            this.y < player.y + 16.66) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY -1.5;
                playPop();
            }
        //Mittersta    
        else if(this.x < player.x + player.width &&
            this.y > player.y + 16.66 &&
            this.y < player.y + 33.33) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY = 0;
                playPop();
            }
        //Lägsta    
        else if(this.x < player.x + player.width &&
            this.y > player.y + 33.33 &&
            this.y < player.y + player.height) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY = 1.5;
                playPop();
            }
            

        //Studsa ai paddle
        //Översta tredjedelen
        if(this.x > ai.x - ai.width &&
            this.y > ai.y &&
            this.y < ai.y + 16.66) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY -2;
                playPop();
            }
        //Mittersta    
        else if(this.x > ai.x - ai.width &&
            this.y > ai.y + 16.66 &&
            this.y < ai.y + 33.33) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY = 0;
                playPop();
            }
        //Lägsta    
        else if(this.x > ai.x - ai.width &&
            this.y > ai.y + 33.33 &&
            this.y < ai.y + ai.height) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY = 2;
                playPop();
            }
        //Player score
        if (ball.x > gameWindow.width) {
            scoreUpPlayer();
            playScorePlayer();
        }
        //Ai score
        if (ball.x < 0) {
            scoreUpAi();
            playScoreAi();
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