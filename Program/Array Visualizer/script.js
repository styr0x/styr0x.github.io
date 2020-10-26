//Element
let toolbarButtons;
let inputDiv = document.getElementById("input");
let outputDiv = document.getElementById("output");
let inputTempDiv;
let outputTempDiv
//Färger
let buttonSelectColor = "rgb(80, 80, 80)"
let buttonResetColor = "rgb(245, 245, 245)"
let buttonSelectTextColor = "white"
let buttonSelectTextResetColor = "rgb(165, 29, 251)"
//Main array
let mainArray = [];
let numArray = [];
let arrayCounter = 0;
let arrayWord;
let arrayNumber;
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
function orderNumbers() {
    for (let i = 0; i < mainArray.length; i++) {
        let displayNum = document.getElementsByClassName("arrayNumber");
        displayNum[i].innerText = i
    }
}
function doStuff(buttonPressed, e) {
    if (buttonPressed == 0) {
        doPush();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
    else if (buttonPressed == 1) {
        doUnshift();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
    else if (buttonPressed == 2) {
        doSplice();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
    else if (buttonPressed == 3) {
        doPop();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
    else if (buttonPressed == 4) {
        doShift();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
    else if (buttonPressed == 5) {
        doReverse();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
    else if (buttonPressed == 6) {
        doIndexOf();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
    else if (buttonPressed == 7) {
        doSplit();
        resetColor();
        e.target.style.backgroundColor = buttonSelectColor;
        e.target.style.color = buttonSelectTextColor;
    }
}
function resetColor() {
    for (let i = 0; i < toolbarButtons.length; i++) {
        toolbarButtons[i].style.backgroundColor = buttonResetColor;
        toolbarButtons[i].style.color = buttonSelectTextResetColor;
    }
}
function doPush () {
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
    pushButton.addEventListener('click', () => {
        mainArray.push(pushInput.value);
        visualizePush();
    });
}
function doUnshift () {
    removeinputTempDiv();
    makeinputTempDiv();
    //Inputbox
    let pushInput = document.createElement("input");
    pushInput.type = "text"
    pushInput.className = "pushInputBox"
    inputTempDiv.appendChild(pushInput);
    //Knapp
    let pushButton = document.createElement("button");
    pushButton.innerText = "UNSHIFT";
    pushButton.className = "actionButton";
    inputTempDiv.appendChild(pushButton);
    //Pusha till arrayn
    pushButton.addEventListener('click', () => {
        mainArray.unshift(pushInput.value);
        visualizeUnshift();
    });
}
function doSplice () {
    removeinputTempDiv();
    makeinputTempDiv();
    //Indexinput
    let fromIndex = document.createElement("input");
    fromIndex.type = "text";
    fromIndex.className = "spliceInputBox";
    inputTempDiv.appendChild(fromIndex);
    //Countinput
    let countInput = document.createElement("input");
    countInput.type = "text"
    countInput.className = "spliceInputBox";
    inputTempDiv.appendChild(countInput);
    //Knapp
    let pushButton = document.createElement("button");
    pushButton.innerText = "SPLICE";
    pushButton.className = "actionButton";
    inputTempDiv.appendChild(pushButton);
    //Splicea arrayn
    pushButton.addEventListener('click', () => {
        mainArray.splice(fromIndex.value, countInput.value);
        arrayCounter = mainArray.length; 
        visualizeSplice(fromIndex, countInput);
    });
}
function doPop () {
    removeinputTempDiv();
    makeinputTempDiv();
        //Knapp
        let pushButton = document.createElement("button");
        pushButton.innerText = "POP";
        pushButton.className = "actionButton";
        inputTempDiv.appendChild(pushButton);
        //Poppa arrayn
        pushButton.addEventListener('click', () => {
            mainArray.pop();
            arrayCounter = mainArray.length; 
            visualizePop();
        }); 
}
function doShift () {
    removeinputTempDiv();
    makeinputTempDiv();
            //Knapp
            let pushButton = document.createElement("button");
            pushButton.innerText = "SHIFT";
            pushButton.className = "actionButton";
            inputTempDiv.appendChild(pushButton);
            //Shifta arrayn
            pushButton.addEventListener('click', () => {
                mainArray.shift();
                arrayCounter = mainArray.length; 
                visualizeShift();
            });
}
function doReverse () {
    removeinputTempDiv();
    makeinputTempDiv();
            //Knapp
            let pushButton = document.createElement("button");
            pushButton.innerText = "REVERSE";
            pushButton.className = "actionButton";
            inputTempDiv.appendChild(pushButton);
            //Reversa arrayn
            pushButton.addEventListener('click', () => {
                mainArray.reverse();
                console.log(mainArray);
                visualizeReverse();
            });    
}
function doIndexOf () {
    removeinputTempDiv();
    makeinputTempDiv();
    //Argument input
    let indexOfInput = document.createElement("input");
    indexOfInput.type = "text";
    indexOfInput.className = "indexOfInputBox";
    inputTempDiv.appendChild(indexOfInput);
    //knapp
    let pushButton = document.createElement("button");
    pushButton.innerText = "INDEX OF";
    pushButton.className = "actionButton";
    inputTempDiv.appendChild(pushButton);
    //Outputens Div
    let indexOfValueDiv = document.createElement("div");
    indexOfValueDiv.className = "indexOfValueDiv";
    inputTempDiv.appendChild(indexOfValueDiv);
    //Outputen
    let indexOfValue = document.createElement("span");
    indexOfValue.className = "indexOfValue";
    indexOfValueDiv.appendChild(indexOfValue);
    //Index of arrayn
    pushButton.addEventListener('click', () => {
        visualizeIndexOf(indexOfInput, indexOfValue);
        });       
}
function doSplit (){
    removeinputTempDiv();
    makeinputTempDiv();
    //Inputbox
    let splitInput = document.createElement("input");
    splitInput.type = "text"
    splitInput.className = "pushInputBox"
    inputTempDiv.appendChild(splitInput);
    //Countinput
    let separator = document.createElement("input");
    separator.type = "text"
    separator.className = "spliceInputBox";
    inputTempDiv.appendChild(separator);
    //knapp
    let pushButton = document.createElement("button");
    pushButton.innerText = "SPLIT";
    pushButton.className = "actionButton";
    inputTempDiv.appendChild(pushButton);
    //Split visualize
    pushButton.addEventListener('click', () => {
        let splittedWords = splitInput.value.split(separator.value);
        for (let i= 0; i < splittedWords.length; i++) {
            mainArray.push(splittedWords[i]);
        }
        console.log(splittedWords);
        console.log(mainArray);
        visualizeSplit(splittedWords);
        });   
}
//Funktioner som gör visualiseringen
function visualizePush() {
    if (arrayCounter < mainArray.length) {
        outputTempDiv = document.createElement("div");
        outputTempDiv.className = "temporaryOutputDiv";
        outputTempDiv.id = `tempOutputDiv`;
        outputDiv.appendChild(outputTempDiv);
        arrayWord = document.createElement("span");
        arrayWord.innerText = mainArray[arrayCounter];
        arrayWord.className = "arrayWord"
        outputTempDiv.appendChild(arrayWord);
        arrayNumber = document.createElement("span");
        arrayNumber.innerText = arrayCounter;
        arrayNumber.className = "arrayNumber"
        outputTempDiv.appendChild(arrayNumber);
        arrayCounter++
    }
}
function visualizeUnshift() {
    if (arrayCounter < mainArray.length) {
        outputTempDiv = document.createElement("div");
        outputTempDiv.className = "temporaryOutputDiv";
        outputTempDiv.id = `tempOutputDiv`;
        outputDiv.insertBefore(outputTempDiv, outputDiv.firstChild)
        arrayWord = document.createElement("span");
        arrayWord.innerText = mainArray[0];
        arrayWord.className = "arrayWord"
        outputTempDiv.appendChild(arrayWord);
        arrayNumber = document.createElement("span");
        arrayNumber.innerText = arrayCounter;
        arrayNumber.className = "arrayNumber"
        outputTempDiv.appendChild(arrayNumber);
        arrayCounter++
    }
    orderNumbers();
}
function visualizeSplice(fromIndex, countInput) {
        let spliceItems = document.getElementsByClassName("temporaryOutputDiv");
        //spliceItems.splice(fromIndex.value, countInput.value)
        console.log(spliceItems);
        console.log(fromIndex.value);
        console.log(countInput.value);
        if (countInput.value == 1) {
            outputDiv.removeChild(spliceItems[fromIndex.value])
        }
        else if (countInput.value > 1) {
            for (let i = 0; i < countInput.value; i++) {
            outputDiv.removeChild(spliceItems[fromIndex.value])
            }
        }
        orderNumbers();  
}
function visualizePop() {
    let popItem = document.getElementsByClassName("temporaryOutputDiv");
    outputDiv.removeChild(popItem[mainArray.length]);
}
function visualizeShift() {
    let shiftItem = document.getElementsByClassName("temporaryOutputDiv");
    outputDiv.removeChild(shiftItem[0]);
    orderNumbers();
}
function visualizeReverse() {
    for (let i = 0; i < mainArray.length; i++) {
        let reverseWord = document.getElementsByClassName("arrayWord");
        reverseWord[i].innerText = mainArray[i];
    }
}
function visualizeIndexOf(indexOfInput,indexOfValue) {
    indexOfValue.innerText = mainArray.indexOf(indexOfInput.value);
}
function visualizeSplit(splittedWords) {
    for (let i = 0; i < splittedWords.length; i++) {
        outputTempDiv = document.createElement("div");
        outputTempDiv.className = "temporaryOutputDiv";
        outputTempDiv.id = `tempOutputDiv`;
        outputDiv.appendChild(outputTempDiv);
        arrayWord = document.createElement("span");
        arrayWord.innerText = splittedWords[i];
        arrayWord.className = "arrayWord"
        outputTempDiv.appendChild(arrayWord);
        arrayNumber = document.createElement("span");
        arrayNumber.innerText = arrayCounter;
        arrayNumber.className = "arrayNumber"
        outputTempDiv.appendChild(arrayNumber);
        arrayCounter++
    }
    orderNumbers();
}