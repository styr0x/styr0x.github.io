let neckDiv = document.getElementById("neck")
let firstFretDistance = "10.103vw"
let frets = ["19.638", "28.639", "37.134", "45.152", "52.721", "59.864", "66.607", "72.971", "78.978", "84.648", "90.00", "95.051"];


for (let i = 0; i < 13; i++) {
    let fret = document.createElement("div");
    fret.id = `fret${i}`
    fret.className = "fret"
    fret.style.transform=`translate(${frets[i]}vw,0)`
    neckDiv.appendChild(fret);
    console.log(i)
}


