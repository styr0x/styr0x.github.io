import {Bodies, World, world, ground} from "../main.js";
export class Player
 {
    constructor(x,y,width,height, r,g,b, isStatic) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.r = r;
        this.g = g;
        this.b = b;

        this.isStatic = isStatic;

        this.options = {
            friction: 0,
            restitution: 0,
            density: 1,
            isStatic: this.isStatic,
        }

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);

        World.add(world, this.body);

        this.pos = this.body.position;
        this.angle = this.body.angle;
    }

    draw() {
        if (this.pos.y + this.height / 2 + -2 > ground.pos.y - ground.height / 2) {
            this.pos.y = ground.pos.y - ground.height / 2 - this.height / 2;
        }

        fill(this.r,this.g,this.b);
        rect(this.pos.x, this.pos.y, this.width, this.height);
        rectMode(CENTER);
    }
}