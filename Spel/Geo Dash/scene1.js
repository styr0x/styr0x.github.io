import {Platform} from "./platform.js";
import {platforms} from "./scenechanger.js";
import {canvasSize} from "./main.js";

export class Scene1 {
    constructor() {

        this.groundHeight = 450;
        this.platformWidth = 50; 
        this.platformHeight = 50;

        //Banan banan apelsin
        this.ground = new Platform(0, this.groundHeight, canvasSize, this.platformHeight);
        
        this.platform1 = new Platform(100, this.groundHeight - 50, this.platformWidth * 2, this.platformHeight);
        this.platform2 = new Platform(200, this.groundHeight - 100, this.platformWidth * 2, this.platformHeight);
        this.platform3 = new Platform(300, this.groundHeight - 150, this.platformWidth * 2, this.platformHeight);
        this.platform4 = new Platform(400, this.groundHeight - 200, this.platformWidth * 2, this.platformHeight);
        this.platform5 = new Platform(500, this.groundHeight - 250, this.platformWidth * 2, this.platformHeight);
        
        this.platform6 = new Platform(600, this.groundHeight - 250, this.platformWidth * 2, this.platformHeight);
        this.platform7 = new Platform(700, this.groundHeight - 200, this.platformWidth * 2, this.platformHeight);
        this.platform8 = new Platform(800, this.groundHeight - 150, this.platformWidth * 2, this.platformHeight);
        this.platform9 = new Platform(900, this.groundHeight - 50, this.platformWidth * 2, this.platformHeight);

        this.platform10 = new Platform(1000, this.groundHeight - 200, this.platformWidth * 2, this.platformHeight);
        this.platform11 = new Platform(1200, this.groundHeight - 200, this.platformWidth * 2, this.platformHeight);
        this.platform12 = new Platform(1300, this.groundHeight - 150, this.platformWidth * 2, this.platformHeight);
        this.platform13 = new Platform(1400, this.groundHeight - 150, this.platformWidth * 2, this.platformHeight);

        this.platform14 = new Platform(1500, this.groundHeight - 200, this.platformWidth * 2, this.platformHeight);
        this.platform15 = new Platform(1600, this.groundHeight - 200, this.platformWidth * 2, this.platformHeight);
        this.platform16 = new Platform(1700, this.groundHeight - 150, this.platformWidth * 2, this.platformHeight);
        this.platform17 = new Platform(2100, this.groundHeight - 150, this.platformWidth * 2, this.platformHeight);


        //Add Platforms to Array
        platforms.push(this.ground);

        
        for (let i = 1; i < 17; i++) {
            platforms.push(eval("this.platform" + i));
        }

    }


}

