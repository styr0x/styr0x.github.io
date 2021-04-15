export class Scene0 {
    constructor() {
        this.parent = document.getElementById("parentDiv");
        this.message = document.createElement("span");
        this.message.className = "messageClass";
        this.parent.appendChild(this.message);
    }

    removeMessage() {

            this.parent.removeChild(this.message);

    }
}