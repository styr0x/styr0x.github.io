import {Announcer} from './announcer.js';
import {Score} from './score.js';

export class Ui {
    constructor() {
        this.parent = document.getElementById('parentDiv');
        this.titleScoreDiv = document.createElement('div');
        this.titleScoreDiv.id = 'titleScoreId';
        this.titleScoreDiv.className = 'titleScoreClass';
        this.parent.appendChild(this.titleScoreDiv);
        this.title = new Announcer('Stage 1');
        this.score = new Score();
    }
}
