import {Scene0} from "./scene0.js";
import {Scene1} from "./scene1.js";
import {Scene2} from "./scene2.js";
import {Player} from "./player.js";
import {Collider} from "./collider.js";




export let platforms = [];

export class Scenechanger {
    constructor() {

        this.currentScene = 0;
        this.player = new Player(25, 400);
        this.collider = new Collider(this.player);


        this.scene0;
        this.scene1;
        this.scene2;

        this.levelIndicator = document.getElementById("levelMessage");

        this.changeToScene0 = false;
        this.changeToScene1 = false;

        this.sceneExists = false;
        this.scene2Exists = false;

        this.hasWon = false;
    }




    displayScenes() {
        if (this.currentScene === 0) {
            this.changeToScene1 = false;
            if (!this.changeToScene0) {
                console.log("reset")
                this.resetPlatforms();
                this.scene0 = new Scene0();

                if (!this.hasWon) {
                    this.scene0.message.innerText = "Press s to play!";
                }

                else {
                    this.scene0.message.innerText = "U R WINNER K BYE!";
                }
                
                this.levelIndicator.innerText = `level ${this.currentScene}`

                this.changeToScene0 = true;
                this.changetoScene1 = false;
                this.changeToScene2 = false;
                
            }

            if (keyIsDown(83)) {
                this.currentScene = 1;
            }
        }

        else if (this.currentScene === 1) {
                this.changeToScene0 = false;


            if (!this.changeToScene1) {
                console.log("messageremove");
                this.scene0.removeMessage();
                this.changeToScene1 = true;
                this.levelIndicator.innerText = `level ${this.currentScene}`
 

                if (!this.sceneExists) {
                    this.scene1 = new Scene1();
                    this.sceneExists = true;

                }

            }

        }

        else if (this.currentScene === 2) {
            this.changeToScene0 = false;
            this.changeToScene1 = false;

        if (!this.changeToScene2) {
            console.log("level2");
            this.changeToScene2 = true;
            this.levelIndicator.innerText = `level ${this.currentScene}`

            if (!this.scene2Exists) {
                this.scene2 = new Scene2();
                this.scene2Exists = true;

            }
        }

    }


    }
    
    movePlatforms() {
        console.log(platforms.length);

        for (let i = 0; i < platforms.length; i++) {
            platforms[i].drawPlatform();
            
            if (platforms[16].x + platforms[16].width < 0) {
                this.currentScene = 2;

            }

            if (this.scene2Exists && platforms[20].x + platforms[20].width < 0) {
                this.currentScene = 0;
                this.hasWon = true;
            }


            if (i > 0) {
                platforms[i].movePlatform();
            }
        }

    }

    resetPlatforms() {

        for (let i = 0; i < platforms.length; i++) {

                platforms[i].x = platforms[i].originalPos;
                console.log(platforms[i].originalPos);
            
        }
    }
    
}