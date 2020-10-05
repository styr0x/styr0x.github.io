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
    let firstFretDiv = document.createElement("div");
    firstFretDiv.id = "firstFret"
    firstFretDiv.className = "fret"
    firstFretDiv.style.transform=`translate(${firstFret}vw,0)`;
    neck.appendChild(firstFretDiv);


    //Skapar resten av banden
for (let i = 0; i < 12; i++) {
    
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
    console.log(oldFret);
}

}
