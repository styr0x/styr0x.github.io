import {Grid} from './grid.js';
export class Track {
    constructor(trackName, soundFile) {
        this.trackName = trackName;
        this.soundFile = soundFile;
        this.parentDiv = document.getElementById('parentDiv');
        this.newTrackdiv = document.createElement('div');
        this.parentDiv.appendChild(this.newTrackdiv);
        this.title = document.createElement('span');
        this.title.innerText = trackName;
        this.newTrackdiv.appendChild(this.title);
        this.grid = new Grid();

    }
}