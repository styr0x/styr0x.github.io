let displayTemp = document.getElementById("temp");

fetch(`api.openweathermap.org/data/2.5/weather?id=656130&appid=fb3069e2cddf22b9c087ca74ea3e2aba`)
.then(res => res.json)
.then (onWeatherLoaded);


function onWeatherLoaded(data) {
    console.log(data);
}