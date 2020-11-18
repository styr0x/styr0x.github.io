export class Score {
    constructor() {
        this.amount = 0
        this.parent = document.getElementById('titleScoreId');
        this.display = document.createElement('span');
        this.display.className = 'titleScore';
        this.display.style.marginLeft = '540px'
        this.display.innerText =' ' + this.amount;
        this.parent.appendChild(this.display);
    }
};