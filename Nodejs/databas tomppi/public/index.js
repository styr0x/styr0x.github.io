
const info = document.getElementById("info");
const companyNamesDiv = document.getElementById("companyNames");
const companyCountriesDiv = document.getElementById("companyCountries");
const btn = document.getElementById("button");
const theInput = document.getElementById("name");
const theCountry = document.getElementById("country");

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
        companyNamesDiv.appendChild(companyNames);
        companyCountriesDiv.appendChild(companyCountries);
    }
});

btn.addEventListener('click', e => {


    let info = {
        name: theInput.value,
        country: theCountry.value
    }

    console.log(info);
    
    /*
    fetch('http://localhost:3000/write', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(info)
    })
        .then(res => res.text())    
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

        */
});