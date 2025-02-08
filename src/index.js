function searchCity (city){
    let apiKey = "ad031o47ac65t5df81db4b9e365cb480";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl). then (updateWeather);

}



function updateWeather (response){


let temperatureElement = document.querySelector("#weather-temp");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#weather-city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date (response.data.time * 1000);
let iconElement = document.querySelector("#icon")


cityElement.innerHTML = response.data.city;
timeElement.innerHTML = formatDate(date);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
temperatureElement.innerHTML = Math.round(temperature);
iconElement.innerHTML =`<img src ="${response.data.condition.icon_url}"class="weather-icon"/> `


}

function formatDate(date){

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day =days [date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
   
    return `${day} ${hours}:${minutes}`;

}
    



function submitForm (event){
event.preventDefault();
let searchinput=document.querySelector("#search-input");

searchCity(searchinput.value);
}

let searchForm = document.querySelector ("#Search-form");
searchForm.addEventListener("submit", submitForm);

searchCity("Paris");

let forecast =document.querySelector("#forecast");
    forecast.innerHTML=
    <div class="forecast-day">
    <div class="forecast-date">Tue</div>
<div class="forecast-icon">🌤</div>
<div class="forecast-temp">
    <div class="forecast-temps">   
     <strong> 15&deg;</strong>  9&deg;
    <div>  
    
 </div>
</div>


