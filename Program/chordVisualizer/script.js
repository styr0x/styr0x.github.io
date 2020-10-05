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
    let x = 0;
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

    if (i === 0 ||i === 2||i === 4||i ===6|| i === 11) {
        x+= 3.5
        console.log("hej");
        let fretMarker = document.createElement("div")
        fretMarker.id = `fretMarker${i}`
        fretMarker.className = "fretMarker"
        fretMarker.style.marginLeft = `${result}vw`
        fretMarker.style.transform = `translate(${x}vw,0)`
        neckDiv.appendChild(fretMarker);
    }
}

}
