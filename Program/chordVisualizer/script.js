let neckScale = 90 * 2;
let firstFret = neckScale / 17.817;


let parentDiv = document.getElementById("parent");

let firstFretDistance = "10.103vw"
let frets = ["19.638", "28.639", "37.134", "45.152", "52.721", "59.864", "66.607", "72.971", "78.978", "84.648", "90.00", "95.051"];


makeNeck();


function makeNeck(){
    let neck = document.createElement("div");
    neck.id = `neck`
    neck.className = `neck`
    parentDiv.appendChild(neck);

for (let i = 0; i < 12; i++) {
    let neckDiv = document.getElementById("neck");
    let fret = document.createElement("div");
    fret.id = `fret${i}`
    fret.className = "fret"
    fret.style.transform=`translate(${frets[i]}vw,0)`
    neckDiv.appendChild(fret);
    console.log(i)
}

}
