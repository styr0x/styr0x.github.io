export class Input {
    constructor() {
        this.moveDirX = 0;
        this.movedirY = 0;
    }


    update() {

        //Left å right movement
        document.onkeydown = (function(e) {
            if (e.code == "ArrowLeft") this.moveDirX = -1;
            if (e.code == "ArrowRight") this.moveDirX = 1        
        }).bind(this);
                
        document.onkeyup = (function(e) {
            if (e.code == "ArrowLeft") this.moveDirX = 0;
            if (e.code == "ArrowRight") this.moveDirX = 0;
        }).bind(this);
        
        
        /*
        //Jump
        document.onkeypress = function(e) {
            if (e.code == "Space") {
                spacePressedOnce = true;
                moveDirY = 1;
                console.log("Jump");                
            }
        document.onkeyup = function(e) {
                if (e.code == "Space") {
                    spacePressedOnce = true;
                    moveDirY = 0;              
                    }
                }
            }
        */
    
    }
}