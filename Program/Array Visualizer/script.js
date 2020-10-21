//Element
let toolbarButtons;
let inputDiv = document.getElementById("input");
let outputDiv = document.getElementById("output");
let inputTempDiv;
let outputTempDiv

//Färger
let buttonSelectColor = "purple"
let buttonResetColor = "white"

//info


//Main array
let mainArray = [];
let arrayCounter = 0;

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

function makeinputTempDiv() {
    inputTempDiv = document.createElement("div");
    inputTempDiv.id = "temporaryInputDiv";
    inputDiv.appendChild(inputTempDiv);
}

function removeinputTempDiv() {
    if (inputTempDiv == undefined) {

    }

    else {
    inputDiv.removeChild(inputTempDiv);
    }
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
    removeinputTempDiv();
    makeinputTempDiv();
    //Inputbox
    let pushInput = document.createElement("input");
    pushInput.type = "text"
    pushInput.className = "pushInputBox"
    inputTempDiv.appendChild(pushInput);
    //Knapp
    let pushButton = document.createElement("button");
    pushButton.innerText = "PUSH";
    pushButton.className = "actionButton";
    inputTempDiv.appendChild(pushButton);
    //Pusha till array'en
    pushButton.addEventListener('click', ()=> {
        mainArray.push(pushInput.value);
        visualizePush();
    });
    
    
    

}

function doUnshift (){
    removeinputTempDiv();
    makeinputTempDiv();
}

function doSplice (){
    removeinputTempDiv();
    makeinputTempDiv();
}

function doPop (){
    removeinputTempDiv();
    makeinputTempDiv();
}

function doShift (){
    removeinputTempDiv();
    makeinputTempDiv();
}

function doReverse (){
    removeinputTempDiv();
    makeinputTempDiv();
}

function doIndexOf (){
    removeinputTempDiv();
    makeinputTempDiv();
}

function doSplit (){
    removeinputTempDiv();
    makeinputTempDiv();
}

//Funktioner som gör visualiseringen
function visualizePush() {

    
    if (arrayCounter < mainArray.length) {
        outputTempDiv = document.createElement("div");
        outputTempDiv.className = "temporaryOutputDiv";
        outputTempDiv.id = "tempOutputDiv";
        outputDiv.appendChild(outputTempDiv);

        let arrayWord = document.createElement("span");
        arrayWord.innerText = mainArray[arrayCounter];
        outputTempDiv.appendChild(arrayWord);

        arrayCounter++
    }
}