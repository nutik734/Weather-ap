let now=new Date();
let p = document.querySelector("#date");
let date= now.getDate();
let hours= now.getUTCHours();
if (hours < 10) {
    hours = `0${hours}`;
  }
let minutes= now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

let days = 
["Sunday", 
"Monday", 
"Tuesday", 
"Wednesday",
 "Thursday", 
 "Friday", 
 "Saturday"];
let day = days[now.getDay()];

 let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];

currentDate.innerHTML= `${day},${date} of${month}, ${hours}:${minutes}`;

function cityInput(event){
   event.preventDefault();
   let cityInput= document.querySelector("#city-search");
   special.innerHTML=cityInput.value;
   citySearch(cityInput.value);
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", cityInput);

function citySearch(city){ 
let apiKey= "b6dda688ccc3627c10fab13c84462b84";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemp);

}
function showTemp(response){
let temperature= document.querySelector("#temperature-1");
let roundTemp=Math.round(response.data.main.temp);
temperature.innerHTML=`${roundTemp}ºC`;

let h1 = document.querySelector("#special");
h1.innerHTML = `${response.data.name}`;

let description=document.querySelector("#description");
description.innerHTML=response.data.weather[0].description;

let sensation=document.querySelector("#temperature-2");
let sensationRound= Math.round(response.data.main.feels_like);
sensation.innerHTML= `${sensationRound}ºC`;

let wind= document.querySelector("#wind");
let roundWind= Math.round(response.data.wind.speed);
wind.innerHTML=`wind: ${roundWind}km/h`;

let precipitations= document.querySelector("#humidity");
precipitations.innerHTML=`Precipitations: ${response.data.main.humidity}%`;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}
function getCurrentPosition(response) {
        navigator.geolocation.getCurrentPosition(showPosition);
       //
      }
let button = document.querySelector("button");
      button.addEventListener("click", getCurrentPosition);

function convertCel(event){
    event.preventDefault();
    let display= document.querySelector("#temperature-1");
   display.innerHTML="20"; 
}
let celcius=document.querySelector("#celcius");
celcius.addEventListener("click",convertCel);

function convertFar(event){
   let far= document.querySelector("#temperature-1");
   far.innerHTML= event * (9/5) + 32;
   return far;
}
let fahrenheit=document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click",convertFar);
//hosting

