let header = document.getElementById("header");
let knappi = document.getElementById("knapp");

let first = 1;
let second = 1;
let sum;

knappi.addEventListener('click', count)

function count() {
    sum = first + second;
    header.innerText = sum;
    second = sum;

}



console.log(randomSiffro);