export class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.moveDir = 0;
        this.speed = 0.2;
        this.maxHeight = 350;
        this.velocity = 0;

        this.isFalling = true;
        this.isJumping = false;
        this.jumpHeight = 900;
        this.jumpForce = -20;
        this.gravity = 10;
        this.velY = 0;

        this.rotation = 0;


        this.floorHeight = 400;
        this.currentPlatformLevel = 1;
    }

    movePlayer() {
        this.velocity = this.speed * this.moveDir * deltaTime;

        if (keyIsDown(LEFT_ARROW)) {
            this.moveDir = -1;
        }

        else if (keyIsDown(RIGHT_ARROW)) {
            this.moveDir = 1;
        }
        
        else {
            this.moveDir = 0;
        }

 
        this.x += this.velocity;
    }

    gravityPlayer() {


    }

    jumpPlayer() {
        if (keyIsDown(32) && this.isGrounded) {
            this.isJumping = true;
            this.isGrounded = false;
        }



        if (this.isJumping && !this.isGrounded) {
            this.velY = this.jumpForce;
        }



        if (this.y < this.jumpHeight && this.y) {
            this.velY = this.gravity;
            this.isGrounded = false;
            this.isJumping = false;
        }



        if (this.y < this.floorHeight && !this.isJumping) {
            this.velY = this.gravity;
        }




        //console.log(this.isGrounded);

        

        

        
        //Hoppar
            



        this.y += this.velY;

    }

    drawPlayer() {

        this.jumpPlayer();

        fill(0,0,0);
        square(this.x, this.y, this.size);




    }
}