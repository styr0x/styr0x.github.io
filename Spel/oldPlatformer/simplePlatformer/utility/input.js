import { isGrounded } from "./collisions.js";

export class Input {
    constructor() {
<<<<<<< Updated upstream:Spel/oldPlatformer/simplePlatformer/utility/input.js
        //Left å right movement
        document.onkeydown = function(e) {
            if (e.code == "ArrowLeft") moveDirX = -1;
            if (e.code == "ArrowRight") moveDirX = 1        
        }
                
        document.onkeyup = function(e) {
            if (e.code == "ArrowLeft") moveDirX = 0;
            if (e.code == "ArrowRight") moveDirX = 0;
        }
=======

        this.moveDirX = 0;
        this.moveDirY = 0;
        this.isJumping = false;

    }
    update() {
        document.onkeydown = (function(e) {
            if (e.code == "ArrowLeft") this.moveDirX = -1;
            if (e.code == "ArrowRight") this.moveDirX = 1        
    
            if (e.code == "Space" && isGrounded) {
                this.isJumping = true;
                this.moveDirY = -1;
            }
        }).bind(this);
                
        document.onkeyup = (function(e) {
            if (e.code == "ArrowLeft") this.moveDirX = 0;
            if (e.code == "ArrowRight") this.moveDirX = 0;
        }).bind(this);
>>>>>>> Stashed changes:Spel/simplePlatformer/simplePlatformer/utility/input.js
        

        if (!isGrounded) {
            setTimeout(() => {
                this.moveDirY = 0;
                this.isJumping = false;  
            }, 100);
            
        }
    }
    

    
}


