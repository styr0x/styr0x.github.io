//Bövs fö att p5 ska funk me module
window.setup = setup;
window.draw = draw;
//Import stuff here pls

import {Scenechanger} from "./scenechanger.js";


//Sizes and shite
export let canvasSize = 500;





export let sceneChanger = new Scenechanger();








//Typ start i unity
function setup() {

    createCanvas(canvasSize, canvasSize);

}

//Main Game loop
function draw() {
    background(0,255,0);
    sceneChanger.displayScenes();
    
    if (sceneChanger.currentScene > 0) {
        sceneChanger.collider.checkCollisions();
        sceneChanger.player.drawPlayer();
        sceneChanger.movePlatforms();
    }



}



