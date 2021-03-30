import {gameWindow} from '../gamewindow.js';
import {player, ai} from '../game.js'
import {playPop} from '../Sound/sound.js';

export class Collider {
    constructor(object) {
            this.ball = object;
            this.paddleBounceAngle = 2;

    }
    bounce() {

        this.bouncePlayer();
        this.bounceAi();
        this.bounceWall();
    }
    bouncePlayer() {
        //Studsa väggar upp & ner
        if (this.y + this.size > gameWindow.height) {
            this.velocityY = this.velocityY *= -1;
            playPop();
        }
        if (this.y < 0) {
            this.velocityY = this.velocityY *= -1;
            playPop();
        }        
        //Studsa playerns paddle
        //Översta tredjedelen
        if(this.ball.x < player.x + player.width &&
            this.ball.y > player.y &&
            this.ball.y < player.y + (player.height / 3)) {
                this.ball.velocityX = this.ball.velocityX * -1;
                this.ball.velocityY = this.ball.velocityY - this.paddleBounceAngle;
                playPop();
            }
        //Mittersta    
        else if(this.ball.x < player.x + player.width &&
            this.ball.y > player.y + (player.height / 3) &&
            this.ball.y < player.y + (player.height / 3) * 2) {
                this.ball.velocityX = this.ball.velocityX * -1;
                this.ball.velocityY = this.ball.velocityY = 0;
                playPop();
            }
        //Lägsta    
        else if(this.ball.x < player.x + player.width &&
            this.ball.y > player.y + (player.height / 3) * 2 &&
            this.ball.y < player.y + player.height) {
                this.ball.velocityX = this.ball.velocityX * -1;
                this.ball.velocityY = this.ball.velocityY = this.paddleBounceAngle;
                playPop();
            }
    }
    bounceAi() {
                //Studsa ai paddle
        //Översta tredjedelen
        if(this.ball.x > ai.x - ai.width &&
            this.ball.y > ai.y &&
            this.ball.y < ai.y + (ai.height / 3)) {
                this.ball.velocityX = this.ball.velocityX * -1;
                this.ball.velocityY = this.ball.velocityY - this.paddleBounceAngle;
                playPop();
            }
        //Mittersta    
        else if(this.ball.x > ai.x - ai.width &&
            this.ball.y > ai.y + (ai.height / 3) &&
            this.ball.y < ai.y + (ai.height / 3) * 2) {
                this.ball.velocityX = this.ball.velocityX * -1;
                this.ball.velocityY = this.ball.velocityY = Math.floor(Math.random() * 4);
                playPop();
            }
        //Lägsta    
        else if(this.ball.x > ai.x - ai.width &&
            this.ball.y > ai.y + (ai.height / 3) * 2 &&
            this.ball.y < ai.y + ai.height) {
                this.ball.velocityX = this.ball.velocityX * -1;
                this.ball.velocityY = this.ball.velocityY = this.paddleBounceAngle;
                playPop();
            }
    }
    bounceWall() {
                //Studsa väggar upp & ner
                if (this.ball.y + this.ball.size > gameWindow.height) {
                    this.ball.velocityY = this.ball.velocityY *= -1;
                    playPop();
                }
                if (this.ball.y < 0) {
                    this.ball.velocityY = this.ball.velocityY *= -1;
                    playPop();
                }
    }
}