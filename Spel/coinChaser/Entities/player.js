export class Player {
    constructor(x, y) {
        //Storlek
        this.width = 30;
        this.height = 30; 
        //Rörelse
        this.x = x;
        this.y = y;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        //Hastighet
        this.speed = 4
        //Keypress
        document.onkeydown = (function(e) {
            if (e.code == "ArrowLeft") this.moveLeft = true;
            if (e.code == "ArrowRight") this.moveRight = true;
            if (e.code == "ArrowUp") this.moveUp = true;
            if (e.code == "ArrowDown") this.moveDown = true;
        }).bind(this);
        document.onkeyup = (function(e) {
            if (e.code == "ArrowLeft") this.moveLeft = false;
            if (e.code == "ArrowRight") this.moveRight = false;
            if (e.code == "ArrowUp") this.moveUp = false;
            if (e.code == "ArrowDown") this.moveDown = false;
        }).bind(this);  
    }
    //Flytta Spelaren
    update() {
        //Själva rörelsen
        if (this.moveLeft && this.x > gameWindow.width - 800  + this.width) {
            this.x -= this.speed;
        }
        if (this.moveRight && this.x < gameWindow.width - this.width) {
            this.x += this.speed;
        }
        if (this.moveUp && this.y > gameWindow.height - 600 + this.height) {
            this.y -= this.speed;
        }
        if (this.moveDown && this.y < gameWindow.height - this.height) {
            this.y += this.speed;
        }    
}
//Rita spelaren
    draw() {
        const ctx = gameWindow.getContext("2d");
        let x = this.x;
        let y = this.y;
        ctx.beginPath();
        ctx.arc(x, y, this.height - 5, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
}
};
