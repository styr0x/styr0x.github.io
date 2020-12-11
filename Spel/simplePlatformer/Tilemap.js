import { Square } from "./Shapes/Square.js";

export class Tilemap {
    constructor(data, tileSize) {
        this.tileSize = tileSize;
        this.data = data;
        this.rows;
        this.cols;
        this.playerSpawn = this.getPlayerSpawn();
        this.tileArr = [];
        this.tiles = this.getTiles();
    }

    getTiles() {



        for (this.rows = 0; this.rows < this.data.length; this.rows++) {

            for (this.cols = 0; this.cols < this.data[this.rows].length; this.cols++) {

                let value = this.data[this.rows][this.cols];

                if (value == 1) {
                    let tileInfo = {
                        x: this.cols * this.tileSize,
                        y:  this.rows * this.tileSize
                    }
                    this.tileArr.push(tileInfo);
                }
                
            }
        }
    }

    getPlayerSpawn() {
        
        let playerSpawn = {
            x: 0,
            y: 0,
        }
        for (this.rows = 0; this.rows < this.data.length; this.rows++) {

            for (this.cols = 0; this.cols < this.data[this.rows].length; this.cols++) {
                playerSpawn.x = this.cols * this.tileSize;
                playerSpawn.y = this.rows * this.tileSize;
                let value = this.data[this.rows][this.cols];

                if (value == 2) {
                    return playerSpawn;
                }
                
            }
        }
    }

    draw(ctx) {

        let x;
        let y;
        
        for (this.rows = 0; this.rows < this.data.length; this.rows++) {

            for (this.cols = 0; this.cols < this.data[this.rows].length; this.cols++) {
                x = this.cols * this.tileSize;
                y = this.rows * this.tileSize;
                let value = this.data[this.rows][this.cols];

                if (value == 1) {
                let tile = new Square(x, y, this.tileSize, this.tileSize, "green");
                }
            }
        }

        
    }
}