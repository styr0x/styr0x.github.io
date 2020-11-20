import { Ground } from '../entities/ground.js';
import {gameWindow} from '../game.js'
export class Level0 {
    constructor() {
        this.width = gameWindow.width;
        this.height = gameWindow.height;
        this.ground = new Ground();
    }
}