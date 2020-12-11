import { Canvas } from './Canvas.js'
import { Scene } from './Scene.js'
export const canvas = new Canvas(512, 512, "violet");
const scene = new Scene();




requestAnimationFrame(loop);

function loop() {
    requestAnimationFrame(loop);

    //Update
    scene.update();
    //Clear
    canvas.clear();
    //Draw
    scene.draw();
}