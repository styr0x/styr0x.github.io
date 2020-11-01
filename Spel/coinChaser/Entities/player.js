export class Player {
    constructor(x, y) {
        //Storlek
        this. width = 30
        this. height = 30 
        //Rörelse
        this.x = x;
        this. y = y;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;        
        //Hastighet
        this.speed = 4
        //Health (Oanvänd)
        this. health = 1
    }
    //Flytta Spelaren
    movePlayer() {
        //Keypress
        document.onkeydown = function(e) {
            if (e.code == "ArrowLeft") player.moveLeft = true;
            if (e.code == "ArrowRight") player.moveRight = true;
            if (e.code == "ArrowUp") player.moveUp = true;
            if (e.code == "ArrowDown") player.moveDown = true;
        }
        document.onkeyup = function(e) {
            if (e.code == "ArrowLeft") player.moveLeft = false;
            if (e.code == "ArrowRight") player.moveRight = false;
            if (e.code == "ArrowUp") player.moveUp = false;
            if (e.code == "ArrowDown") player.moveDown = false;
        }
        //Själva rörelsen
        if (player.moveLeft && player.x > gameWindow.width - 800  + player.width) {
            player.x -= player.speed;
        }

        if (player.moveRight && player.x < gameWindow.width - player.width) {
            player.x += player.speed;
        }

        if (player.moveUp && player.y > gameWindow.height - 600 + player.height) {
            player.y -= player.speed;
        }

        if (player.moveDown && player.y < gameWindow.height - player.height) {
            player.y += player.speed;
        }

}

};

