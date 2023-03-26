const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

cityInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    fetchWeatherData(cityInput.value);
  }
});

async function fetchWeatherData(city) {
  const API_KEY = "869ea69516f54840bc623917232503";
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayWeatherData(data) {
  cityName.textContent = data.location.name;
  temperature.textContent = `${data.current.temp_c}°C`;
  description.textContent = data.current.condition.text;
  weatherInfo.classList.remove("hidden");
}
