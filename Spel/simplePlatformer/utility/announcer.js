export class Announcer {
    constructor(gameTitle) {
        this.parent = document.getElementById('titleScoreId');
        this.display = document.createElement('span');
        this.display.className = 'titleScore';
        this.display.innerText = gameTitle;
        this.display.style.marginLeft = '10px';
        this.parent.appendChild(this.display);
    }
};