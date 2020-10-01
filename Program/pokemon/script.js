let getButton = document.getElementById("btn");
let name = document.getElementById("name");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let type = document.getElementById("type");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");


img1.style.visibility = "hidden"
img2.style.visibility = "hidden"

getButton.addEventListener("click", getValue)

function getValue() {
        var param = document.getElementById("input").value;
        var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param;
        fetch(pokeURL)
            .then(response => response.json())
            .then(displayInfo);

}

function displayInfo(allpokemon){
    let imgId = allpokemon.id

    console.log(allpokemon)
    console.log()
    
    name.innerText = allpokemon.name
    height.innerText = allpokemon.height
    weight.innerText = allpokemon.weight
    type.innerText = allpokemon.types[0].type.name

    img1.style.visibility = "visible"
    img2.style.visibility = "visible"

    img1.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgId}.png`
    img2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${imgId}.png`
    
}