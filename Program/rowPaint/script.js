//Variabler
let gridSizeElement = document.getElementById("gridSize")
let gridSizes = [0, 4, 8, 16]

let colorCells;
let paintCells;
let colorParentDiv = document.getElementById("selector");
let paintParentDiv = document.getElementById("child")
let colors = ["SaddleBrown", "gold", "white", "red", "Coral", "black", "pink", "green", "blue", "purple"];
let pickedColor;

//Kör funktionerna
addColorPicker();


//Uppdaterar gridvärdet ifall det ändras i drop-down menyn
gridSizeElement.addEventListener('change', getGridSize)




//Loopar igenom alla färgelement från klassen 'colorCell' och skapar en eventlistener för varje färg.
colorCells.forEach(item => {         
    item.addEventListener('click', event => {    
        pickedColor = item.id 
        console.log("You picked color " + pickedColor)    
    })
})


//Funktioner

//Denna funktion får värdet på den valda grid'en
function getGridSize() {
  let i = document.getElementById("gridSize").value
  killGrid(); 
  addGrid(gridSizes[i], gridSizes[i]);
  paint();
}

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
//Denna funktion skapar en grid att måla på
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


  //Loopar igenom varje färgläggsbara celler och skapar en eventlistener med den valda färgen.
function paint() {

  paintCells.forEach(item => {      
    item.addEventListener('click', event => {       
    item.style.backgroundColor = colors[pickedColor];
    console.log("You clicked a paint cell!")
    
    })
})  
}


//Deletar griden
function killGrid(grid) {
  let gridNames = document.getElementsByClassName('grid')
  while (gridNames.length > 0){
    gridNames[0].parentNode.removeChild(gridNames[0])
  }

}



