const outputElement = document.getElementById('output');
const input = document.getElementById('input')
const button = document.getElementById("btn");
let names = [];
let i = 0;

button.addEventListener('click', addName)



function addName(elementId) {
    names.push(input.value)
    let makeDiv = document.createElement("div");
    makeDiv.innerHTML += `<p> ${names[i]} </p>`
    const id = "divId"+i;
    makeDiv.innerHTML += `<button onclick="removeDiv('${id}');"> Remove </button>`
    makeDiv.id=id
    document.body.appendChild(makeDiv);
    i++
}

function removeDiv(divId) {
    
    let div = document.getElementById(divId)
    console.log(div)
    div.parentNode.removeChild(div);
    
}




  