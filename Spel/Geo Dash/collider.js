import {platforms} from "./scenechanger.js";
import {sceneChanger} from "./main.js";

let currentCollidingPlatform = 0;

export class Collider {
    constructor(object) {
        this.object = object;
        this.platforms = platforms;
    }

    checkCollisions() {

        //Lagar hede rätta hiphop höjdin
        if (currentCollidingPlatform == 0) {
            this.object.jumpHeight = 250;
        }
        else if (currentCollidingPlatform == 1) {
            this.object.jumpHeight = 200;
        }
        else if (currentCollidingPlatform == 2) {
            this.object.jumpHeight = 150;  
        }
        else if (currentCollidingPlatform == 3) {
            this.object.jumpHeight = 150;  
        }
        else if (currentCollidingPlatform == 4) {
            this.object.jumpHeight = 100;  
        }
        else if (currentCollidingPlatform == 5) {
            this.object.jumpHeight = 50;  
        }



        for (let i = 0; i < platforms.length; i++) {
                //Räkn out ouch
                if (this.object.x + this.object.size > this.platforms[i].x &&
                    this.object.y == this.platforms[i].y &&
                    this.object.x < this.platforms[i].x) {
                        sceneChanger.currentScene = 0;
                    }

                //Räkn ut ifall playern collidar med en viss platform
                if (this.object.y + this.object.size == this.platforms[i].y &&
                    this.object.x + this.object.size > this.platforms[i].x &&
                    this.object.x < this.platforms[i].x + this.platforms[i].width) {
                    this.platforms[i].isColliding = true;
                }

                else {
                    this.platforms[i].isColliding = false;
                }
                
            
                //Vad som händer när man collidar med en platform
                if(this.platforms[i].isColliding) {
                        this.object.floorHeight = this.object.y;
                        this.object.isGrounded = true;
                        this.object.velY = 0;
                        currentCollidingPlatform = i;
                    }
            
                else if (this.object.x + this.object.size < this.platforms[currentCollidingPlatform].x ||
                        this.object.x > this.platforms[currentCollidingPlatform].x + this.platforms[i].width) {
                            this.object.floorHeight = 400;
                            this.object.isGrounded = false;
                        }

            }
     
        }
}