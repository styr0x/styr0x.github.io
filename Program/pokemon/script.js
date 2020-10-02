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

let pokeArray = [];
let input;

fetchPokemonList();

new autoComplete({
    data: {                              // Data src [Array, Function, Async] | (REQUIRED)
      src: pokeArray
    },

    sort: (a, b) => {                    // Sort rendered results ascendingly | (Optional)
        if (a.match < b.match) return -1;
        if (a.match > b.match) return 1;
        return 0;
    },
    placeHolder: "Pokemon",     // Place Holder text                 | (Optional)
    selector: "#autoComplete",           // Input field selector              | (Optional)
    threshold: 0,                        // Min. Chars length to start Engine | (Optional)
    debounce: 300,                       // Post duration for engine to start | (Optional)
    searchEngine: "strict",              // Search Engine type/mode           | (Optional)
    resultsList: {                       // Rendered results list object      | (Optional)
        render: true,
        /* if set to false, add an eventListener to the selector for event type
           "autoComplete" to handle the result */
        container: source => {
            source.setAttribute("id", "food_list");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    maxResults: 5,                         // Max. number of rendered results | (Optional)
    highlight: true,                       // Highlight matching results      | (Optional)
    resultItem: {                          // Rendered result item            | (Optional)
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: "li"
    },
    noResults: () => {                     // Action script on noResults      | (Optional)
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: feedback => {             // Action script onSelection event | (Optional)
        //console.log(data)
    }
});

hideTypeTwo.style.visibility = "hidden"
infoDiv.style.visibility = "hidden"
img1.style.visibility = "hidden"
img2.style.visibility = "hidden"

getButton.addEventListener("click", getValue)

function getValue() {
        let param = document.getElementById("autoComplete").value;
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
    //console.log(allpokemon);
   //console.log(allpokemon.results.length);
   // console.log(allpokemon.results[5].name);
    for (let i = 0; i < allpokemon.results.length; i++) {
        pokeArray.push(allpokemon.results[i].name);
    }
    return pokeArray;
}

