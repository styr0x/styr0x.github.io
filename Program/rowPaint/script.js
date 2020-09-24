let colorCells;
let paintCells = document.querySelectorAll('.child');
let parentDiv = document.getElementById("selector");
let colors = ["red", "green", "blue"];
let pickedColor;

document.body.onload = addElements;


console.log(paintCells);
console.log(colorCells);


function addElements() {


    for (let i=0; i < colors.length; i++) {
        let colorCell = document.createElement('div')
        colorCell.className = 'colorCell'
        colorCell.id = i
        colorCell.style.cssText = `background-color: ${colors[i]};`
        parentDiv.appendChild(colorCell)   
        
    }
    colorCells = document.querySelectorAll('.colorCell')
    
    colorCells.forEach(item => {         
        item.addEventListener('click', event => {    
            console.log("hejpådej")
            pickedColor = item.id
            console.log(item.id)
            
    paintCells.forEach(item => { 
    
        let j = pickedColor;
                
        item.addEventListener('click', event => {    
        console.log("hejpådej")     
        item.style.backgroundColor = colors[j];
        console.log(pickedColor)
                })
              })  
           
        })
      })


    
}







