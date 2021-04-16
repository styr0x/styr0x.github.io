import {Composite, Mouse, MouseConstraint, engine, world, Events, player} from "../main.js";
export class MouseClass {
    constructor() {
        this.staticCounter = 0;
        this.mouse = Mouse.create(window.canvas);

        this.mouseConstraint = MouseConstraint.create(engine, {
          mouse: this.mouse,
          constraint: {
              stiffness: 0.1,
              render: {
                  visible: true
                  }
              }
          });

          Composite.add(world, this.mouseConstraint);
          
          Events.on(this.mouseConstraint, "mouseup", function() {


            if (this.mouse.position.x > player.pos.x - player.width / 2 &&
                this.mouse.position.x < player.pos.x + player.width / 2 && 
                this.mouse.position.y > player.pos.y - player.height / 2 &&
                this.mouse.position.y < player.pos.y + player.height / 2) {
                    console.log(this.staticCounter);
                    this.staticCounter += 1;
                    if (this.staticCounter === 1) {
                        player.body.isStatic = true;
                        
                        
                        
                    }
                    
                    else if (this.staticCounter === 2) {
                        player.body.isStatic = false;
                        this.staticCounter = 0;
                    }

                    
                    
                    
                    
                }
            

              
          })
    }
}