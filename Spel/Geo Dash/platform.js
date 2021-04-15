

export class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;

        this.originalPos = x;

        this.width = width;
        this.height = height;
        this.isColliding = false;
        this.isCollidingRoof = false;

    }

    movePlatform() {
        this.x -= 2;
    }

    drawPlatform() {
        fill(255,0,0);
        rect(this.x, this.y, this.width, this.height);
    }
}