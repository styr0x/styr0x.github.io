let neckScale = 90 * 2;
let ratio = 17.817;
let firstFret = neckScale / ratio;

let oldFret;

let neckDiv;
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
    neckDiv = document.getElementById("neck");
    let fret = document.createElement("div");
    fret.id = `fret${i}`;
    fret.className = "fret";
    fret.style.transform=`translate(${result}vw,0)`;
    oldFret = result;
    oldScale = newScale;
    neckDiv.appendChild(fret);

    if (i === 1 || i === 3 || i === 5 || i === 7) {
        let fretMarker = document.createElement("div")
        fretMarker.id = `fretMarker${i}`
        fretMarker.className = "fretMarker"
        fretMarker.style.marginLeft = `${(newFret + result - 0.8) / 2}vw`
        neckDiv.appendChild(fretMarker);
    }

 
    if (i === 10) {
        let twelfthFretOne = document.createElement("div");
        let twelfthFretTwo = document.createElement("div");
        twelfthFretOne.id = `fretMarker${i}`
        twelfthFretTwo.id = `fretMarker${i}`
        twelfthFretOne.className = "fretMarker"
        twelfthFretTwo.className = "fretMarker"
        twelfthFretOne.style.marginLeft = `${(newFret + result -0.8) / 2}vw`
        twelfthFretTwo.style.marginLeft = `${(newFret + result -0.8) / 2}vw`
        twelfthFretOne.style.marginTop = `2.1vh`
        twelfthFretTwo.style.marginTop = `26.5vh`
        neckDiv.appendChild(twelfthFretOne);
        neckDiv.appendChild(twelfthFretTwo);
    }
}

//Skapar strängar
for (let i = 0; i < 4; i++) {
    let string = document.createElement("div");
    let x = 6;
    string.style.height = "0.1vh"
    string.style.width = "90vw"
    string.style.backgroundColor = "white";
    string.style.marginTop = `${x}vh`

    neckDiv.appendChild(string);
}

}


