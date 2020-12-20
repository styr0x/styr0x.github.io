/* 
Behövs importeras:
Engine, GameObject, Input

export class Scene
constructor()

this.game = null
this.children = []
this.addList = []
this.removeList = []

end constructor

get input() {
    return this.game.input
}

get width() {
    return this.game.canvas.width
}

get height() {
    return this.game.canvas.height
}

funktioner:

add(child)

remove(child)

start() {}

end() {}

//För game logic, whatever that means
update(deltaTime, elapsedTime) {

}

render(context) {
    
}
*/