export class GameLayer {
    constructor (width, height) {
        this.width = width;
        this.height = height;
        this.parent = document.getElementById('parentDiv')
        this.gameWindowElement = document.createElement('canvas');
        this.gameWindowElement.width = width;
        this.gameWindowElement.height = height;
        this.gameWindowElement.className = 'gameWindowClass'
        this.ctx = this.gameWindowElement.getContext('2d');
        this.parent.appendChild(this.gameWindowElement);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
};