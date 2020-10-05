let neckScale = 90 * 2;
let ratio = 17.817;
let firstFret = neckScale / ratio;

let oldFret;

let parentDiv = document.getElementById("parent");




makeNeck();


function makeNeck(){
    oldFret = firstFret;


    // Skapar bruna nacken
    let neck = document.createElement("div");
    neck.id = `neck`;
    neck.className = `neck`;
    parentDiv.appendChild(neck);
    //Skapar nut'en
    let nut = document.createElement("div");
    nut.id="nut";
    nut.className = "nut";
    neck.appendChild(nut);
    //Första bandet
    let firstFretDiv = document.createElement("div");
    firstFretDiv.id = "firstFret"
    firstFretDiv.className = "fret"
    firstFretDiv.style.transform=`translate(${firstFret}vw,0)`;
    neck.appendChild(firstFretDiv);


    //Skapar resten av banden
for (let i = 0; i < 11; i++) {
    let newFret = oldFret;
    let oldScale = neckScale;
    let newScale= oldScale - newFret;

    let result = (newScale / ratio) + newFret;
    let neckDiv = document.getElementById("neck");
    let fret = document.createElement("div");
    fret.id = `fret${i}`;
    fret.className = "fret";
    fret.style.transform=`translate(${result}vw,0)`;
    oldFret = result;
    oldScale = newScale;
    neckDiv.appendChild(fret);

    if (i === 0) {
        let fretMarker = document.createElement("div")
        fretMarker.id = `fretMarker${i}`
        fretMarker.className = "fretMarker"
        fretMarker.style.marginLeft = `${result + 4.2}vw`
        neckDiv.appendChild(fretMarker);
    }
    if (i === 2) {
        let fretMarker = document.createElement("div")
        fretMarker.id = `fretMarker${i}`
        fretMarker.className = "fretMarker"
        fretMarker.style.marginLeft = `${result +3.7}vw`
        neckDiv.appendChild(fretMarker);
    }
    if (i === 4) {
        let fretMarker = document.createElement("div")
        fretMarker.id = `fretMarker${i}`
        fretMarker.className = "fretMarker"
        fretMarker.style.marginLeft = `${result +3.2}vw`
        neckDiv.appendChild(fretMarker);
    }
    if (i === 6) {
        let fretMarker = document.createElement("div")
        fretMarker.id = `fretMarker${i}`
        fretMarker.className = "fretMarker"
        fretMarker.style.marginLeft = `${result +2.9}vw`
        neckDiv.appendChild(fretMarker);
    }
    if (i === 9) {
        let twelfthFretOne = document.createElement("div");
        let twelfthFretTwo = document.createElement("div");
        twelfthFretOne.id = `fretMarker${i}`
        twelfthFretOne.className = "fretMarker"
        twelfthFretOne.style.marginLeft = `${result +2.5}vw`
        twelfthFretOne.style.marginTop = `4vh`
        twelfthFretTwo.id = `fretMarker${i}`
        twelfthFretTwo.className = "fretMarker"
        twelfthFretTwo.style.marginLeft = `${result +2.5}vw`
        twelfthFretTwo.style.marginTop = `24vh`
        neckDiv.appendChild(twelfthFretOne);
        neckDiv.appendChild(twelfthFretTwo);
    }
}

}
