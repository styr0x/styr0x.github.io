//Imports
import {scoreUpPlayer} from '../utility/score.js';
import {scoreUpAi} from '../utility/score.js';
import {ball, player} from '../game.js';
import {ai} from '../game.js';
import {gameWindow} from '../gamewindow.js';
import {playPop, playScoreAi, playScorePlayer} from '../Sound/sound.js';
import { Collider } from '../utility/collider.js';
//Player class
export class Ball {
    constructor(y) {
        this.speed = 7;
        this.velocityX = -this.speed;
        this.velocityY = 0;
        this.y = 300;
        this.x = 400;
        this.size = 8;
        this.moveX = 0;
        this.moveY = 0;
        this.collider = new Collider(this);

        this.r = 0;
        this.g = 255;
        this.b = 0;
        this.color = `rgb(${this.r},${this.g},${this.b})`;
    }
    //Functions
    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;


        this.collider.bounce();    


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
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};