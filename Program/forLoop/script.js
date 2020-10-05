let displayNumber = document.getElementById("loopy");
let numbers = ["1","2","3"];


let speed = 1000


for (let i = 0; i < 3; i++){
    setTimeout(() => {
        
        i++
    },  1000);
    displayNumber.innerText = numbers[i];


}
