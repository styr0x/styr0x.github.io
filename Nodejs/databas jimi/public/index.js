
const info = document.getElementById("info");
const parent = document.getElementById("parentDiv");

let theData = {};
let companyNames, companyCountries;

fetch('http://localhost:3000/test', {
    method: 'get'
})
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        companyNames = document.createElement('span');
        companyCountries = document.createElement('span');
        companyNames.innerHTML = (data[i].name + '<br>');
        companyCountries.innerHTML = (data[i].country + '<br>');
        parent.appendChild(companyNames);
        parent.appendChild(companyCountries);
    }
});
