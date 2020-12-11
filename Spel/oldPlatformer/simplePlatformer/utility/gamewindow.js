export class GameWindow {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.parent = document.getElementById('parentDiv')
        this.gameWindowElement = document.createElement('canvas');
        this.gameWindowElement.width = width;
        this.gameWindowElement.height = height;
        this.gameWindowElement.className = 'gameWindowClass'
        this.gameWindowElement.style.backgroundColor = color;
        this.ctx = this.gameWindowElement.getContext('2d');
        this.parent.appendChild(this.gameWindowElement);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
};