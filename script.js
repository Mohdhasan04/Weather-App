const apiKey = "cf307ccf84636b50833fd258308eb3db";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector('.search input');
const serachBtn = document.querySelector('.search button');

async function checkwhether(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data)

    document.querySelector('.city').innerHTML =  data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) + '°C';
    document.querySelector('.humidity').innerHTML =  data.main.humidity + '%';
    document.querySelector('.wind').innerHTML =  data.wind.speed + 'Km/h    ';

}
serachBtn.addEventListener("click" ,() =>{
    checkwhether(serachBox.value);
})


