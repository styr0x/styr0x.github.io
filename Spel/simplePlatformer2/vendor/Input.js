/* 
export class Input
constructor

this.state = new Set();
this.previousState = new Set();
this.toAdd = new Set();
this.toRemove = new Set();

//Binda dessa till event functions för att de kanske inte är tilgängliga när eventen blir kallad
this.onKeyDown = this.onKeyDown.bind(this);
this.onKeyUp = this.onKeyUp.bind(this);

addEventListener('keydown', this.onKeyDown);
addEventListener('keydown', this.onKeyUp);

end constructor

funktioner 

getKey(e) {
    return this.state.has(e.code)
}

getKeyDown(e) {
    return this.state.has(e.code) && this.previousState.has(e.code)
}

getKeyUp(e) {
    return !this.state.has(e.code) && this.previousState.has(e.code)
}

update() {
    // Copy _state into _previousState.
    // We need to know the previous state of which keys or mouse buttons was pressed
    // so we know what keys or mouse buttons was pressed or released this frame.
    this.previousState.clear()
    for (let key of this.state) {
        this.previousState.add(key)
    }
    
    // Remove from _state.
    for (let key of this.toRemove) {
        // Don't remove key if it somehow was pressed and released on the same frame.
        // In that case we give priority to add and then remove in the next frame.
        if(!thistoAdd.has(key)) {
            this.state.delete(key)
            this.toRemove.delete(key)
        }
    }

    for (let key of this.toAdd) {
        this.state.add(key);
    }
    this.toAdd.clear();
}

OnKeyDown(e) {
    this.toAdd.add(e.code)
}

OnKeyUp(e) {
    this.toRemove.add(e.code)
}

*/