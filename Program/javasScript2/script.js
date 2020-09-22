const button = document.getElementById("btn1")

button.addEventListener("click", randomBgColor)

function randomBgColor() {
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    var randColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(randColor);
  
    document.body.style.background = randColor;
}