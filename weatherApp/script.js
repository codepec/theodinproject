const weatherData = {
  "New York": {
    condition: "Cloudy",
    tempDay: 20,
    tempNight: 11
  },
  "Malibu": {
    condition: "Sunny",
    tempDay: 26,
    tempNight: 18
  },
  "Pakistan": {
    condition: "Partly Cloudy",
    tempDay: 32,
    tempNight: 24
  },
  "Cape Town": {
    condition: "Rainy",
    tempDay: 15,
    tempNight: 8
  },
  "Hamburg": {
    condition: "Windy",
    tempDay: 18,
    tempNight: 12
  }
};

function showWeather() {
  const location = document.getElementById("locationInput").value;
  const weatherContainer = document.getElementById("weatherContainer");

  console.log("Selected location:", location);

  if (!location || !weatherData[location]) {
    console.log("Weather information not available for this location.");
    weatherContainer.textContent = "Weather information not available for this location.";
    return;
  }

  console.log("Weather data for", location, ":", weatherData[location]);

  weatherContainer.innerHTML = "";

  const weatherTile = document.createElement("div");
  weatherTile.className = "weatherTile";

  const h2 = document.createElement("h2");
  h2.textContent = `Weather in ${location}`;
  weatherTile.appendChild(h2);

  const conditionElement = document.createElement("p");
  conditionElement.textContent = `Condition: ${weatherData[location].condition}`;
  weatherTile.appendChild(conditionElement);

  const tempDayElement = document.createElement("p");
  tempDayElement.textContent = `Temperature (Day): ${weatherData[location].tempDay} °C`;
  weatherTile.appendChild(tempDayElement);

  const tempNightElement = document.createElement("p");
  tempNightElement.textContent = `Temperature (Night): ${weatherData[location].tempNight} °C`;
  weatherTile.appendChild(tempNightElement);

  weatherContainer.appendChild(weatherTile);
}

window.addEventListener("DOMContentLoaded", () => {
  const locations = Object.keys(weatherData);
  locations.forEach((location) => {
    showWeather(location);
  });
});
