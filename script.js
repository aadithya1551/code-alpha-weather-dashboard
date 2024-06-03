const apikey = "b15cfc769f6baa026ff75acda0434faf";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&dt_txt=ISO&q="
const city = document.getElementById('search');
const searchbtn = document.getElementById('btn');
const icon = document.getElementById('icon');


searchbtn.addEventListener('click', () => {
   checkweather(city)
})

async function checkweather(city) {

   const response = await fetch(apiurl + city.value + '&appid=' + apikey);
   const forecastresponse = await fetch(forecasturl + city.value + '&appid=' + apikey);

   if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.getElementById("weather").style.display = "none";
      document.getElementById('forecast').style.display="none";
   }
   else {
      var data = await response.json();
      var forecastdata = await forecastresponse.json();
      const forecast_img = document.querySelectorAll('.forecast-img');
      const forecast_name=document.querySelectorAll('.weather-name')

      document.getElementById('weather-name').innerHTML = data.weather[0].main;
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
      document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

      if (data.weather[0].main == "Clouds") {
         icon.src = 'clouds.png'
      }
      else if (data.weather[0].main == "Clear") {
         icon.src = "clear-sky.png"
      }
      else if (data.weather[0].main == "Rain") {
         icon.src = "rain.png"
      }
      else if (data.weather[0].main == "Dizzle") {
         icon.src = "dizzle.png"
      }
      else if (data.weather[0].main == "Mist") {
         icon.src = "mist.png"
      }
      else if (data.weather[0].main == "Thunderstorm") {
         icon.src = "thunderstorm.png"
      }
      else if (data.weather[0].main == "Haze") {
         icon.src = "fog.png"
      }
      
      for (let i = 0; i < forecast_img.length; i++) {
         if (forecastdata.list[i].weather[0].main == "Clouds") {
            forecast_img[i].src = "clear-sky.png"
            forecast_name[i].innerHTML=forecastdata.list[i].weather[0].main;
         }
         else if (forecastdata.list[i].weather[0].main == "Clear") {
            forecast_img[i].src = "clear-sky.png"
            forecast_name[i].innerHTML=forecastdata.list[i].weather[0].main;
         }
         else if (forecastdata.list[i].weather[0].main == "Rain") {
            forecast_img[i].src = "rain.png"
            forecast_name[i].innerHTML=forecastdata.list[i].weather[0].main;
         }
         else if (forecastdata.list[i].weather[0].main == "Dizzle") {
            forecast_img[i].src = "dizzle.png"
            forecast_name[i].innerHTML=forecastdata.list[i].weather[0].main;
         }
         else if (forecastdata.list[i].weather[0].main == "Mist") {
            forecast_img[i].src = "mist.png"
            forecast_name[i].innerHTML=forecastdata.list[i].weather[0].main;
         }
         else if (forecastdata.list[i].weather[0].main == "Thunderstorm") {
            forecast_img[i].src = "thunderstorm.png"
            forecast_name[i].innerHTML=forecastdata.list[i].weather[0].main;
         }
         else if (forecastdata.list[i].weather[0].main == "Haze") {
            forecast_img[i].src = "fog.png"
            forecast_name[i].innerHTML=forecastdata.list[i].weather[0].main;
         }

      }

      document.getElementById('weather').style.display = "block";
      document.querySelector(".error").style.display = "none";
      document.getElementById('forecast').style.display="flex";

   }

}

