import {gameWindow} from '../gamewindow.js';
import {player, ai} from '../game.js'
import {playPop} from '../Sound/sound.js';

export class Collider {
    constructor(object) {
            this.ball = object;

    }
    bounce() {
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
                this.ball.velocityY = this.ball.velocityY -1.5;
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
                this.ball.velocityY = this.ball.velocityY = 1.5;
                playPop();
            }
        
        //Studsa ai paddle
        //Översta tredjedelen
        if(this.x > ai.x - ai.width &&
            this.y > ai.y &&
            this.y < ai.y + (ai.height / 3)) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY -2;
                playPop();
            }
        //Mittersta    
        else if(this.x > ai.x - ai.width &&
            this.y > ai.y + (ai.height / 3) &&
            this.y < ai.y + (ai.height / 3) * 2) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY = 0;
                playPop();
            }
        //Lägsta    
        else if(this.x > ai.x - ai.width &&
            this.y > ai.y + (ai.height / 3) * 2 &&
            this.y < ai.y + ai.height) {
                this.velocityX = this.velocityX * -1;
                this.velocityY = this.velocityY = 2;
                playPop();
            }
    }
}