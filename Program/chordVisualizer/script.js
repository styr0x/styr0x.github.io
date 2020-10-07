let neckScale = 90 * 2;
let ratio = 17.817;
let firstFret = neckScale / ratio;
let oldFret;
let newFret;
let neckDiv;
let parentDiv = document.getElementById("parent");
let result;
makeNeck();

function makeNeck() {
    oldFret = firstFret;

    // Skapar halsen
    let neck = document.createElement("div");
    neck.id = `neck`;
    neck.className = `neck`;
    parentDiv.appendChild(neck);
    //Skapar stallet
    let nut = document.createElement("div");
    nut.id="nut";
    nut.className = "nut";
    neck.appendChild(nut);
    //Första bandet
    let firstFretDiv = document.createElement("div");
    firstFretDiv.id = "firstFret";
    firstFretDiv.className = "fret";
    firstFretDiv.style.transform=`translate(${firstFret}vw,0)`;
    neck.appendChild(firstFretDiv);
    //Skapar resten av banden
for (let i = 0; i < 11; i++) {
    newFret = oldFret;
    let oldScale = neckScale;
    let newScale= oldScale - newFret;
     result = (newScale / ratio) + newFret;
    neckDiv = document.getElementById("neck");
    let fret = document.createElement("div");
    let note = document.createElement("div");
    fret.id = `fret${i}`;
    note.id = `note${i}`;
    fret.className = "fret";
    note.className = "note";
    fret.style.transform=`translate(${result}vw,0)`;
    note.style.marginLeft = `${(newFret + result - 2) / 2}vw`;
    note.style.marginTop = "-1vh";
    oldFret = result;
    oldScale = newScale;
    neckDiv.appendChild(fret);
    neckDiv.appendChild(note);

    //Skapar Markeringar
    if (i === 1 || i === 3 || i === 5 || i === 7) {
        let fretMarker = document.createElement("div");
        fretMarker.id = `fretMarker${i}`;
        fretMarker.className = "fretMarker";
        fretMarker.style.marginLeft = `${(newFret + result - 0.8) / 2}vw`;
        neckDiv.appendChild(fretMarker);
    }
    //Skapar tolfte bandets dubbla markeringar
    if (i === 10) {
        let twelfthFretOne = document.createElement("div");
        let twelfthFretTwo = document.createElement("div");
        twelfthFretOne.id = `fretMarker${i}`;
        twelfthFretTwo.id = `fretMarker${i}`;
        twelfthFretOne.className = "fretMarker";
        twelfthFretTwo.className = "fretMarker";
        twelfthFretOne.style.marginLeft = `${(newFret + result -0.8) / 2}vw`;
        twelfthFretTwo.style.marginLeft = `${(newFret + result -0.8) / 2}vw`;
        twelfthFretOne.style.marginTop = `2.1vh`;
        twelfthFretTwo.style.marginTop = `26.5vh`;
        neckDiv.appendChild(twelfthFretOne);
        neckDiv.appendChild(twelfthFretTwo);
    }
}
//Skapar strängar
for (let i = 0; i < 4; i++) {
    let string = document.createElement("div");
    let x = 6;
    string.style.height = "0.1vh";
    string.style.width = "90vw";
    string.style.backgroundColor = "white";
    string.style.marginTop = `${x}vh`;
    neckDiv.appendChild(string);

}


};


