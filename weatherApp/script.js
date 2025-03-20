const weatherData = {
  "New York": { condition: "Cloudy", tempDay: 20, tempNight: 11 },
  "Malibu": { condition: "Sunny", tempDay: 26, tempNight: 18 },
  "Pakistan": { condition: "Partly Cloudy", tempDay: 32, tempNight: 24 },
  "Cape Town": { condition: "Rainy", tempDay: 15, tempNight: 8 },
  "Hamburg": { condition: "Windy", tempDay: 18, tempNight: 12 }
};

document.getElementById("weatherForm").addEventListener("submit", function(event) {
  event.preventDefault();
  showWeather();
});

function showWeather() {
  const city = document.getElementById("citySelect").value;
  const weatherContainer = document.getElementById("weatherContainer");

  // Clear previous content safely
  weatherContainer.innerHTML = "";

  if (!city) {
      const message = document.createElement("p");
      message.textContent = "Please select a city.";
      weatherContainer.appendChild(message);
      return;
  }

  const weather = weatherData[city];

  // Create a weather tile securely
  const weatherTile = document.createElement("div");
  weatherTile.className = "weatherTile";

  const title = document.createElement("h2");
  title.textContent = `Weather in ${city}`;

  const conditionText = document.createElement("p");
  conditionText.textContent = `Condition: ${weather.condition}`;

  const tempDayText = document.createElement("p");
  tempDayText.textContent = `Temperature (Day): ${weather.tempDay}°C`;

  const tempNightText = document.createElement("p");
  tempNightText.textContent = `Temperature (Night): ${weather.tempNight}°C`;

  // Append elements safely
  weatherTile.appendChild(title);
  weatherTile.appendChild(conditionText);
  weatherTile.appendChild(tempDayText);
  weatherTile.appendChild(tempNightText);
  weatherContainer.appendChild(weatherTile);

  updateBackground(weather.condition);
}

function updateBackground(condition) {
  const body = document.body;
  if (condition.includes("Rain")) {
      body.style.backgroundColor = "#4a90e2";
  } else if (condition.includes("Sunny")) {
      body.style.backgroundColor = "#f7d154";
  } else if (condition.includes("Cloudy")) {
      body.style.backgroundColor = "#95a5a6";
  } else {
      body.style.backgroundColor = "#83a8c2";
  }
}
