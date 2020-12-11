export let moveDirX = 0;
export let moveDirY = 0;
export class Input {
    constructor() {
        //Left å right movement
        document.onkeydown = function(e) {
            if (e.code == "ArrowLeft") moveDirX = -1;
            if (e.code == "ArrowRight") moveDirX = 1        
        }
                
        document.onkeyup = function(e) {
            if (e.code == "ArrowLeft") moveDirX = 0;
            if (e.code == "ArrowRight") moveDirX = 0;
        }
        
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
    }
}
        

