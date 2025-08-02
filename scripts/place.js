var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified; 


const temp = 10;
const windSpeed = 14;
document.querySelector('#temp').textContent = `${temp}`;
document.querySelector('#wind').textContent = `${windSpeed}`;

function calculateWindChill(temp, windSpeed) {
  if(temp <= 10 && windSpeed >= 4.8){
    const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    return `${windChill.toFixed(1)}`;
  }else{
    return "N/A";
  }

}
document.querySelector('#w-chill').textContent = calculateWindChill(temp, windSpeed);