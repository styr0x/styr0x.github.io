export class Player {
    constructor(x, y) {
        //Storlek
        this. width = 30
        this. height = 30 
        //Rörelse
        this.x = x;
        this. y = y;
       
        //Hastighet
        this.speed = 4
        //Health (Oanvänd)
        this. health = 1
    }


};

    //Flytta Spelaren
    export function movePlayer() {
        //Variabler
        let moveLeft = false;
        let moveRight = false;
        let moveUp = false;
        let moveDown = false; 
        //Keypress
        document.onkeydown = function(e) {
            if (e.code == "ArrowLeft") moveLeft = true;
            if (e.code == "ArrowRight") moveRight = true;
            if (e.code == "ArrowUp") moveUp = true;
            if (e.code == "ArrowDown") moveDown = true;
        }
        document.onkeyup = function(e) {
            if (e.code == "ArrowLeft") moveLeft = false;
            if (e.code == "ArrowRight") moveRight = false;
            if (e.code == "ArrowUp") moveUp = false;
            if (e.code == "ArrowDown") moveDown = false;
        }
        //Själva rörelsen
        if (moveLeft && player.x > gameWindow.width - 800  + player.width) {
            player.x -= player.speed;
        }

        if (moveRight && player.x < gameWindow.width - player.width) {
            player.x += player.speed;
        }

        if (moveUp && player.y > gameWindow.height - 600 + player.height) {
            player.y -= player.speed;
        }

        if (moveDown && player.y < gameWindow.height - player.height) {
            player.y += player.speed;
        }

}

