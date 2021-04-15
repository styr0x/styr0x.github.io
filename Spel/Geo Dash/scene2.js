import {Platform} from "./platform.js";
import {platforms} from "./scenechanger.js";
import {canvasSize} from "./main.js";

export class Scene2 {
    constructor() {

        this.groundHeight = 450;
        this.platformWidth = 50; 
        this.platformHeight = 50;

        //Banan banan apelsin
        
        this.platform1 = new Platform(500, this.groundHeight - 100, this.platformWidth * 2, this.platformHeight);
        this.platform2 = new Platform(600, this.groundHeight - 100, this.platformWidth * 2, this.platformHeight);
        this.platform3 = new Platform(700, this.groundHeight - 100, this.platformWidth * 2, this.platformHeight);
        this.platform4 = new Platform(800, this.groundHeight - 100, this.platformWidth * 2, this.platformHeight);
        this.platform5 = new Platform(900, this.groundHeight - 100, this.platformWidth * 2, this.platformHeight);
        



        
        for (let i = 1; i < 5; i++) {
            platforms.push(eval("this.platform" + i));
        }

    }


}

