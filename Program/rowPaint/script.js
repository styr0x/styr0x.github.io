//Variabler
let colorCells;
let paintCells;
let colorParentDiv = document.getElementById("selector");
let paintParentDiv = document.getElementById("child")
let colors = ["SaddleBrown", "gold", "white", "red", "Coral", "black"];
let pickedColor;

//Kör funktionerna
addColorPicker();
addGrid(16,16);

console.log(colorCells)
console.log(paintCells)

//Loopar igenom alla färgelement från klassen 'colorCell' och skapar en eventlistener för varje färg.
colorCells.forEach(item => {         
    item.addEventListener('click', event => {    
        pickedColor = item.id 
        console.log("You picked color " + pickedColor)    
    })
})
//Loopar igenom varje färgläggsbara celler och skapar en eventlistener med den valda färgen.
  paintCells.forEach(item => {      
    item.addEventListener('click', event => {       
    item.style.backgroundColor = colors[pickedColor];
    console.log("You clicked a paint cell!")
    
    })
})  

//Funktioner

//Denna funktion loopar igenom färg-array'en och skapar en div med den rätta färgen för varje färg i array'en.
function addColorPicker() {

    for (let i=0; i < colors.length; i++) {
        let colorCell = document.createElement('div')
        colorCell.className = 'colorCell'
        colorCell.id = i
        colorCell.style.cssText = `background-color: ${colors[i]};`
        colorParentDiv.appendChild(colorCell)
           
    }

    colorCells = document.querySelectorAll('.colorCell')
        
}
//Denna funktion skapar en 16x16 grid att måla på
function addGrid(rows, cols) {

    paintParentDiv.style.setProperty('--grid-rows', rows);
    paintParentDiv.style.setProperty('--grid-cols', cols);
    
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.className = 'grid'
      cell.id = c
      paintParentDiv.appendChild(cell)
    
    }

    paintCells = document.querySelectorAll('.grid')
  }








