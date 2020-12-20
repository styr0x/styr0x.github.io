/*
Classer som behövs importeras:
Canvas
Scene
Input

Gör en ny class som heter Engine
I constructorn:
gör en ny Canvas(w,h)
gör en ny Input();

skapa en variabel för max deltatime, värdet typ 0.1
variabel för scene = null
variabel för previousTime = 0

bind this till gameloopen för att referensen this glöms bort varje gång man använder requestAnimationframe

requesta första animation-frame för gameloopen
end constructor

get scene() //Int heilt säker ve he gör
return this.scene

funktioner:
en funktion som byter scenes
en funktion för själva main gameloopen
det enda som skall finnas inuti gameloopen:

requestAnimationFrame(this.gameLoop)

const deltaTime = Math.min((elapsedTime - this._previousTime) / 1000.0, this.maxDeltaTime);
this._previousTime = elapsedTime;

input.update();

canvas.clear();

uppdatera och rita scene
if (this.scene) {
    this._scene.update(deltaTime, elapsedTime / 1000.0);
      this._scene.render(this.canvas.context);
}
*/