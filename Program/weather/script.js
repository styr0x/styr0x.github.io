let displayTemp = document.getElementById("temp");
let commentText = document.getElementById("comment");

fetch(`http://api.openweathermap.org/data/2.5/weather?id=656130&appid=fb3069e2cddf22b9c087ca74ea3e2aba&units=metric`)
.then(res => res.json())
.then (onWeatherLoaded);


function onWeatherLoaded(data) {
    console.log(data);
displayTemp.innerText = `${data.main.temp} °C`

if (data.main.temp < 0) {
    commentText.innerText = "Brrr, it's cold as fuck man!"
}
else if (data.main.temp <= 15){
    commentText.innerText = "Better put a fucking jacket on!"
}
else if (data.main.temp > 15) {
    commentText.innerText = "It's pretty fucking alright!"
}
else if (data.main.temp > 25) {
    commentText.innerText = "Fuck, it's hot!"
} 

}