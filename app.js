
const apiKey = "6fe7da5f70e1d5666ed6a144e4909bbe";
const apiCountry = "https://countryflagsapi.com/png/"


let cityInput = document.querySelector("#city-input");
let searchButton = document.querySelector("#search");

let cityElement = document.querySelector("#city");
let tempElement = document.querySelector("#temperature span");
let descriptionElement = document.querySelector("#description");
let weatherIconElement = document.querySelector("#weather-icon");
let countryElement = document.querySelector("#country");
let humidityElement = document.querySelector("#humidity span");
let windElement = document.querySelector("#wind span");
let weatherContainer = document.querySelector("#weather-data");
let errorMessageContainer = document.querySelector("#error-message");

//Functions
let getWeather = async (city) => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en_us`;

    let res = await fetch(apiUrl);
    let data = await res.json();

    return data;
}

let showErrorMessage = () => {
    errorMessageContainer.classList.remove("hide");
};

let hideInformation = () => {
    errorMessageContainer.classList.add("hide");
    weatherContainer.classList.add("hide");

};



let showWeather = async (city) => {
    hideInformation();
    let data = await getWeather(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descriptionElement.innerText = data.weather[0].description;
    document.getElementById("weather-data").style.display = "block";
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountry + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    if (data.cod === "404") {
        showErrorMessage();
        return;
    }

}

//Events
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let city = cityInput.value;

    showWeather(city);

});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        e.preventDefault();
        let city = cityInput.value;
        showWeather(city);
    }
})

