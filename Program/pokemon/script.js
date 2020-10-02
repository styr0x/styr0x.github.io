let getButton = document.getElementById("btn");
let name = document.getElementById("name");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let type = document.getElementById("type");
let typeTwo = document.getElementById("typeTwo");
let hideTypeTwo = document.getElementById("hideTypeTwo");
let infoDiv = document.getElementById("infoDiv");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

let inputBox = document.getElementById("input");
let pokeArray = [];
let input;
fetchPokemonList();

hideTypeTwo.style.visibility = "hidden"
infoDiv.style.visibility = "hidden"
img1.style.visibility = "hidden"
img2.style.visibility = "hidden"

getButton.addEventListener("click", getValue)

function getValue() {
        let param = document.getElementById("input").value;
        input = param.toLowerCase();
        let pokeURL = "https://pokeapi.co/api/v2/pokemon/" + input;
        fetch(pokeURL)
            .then(response => response.json())
            .then(displayInfo);

}

function displayInfo(allpokemon) {
    let imgId = allpokemon.id;

    console.log(allpokemon);
    console.log(allpokemon.types.length);
    
    name.innerText = allpokemon.name;
    height.innerText = allpokemon.height;
    weight.innerText = allpokemon.weight;
    type.innerText = allpokemon.types[0].type.name;

    infoDiv.style.visibility = "visible";
    img1.style.visibility = "visible";
    img2.style.visibility = "visible";
    if (allpokemon.types.length === 2) {
        typeTwo.innerText = allpokemon.types[1].type.name;
        hideTypeTwo.style.visibility = "visible"
    }

    img1.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgId}.png`;
    img2.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${imgId}.png`;
    
}

function fetchPokemonList() {
    let pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=1050"
    fetch(pokeURL)
        .then(response => response.json())
        .then(getArray);
}

function getArray(allpokemon) {
    console.log(allpokemon);
    console.log(allpokemon.results.length);
    console.log(allpokemon.results[5].name);

    for (let i = 0; i < allpokemon.results.length; i++) {
        pokeArray.push(allpokemon.results[i].name);
    }
}

