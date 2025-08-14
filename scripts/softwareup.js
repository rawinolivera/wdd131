var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("ul");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 500) {
    navigation.classList.remove("open");
	  hamButton.classList.remove("open");
  }
});

//Get lat and lon
const lat = -23.55052;
const lon = -46.633308;

/*------  WEATHER API  ------*/
const apiKey = '0c8a48091627e17ece4ad85f202a2799'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = jsObject.main.temp;  //t
    document.querySelector('#wind').textContent = jsObject.wind.speed;  //s


    const desc = jsObject.weather[0].description; //w-now
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.querySelector('#wlogo').textContent = iconsrc;
    document.querySelector('#wlogo').setAttribute('src', iconsrc);
    document.querySelector('#wlogo').setAttribute('alt', desc);
    document.querySelector('#condit').textContent = desc;
  });  





let t = parseFloat(document.querySelector("#temp").textContent);
let s = parseFloat(document.querySelector("#wind").textContent);
let windchill = "";

if (t <= 50 && s > 3){
    windchill = windChill(t, s);
    windchill = `${windchill}&#176;F`;
} else {
    windchill = "N/A";
} 

//output
document.querySelector("#w-chill").innerHTML = windchill;

function windChill(temp,speed) {
    return Math.round(35.74 + .6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
}