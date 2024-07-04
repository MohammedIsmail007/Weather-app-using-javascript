const apiKey = "319384656b18bf98dbca02a4bc845353";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIicon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` + `&units=metric`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {

        var data = await response.json();

        //console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIicon.src = "img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIicon.src = "img/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIicon.src = "img/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIicon.src = "img/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIicon.src = "img/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }

}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value)

})

