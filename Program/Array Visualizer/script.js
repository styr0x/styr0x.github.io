//Element
let toolbarButtons;
let inputDiv = document.getElementById("input");
let outputDiv = document.getElementById("output");
let tempDiv;

//Färger
let buttonSelectColor = "purple"
let buttonResetColor = "white"

//info


//Main array
let mainArray = [];

window.onload = getToolbarButtons();

function getToolbarButtons() {
    toolbarButtons = document.getElementsByClassName("toolbarButton");

    for (let i = 0; i < toolbarButtons.length; i++) {
        toolbarButtons[i].dataset.id = i;
        toolbarButtons[i].addEventListener("click", determineToolbarButton)

    }
}

function determineToolbarButton(e) {
    let buttonPressed = e.target.dataset.id
    doStuff(buttonPressed, e);    
}

function doStuff(buttonPressed, e) {
    console.log(buttonPressed);

    if (buttonPressed == 0) {
        doPush();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }

    else if (buttonPressed == 1) {
        doUnshift();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }

    else if (buttonPressed == 2) {
        doSplice();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }

    else if (buttonPressed == 3) {
        doPop();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }

    else if (buttonPressed == 4) {
        doShift();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }

    else if (buttonPressed == 5) {
        doReverse();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }

    else if (buttonPressed == 6) {
        doIndexOf();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }

    else if (buttonPressed == 7) {
        doSplit();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
    }
}

function resetColor() {
    for (let i = 0; i < toolbarButtons.length; i++) {
        toolbarButtons[i].style.backgroundColor = buttonResetColor;

    }
}

function doPush (){
    removeTempDiv();
    makeTempDiv();
    //Inputbox
    let pushInput = document.createElement("input");
    pushInput.type = "text"
    pushInput.className = "pushInputBox"
    tempDiv.appendChild(pushInput);
    //Knapp
    let pushButton = document.createElement("button");
    pushButton.innerText = "PUSH";
    pushButton.className = "actionButton";
    pushButton.addEventListener('click', ()=> {
        mainArray.push(pushInput.value);
    });
    tempDiv.appendChild(pushButton);
    //Pusha till array'en
    

}

function doUnshift (){
    removeTempDiv();
    makeTempDiv();
}

function doSplice (){
    removeTempDiv();
    makeTempDiv();
}

function doPop (){
    removeTempDiv();
    makeTempDiv();
}

function doShift (){
    removeTempDiv();
    makeTempDiv();
}

function doReverse (){
    removeTempDiv();
    makeTempDiv();
}

function doIndexOf (){
    removeTempDiv();
    makeTempDiv();
}

function doSplit (){
    removeTempDiv();
    makeTempDiv();
}

function makeTempDiv() {
    tempDiv = document.createElement("div");
    tempDiv.id = "temporaryDiv";
    inputDiv.appendChild(tempDiv);
}

function removeTempDiv() {
    if (tempDiv == undefined) {

    }

    else {
    inputDiv.removeChild(tempDiv);
    }
}