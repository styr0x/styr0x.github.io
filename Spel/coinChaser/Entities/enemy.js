import {enemyArray} from '../game.js'
import {enemy} from '../game.js'
import {player}  from '../game.js'
export class Enemy {
    constructor(x,y,target) {
        this.enemySpawnHeight = 500;
        this.enemySpeed = 1;
        this.x = 760;
        this.y = this.enemySpawnHeight;
        this.speed = this.enemySpeed;
        this.width = 30;
        this.height = 30;
        this.targetX = player.x;
        this.targetY = player.y;

    }
    //Skapa enemies
    make() {

        enemyArray.push(enemy);
        this.enemySpawnHeight -= 200;
        this.enemySpeed++;
    }
    //Följ spelaren
    follow() {
        enemyArray.forEach(function(enemy,i){
        let directionX = this.targetX - this.x;
        let directionY = this.targetY - this.y;
        let hyp = Math.sqrt(Math.pow(directionX, 2) + Math.pow(directionY, 2));
        directionX /= hyp;
        directionY /= hyp;
        this.x += directionX * this.speed;
        this.y += directionY * this.speed;
        });
    }        
};