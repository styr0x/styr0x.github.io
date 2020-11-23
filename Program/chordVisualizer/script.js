import {GuitarNeck} from './guitarneck.js'


for (let i = 0; i < 1; i++) {
    let neck = new GuitarNeck();
    neck.makeNeck();
    neck.drawOpenFretNotes();
    neck.drawFirstFretNotes();
    neck.drawNotes();
}
